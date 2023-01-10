import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Pokemon } from "./pages/Pokemon";

export const Router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<Home />} />,
    <Route path="/pokemon" element={<Pokemon />} />,
  ])
);
