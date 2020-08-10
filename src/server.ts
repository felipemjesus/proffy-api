import espress from 'express';
import routes from './routes';
import cors from 'cors';

const app = espress();

app.use(espress.json());
app.use(cors);
app.use(routes);

app.listen(process.env.PORT || 3333);
