import "./plugins/axios";
import "@whoscan/locales";
import { Routes, Route } from "react-router-dom";
import "@whoscan/css/index.min.css";
import "./App.css";
import uris from "./common/constants/uris.common";
import { Suspense } from "react";
import { PageLoading } from "./components/Loading";
import HomePage from "./pages/Home";

function App() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route path={uris.Home.DEFAULT} element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
