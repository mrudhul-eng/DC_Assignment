const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();

app.get('/api/get-speech-token', async (request, response, next) => {
    response.setHeader('Content-Type', 'application/json');
    const subscriptionKey = process.env.SUBSCRIPTIONKEY;
    const speechRegion = process.env.SPEECH_REGION;

    if (subscriptionKey === '' || speechRegion === '') {
        response.status(400).send('Please add your subscription key or region to the .env file.');
    } else {
        const headers = { 
            headers: {
                'Ocp-Apim-Subscription-Key': subscriptionKey,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        try {
            const result = await axios.post(`https://${speechRegion}.api.cognitive.microsoft.com/sts/v1.0/issueToken`, null, headers);
            response.send({ token: result.data, region: speechRegion });
        } catch (error) {
            response.status(401).send('Error authorizing speech key.');
        }
    }
});

app.listen(3001);
