import { Routes, Route, Navigate, Link } from "react-router-dom";
import { SignIn, SignUp, SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/clerk-react";
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
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import CompleteProfile from "./pages/CompleteProfile";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
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

      <div className="w-full mt-8 relative">
        <Carousel className="w-full" opts={{ loop: true, duration: 30 }}>
          <CarouselContent>
            <CarouselItem>
              <div className="relative h-[28rem] w-full bg-cover bg-center overflow-hidden" style={{backgroundImage: 'url(/images/slides/1.jpg)'}}>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-start">
                  <div className="text-left text-white max-w-2xl pl-8 md:pl-16 pr-8">
                    <h2 className="text-5xl font-bold mb-6">Leading with care, Driven by Innovation</h2>
                    <p className="text-xl mb-8">Revolutionizing healthcare with innovative technology. Connect with medical professionals and manage your health records seamlessly.</p>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white animate-pulse shadow-lg shadow-blue-500/50">Consult Today</Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[28rem] w-full bg-cover bg-center overflow-hidden" style={{backgroundImage: 'url(/images/slides/2.jpg)'}}>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-end">
                  <div className="text-right text-white max-w-2xl pl-8 pr-8 md:pr-16">
                    <h2 className="text-5xl font-bold mb-6">Compassionate Care, Advanced Medical Solutions</h2>
                    <p className="text-xl mb-8"> Where Technology meets empathy, delivering trusted heathcare for you and your family, every step of the way! </p>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white animate-pulse shadow-lg shadow-blue-500/50">Consult Today</Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="relative h-[28rem] w-full bg-cover bg-center overflow-hidden" style={{backgroundImage: 'url(/images/slides/3.jpg)'}}>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-start">
                  <div className="text-left text-white max-w-2xl pl-8 md:pl-16 pr-8">
                    <h2 className="text-5xl font-bold mb-6">Your Health, Our Lifelong Committment</h2>
                    <p className="text-xl mb-8">Experience worldclass medical servcies backed by cutting-edge technology and a team that truly cares. </p>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white animate-pulse shadow-lg shadow-blue-500/50">Consult Today</Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="left-4 bg-white/80 hover:bg-blue-600 hover:border-2 hover:border-white text-black hover:text-white transition-all duration-300 delay-150" />
          <CarouselNext className="right-4 bg-white/80 hover:bg-blue-600 hover:border-2 hover:border-white text-black hover:text-white transition-all duration-300 delay-150" />
        </Carousel>
      </div>

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
        <Route path="/complete-profile" element={<CompleteProfile />} />
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
    </div>
  );
}
