const express = require('express');

const app = express();

app.use(express.json());

app.post('/users/:id', (request, response) =>{

    const QueryParams = request.query;
    const RouteParams = request.params;
    const BodyParams = request.body;

    console.log(RouteParams);
    console.log(QueryParams);
    console.log(BodyParams);

    return response.json({
        nome : "Viktor",
        sobrenome : "Kamei",
        aniversário : "26/11"
    })
})


app.listen(3333);