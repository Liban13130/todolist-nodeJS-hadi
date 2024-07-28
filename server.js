const express = require("express")
const app = express()
const port = 3000
const name = []

app.set('view engine', 'ejs')
app.set('views', './Views')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



app.get('/', (req, res) => {
    res.render('accueil', { title: 'Accueil', message: 'Bienvenue sur mon site web!', name: name });
  });

app.post('/submit', (req, res) => {
  name.push(req.body.todo)
  res.status(201).redirect('/')
})

app.post('/input', (req, res) => {
  for (let index = 0; index < name.length; index++) {
    const element = name[index];
    console.log(element);
  }
  res.status(201).redirect('/')
})

app.listen(port, () => {
    console.log(`Vous êtes branchées sur le port ${port}`);
})
