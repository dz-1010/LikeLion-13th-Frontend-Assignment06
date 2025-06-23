import { useEffect, useState } from "react";
import axios from "axios";
import "./TodoList.css";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_GET_URL}/todos`);
        setTodos(res.data.records.reverse());
      } catch (error) {
        console.error("투두 불러오기 실패!", error);
      }
    };
    fetch();
  }, []);

  return (
    <div className="todo-wrapper">
      <h2>투두 리스트</h2>
      {todos.map((todo) => (
        <div key={todo.id} className="todos">
          <p>
            <strong>제목:</strong> {todo.fields?.name}
          </p>
          <p>
            <strong>작성자:</strong> {todo.fields?.writer || "-"}
          </p>
          <p>
            <strong>내용:</strong> {todo.fields?.content || "-"}
          </p>
          <p>
            <strong>작성일: </strong>{" "}
            {new Date(todo.createdTime).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}
