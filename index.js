const express = require('express');
const app = express();
app.use(express.static('public'));
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log('> ' + PORT);
    saveVisit({
        time: new Date().getTime()
    });
});

async function saveVisit(visit) {
    console.log(visit);
}

app.get('/musicians', (req, res) => {
    const ms = require('./src/musicians');
    res.json(ms);
});