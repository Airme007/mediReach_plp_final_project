import { Routes, Route, Navigate, Link, useNavigate, useLocation } from "react-router-dom";
import { SignIn, SignUp, SignedIn, SignedOut, UserButton, SignInButton, SignUpButton, useUser } from "@clerk/clerk-react";
import { Button } from "./components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./components/ui/dropdown-menu";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import { ChevronDownIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import CompleteProfile from "./pages/CompleteProfile";

export default function App() {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const [showCompleteProfile, setShowCompleteProfile] = useState(false);


  useEffect(() => {
    if (isLoaded && user && !user.unsafeMetadata?.role) {
      setShowCompleteProfile(true);
    } else {
      setShowCompleteProfile(false);
    }
  }, [user, isLoaded]);

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">MediReach</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 delay-100">
                  Product <ChevronDownIcon className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Features</DropdownMenuItem>
                  <DropdownMenuItem>Integrations</DropdownMenuItem>
                  <DropdownMenuItem>API</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 delay-100">
                  Solution <ChevronDownIcon className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>For Healthcare Providers</DropdownMenuItem>
                  <DropdownMenuItem>For Patients</DropdownMenuItem>
                  <DropdownMenuItem>For Clinics</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 delay-100">
                Pricing
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 delay-100">
                  Resources <ChevronDownIcon className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Documentation</DropdownMenuItem>
                  <DropdownMenuItem>Help Center</DropdownMenuItem>
                  <DropdownMenuItem>Blog</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex items-center space-x-4">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 delay-100">
                    Login
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <Button size="sm">
                    Sign Up
                  </Button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 delay-100">
                  Dashboard
                </Link>
                <UserButton />
              </SignedIn>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in/*" element={
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <SignIn routing="path" path="/sign-in" />
          </div>
        } />
        <Route path="/sign-up/*" element={
          <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <SignUp routing="path" path="/sign-up" />
          </div>
        } />
        <Route
          path="/dashboard"
          element={
            <SignedIn>
              <Dashboard />
            </SignedIn>
          }
        />
        <Route
          path="/dashboard"
          element={
            <SignedOut>
              <Navigate to="/sign-in" />
            </SignedOut>
          }
        />
      </Routes>

      {showCompleteProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full mx-4">
            <CompleteProfile onComplete={() => { setShowCompleteProfile(false); navigate("/"); }} />
          </div>
        </div>
      )}

    </div>
  );
}
