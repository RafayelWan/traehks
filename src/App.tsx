import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "@/pages/Home";
import Result from "@/pages/Result";

// 页面转场动画组件
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="page-transition">
      {children}
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/result" element={<PageTransition><Result /></PageTransition>} />
      </Routes>
    </Router>
  );
}
