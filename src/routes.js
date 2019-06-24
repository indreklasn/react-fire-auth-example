import React from "react";
import Login from "./Login";
import Join from "./Join";

const routes = [
  { name: "Join", path: "/", exact: true, main: () => <Join /> },
  { name: "Login", path: "/login", exact: true, main: () => <Login /> }
];

export default routes;
