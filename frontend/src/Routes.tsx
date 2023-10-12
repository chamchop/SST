import { Route, Routes } from "react-router-dom";
import Login from "./containers/Login.tsx";
import Home from "./containers/Home.tsx";

export default function Links() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}