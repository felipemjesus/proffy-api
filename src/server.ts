import espress from 'express';
import cors from 'cors';
import routes from './routes';

const app = espress();

app.use(cors);
app.use(espress.json());
app.use(routes);

app.listen(3333);
