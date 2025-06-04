import { BrowserRouter, Routes, Route } from "react-router-dom";

import DefaultLayout from "./components/layouts/DefaultLayout";

import HomePage from "./pages/Homepage";
import AboutUsPage from "./pages/AboutUs";
import PostsListPage from "./pages/posts/PostsListPage";
import PostDetailPage from "./pages/posts/PostDetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<AboutUsPage />}></Route>
          <Route path="/posts">
            <Route path="" element={<PostsListPage />}></Route>
            <Route path=":id" element={<PostDetailPage />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
