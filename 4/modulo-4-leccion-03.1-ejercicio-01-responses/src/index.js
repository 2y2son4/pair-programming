const express = require('express');
const cors = require('cors');

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// create app server
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});
// el req se pone siempre aunque no se use para que res esté de segundo parámetro
app.get('/response-a', (req, res) => {
  res.json({ result: 'ok' });
});

app.get('/response-b', (req, res) => {
  const date = new Date();
  const htmlCode = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Express</title>
        <link rel="stylesheet" href="http://beta.adalab.es/resources/stylesheets/all.css" >
      </head>
      <body class="page">
          <h1>Express: Esta es una página de prueba.</h1>
          <h2>Hoy es: ${date}</h2>
     </body>
    </html>`;
  res.send(htmlCode);
});

app.get('/response-c', (req, res) => {
  let number = Math.round(Math.random() * 10);
  if (number % 2 === 0) {
    res.redirect('https://youtube.es');
  } else {
    res.redirect('https://instagram.com');
  }
});

app.get('/response-d', (req, res) => {
  res.status(404).json({
    errorCode: 'data-not-found',
    errorMessage: 'Data not found',
  });
});
