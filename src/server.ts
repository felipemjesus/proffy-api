import espress from 'express';
import routes from './routes';

const app = espress();

app.use(espress.json());
app.use(routes);

const port = process.env.PORT || 3333;
app.listen(port);
