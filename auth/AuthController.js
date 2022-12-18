let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());
let User = require('../model/user');
let VerifyToken = require('./VerifyToken');

let jwt = require('jsonwebtoken');
let bcrypt = require('bcryptjs');
let config = require('../config');

router.post('/register', (req, res) => {
    let hashedPassword = bcrypt.hashSync(req.body.password, 8);
    User.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: hashedPassword
    },
    (err, user) => {
        if(err){
            return res.status(500).send("There was a problem registering the user");
        }
        let token = jwt.sign({id: user._id}, config.secret, {
            expiresIn: 86400
        });
        res.status(200).send({auth: true, token: token});
    });
});

router.get('/me', VerifyToken, (req, res) => {
    let token = req.headers['x-access-token'];
    if(!token) {
        return res.status(401).send({auth: false, message: 'No token providerd.'});
    }
    jwt.verify(token, config.secret, (err, decoded) => {
        if(err){
            return res.status(500).send({auth: false, message: 'Failed to authentificate'});
        }
        User.findById(decoded.id, {password: 0}, (err, user) => {
            if(err) {
                return res.status(500).send('There was a problem finding the user');
            }
            if(!user) {
                return res.status(404).send('No user found');
            }
            res.status(200).send(user);
        });
    });
});

router.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email
    }, (err, user) => {
        if(err){
            return res.status(500).send('Error on the server');
        }
        if(!user){
            return res.status(404).send('No user found');
        }
        let passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
        if(!passwordIsValid) {
            return res.status(401).send({auth: false, token: null});
        }
        let token = jwt.sign({id: user._id}, config.secret, {
            expiresIn: 86400
        });
        res.status(200).send({auth: true, token: token});
    });
});

router.get('/logout', (req, res) => {
    res.status(200).send({auth: false, token: null});
});

module.exports = router;