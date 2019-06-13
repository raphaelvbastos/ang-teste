const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();

app.use(express.static(`${__dirname}/src/dist/ang-teste`));

app.get('/*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/src/dist/ang-teste/index.html`));
});

var porta = process.env.PORT || 8080;
app.listen(porta);