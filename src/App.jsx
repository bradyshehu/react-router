import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./components/layouts/DefaultLayout";

import HomePage from "./pages/Homepage";
import AboutUsPage from "./pages/AboutUs";
import PostsPage from "./pages/Posts";
import PostsListPage from "./pages/posts/PostsListPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutUsPage />}></Route>
          <Route path="/posts" element={<PostsListPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
