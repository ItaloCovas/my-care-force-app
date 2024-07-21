import { Toaster } from "react-hot-toast";
import { Router } from "./router/router";
import { AuthProvider } from "./shared/context/AuthContext/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router />
      <Toaster />
    </AuthProvider>
  );
}

export default App;
