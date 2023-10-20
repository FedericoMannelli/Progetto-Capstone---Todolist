const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const tasks = [];
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { tasks: tasks });
});

// Creazione attività
app.post('/', (req, res) => {
  const newTask = req.body.task;
  tasks.push(newTask);
  res.redirect('/'); // Corretto da res.render('/') a res.redirect('/')
});

// Completamento delle Attività
app.post('/complete', (req, res) => {
  const completedTask = req.body.completedTask;
  // Codice per segnare l'attività come completata nell'array delle attività
  res.redirect('/'); // Corretto da res.render('/') a res.redirect('/')
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}!`);
});
