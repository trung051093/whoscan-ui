import "./plugins/axios";
import "@whoscan/locales";
import { Routes, Route } from "react-router-dom";
import "@whoscan/css/index.min.css";
import "./App.css";
import uris from "./common/constants/uris.common";
import { Suspense } from "react";
import { PageLoading } from "./components/Loading";
import TablePage from "./pages/Table";
import DataGridPage from "./pages/DataGrid";

function App() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route path={uris.Home.DEFAULT} element={<DataGridPage />} />
        <Route path={uris.Demo.TABLE} element={<TablePage />} />
        <Route path={uris.Demo.DATAGRID} element={<DataGridPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
