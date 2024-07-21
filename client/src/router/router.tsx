import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SignIn } from "../view/pages/SignIn/SignIn";
import { PrivateRoute } from "./PrivateRoute";
import { Dashboard } from "../view/pages/Dashboard/Dashboard";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute isPrivate={false} />}>
          <Route path="/sign-in" element={<SignIn />} />
        </Route>

        <Route element={<PrivateRoute isPrivate />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
