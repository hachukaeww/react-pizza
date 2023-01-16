import "./scss/app.scss";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import React from "react";
function App() {
  const Cart = React.lazy(() => import(/*webpackChunkName: "Cart"*/"./Pages/Cart"));
  const FullPizza = React.lazy(() => import(/*webpackChunkName: "FullPizza"*/"./Pages/FullPizza"));
  const NotFound = React.lazy(() => import(/*webpackChunkName:"NotFound"*/"./Pages/NotFound"));
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="pizza/:id"
              element={
                <React.Suspense
                  fallback={<div className="container">Загрузка страницы</div>}
                >
                  <FullPizza />
                </React.Suspense>
              }
            />
            <Route
              path="/Cart"
              element={
                <React.Suspense
                  fallback={<div className="container">Загрузка страницы</div>}
                >
                  <Cart />
                </React.Suspense>
              }
            />
            <Route path="*" element={  <React.Suspense
                  fallback={<div className="container">Загрузка страницы</div>}
                ><NotFound /></React.Suspense>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
