import { useState, useEffect } from "react";
import {
  Brain,
  Code2,
  CloudSun,
  ListTodo,
  StickyNote,
  ChevronRight,
  Menu,
  X,
  Sparkles,
  Zap,
  Shield,
  Users,
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Github,
} from "lucide-react";
import "./App.css";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setScrolled(window.scrollY > 20);
      }, 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-gray-950/90 backdrop-blur-lg shadow-lg shadow-violet-500/5 border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <button
              type="button"
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => scrollTo("hero")}
              aria-label="DevSofts home"
            >
              <Brain className="w-7 h-7 sm:w-8 sm:h-8 text-violet-400" />
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                DevSofts
              </span>
            </button>

            <div className="hidden md:flex items-center gap-8">
              {["About", "Products", "Services", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="px-5 py-2 bg-violet-600 hover:bg-violet-500 rounded-lg text-sm font-medium transition-colors"
              >
                Get Started
              </button>
            </div>

            <button
              className="md:hidden text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-white/5">
            <div className="px-4 py-4 space-y-3">
              {["About", "Products", "Services", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className="block w-full text-left text-gray-300 hover:text-white py-2 text-base"
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => scrollTo("contact")}
                className="w-full px-5 py-2.5 bg-violet-600 hover:bg-violet-500 rounded-lg text-sm font-medium transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      <main>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="/images/hero-bg.jpg"
            alt="Technology network visualization"
            className="w-full h-full object-cover opacity-20"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.onerror = null;
              img.src = "https://placehold.co/1920x1080/1a1a2e/7c3aed/png?text=DevSofts";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 via-gray-950/80 to-gray-950" />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-0">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-full text-violet-300 text-sm mb-6 sm:mb-8">
              <Sparkles className="w-4 h-4" />
              AI-Powered Software Development
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 sm:mb-8">
              Building the Future{" "}
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                with AI
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl leading-relaxed">
              DevSofts crafts intelligent software solutions powered by
              artificial intelligence. We transform complex problems into
              elegant, scalable applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("products")}
                className="group px-8 py-3.5 bg-violet-600 hover:bg-violet-500 rounded-xl text-base font-medium transition-all flex items-center justify-center gap-2"
              >
                Explore Our Products
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="px-8 py-3.5 border border-white/10 hover:border-white/20 hover:bg-white/5 rounded-xl text-base font-medium transition-all"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-violet-400 text-sm font-semibold tracking-wider uppercase mb-3">
                About DevSofts
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                We Build Software{" "}
                <span className="text-violet-400">Smarter</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                At DevSofts, we leverage the power of artificial intelligence to
                create software that doesn't just work — it thinks, adapts, and
                evolves. Our team combines deep technical expertise with
                cutting-edge AI to deliver solutions that push the boundaries of
                what's possible.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                From task management systems to weather intelligence platforms
                and productivity tools, every product we build is infused with AI
                to deliver exceptional user experiences.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "3+", label: "Products Shipped" },
                  { value: "AI", label: "First Approach" },
                  { value: "100%", label: "Open Source" },
                  { value: "24/7", label: "Support" },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 bg-white/5 rounded-xl border border-white/5">
                    <div className="text-2xl font-bold text-violet-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-cyan-600/20 rounded-2xl blur-xl" />
              <img
                src="/images/team.jpg"
                alt="Team collaborating on software development"
                className="relative rounded-2xl w-full object-cover aspect-square shadow-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://placehold.co/800x800/1a1a2e/7c3aed/png?text=Our+Team";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-violet-950/10 to-gray-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-violet-400 text-sm font-semibold tracking-wider uppercase mb-3">
              Our Products
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              AI-Powered Solutions
            </h2>
            <p className="text-gray-400 text-lg">
              Explore our suite of intelligent applications designed to boost
              productivity and simplify complex workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <ListTodo className="w-8 h-8" />,
                name: "Task Manager",
                desc: "A powerful task management API built with Node.js, Express, and MongoDB. Features secure JWT authentication, user management, and full CRUD operations for organizing tasks efficiently.",
                tech: ["Node.js", "Express", "MongoDB", "JWT"],
                color: "from-violet-500 to-purple-600",
                link: "https://github.com/daruvurisai/Task-Manager",
              },
              {
                icon: <CloudSun className="w-8 h-8" />,
                name: "Weather Platform",
                desc: "An intelligent weather web application that provides real-time weather data and forecasts. Built with Express and Handlebars, it delivers beautiful, responsive weather visualizations.",
                tech: ["Express", "Handlebars", "REST API", "Real-time Data"],
                color: "from-cyan-500 to-blue-600",
                link: "https://github.com/daruvurisai/weather-web-site",
              },
              {
                icon: <StickyNote className="w-8 h-8" />,
                name: "Notes App",
                desc: "A smart CLI-based notes application for quick note management. Create, read, list, and remove notes effortlessly from your terminal with an intuitive command interface.",
                tech: ["Node.js", "Yargs", "CLI", "JSON Storage"],
                color: "from-emerald-500 to-teal-600",
                link: "https://github.com/daruvurisai/Notes",
              },
            ].map((product) => (
              <a
                key={product.name}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/5 border border-white/5 rounded-2xl p-6 sm:p-8 hover:bg-white/10 hover:border-violet-500/30 transition-all duration-300 block"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  {product.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{product.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {product.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-violet-400 text-sm font-medium group-hover:gap-3 transition-all">
                  View on GitHub <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-violet-400 text-sm font-semibold tracking-wider uppercase mb-3">
              What We Do
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h2>
            <p className="text-gray-400 text-lg">
              We offer end-to-end software development services powered by
              artificial intelligence.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Brain className="w-6 h-6" />,
                title: "AI Development",
                desc: "Custom AI-powered applications that learn and adapt to your business needs.",
              },
              {
                icon: <Code2 className="w-6 h-6" />,
                title: "Full-Stack Development",
                desc: "End-to-end web and mobile application development with modern technologies.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "API & Integration",
                desc: "Robust, scalable APIs and seamless third-party service integrations.",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Cloud & Security",
                desc: "Secure cloud infrastructure with enterprise-grade protection for your data.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="group p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-violet-500/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center text-violet-400 mb-5 group-hover:bg-violet-500/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-20 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-violet-950/10 to-gray-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-violet-600/20 rounded-2xl blur-xl" />
              <img
                src="/images/code.jpg"
                alt="Software code on screen"
                className="relative rounded-2xl w-full object-cover aspect-video shadow-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://placehold.co/800x450/1a1a2e/7c3aed/png?text=Our+Code";
                }}
              />
            </div>
            <div>
              <p className="text-violet-400 text-sm font-semibold tracking-wider uppercase mb-3">
                Why DevSofts
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Built Different,{" "}
                <span className="text-cyan-400">Built Better</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: <Sparkles className="w-5 h-5" />,
                    title: "AI-First Architecture",
                    desc: "Every line of code we write is optimized with artificial intelligence, ensuring peak performance and intelligent behavior.",
                  },
                  {
                    icon: <Users className="w-5 h-5" />,
                    title: "Open Source Community",
                    desc: "We believe in transparency. Our projects are open source, fostering collaboration and trust with the developer community.",
                  },
                  {
                    icon: <Zap className="w-5 h-5" />,
                    title: "Rapid Delivery",
                    desc: "AI-accelerated development workflows mean faster time-to-market without compromising on quality or security.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-purple-700" />
            <div className="absolute inset-0 bg-[url('/images/ai-tech.jpg')] bg-cover bg-center opacity-10" />
            <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                Ready to Build with AI?
              </h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
                Let's create something extraordinary together. Partner with
                DevSofts and experience the future of software development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => scrollTo("contact")}
                  className="px-8 py-3.5 bg-white text-violet-700 hover:bg-gray-100 rounded-xl text-base font-semibold transition-colors"
                >
                  Start a Project
                </button>
                <a
                  href="https://github.com/daruvurisai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-white/30 hover:bg-white/10 rounded-xl text-base font-medium transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-violet-950/10 to-gray-950" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-violet-400 text-sm font-semibold tracking-wider uppercase mb-3">
                Get In Touch
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Let's Build{" "}
                <span className="text-violet-400">Together</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                Have a project in mind? We'd love to hear about it. Reach out
                and let's explore how AI can transform your ideas into reality.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: <Mail className="w-5 h-5" />,
                    label: "Email",
                    value: "hello@devsofts.com",
                  },
                  {
                    icon: <MapPin className="w-5 h-5" />,
                    label: "Location",
                    value: "Remote-First, Worldwide",
                  },
                  {
                    icon: <Phone className="w-5 h-5" />,
                    label: "Phone",
                    value: "+1 (555) 123-4567",
                  },
                ].map((contact) => (
                  <div key={contact.label} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400">
                      {contact.icon}
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">
                        {contact.label}
                      </div>
                      <div className="text-gray-300">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 border border-white/5 rounded-2xl p-6 sm:p-8">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you! We'll be in touch soon.");
                }}
                className="space-y-5"
              >
                <div>
                  <label htmlFor="contact-name" className="block text-sm text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3.5 bg-violet-600 hover:bg-violet-500 rounded-xl text-base font-medium transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-7 h-7 text-violet-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  DevSofts
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Building intelligent software solutions powered by AI. We
                transform ideas into exceptional digital experiences.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://github.com/daruvurisai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="GitHub profile"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                Products
              </h4>
              <ul className="space-y-2">
                {[
                  { name: "Task Manager", href: "https://github.com/daruvurisai/Task-Manager" },
                  { name: "Weather Platform", href: "https://github.com/daruvurisai/weather-web-site" },
                  { name: "Notes App", href: "https://github.com/daruvurisai/Notes" },
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                Services
              </h4>
              <ul className="space-y-2">
                {["AI Development", "Full-Stack Development", "API & Integration", "Cloud & Security"].map(
                  (service) => (
                    <li key={service}>
                      <button
                        onClick={() => scrollTo("services")}
                        className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                      >
                        {service}
                      </button>
                    </li>
                  )
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4">
                Company
              </h4>
              <ul className="space-y-2">
                {[
                  { name: "About", id: "about" },
                  { name: "Products", id: "products" },
                  { name: "Contact", id: "contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-sm text-gray-500 hover:text-gray-300 transition-colors"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-8 text-center">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} DevSofts. All rights reserved.
              Built with AI.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App
