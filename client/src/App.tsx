import { Router } from "./router/router";
import { AuthProvider } from "./shared/context/AuthContext/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
