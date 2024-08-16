class TaskController {
    constructor() {
      // Aqui vamos simular um banco de dados com um array
      this.tasks = [];
    }
  
    // Create
    createTask(req, res) {
      this.tasks.push(req.body);
      return res.json({ message: "Task added successfully!" });
    }
  
    // Read
    getAllTasks(req, res) {
      return res.json(this.tasks);
    }
  
    // Update - simulando por enquanto
    updateTask(req, res) {
      // Código para atualizar a tarefa
      return res.json({ message: "Task updated successfully!" });
    }
  
    // Delete - simulando por enquanto
    deleteTask(req, res) {
      // Código para deletar a tarefa
      return res.json({ message: "Task deleted successfully!" });
    }
  }
  
  export default new TaskController();