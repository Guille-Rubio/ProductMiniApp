const express = require('express');
const morgan = require('./config/morganConfig');
const app = express();
const port = 3000;
const router = require('./routes/routes');
require('./config/mongoConfig');
require('./config/multerConfig');

app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));


app.use('/', router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})