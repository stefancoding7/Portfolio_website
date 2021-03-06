

const notFound = (req, res, next) => {
  const err = new Error('Error: 404');
  err.status = 404;
  err.message = `Oh No. Sorry but page not found.`; 
  next(err);
  res.render('error/page-not-found', { err: err });
  
};

const globalError = (err, req, res, next) => {
 

  if(!err.status === 404) {
    err.status = 500;
    err.message = `Looks like something went wrong`; 
    next(err);
    res.render('error/error', { err: err });
  }
  
  
}

// const internalServerError = ((err, req, res, next) => {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: {}
//     });
//   });

module.exports = { notFound, globalError};