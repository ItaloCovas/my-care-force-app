import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignIn } from "../view/pages/SignIn/SignIn";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route element={<PrivateRoute isPrivate={false} isAdmin={false} />}>
          </Route> */}
        <Route path="/sign-in" element={<SignIn />} />
        {/*   
          <Route element={<PrivateRoute isPrivate isAdmin />}>
            <Route path="/admin/classes" element={<AdminClasses />} />
          </Route> */}
      </Routes>
    </BrowserRouter>
  );
}
