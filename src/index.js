import express from 'express';
import taskRoutes from './routes/taskRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json()); // Para lidar com JSON
app.use('/api', taskRoutes); // Integrando as rotas de tarefas

app.listen(PORT, () => {
  console.log(`Servidor tá na área em <http://localhost>:${PORT} 🚀`);
});