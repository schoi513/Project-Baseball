const express = require('express');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('hello world');
});

app.use('*', (req, res)=> {
    res.status(404).send('not found');
});

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack,
    });
});