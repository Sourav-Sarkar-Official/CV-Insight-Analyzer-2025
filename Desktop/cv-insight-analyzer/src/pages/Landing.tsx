import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  CheckIcon,
  FileTextIcon,
  ArrowRightIcon,
  BarChart2Icon,
  ZapIcon,
  BadgeCheckIcon,
  StarIcon,
  UsersIcon,
  AwardIcon,
  TargetIcon,
  LightbulbIcon,
  ShieldIcon,
  ClockIcon,
  TrendingUpIcon,
  ChevronDownIcon,
  PlayIcon,
  DownloadIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  MenuIcon,
  XIcon,
} from "lucide-react";
import { useState } from "react";

const Landing = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header/Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl mr-3">
                <FileTextIcon className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                ResumeIQ
              </span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              <a
                href="#features"
                className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
              >
                How it Works
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
              >
                Testimonials
              </a>
              <a
                href="#faq"
                className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
              >
                FAQ
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
            <Link to="/analyzer">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium px-6 py-2 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
                Get Started
              </Button>
            </Link>
              
              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </nav>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4 pt-4">
                <a
                  href="#features"
                  className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
                <a
                  href="#how-it-works"
                  className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How it Works
                </a>
                <a
                  href="#testimonials"
                  className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Testimonials
                </a>
                <a
                  href="#faq"
                  className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8 animate-fade-in order-2 lg:order-1">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-4 py-2 text-sm font-medium">
                  <StarIcon className="h-4 w-4 mr-2" />
                  Trusted by 10,000+ Job Seekers
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-600 bg-clip-text text-transparent">
                    Get Your Resume
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    AI-Powered Analysis
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Transform your resume with our advanced AI technology. Get instant scoring, 
                  personalized feedback, and actionable insights to land your dream job.
                </p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center space-x-3 p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-white/20">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckIcon className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">Instant Analysis</span>
                </div>
                <div className="flex items-center space-x-3 p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-white/20">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <TargetIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">ATS Optimization</span>
                </div>
                <div className="flex items-center space-x-3 p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-white/20">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <LightbulbIcon className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">Smart Suggestions</span>
                </div>
                <div className="flex items-center space-x-3 p-3 sm:p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-white/20">
                  <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <AwardIcon className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600" />
                  </div>
                  <span className="text-sm sm:text-base text-gray-700 font-medium">Professional Grade</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link to="/analyzer">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    Start Free Analysis
                    <ArrowRightIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300">
                  <PlayIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">10K+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Resumes Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">95%</div>
                  <div className="text-xs sm:text-sm text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-gray-900">4.9/5</div>
                  <div className="text-xs sm:text-sm text-gray-600">User Rating</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative animate-slide-up order-1 lg:order-2">
              <div className="relative max-w-md mx-auto lg:max-w-none">
                {/* Main Card */}
                <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-2xl overflow-hidden">
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <div className="space-y-4 sm:space-y-6">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 sm:space-x-3">
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></div>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <Badge className="bg-green-100 text-green-800 text-xs sm:text-sm">Live Analysis</Badge>
                      </div>

                      {/* Score Display */}
                      <div className="text-center space-y-3 sm:space-y-4">
                        <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto relative">
                          <div className="absolute inset-0 rounded-full border-4 sm:border-8 border-gray-200"></div>
                          <div className="absolute inset-0 rounded-full border-4 sm:border-8 border-blue-500 border-t-transparent transform -rotate-90" style={{clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 70%)'}}></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-2xl sm:text-3xl font-bold text-gray-900">87</div>
                              <div className="text-xs sm:text-sm text-gray-600">Score</div>
                            </div>
                          </div>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Excellent Match!</h3>
                        <p className="text-sm sm:text-base text-gray-600">Your resume shows strong alignment with the job requirements.</p>
                      </div>

                      {/* Progress Bars */}
                      <div className="space-y-3 sm:space-y-4">
                        <div className="space-y-1 sm:space-y-2">
                          <div className="flex justify-between text-xs sm:text-sm">
                            <span className="text-gray-600">Resume Quality</span>
                            <span className="font-semibold text-gray-900">85%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                            <div className="bg-blue-500 h-1.5 sm:h-2 rounded-full" style={{width: '85%'}}></div>
                          </div>
                        </div>
                        <div className="space-y-1 sm:space-y-2">
                          <div className="flex justify-between text-xs sm:text-sm">
                            <span className="text-gray-600">Skills Match</span>
                            <span className="font-semibold text-gray-900">90%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                            <div className="bg-green-500 h-1.5 sm:h-2 rounded-full" style={{width: '90%'}}></div>
                          </div>
                        </div>
                        <div className="space-y-1 sm:space-y-2">
                          <div className="flex justify-between text-xs sm:text-sm">
                            <span className="text-gray-600">ATS Optimization</span>
                            <span className="font-semibold text-gray-900">78%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                            <div className="bg-purple-500 h-1.5 sm:h-2 rounded-full" style={{width: '78%'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Static Elements (No Animation) */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <StarIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
                  <CheckIcon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-4 max-w-7xl relative">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="bg-blue-100 text-blue-800 border-blue-200 px-4 py-2 text-sm font-medium mb-4 sm:mb-6">
              <AwardIcon className="h-4 w-4 mr-2" />
              Powerful Features
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Why Choose ResumeIQ
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our AI-powered platform combines cutting-edge technology with user-friendly design 
              to give you everything you need to create a standout resume.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Feature 1 */}
            <Card className="group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-4 sm:space-y-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BarChart2Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
              </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                AI-Powered Analysis
              </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                      Our advanced AI technology analyzes your resume against industry standards, 
                      job requirements, and ATS systems to provide comprehensive insights.
                    </p>
                    <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckIcon className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />
                        Industry-specific scoring
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />
                        Keyword optimization
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />
                        Format analysis
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature 2 */}
            <Card className="group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-4 sm:space-y-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <ZapIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                      Instant Feedback
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                      Get instant, detailed feedback on what works and what needs improvement 
                      in your resume with actionable recommendations.
                    </p>
                    <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckIcon className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />
                        Real-time analysis
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />
                        Detailed explanations
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />
                        Improvement suggestions
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature 3 */}
            <Card className="group bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-4 sm:space-y-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <BadgeCheckIcon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                      ATS Optimization
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6">
                      Ensure your resume passes through Applicant Tracking Systems 
                      with our advanced keyword optimization and formatting tools.
                    </p>
                    <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
                      <li className="flex items-center">
                        <CheckIcon className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />
                        ATS compatibility check
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />
                        Keyword density analysis
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 flex-shrink-0" />
                        Format optimization
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Features Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <ShieldIcon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Secure & Private</h4>
              <p className="text-xs sm:text-sm text-gray-600">Your data is encrypted and never shared</p>
            </div>
            
            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <ClockIcon className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Fast Results</h4>
              <p className="text-xs sm:text-sm text-gray-600">Get analysis in under 30 seconds</p>
            </div>
            
            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <TrendingUpIcon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Proven Results</h4>
              <p className="text-xs sm:text-sm text-gray-600">95% of users see improvement</p>
            </div>
            
            <div className="text-center p-4 sm:p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <UsersIcon className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base">Expert Backed</h4>
              <p className="text-xs sm:text-sm text-gray-600">Built by HR professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How ResumeIQ Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Three simple steps to improve your resume and boost your job
              search success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 border border-gray-900 rounded-lg shadow-sm">
            <div className="text-center p-6 lg:border-r border-gray-900">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Upload Your Resume
              </h3>
              <p className="text-gray-600">
              Upload your resume in any format and provide the job description for a targeted evaluation.
              </p>
            </div>

            <div className="text-center p-6 lg:border-r border-gray-900">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Answer Assessment Questions
              </h3>
              <p className="text-gray-600">
              Our AI generates assessment questions based on your resume and job description to evaluate your fit and skills.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Get Your Analysis
              </h3>
              <p className="text-gray-600">
              Receive detailed feedback with scores—60% from resume evaluation, 40% from assessments—along with improvement points and suggestions.
              </p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link to="/analyzer">
              <Button size="lg">Start My Analysis Now</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              What Users Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of job seekers who have improved their resumes with
              ResumeIQ
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-blue-600">JS</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Jamie Smith</p>
                  <p className="text-sm text-gray-500">Software Developer</p>
                </div>
              </div>
              <p className="text-gray-600 ">
                "After using ResumeIQ, I improved my resume's ATS score by 45%.
                Within two weeks, I had three interview offers from companies
                that had previously rejected me."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="font-semibold text-green-600">MJ</span>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-gray-900">Michael Johnson</p>
                  <p className="text-sm text-gray-500">Career Advisor</p>
                </div>
              </div>
              <p className="text-gray-600 ">
                "As a career counselor, I recommend ResumeIQ to all my clients.
                The detailed feedback and specific suggestions help them create
                truly outstanding resumes with much less effort."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 border-purple-200 px-4 py-2 text-sm font-medium mb-6">
              <LightbulbIcon className="h-4 w-4 mr-2" />
              Frequently Asked Questions
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                Got Questions?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our AI-powered resume analysis platform.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                question: "How does the AI resume analysis work?",
                answer: "Our AI analyzes your resume using advanced machine learning algorithms that evaluate content, formatting, keywords, and ATS compatibility. It compares your resume against industry standards and job requirements to provide detailed scoring and actionable feedback."
              },
              {
                question: "Is my resume data secure and private?",
                answer: "Absolutely! We use enterprise-grade encryption to protect your data. Your resume is processed securely and never shared with third parties. We also comply with GDPR and other privacy regulations to ensure your information is safe."
              },
              {
                question: "How accurate is the resume scoring?",
                answer: "Our AI has been trained on thousands of successful resumes and job postings, achieving 95% accuracy in predicting resume effectiveness. The scoring is based on proven metrics used by HR professionals and ATS systems."
              },
              {
                question: "Can I use this for any type of job?",
                answer: "Yes! Our AI is designed to work across all industries and job levels, from entry-level positions to executive roles. It adapts its analysis based on the job description you provide to give you targeted feedback."
              },
              {
                question: "How long does the analysis take?",
                answer: "The complete analysis typically takes 30-60 seconds. This includes resume parsing, AI evaluation, assessment question generation, and comprehensive feedback compilation."
              },
              {
                question: "Do I need to create an account?",
                answer: "No account required! You can start analyzing your resume immediately. However, creating a free account allows you to save your results, track improvements over time, and access additional features."
              },
              {
                question: "What file formats are supported?",
                answer: "We support PDF, DOC, DOCX, and TXT files. For best results, we recommend using PDF format as it preserves formatting and is most compatible with ATS systems."
              },
              {
                question: "Can I improve my score and re-analyze?",
                answer: "Absolutely! We encourage you to make improvements based on our feedback and re-analyze your resume. You can track your progress and see how your score improves over time."
              }
            ].map((faq, index) => (
              <Card key={index} className="group bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden">
                <CardContent className="p-0">
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between relative overflow-hidden transition-all duration-300"
                    onClick={() => toggleFaq(index)}
                  >
                    {/* Hover Background Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10 flex items-center justify-between w-full">
                      <span className="font-semibold text-gray-900 pr-4 group-hover:text-blue-900 transition-colors duration-300">{faq.question}</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <ChevronDownIcon 
                          className={`h-5 w-5 text-gray-500 group-hover:text-blue-600 transition-all duration-300 ${
                            openFaq === index ? 'rotate-180' : ''
                          }`} 
                        />
                      </div>
                    </div>
                  </button>
                  
                  {/* Answer with Beautiful Animation */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-4 relative">
                      {/* Answer Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative z-10">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          </div>
                          <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
  </div>

  <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Ready to Transform Your Resume?
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
                Join thousands of job seekers who have enhanced their resumes and improved their job prospects with ResumeIQ. Start your free analysis today!
              </p>
            </div>

            <div className="flex justify-center">
              <Link to="/analyzer">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-12 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-lg">
                  Start Free Analysis
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 pt-8 text-blue-100">
              <div className="flex items-center space-x-2">
                <ShieldIcon className="h-5 w-5" />
                <span className="text-sm">100% Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <ClockIcon className="h-5 w-5" />
                <span className="text-sm">Instant Results</span>
              </div>
              <div className="flex items-center space-x-2">
                <AwardIcon className="h-5 w-5" />
                <span className="text-sm">No Registration</span>
              </div>
            </div>
          </div>
  </div>
</section>



      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16 max-w-7xl">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl mr-3">
                  <FileTextIcon className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold">ResumeIQ</span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-sm">
                The most advanced AI-powered resume analysis platform. Transform your job search with intelligent insights and personalized feedback.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                  <TwitterIcon className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                  <LinkedinIcon className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                  <InstagramIcon className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Product</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white transition-colors duration-200">
                      Features
                    </a>
                  </li>
                  <li>
                  <a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors duration-200">
                      How It Works
                    </a>
                  </li>
                  <li>
                  <a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-200">
                      Testimonials
                    </a>
                  </li>
                <li>
                  <a href="#faq" className="text-gray-400 hover:text-white transition-colors duration-200">
                    FAQ
                  </a>
                </li>
                <li>
                  <Link to="/analyzer" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Get Started
                  </Link>
                </li>
                </ul>
              </div>

            {/* Company Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                      About Us
                    </a>
                  </li>
                  <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                      Careers
                    </a>
                  </li>
                  <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

            {/* Support & Legal */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-white">Support</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                      Terms of Service
                    </a>
                  </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    GDPR
                  </a>
                </li>
                </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="max-w-md mx-auto text-center">
              <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-6">Get the latest tips and updates delivered to your inbox.</p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} ResumeIQ Analyzer. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <span>Made with ❤️ for job seekers</span>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>All systems operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
