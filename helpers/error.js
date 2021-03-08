
// error handler 404 than render not found page
const notFound = (req, res, next) => {
  const err = new Error('Error: 404');
  err.status = 404;
  err.message = `Oh No. Sorry but page not found.`; 
  next(err);
  res.render('error/page-not-found', { err: err });
  
};


//error handler  500 for global errors
const globalError = (err, req, res, next) => {

  if(!err.status === 404) {
    err.status = 500;
    err.message = `Looks like something went wrong`; 
    next(err);
    res.render('error/error', { err: err });
  }
  
  
}


module.exports = { notFound, globalError};