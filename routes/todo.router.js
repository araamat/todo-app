import { Router } from "express";
import { createTodo, getAllTodos, getTodo, deleteTodo, updateTodo } from "../controllers/todo.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = Router()
router.use(authMiddleware);

/**
 * GET /todos  => getAllTodos saame kõik todos
 * GET /todos/id => getTodo
 * POST /todos => createTodo
 * PUT /todos => updateTodo
 * Delete /todos/id => deleteTodo
 */

router.get('/todos', getAllTodos)
router.get('/todos/:id', getTodo)
router.post('/todos', createTodo)
router.put('/todos/:id', updateTodo)
router.delete('/todos/:id', deleteTodo)

export default router
