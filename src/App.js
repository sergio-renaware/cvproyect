import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App