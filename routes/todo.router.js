import { Router } from "express";
import { createTodo, getAllTodos } from "../controllers/todo_controller.js";

const router = Router()

/**
 * GET /todos  => getAllTodos saame kõik todos
 * GET /todos/id => getTodo
 * POST /todos => createTodo
 * PUT /todos => updateTodo
 * Delete /todos/id => deleteTodo
 */

router.get('/todos', getAllTodos)
// router.get('/todos/:id', getTodo)
router.post('/todos', createTodo)
// router.put('/todos', updateTodo)
// router.delete('/todos/:id', deleteTodo)

export default router
