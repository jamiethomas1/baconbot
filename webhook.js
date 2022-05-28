import express from 'express';
import bodyParser from 'body-parser';

function setUpWebhook() {
    const app = express();
    
    app.use(bodyParser.urlencoded({extended: true}));
    
    app.use(bodyParser.json());
    
    const port = process.env.port || 3000;
    
    app.listen(port, () => {
        console.log(`Baconbot Trello webhook listening on port ${port}`)
    })

    app.get('/baconbotwebhook', (req, res) => {
        res.send(200)
    });
    
    app.post('/baconbotwebhook', (req, res) => {
        const data = 200;
    
        res.json(data);
    });
}

export default { setUpWebhook }
