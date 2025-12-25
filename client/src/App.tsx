import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <ErrorBoundary>
          {/* ルーターを削除し、Homeを直接表示 */}
          <Home />
          <Toaster />
        </ErrorBoundary>
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
