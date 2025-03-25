"use client";
import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import axios from "axios";

interface LazyUserDetailsProps {
  userId: number;
}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const LazyUserDetails: React.FC<LazyUserDetailsProps> = ({ userId }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}/todos?_limit=3`
      );
      setTodos(response.data);
    };
    fetchTodos();
  }, [userId]);

  return (
    <div style={{ marginTop: "1rem" }}>
      <Typography variant='subtitle1'>User Todos:</Typography>
      {todos.map((todo) => (
        <Typography key={todo.id} variant='body2'>
          {todo.title} {todo.completed ? "✔" : "✖"}
        </Typography>
      ))}
    </div>
  );
};

export default LazyUserDetails;
