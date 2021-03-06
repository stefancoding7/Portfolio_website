const express = require('express');
const data = require('./data.json');
const app = express();
const path = require('path');

const error = require('./helpers/error');


app.set('view engine', 'pug');
app.use("/static", express.static(path.join(__dirname, "public")));


app.get('/', (req, res) => {  
    
    res.render('index', { datas: data.projects });
  });

app.get('/about', (req, res) => {  
    res.render('about');
});


app.get('/project/:id', (req, res) => {  
    const projectId = req.params.id;
    const projectData = data.projects[projectId];
    
    if(projectData) {
      res.render('project', { data: projectData });
     
    } else {

      app.use(error);
    
    }

});
  
app.use(error);

// Turn on Express server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
  }) 