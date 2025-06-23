import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import styled from "styled-components";

const Nav = styled.nav`
  text-align: center;
`;

export default function App() {
  return (
    <Router>
      <Nav>
        <Link to="/">투두리스트</Link> | <Link to="/add">등록하기</Link>
      </Nav>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/add" element={<AddTodo />} />
      </Routes>
    </Router>
  );
}
