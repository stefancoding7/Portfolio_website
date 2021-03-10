const express = require('express');
const data = require('./data.json');
const app = express();
const path = require('path');

//require error functions
const error = require('./helpers/error');

// set pug template engine for express
app.set('view engine', 'pug');
app.use("/static", express.static(path.join(__dirname, "public")));

// index page render
app.get('/', (req, res) => {  
    
    //pass projects to template
    res.render('index', { datas: data.projects });

  });

//about page render
app.get('/about', (req, res) => {
  
    // get data from json object "about"
    const about = data.about[0];
    
    // pass data to template
    res.render('about', { about: about });
});


// get projects by url, working for named URL and ID url. For example project/my-project or project/0.
app.get('/project/:url', (req, res) => {  

    // typed url and save it to the variable
    const projectUrl = req.params.url;

    //new array for URL
    const namedUrl = [];

    // search for matches data.url what typed to the URL
    data.projects.map(data => {
      if(data.url === projectUrl) {

        //push object to the array
        namedUrl.push(data);
      }
    });

    //select object where id is projectURL
    const projectData = data.projects[projectUrl];

    //if projectData definied
    if(projectData){

      //pass projectdata selected by id
      res.render('project', { data: projectData });
    }
    else if(namedUrl[0]) {

      //pass namedUrl selected by named Url
      res.render('project', { data: namedUrl[0] });
     
    } else {

      // render page-not-found if url not found
      const err = new Error('Error: 404');
      err.status = 404;
      err.message = `Oh No. Sorry but page not found.`; 
      
       // log error to the console
      console.log(`${err.message} | Error status: ${err.status}`);

      res.render('error/page-not-found', { err: err });
      
    }

});

// call global and not found error handlers
app.use(error.notFound);
app.use(error.globalError);

// Turn on Express server
app.listen(3000, () => {
    console.log('Server listening on port 3000');
  }) 

  

  