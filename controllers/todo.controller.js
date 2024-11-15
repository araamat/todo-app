import { TodoStatus } from "@prisma/client";
import prisma from "../config/prisma.js";

export const getAllTodos = async (request, response) => {
    try {

        const todos = await prisma.todo.findMany()

        response.status(200).json ({
            todos
        })
        
    }   catch (error) {
        response.status(500).json ({
            message: "Bad luck. Try again."
        })

    }
}

export const getTodo = async (request, response) => {

    try {
        const { id } = request.params

        const todo = await prisma.todo.findUnique({
            where: {
                id: Number(id)
              }
            })
        
        response.status(200).json(todo)

    } catch (error) {
        console.log(error)
        response.status(500).json({
            message: "Bad luck. Try again."
        })
    }
}

// delete:

export const deleteTodo = async (request, response) => {
    
    try {
        const { id } = request.params
        
        await prisma.todo.delete({
            where: {
                id: Number(id)
            }
        })
        
        response.status(200).json({
            message: "Todo deleted successfully."
        })

    } catch (error) {
        console.log(error)
        response.status(500).json({
          message: "Bad luck. Try again.",
        });
    }
}

//put:

export const updateTodo = async (request, response) => {
  try {
    const { id } = request.params
    const { title, description, status } = request.body
    
    const updatedTodo = await prisma.todo.update({
      where: {
        id: Number(id),
      },
        data: {
            title,
            description,
        },
    });

    response.status(200).json({
      message: "Todo updated successfully.",
      updateTodo

    });
  } catch (error) {
    console.log(error);
    response.status(500).json({
      message: " Try again.",
    });
  }
};

export const createTodo = async (request, response) => {
    // const title = request.body.title
    // const description = request.body.description

    const { title, description } = request.body
    
    try {

       const todo = await prisma.todo.create({
            data:{
                title,
                description,
                status: TodoStatus.TODO
            }
        })

        response.status(201).json({
            message: "Todo created succesfully.",
            todo
        })

    } catch (error) {
        response.status(500).json ({
            message: "Bad luck. Try again."
        })

    }

}

