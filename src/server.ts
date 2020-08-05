import espress from 'express';

const app = espress();

app.use(espress.json());

app.get('/',  (request, response) => {
    return response.json({ message: "Hello World" });
});

app.listen(3333);
