let express = require('express');
let app = express();
require('dotenv').config();
let bodyParser = require('body-parser');
let assignment = require('./routes/assignments');
let verifyToken = require('./controllers/auth/VerifyToken');

const authController = require('./controllers/auth/AuthController');
const subjectController = require('./controllers/subject/SubjectController')

let mongoose = require('mongoose');
const { jwt_secret } = require('./config');
const { config } = require('dotenv');
mongoose.Promise = global.Promise;
//mongoose.set('debug', true);

// remplacer toute cette chaine par l'URI de connexion à votre propre base dans le cloud s
// const uri = "mongodb+srv://admin:admin@cluster0.tjkzgnb.mongodb.net/assignments?retryWrites=true&w=majority"
const uri = "mongodb+srv://Lilshad:741852963Katinart@cluster0.uchidfe.mongodb.net/assignments"

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify:false
};

mongoose.connect(uri, options)
  .then(() => {
    console.log("Connecté à la base MongoDB assignments dans le cloud !");
    console.log("at URI = " + uri);
    console.log("vérifiez with http://localhost:8010/api/assignments que cela fonctionne")
    },
    err => {
      console.log('Erreur de connexion: ', err);
    });

// Pour accepter les connexions cross-domain (CORS)
const headers = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
}

app.use(headers);

// Pour les formulaires
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let port = process.env.PORT || 8010;

// les routes
const prefix = '/api';

// Pour l'auth
app.use(`${prefix}/auth`, headers, authController);

// Pour les Subjects
app.use(`${prefix}/subjects`,headers, subjectController);

app.route(prefix + '/assignments')
  .get(verifyToken, assignment.getAssignments);

app.route(prefix + '/assignments/:id')
  .get(assignment.getAssignment)
  .delete(assignment.deleteAssignment);


app.route(prefix + '/assignments')
  .post(assignment.postAssignment)
  .put(assignment.updateAssignment);

// On démarre le serveur
app.listen(port, "0.0.0.0");
console.log('Serveur démarré sur http://localhost:' + port);

module.exports = app;


