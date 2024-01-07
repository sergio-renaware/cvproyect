import { HashRouter, Routes, Route } from "react-router-dom"

// pages
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <HashRouter>
      <main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App