import espress from 'express';
import routes from './routes';

const app = espress();

app.use(espress.json());
app.use(routes);

app.listen(3333);
