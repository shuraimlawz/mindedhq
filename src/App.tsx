import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "@/components/site/theme-provider";
import HomePage from "@/routes/index";
import VenturesPage from "@/routes/ventures";
import ImpactPage from "@/routes/impact";
import PeoplePage from "@/routes/people";
import AccountPage from "@/routes/account";

export default function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="minded-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ventures" element={<VenturesPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
