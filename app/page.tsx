"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  Globe,
  ChevronDown,
  Menu,
  X,
  Star,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "Tailwind CSS",
    "MongoDB",
    "PostgreSQL",
    "Git",
    "Docker",
    "AWS",
    "Express.js",
    "Firebase",
    "Redux",
    "GraphQL",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Material-UI",
  ]

  const projects = [
    {
      title: "Spotify Clone",
      description:
        "A full-stack music streaming application built with React and Node.js. Features include user authentication, playlist creation, music search, and real-time playback controls.",
      tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "CSS3"],
      image: "/images/spotify-clone.png",
      github: "https://github.com/adityas777/Spotify-Clone",
      live: "https://spotify-clone-adityas777.vercel.app",
    },
    {
      title: "Weather Forecast App",
      description:
        "A responsive weather application that provides real-time weather data and 5-day forecasts. Built with vanilla JavaScript and integrates with OpenWeatherMap API.",
      tech: ["JavaScript", "HTML5", "CSS3", "OpenWeather API", "Local Storage"],
      image: "/images/weather-app.png",
      github: "https://github.com/adityas777/Weather-App",
      live: "https://adityas777.github.io/Weather-App",
    },
    {
      title: "Task Management System",
      description:
        "A productivity application for managing daily tasks with drag-and-drop functionality, priority levels, and local storage persistence.",
      tech: ["React", "JavaScript", "CSS3", "Local Storage", "React DnD"],
      image: "/images/task-manager.png",
      github: "https://github.com/adityas777/Task-Manager",
      live: "https://adityas777.github.io/Task-Manager",
    },
    {
      title: "Personal Portfolio",
      description:
        "A modern, responsive portfolio website showcasing my projects and skills. Features 3D animations, smooth scrolling, and interactive elements.",
      tech: ["Next.js", "React", "Tailwind CSS", "Spline", "TypeScript"],
      image: "/images/portfolio.png",
      github: "https://github.com/adityas777/portfolio-website",
      live: "https://aditya-singh-dev.vercel.app",
    },
    {
      title: "Calculator App",
      description:
        "A scientific calculator web application with advanced mathematical functions, memory operations, and a clean, intuitive interface.",
      tech: ["JavaScript", "HTML5", "CSS3", "Math.js"],
      image: "/images/calculator.png",
      github: "https://github.com/adityas777/calculator",
      live: "https://adityas777.github.io/calculator",
    },
    {
      title: "To-Do List Application",
      description:
        "A feature-rich todo application with categories, due dates, priority levels, and data persistence using local storage.",
      tech: ["React", "JavaScript", "CSS3", "Local Storage"],
      image: "/images/todo-app.png",
      github: "https://github.com/adityas777/todo-list",
      live: "https://adityas777.github.io/todo-list",
    },
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-x-hidden">
      {/* Animated Stars Background */}
      <div className="fixed inset-0 z-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white glow-text">Aditya Singh</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <Link
                href="#home"
                className="text-white hover:text-purple-400 transition-all duration-300 hover:glow-text"
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-white hover:text-purple-400 transition-all duration-300 hover:glow-text"
              >
                About
              </Link>
              <Link
                href="#skills"
                className="text-white hover:text-purple-400 transition-all duration-300 hover:glow-text"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="text-white hover:text-purple-400 transition-all duration-300 hover:glow-text"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-white hover:text-purple-400 transition-all duration-300 hover:glow-text"
              >
                Contact
              </Link>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2 bg-black/50 backdrop-blur-md rounded-lg">
              <Link
                href="#home"
                className="block text-white hover:text-purple-400 transition-all duration-300 py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="block text-white hover:text-purple-400 transition-all duration-300 py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#skills"
                className="block text-white hover:text-purple-400 transition-all duration-300 py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="block text-white hover:text-purple-400 transition-all duration-300 py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="block text-white hover:text-purple-400 transition-all duration-300 py-2 px-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Museum Spline */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Spline Museum Scene - Fixed Integration */}
        <div className="absolute inset-0 w-full h-full">
          <iframe
            src="https://my.spline.design/themuseum-P8hpUTGZRDLpBIjrQdCjmTUw/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="w-full h-full"
            title="3D Museum Scene"
            loading="eager"
            allow="camera; microphone; xr-spatial-tracking; fullscreen"
            style={{ border: "none", background: "transparent" }}
          />
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 text-center px-4 bg-black/50 backdrop-blur-sm rounded-2xl p-8 mx-4 border border-purple-500/30">
          <div
            className="transform transition-transform duration-1000"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in glow-text-large">
              Aditya Singh
            </h1>
            <p className="text-xl md:text-2xl text-purple-300 mb-8 animate-fade-in-delay glow-text">
              Full Stack Web Developer
            </p>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
              Passionate Computer Science student crafting innovative web solutions and bringing digital ideas to life
              through modern technologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white galaxy-button">
                <Link href="#projects" className="flex items-center gap-2">
                  View My Work
                  <ExternalLink size={16} />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-400 text-purple-300 hover:bg-purple-600 hover:text-white galaxy-button"
              >
                <Link href="#contact" className="flex items-center gap-2">
                  Get In Touch
                  <Mail size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-purple-400 glow-icon" size={32} />
        </div>
      </section>

      {/* About Section with Particle Nebula */}
      <section id="about" className="py-20 px-4 relative">
        {/* Particle Nebula Background - Fixed Integration */}
        <div className="absolute inset-0 opacity-40">
          <iframe
            src="https://my.spline.design/particlenebula-DVXLglRttXue7VlJ2jslaLU8/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="w-full h-full"
            title="Particle Nebula"
            loading="lazy"
            allow="camera; microphone; xr-spatial-tracking"
            style={{ border: "none", background: "transparent" }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 hover:glow-text-large transition-all duration-300 cursor-default">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto glow-bar"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Computer Science student and aspiring full-stack web developer with a deep love for
                creating innovative digital solutions. Currently pursuing my degree while actively building real-world
                applications that solve meaningful problems.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in web development began with curiosity and has evolved into a comprehensive skill set
                spanning modern JavaScript frameworks, backend technologies, and database management. I specialize in
                React, Next.js, Node.js, and various cloud technologies.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                I believe in continuous learning and staying updated with the latest industry trends. My goal is to
                create seamless user experiences while writing clean, efficient, and maintainable code that makes a
                positive impact.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-purple-400 hover:glow-text transition-all duration-300">
                  <Code size={20} />
                  <span>Clean Code</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400 hover:glow-text transition-all duration-300">
                  <Palette size={20} />
                  <span>UI/UX Design</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400 hover:glow-text transition-all duration-300">
                  <Smartphone size={20} />
                  <span>Responsive Design</span>
                </div>
                <div className="flex items-center gap-2 text-purple-400 hover:glow-text transition-all duration-300">
                  <Globe size={20} />
                  <span>Web Performance</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                {/* Animated Glowing Circle */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full animate-pulse glow-circle"></div>

                {/* Main Profile Image with Animation */}
                <div className="relative z-10 m-4 rounded-full overflow-hidden border-4 border-purple-400/50 animate-float">
                  <Image
                    src="/images/aditya-profile.jpg"
                    alt="Aditya Singh"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Animated Elements */}
                <div className="absolute top-4 right-4 text-yellow-400 animate-pulse-slow">
                  <Star size={24} className="animate-spin-slow" />
                </div>
                <div className="absolute bottom-8 left-8 text-blue-400 animate-pulse-slow">
                  <Star size={16} className="animate-bounce-slow" />
                </div>
                <div className="absolute top-1/2 left-2 text-pink-400 animate-pulse-slow">
                  <Star size={12} className="animate-ping-slow" />
                </div>
                <div className="absolute top-8 left-1/2 text-cyan-400 animate-pulse-slow">
                  <Star size={14} className="animate-spin-reverse" />
                </div>
                <div className="absolute bottom-4 right-8 text-green-400 animate-pulse-slow">
                  <Star size={18} className="animate-float-reverse" />
                </div>

                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-orbit">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                    <div className="w-3 h-3 bg-purple-400 rounded-full glow-dot"></div>
                  </div>
                </div>
                <div className="absolute inset-0 animate-orbit-reverse">
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full glow-dot"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Project Promo Spline */}
      <section id="skills" className="py-20 px-4 relative">
        {/* Project Promo Click Zoom Background */}
        <div className="absolute inset-0 opacity-30">
          <iframe
            src="https://my.spline.design/projectpromoclickzoom-KoavZAXl2ZCpEf2aKnzXT9ti/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="w-full h-full"
            title="Project Promo Click Zoom"
            loading="lazy"
            allow="camera; microphone; xr-spatial-tracking"
            style={{ border: "none", background: "transparent" }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 hover:glow-text-large transition-all duration-300 cursor-default">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto glow-bar"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div key={skill} className="group" style={{ animationDelay: `${index * 0.1}s` }}>
                <Badge
                  variant="secondary"
                  className="w-full py-3 px-4 text-center bg-purple-900/30 text-white border-purple-500/50 hover:bg-purple-500/30 hover:scale-105 hover:glow-text transition-all duration-300 cursor-default galaxy-card"
                >
                  {skill}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section with Robot Cursor */}
      <section id="projects" className="py-20 px-4 relative">
        {/* Robot Follow Cursor Background - Fixed Integration */}
        <div className="absolute inset-0 opacity-30">
          <iframe
            src="https://my.spline.design/robotfollowcursorforlandingpage-K1dzNEhJ6skRNqf2NDGxO1aj/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="w-full h-full"
            title="Robot Follow Cursor"
            loading="lazy"
            allow="camera; microphone; xr-spatial-tracking"
            style={{ border: "none", background: "transparent" }}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 hover:glow-text-large transition-all duration-300 cursor-default">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto glow-bar"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="bg-black/40 border-purple-500/30 hover:bg-purple-900/20 transition-all duration-300 hover:scale-105 group galaxy-card backdrop-blur-sm"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={340}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-white mb-2 hover:glow-text transition-all duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 mb-4">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-purple-300 border-purple-400/50 hover:glow-text transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-purple-400 text-purple-300 hover:bg-purple-600 hover:text-white galaxy-button"
                    >
                      <Link href={project.github} className="flex items-center gap-2" target="_blank">
                        <Github size={16} />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700 galaxy-button">
                      <Link href={project.live} className="flex items-center gap-2" target="_blank">
                        <ExternalLink size={16} />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Project Promo Spline */}
      <section id="contact" className="py-20 px-4 relative">
        {/* Project Promo Click Zoom Background */}
        <div className="absolute inset-0 opacity-25">
          <iframe
            src="https://my.spline.design/projectpromoclickzoom-KoavZAXl2ZCpEf2aKnzXT9ti/"
            frameBorder="0"
            width="100%"
            height="100%"
            className="w-full h-full"
            title="Project Promo Click Zoom"
            loading="lazy"
            allow="camera; microphone; xr-spatial-tracking"
            style={{ border: "none", background: "transparent" }}
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 hover:glow-text-large transition-all duration-300 cursor-default">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-8 glow-bar"></div>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always excited about new opportunities and innovative projects. Let's connect and discuss how we can
            bring your ideas to life!
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white galaxy-button">
              <Link href="mailto:adityas23100@iiitnr.edu.in" className="flex items-center gap-2">
                <Mail size={20} />
                Email Me
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400 text-purple-300 hover:bg-purple-600 hover:text-white galaxy-button"
            >
              <Link
                href="https://www.linkedin.com/in/aditya-singh-204a27289/"
                className="flex items-center gap-2"
                target="_blank"
              >
                <Linkedin size={20} />
                LinkedIn
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-400 text-purple-300 hover:bg-purple-600 hover:text-white galaxy-button"
            >
              <Link href="https://github.com/adityas777" className="flex items-center gap-2" target="_blank">
                <Github size={20} />
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-purple-500/20 relative">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-gray-400 hover:glow-text transition-all duration-300">
            © {new Date().getFullYear()} Aditya Singh. All rights reserved.
          </p>
          <p className="text-purple-400 mt-2 hover:glow-text transition-all duration-300">
            Built with ❤️ and lots of ☕ | Powered by Next.js & Spline
          </p>
        </div>
      </footer>
    </div>
  )
}
