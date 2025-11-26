import { Routes, Route, Navigate, BrowserRouter } from "react-router";


// Pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Button from '@mui/material/Button';

// Layout
import ProtectedLayout from "./layouts/ProtectedLayout";
import Projects from "./pages/Projects";

const isAuthenticated = () => {
  return !!localStorage.getItem("token");
};

function ProtectedRoute({ children }) {
  if (!isAuthenticated()) return <Navigate to="/login" replace />;
  return children;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Protected routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <ProtectedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Projects />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Public */}
        <Route path="/login" element={<Login />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}