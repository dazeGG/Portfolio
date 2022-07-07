import React from "react";
import { routes } from "./utils/routes";
import { PAGE_404_ROUTE } from "./utils/consts";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="container">
        <div className="wrapper">
          <Routes>
            {routes.map(({ path, Element }) => (
              <Route key={path} path={path} element={Element} />
            ))}
            <Route
              path="*"
              element={<Navigate to={PAGE_404_ROUTE} replace />}
            />
          </Routes>
        </div>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
