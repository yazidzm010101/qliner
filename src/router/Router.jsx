import React from "react";
import { Routes, Route } from "react-router-dom";
import Catalogue from "~/pages/Catalogue";
import Layout from "~/components/Layout";
import { ROUTE_PATH } from "./path";

function Router() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path={ROUTE_PATH.index} element={<Catalogue />} />
            </Route>
        </Routes>
    );
}

export default Router;
