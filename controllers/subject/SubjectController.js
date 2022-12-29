const express = require('express');
const router = express.Router();
const Subject = require('../../model/subject');

router.get('/', (req, res) => {
    Subject.find((err, subjects) => {
        if(err) {
            return res.status(500).send('No subjects found')
        }
        res.json(subjects);
    })
})

router.post('/', (req, res) => {
    Subject.findOne({
        name: req.body.name
    },
    (err, value) => {
        if(value){
            return res.status(409).send('A subject with this name has already been created.')
        }
        let subject = new Subject();
        subject.name = req.body.name;
        subject.description = req.body.description || 'No description';
        subject.credits = req.body.credits;
        subject.image = req.body.image || null;
        subject.imageTeacher = req.body.imageTeacher || null;
        subject.save((err) => {
            if(err) {
                res.send('Can not post subject', err);
            }
            res.json({message: `${subject.name} saved!`});
        })
    })
})

router.put('/', (req, res) => {
    Subject.findOneAndUpdate({
        name: req.body.name
    },
    req.body,
    (err, subject) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
          res.json({message: 'updated'})
        }
    })
})

module.exports = router;