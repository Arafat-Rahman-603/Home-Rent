import {
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
  UserButton,
  useAuth,
} from "@clerk/clerk-react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navber from "./componentes/Navber";
import Home from "./componentes/Home";
import Agent from "./componentes/Agent";
import AgentDetails from "./componentes/AgentDetails";
import BecomeAgent from "./componentes/BecomeAgent";
import Renter from "./componentes/Renter";
import ContactPage from "./componentes/ContactPage";
import AllAds from "./componentes/AllAds";
import PropertyDetails from "./componentes/PropertyDetails";
import Dashboard from "./componentes/Dashboard";
import Footer from "./componentes/Footer";
import Login from "./componentes/Login";
import ProtectedRoute from "./componentes/ProtectedRoute";

function App() {
  const { isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-300">
        <div className="text-center">
          <lord-icon
            src="https://cdn.lordicon.com/xjovhxoi.json"
            trigger="loop"
            colors="primary:#ffffff,secondary:#66a1ee"
            className="w-16 h-16 mb-4"
          ></lord-icon>
          <p className="text-white text-xl font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navber />
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<AllAds />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/agents" element={<Agent />} />
          <Route path="/agents/:id" element={<AgentDetails />} />
          <Route path="/become-agent" element={<BecomeAgent />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* Authentication Routes */}
          <Route
            path="/login"
            element={
              <SignedOut>
                <Login />
              </SignedOut>
            }
          />
          <Route
            path="/signup"
            element={
              <SignedOut>
                <div className="min-h-screen flex items-center justify-center bg-blue-300">
                  <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
                    <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                      Create Account
                    </h2>
                    <SignUp
                      appearance={{
                        elements: {
                          formButtonPrimary:
                            "bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200",
                          card: "shadow-none",
                          headerTitle: "text-gray-800",
                          headerSubtitle: "text-gray-600",
                          socialButtonsBlockButton:
                            "border border-gray-300 hover:bg-gray-50 transition-all duration-200",
                          formFieldInput:
                            "border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                          footerActionLink:
                            "text-blue-500 hover:text-blue-600 font-semibold",
                        },
                      }}
                    />
                  </div>
                </div>
              </SignedOut>
            }
          />

          {/* Protected Routes */}
          <Route
            path="/rent"
            element={
              <ProtectedRoute>
                <Renter />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
