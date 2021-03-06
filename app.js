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
    const about = data.about[0];
    //console.dir(about.skills[1])
    res.render('about', { about: about });
});


app.get('/project/:id', (req, res) => {  
    const projectId = req.params.id;
    const projectData = data.projects[projectId];
    
    if(projectData) {
      res.render('project', { data: projectData });
     
    } else {
      const err = new Error('Error: 404');
      err.status = 404;
      err.message = `Oh No. Sorry but page not found. :-(`; 
      res.render('error/page-not-found', { err: err });
      
    }

});
  
app.use(error.notFound);
app.use(error.globalError);

// Turn on Express server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
  }) 