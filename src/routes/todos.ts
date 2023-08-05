import { Router } from "express";
import { Todo } from "../models/todos";
const router = Router();
let todos: Todo[] = [];
type RequestBody = {text: string};
type RequestParams = {todoId: string};

router.get('/', (req,res,next) => {
    res.status(200).json({todos: todos})
})

router.post('/todo', (req, res, next) => {
    const body = req.body as RequestBody
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: body.text

    };
    todos.push(newTodo);
    res.status(201).json({message: 'new todo added', todos: todos})
})

router.put('/todo/:todoId', (req, res, next) => {
    const body = req.body as RequestBody;
    const params = req.params as RequestParams;
    //const tid = req.params.todoId;
    const todoIndex = todos.findIndex(todoItem => todoItem.id === params.todoId);
    if(todoIndex >= 0){
        todos[todoIndex] = {
            id: todos[todoIndex].id,
            text: body.text
        }
        return res.status(200).json({message: 'updated the todo successfully', todos: todos})
    }
    res.status(404).json({message:'could not find todo with the given index'})
})

router.delete('/todo/:todoId', (req, res, next) => {
    const params = req.params as RequestParams;
    todos = todos.filter(todoItem => todoItem.id !== params.todoId);
    res.status(200).json({message: 'deleted the todo', todos: todos})
})
export default router;