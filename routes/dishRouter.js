const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })  
  .get((req,res,next)=> {
      res.end('Will send all the dishes to you!');
  })  
  .post((req,res,next)=> {
      res.end('Will add the dish: ' + req.body.name + ' with details: ' + 
    req.body.description);
  })  
  .put((req,res,next)=> {
      res.statusCode = 403;
      res.end('PUT operation not supported on /dishes');
  })  
  .delete((req,res,next)=> {    
    res.end('Deleting all dishes');
  });
  


// dish ID section
// app.get('/dishes/:dishId', (req,res,next)=> {
//     res.end('Will send details of the dish: ' + req.params.dishId + ' to you!');
// });

// app.post('/dishes/:dishId', (req,res,next)=> {
//     res.statusCode = 403;
//     res.end('POST operation not supported on /dishes/' + req.params.dishId);
// });

// app.put('/dishes/:dishId', (req,res,next)=> {
//     res.write('Updating the dish' + req.params.dishId + '\n');
//     res.end('Will update the dish: ' + req.body.name + 
//           'with details' + req.body.description);
// });

// app.delete('/dishes/:dishId', (req,res,next)=> {    
//   res.end('Deleting dish: ' + req.params.dishId);
// });
// app.use(express.static(__dirname + '/public'));

// app.use((req, res, next) => {    
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/html');
//     res.end('<html><body><h1>This is an Express Server</h1></body></html>');

// });

// const server = http.createServer(app);

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);

// });

module.exports = dishRouter;