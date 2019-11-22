const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(`${__dirname}/../build`));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../build/index.html')));

app.listen(5555, () => console.log(`portfolio-2 listening on 5555`));
