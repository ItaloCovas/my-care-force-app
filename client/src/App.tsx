import { Toaster } from "react-hot-toast";
import { Router } from "./router/router";
import { AuthProvider } from "./shared/context/AuthContext/AuthContext";
import { ThemeProvider } from "./shared/providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthProvider>
        <Router />
        <Toaster />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
