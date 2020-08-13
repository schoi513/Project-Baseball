const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const teamsRouter = require('./routes/teams-router');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ exntended: false }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('hello world');
});

app.use('/teams', teamsRouter);

app.use('*', (req, res)=> {
    res.status(404).send('not found');
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
    });
});