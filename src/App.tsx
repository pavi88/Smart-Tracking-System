import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import AuthPage from '@/pages/AuthPage';
import DeviceSetupPage from '@/pages/DeviceSetupPage';
import TrackingPage from '@/pages/TrackingPage';
import Layout from '@/components/Layout';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <ThemeProvider defaultTheme="light" storageKey="smart-tracking-theme">
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              !isAuthenticated ? (
                <AuthPage onAuthenticated={() => setIsAuthenticated(true)} />
              ) : (
                <Navigate to="/setup" replace />
              )
            } 
          />
          <Route
            path="/setup"
            element={
              isAuthenticated ? (
                <Layout>
                  <DeviceSetupPage />
                </Layout>
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/tracking"
            element={
              isAuthenticated ? (
                <Layout>
                  <TrackingPage />
                </Layout>
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
        </Routes>
      </Router>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;