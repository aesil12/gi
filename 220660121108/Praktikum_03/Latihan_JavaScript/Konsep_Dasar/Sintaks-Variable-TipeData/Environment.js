/* 01 Browser environment */
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Belajar JavaScript</title>
//   </head>
//   <body>
//     <h1>Selamat datang!</h1>
//     <script>
//       const title = 'Belajar JavaScript';
//       window.alert(title);
//     </script>
//   </body>
// </html>

/* <body>
  <h1>Selamat datang!</h1>
  <!-- code html lainnya diatas-->
  <!-- code JavaScript dibawah -->
  <script>
   const title = 'Belajar JavaScript';
   alert(title);
  </script>
</body> */


// file script.js

const title = 'Belajar JavaScript';
alert(title);

// <!-- file index.html -->
// <body>
//   <h1>Selamat datang!</h1>
//   <script src="script.js"></script>
// </body>

<script src="script.js"></script>



/* 02 Node Environment */
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



/* 03 Environment Lainnya */
