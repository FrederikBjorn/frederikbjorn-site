import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Attachments from "./pages/Attachments";
import Figures from "./pages/Figures";
import UserGuide from "./pages/UserGuide";

export default function App() {
  return (
    <>
      <nav
        style={{
          padding: 16,
          borderBottom: "1px solid #eee",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <Link to="/attachments" style={{ marginRight: 16 }}>
          Attachments
        </Link>

        <Link to="/figures" style={{ marginRight: 16 }}>
          Figures
        </Link>

        <Link to="/userguide">User Guide</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attachments" element={<Attachments />} />
        <Route path="/figures" element={<Figures />} />
        <Route path="/userguide" element={<UserGuide />} />
      </Routes>
    </>
  );
}
