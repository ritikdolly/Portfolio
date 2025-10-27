import "./App.css";
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  );
}

export default App;
