const express = require('express');
const morgan = require('./config/morganConfig');
const app = express();
const port = 3000;
const router = require('./routes/routes');
require('./config/mongoConfig');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'pug');
app.set('views', './views');
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})