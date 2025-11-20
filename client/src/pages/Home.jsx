import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

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

      {/* Blog Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay informed with the latest healthcare insights and tips
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">The Future of Telemedicine</h3>
              <p className="text-gray-600 mb-4">Explore how telemedicine is revolutionizing patient care and accessibility.</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">Read More</button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Healthy Living Tips</h3>
              <p className="text-gray-600 mb-4">Discover practical tips for maintaining a healthy lifestyle.</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">Read More</button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advances in Medical Technology</h3>
              <p className="text-gray-600 mb-4">Learn about the latest breakthroughs in medical technology.</p>
              <button className="text-blue-600 hover:text-blue-800 font-medium">Read More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MediReach?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience healthcare like never before with our comprehensive platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Access</h3>
              <p className="text-gray-600">
                Quick and easy access to healthcare services from the comfort of your home
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Secure & Private</h3>
              <p className="text-gray-600">
                Your health data is protected with enterprise-grade security measures
              </p>
            </div>

            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Care</h3>
              <p className="text-gray-600">
                Connect with qualified healthcare professionals for personalized care
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Healthcare Experience?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Join thousands of users who have already improved their health management
          </p>
          <SignedOut>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/sign-up">Start Your Journey</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link to="/dashboard">Access Your Dashboard</Link>
            </Button>
          </SignedIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 MediReach. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
