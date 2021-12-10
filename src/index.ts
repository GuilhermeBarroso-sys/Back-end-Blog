import express from 'express';
const app = express();
import {routes} from './routes'
app.use(express.json());
app.use(routes);
app.listen(3001, () => {
  console.log(`app is running! on port 3001`)
})