

const notFound = ((req, res, next) => {
    const err = new Error('Error: 404');
    err.status = 404;
    err.message = `Sorry but page not found.`; 
    next(err);
});

// const internalServerError = ((err, req, res, next) => {
//     res.status(err.status || 500);
//     res.render('error', {
//       message: err.message,
//       error: {}
//     });
//   });

module.exports = notFound;