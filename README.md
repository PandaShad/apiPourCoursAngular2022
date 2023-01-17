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
RSA_PUBLIC_KEY=`ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQCU51JapjWgE873i53bxl7NPt7VAvMhwamofTFvJieLRsqYB40ScEatqhi+68xlSfUet9A9JPdQO3w2uJVodS44EgfJcS4P3AOxYc5gs3+0nLRf/XRGU7tB3VNxBwBp9WlGomprKH+8Qd4S1wdGlFJ3uhDv6Pr5aM+eYX8s5DiKvOIhlC1OsxHt8wS0IKoBsuD2VN5MsITsYveQxPkcLJcnHby0YV5Zg6A2UHfJMnRp+GNiUjwza0SsMVc/vYo7TU3UKZ8A2D//c1K5P6jAeFduTE4vKepHCGurZbjUnsxCuDFB1EIYU5fS4BOoTEFkXgEKcpEJjnZe9Af2rUmxygYzQpME0AaXV6SI+Vx6ED3SgOy0BfcVqaFK1lCEaGcffCrP4jxQCQaTgrkheEeBZfCP1/lwDIE5k3zmBUzvXqRz6F0bAzLwQX2i4DLKbOuAA/N+dP3eR6aV5rBEEM6WlbEM9jLNEDqGFcZbLmuzXqIosyso7evVi48jSCFRLHVj6yM= maximebellet@MacBook-Pro-de-Maxime.local`
RSA_PRIVATE_KEY=`-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABlwAAAAdzc2gtcn
NhAAAAAwEAAQAAAYEAlOdSWqY1oBPO94ud28ZezT7e1QLzIcGpqH0xbyYni0bKmAeNEnBG
raoYvuvMZUn1HrfQPST3UDt8NriVaHUuOBIHyXEuD9wDsWHOYLN/tJy0X/10RlO7Qd1TcQ
cAafVpRqJqayh/vEHeEtcHRpRSd7oQ7+j6+WjPnmF/LOQ4irziIZQtTrMR7fMEtCCqAbLg
9lTeTLCE7GL3kMT5HCyXJx28tGFeWYOgNlB3yTJ0afhjYlI8M2tErDFXP72KO01N1CmfAN
g//3NSuT+owHhXbkxOLynqRwhrq2W41J7MQrgxQdRCGFOX0uATqExBZF4BCnKRCY52XvQH
9q1JscoGM0KTBNAGl1ekiPlcehA90oDstAX3FamhStZQhGhnH3wqz+I8UAkGk4K5IXhHgW
Xwj9f5cAyBOZN85gVM716kc+hdGwMy8EF9ouAyymzrgAPzfnT93kemleawRBDOlpWxDPYy
zRA6hhXGWy5rs16iKLMrKO3r1YuPI0ghUSx1Y+sjAAAFoNlSOFzZUjhcAAAAB3NzaC1yc2
EAAAGBAJTnUlqmNaATzveLndvGXs0+3tUC8yHBqah9MW8mJ4tGypgHjRJwRq2qGL7rzGVJ
9R630D0k91A7fDa4lWh1LjgSB8lxLg/cA7FhzmCzf7SctF/9dEZTu0HdU3EHAGn1aUaiam
sof7xB3hLXB0aUUne6EO/o+vloz55hfyzkOIq84iGULU6zEe3zBLQgqgGy4PZU3kywhOxi
95DE+RwslycdvLRhXlmDoDZQd8kydGn4Y2JSPDNrRKwxVz+9ijtNTdQpnwDYP/9zUrk/qM
B4V25MTi8p6kcIa6tluNSezEK4MUHUQhhTl9LgE6hMQWReAQpykQmOdl70B/atSbHKBjNC
kwTQBpdXpIj5XHoQPdKA7LQF9xWpoUrWUIRoZx98Ks/iPFAJBpOCuSF4R4Fl8I/X+XAMgT
mTfOYFTO9epHPoXRsDMvBBfaLgMsps64AD8350/d5HppXmsEQQzpaVsQz2Ms0QOoYVxlsu
a7NeoiizKyjt69WLjyNIIVEsdWPrIwAAAAMBAAEAAAGAddE+YUln3twtg8LtyaqA8mdPiz
3FQK1qX02HosmOum3t+TLoVXGPCvQulkoetPo6v+5zDx5DrTEUDHwqg7dMNcNWc/Zgmt3b
8itQT0VXw4HGWrlBmi/AV9IWprUCh9RNUz1JdLZbs4pue3u2XwsW4XLQ2fL/Of7LYCcGqG
9/qY7gYe9LlhysEBmcXCYIPkXaKC5ookd9NUjtV5fy/27svl+SIytzquIyDyfGT+TjJcIK
aQ5mYcz7Tj/QKDgBuwBjYoAk8JsZ+nlM+2ufVSskZNiBxOmEmkZpnsWuBFDrT3lIEO6fOv
iQ7cxTMC+6seHl/8LwHIs67+S+Njmoz4mZhpSx5EMX4Ln8Y6DuhDb2n0XOur8T5VZ94GZ+
RdHlyunxG5PtG0G4WquyNYA0n2gr1xIuJa0U0rd0TAKr9FHmRmmNPDmodALz2K1z0rah3b
FN/WSobFPbcFXHr24ukbmkHWox1l3sx+XWumvBymSZ+fT0IYhUpXMCASZGzGDIKKuJAAAA
wQCxBdmnC3LWnsnXWs3c2oIADPD3XIzJVz7rSRrvp8KQ6hIwyjfppdzck4kSdIoT38ymdN
MODRXvMVsVisv6SrpIzyJifC9HbO78MMD8gftvnJm1T9YJ/LYOr9Y2o6TFf2zHtcI9ByiK
tDRhrbc9zZs860RISYhjKBaGHfKJR6wMWVcYpavveS/rJiN/krNF0Sqadi7dOXruCCb5Bj
s6nw8yvjXhegjR2helf+FTPix0NnmOWMDxHH8b5LjrBd9gi14AAADBAMXd/+WC5oghU0Rm
xn7/0RfRi2dmkcOvnzxB0k7ykxlOsk1FV4wUMxgcnLKEqv5o2fwnvUbFEx/FC9/62v//LQ
wECyVNmz+yxP636fPMOdAnGZLq22W0wO31/Zuh7Q/RIbe0izz26DJk50fOT2CsoWS5VI2z
joDemVrzoaa4nG5Yiq2eUqHVr7OYdUuBQm8TkKGDLsr5XcjT4w7ylk7+K6FXa3dJsca7V2
lDbnkUfflPad+JfpbkIBbrQeh9cdln9wAAAMEAwKarZpcmV51RKZ3Zqqrq0ocwVOz9jD40
Te25f4gY6ZDf3AsfFnXjCC1KegIp6b5kyGld/DSVe8epOA5Oj0MW9jDRnWuFg3HC8V1vAP
fzGConkPxPF7ZXIkdvttaaOcVUPE5exsNKARrBKanXHLTPgWLQ3L41zyw8qSyOKA0iZdI7
8Eo/mpWwdqvzYrMFp7HNqxB/SUYjxhd3gLs8c6Ww0eUxDMLC/kPsWC6nCh+z0d8Tsew3+i
/Jgp5YaaN2woM1AAAAKG1heGltZWJlbGxldEBNYWNCb29rLVByby1kZS1NYXhpbWUubG9j
YWwBAg==
-----END OPENSSH PRIVATE KEY-----`
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


