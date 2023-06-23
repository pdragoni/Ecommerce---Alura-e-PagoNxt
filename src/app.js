import express from 'express';
import chalk from "chalk";
import db from './config/dbConnect';
import routes from './routes/index';

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", function () {
  console.log(chalk.bgGreen('Conexão ao banco feita com sucesso'));
});

const app = express();
app.use(express.json());
app.use(routes);

export default app;
