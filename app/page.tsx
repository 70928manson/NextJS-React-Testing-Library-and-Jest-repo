"use client"

import TodoList from "@/components/TodoList/TodoList";
import AddTodo from "@/components/AddTodo/AddTodo";
import { useState } from "react";
import type { TTodo } from "./types/Todo";


export default function Home() {
  const [todos, setTodos] = useState<TTodo[]>([
    {
      "userId": 1,
      "title": "Hello world~",
      "completed": false,
      "id": 1
    },
    {
      "userId": 1,
      "title": "Go to Tainan",
      "completed": false,
      "id": 2
    },
    {
      "userId": 1,
      "title": "NCKU at the south",
      "completed": false,
      "id": 3
    },
    {
      "userId": 1,
      "title": "Cat walk in street",
      "completed": false,
      "id": 4,
    }
  ]);

  return (
    <>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  )
}