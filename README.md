# Partie Backend

## How to launch

https://projet-angular-backend.herokuapp.com/

```bash
git clone https://github.com/PandaShad/apiPourCoursAngular2022.git

npm install

node server.js
```

Créer ensuite un fichier .ENV de la forme:
```bash
JWT_SECRET='supersecret'
RSA_PUBLIC_KEY=<public-key>
RSA_PRIVATE_KEY=<private-key>
```

## Assignements

### Model:
```bash
let AssignmentSchema = Schema({
    id: Number,
    dateDeRendu: Date,
    nom: String,
    rendu: Boolean,
    auteur: String,
    matiere: String,
    note: Number,
    remarque: String
});
```

Implémentation de plusieurs endpoints pour manipuler les assignements
- getAssignments() qui permet de récupérer tout les assignments de la base de données (uri: '/api/assignments)
- getAssignemnts() qui permet aussi de récupérer un assignments grâce à son id passé en paramètre de la requête (uri: 'api/assignments/:id):
```bash
function getAssignment(req, res){
    let assignmentId = req.params.id;

    Assignment.findOne({id: assignmentId}, (err, assignment) =>{
        if(err){res.send(err)}
        res.json(assignment);
    })
}
```
- Un endpoint postAssignment() pour ajouter un assignment en base, il sera utilisé coté front et les paramètres seront fournis dans le body de la requête (uri: '/api/assignments')
- De même pour un endpoint put updateAssignment() pour modifier l'assignment dont l'id est donné dans le body de la requête (uri: '/api/assignments')
- Et enfin un endpoint delete pour supprimer l'assignment dont l'id est précisé dans les params de la requête (uri: 'api/assignments/:id)

### Essai de filtering et sorting coté back

Au départ nous avions décidé de réaliser le filtering et le sorting du tableau d'assingment coté back et de retourner les données paginées, afin d'avoir plus de controle sur le flux de données et de ne fournir que les données necessaires. Cependant cela obligé l'application à faire un appel API à chaque modification ( que ce soit pour le sort ou pour un filtre ), à chaque changement de page et aussi il était plus difficile de réaliser une recherche instantanée sur toute la base de cette manière. On a donc décidé de réaliser l'organisation des données directement avec Angular en envoyant tout les Assignments. Voici un reste de code de notre ancienne méthode:
```bash
function getAssignments(req, res){
  const sortBy = req.query.sortBy;
  const sortOrder = parseInt(req.query.sortOrder);
  let sort = {};
  sort[sortBy] = sortOrder;
  const pipeline = [{$sort: sort}];
  if(req.query.returned){
    pipeline.push({
      $match: {rendu: (req.query.returned === 'true')}
    });
  }
  let aggregateQuery = Assignment.aggregate(pipeline);
  Assignment.aggregatePaginate(aggregateQuery, 
    {
      page: parseInt(req.query.page) || 1,
      limit: parseInt(req.query.limit) || 10,
    },
    (err, assignments) => {
      if(err){
        res.send(err)
      }
      res.send(assignments);
    }
  );
}
```

## Login / Register

Dans le model User nous voulions attribuer une liste d'objectId référencant les assignments propre à chaque utilisateur mais nous n'avons pas eu le temps de terminer cette implémentation
```bash
let UserSchema = Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    assignements: [
        {
            id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'assignments'
            },
            deliverDate: Date
        }
    ],
});
```

La plus grosse partie du projet back correspond à la gestion du login et de l'enregistrement d'utilisateurs, sur l'application il est possible de se créer un compte et d'ensuite s'y connecter. Chaque compte est unique et à son password encrypté en base. On gère ainsi la connexion avec un Token JWT qui sera lui stocké sur le Local Storage côté front afin d'identifier l'utilisateur courant.
Le code est assez lourd, il y a un AuthController qui prend en charge les requêtes liées à l'authentification:
- '/api/auth/login' qui permet de connecter un utilisateur si il existe en base, on vérifié d'abord si un utilisateur avec le mail passé dans le body existe, puis on vérifie sur son mdp une foi encrypté est similaire à celui stocké en base. Si oui on connecte l'utilisateur et on crée un JWT token afin d'éviter à l'utilisateur d'avoir à se reconnecter à chaque fois qu'il reviens sur l'application.
- '/api/auth/register' permet de créer un nouvel utilisateur en base seulement si le mail fournis dans le body n'est pas déjà connue par la base de donnée.

On a aussi créer un MiddleWare verifyToken qui empêche les utilisateurs non connectés de réaliser certains appel API.
```bash
app.route(prefix + '/assignments')
  .get(verifyToken, assignment.getAssignments);
```

## Subject
 ```bash
 let SubjectSchema = Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
      },
    credits: {
        type: Number,
        required: true
    },
    image: {
        type: String
    },
    imageTeacher: {
        type: String
    }
});

Il y a aussi un controller aussez basique permettant ( tout comme pour les assignements ) de créer une matière, de get une matière par son nom, de get toute les matières, de delete une matière et de modifier une matière.
On utilisera seulement get côté front


