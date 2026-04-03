import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ExternalLink, Mail, Building2, Code2, Palette, Zap, Users, Shield, Layers, ChevronDown } from 'lucide-react';
import { themeTokens } from './theme-tokens';

const baseUrl = import.meta.env.BASE_URL;

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const productsDropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (!productsDropdownOpen) return;
      if (productsDropdownRef.current?.contains(event.target as Node)) return;
      setProductsDropdownOpen(false);
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setProductsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [productsDropdownOpen]);

  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://shoverhub.com/#organization",
          "name": "ShoverHub",
          "description": "Modern digital product studio building apps, websites, and content experiences",
          "url": "https://shoverhub.com",
          "logo": "https://shoverhub.com/assets/logo.png",
          "sameAs": [
            "https://hostelmanager.shoverhub.com",
            "https://vcard.shoverhub.com",
            "https://blog.shoverhub.com"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "email": "contact@shoverhub.com",
            "contactType": "customer service"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://shoverhub.com/#website",
          "url": "https://shoverhub.com",
          "name": "ShoverHub",
          "publisher": {
            "@id": "https://shoverhub.com/#organization"
          }
        },
        {
          "@type": "WebPage",
          "@id": "https://shoverhub.com/#webpage",
          "url": "https://shoverhub.com",
          "name": "ShoverHub - Digital Product Studio Building Apps, Websites & Content",
          "isPartOf": {
            "@id": "https://shoverhub.com/#website"
          },
          "about": {
            "@id": "https://shoverhub.com/#organization"
          },
          "description": "ShoverHub is a modern digital product studio that builds innovative mobile applications, websites, and digital tools."
        },
        {
          "@type": "FAQPage",
          "@id": "https://shoverhub.com/#faq",
          "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const Logo = () => (
    <div
      className="w-8 h-8 p-[2px] transition-opacity hover:opacity-80"
      style={{
        borderRadius: '999px',
        backgroundColor: themeTokens.colors.primary,
      }}
    >
      <div
        className="w-full h-full overflow-hidden"
        style={{
          borderRadius: '999px',
          backgroundColor: themeTokens.colors.bg,
        }}
      >
        <img src={`${baseUrl}assets/logo.png`} alt="ShoverHub logo" className="w-full h-full object-cover" />
      </div>
    </div>
  );

  const products = [
    {
      name: 'Hostel Manager',
      url: 'https://hostelmanager.shoverhub.com',
      description: 'Complete hostel and PG management solution for property owners',
      category: 'SaaS Application',
      features: ['Property Management', 'Tenant Tracking', 'Room Allocation', 'Staff Management']
    },
    {
      name: 'VCard',
      url: 'https://vcard.shoverhub.com',
      description: 'Create beautiful digital invitations and business cards',
      category: 'Digital Tools',
      features: ['Event Invitations', 'Easy Customization', 'Instant Download', 'Mobile Optimized']
    },
    {
      name: 'Blog',
      url: 'https://blog.shoverhub.com',
      description: 'Editorial collection of stories, insights, and perspectives',
      category: 'Content Platform',
      features: ['Thoughtful Stories', 'Industry Insights', 'Product Updates', 'Digital Culture']
    },
    {
      name: 'Future Products',
      url: '#contact',
      description: 'More innovative tools and experiences coming soon',
      category: 'Coming Soon',
      features: ['Mobile Apps', 'Web Tools', 'Digital Services', 'Content Experiences']
    }
  ];

  const services = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: 'App Development',
      description: 'Native and cross-platform mobile applications built with modern frameworks and best practices.'
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: 'Website Development',
      description: 'Fast, responsive, and SEO-friendly websites using cutting-edge web technologies.'
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: 'Product Design',
      description: 'User-centered design that balances aesthetics with functionality and usability.'
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: 'Branding & Content',
      description: 'Cohesive brand systems and engaging content that resonates with your audience.'
    }
  ];

  const faqs = [
    {
      question: 'What is ShoverHub?',
      answer: 'ShoverHub is a modern digital product studio that builds apps, websites, digital tools, and content experiences. The name means "push beyond limits" – representing our commitment to innovation and excellence.'
    },
    {
      question: 'What does ShoverHub build?',
      answer: 'We build a range of digital products including mobile applications, web platforms, SaaS tools, and content experiences. Our portfolio includes Hostel Manager (property management app), VCard (digital invitations), and editorial content on our blog.'
    },
    {
      question: 'Is ShoverHub a software company or digital studio?',
      answer: 'ShoverHub operates as both. We develop our own product line while also creating custom solutions for clients. This dual approach gives us deep product expertise combined with diverse development experience.'
    },
    {
      question: 'What is Hostel Manager?',
      answer: 'Hostel Manager is a comprehensive property management application designed for hostel and PG owners. It handles property management, tenant tracking, room allocation, staff management, subscriptions, and detailed analytics.'
    },
    {
      question: 'What is VCard?',
      answer: 'VCard is a digital platform for creating beautiful event invitations and business cards. It offers easy customization, instant downloads, and mobile-optimized designs for any occasion.'
    },
    {
      question: 'Can I hire ShoverHub for app or website development?',
      answer: 'Yes. We work with select clients on custom app and web development projects. Contact us at contact@shoverhub.com to discuss your project requirements.'
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b transition-all duration-300" style={{
        backgroundColor: themeTokens.colors.bg,
        borderColor: themeTokens.colors.border,
        boxShadow: themeTokens.shadows.sm
      }}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Logo />
              <span className="text-xl font-bold" style={{ fontFamily: themeTokens.fonts.display }}>ShoverHub</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="transition-colors hover:opacity-70" style={{ color: themeTokens.colors.text }}>About</a>
              <div className="relative" ref={productsDropdownRef}>
                <button
                  onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                  className="flex items-center space-x-1 transition-colors hover:opacity-70"
                  style={{ color: themeTokens.colors.text }}
                >
                  <span>Products</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {productsDropdownOpen && (
                  <div className="absolute top-full mt-2 w-64 rounded-lg p-2" style={{
                    backgroundColor: themeTokens.colors.surface,
                    border: `1px solid ${themeTokens.colors.border}`,
                    boxShadow: themeTokens.shadows.lg
                  }}>
                    {products.slice(0, 3).map((product) => (
                      <a
                        key={product.name}
                        href={product.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block px-4 py-3 rounded-md transition-colors hover:bg-surface-low"
                      >
                        <div className="font-medium">{product.name}</div>
                        <div className="text-sm" style={{ color: themeTokens.colors.textMuted }}>{product.category}</div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
              <a href="#services" className="transition-colors hover:opacity-70" style={{ color: themeTokens.colors.text }}>Services</a>
              <a href="#faq" className="transition-colors hover:opacity-70" style={{ color: themeTokens.colors.text }}>FAQ</a>
              <a href="#contact" className="transition-colors hover:opacity-70" style={{ color: themeTokens.colors.text }}>Contact</a>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="#contact"
                className="hidden md:inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg font-medium transition-all hover:shadow-lg"
                style={{
                  backgroundColor: themeTokens.colors.primary,
                  color: themeTokens.colors.bg
                }}
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t" style={{ borderColor: themeTokens.colors.border }}>
              <div className="flex flex-col space-y-4">
                <a href="#about" onClick={() => setMobileMenuOpen(false)} className="transition-colors hover:opacity-70">About</a>
                <a href="#products" onClick={() => setMobileMenuOpen(false)} className="transition-colors hover:opacity-70">Products</a>
                <a href="#services" onClick={() => setMobileMenuOpen(false)} className="transition-colors hover:opacity-70">Services</a>
                <a href="#faq" onClick={() => setMobileMenuOpen(false)} className="transition-colors hover:opacity-70">FAQ</a>
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="transition-colors hover:opacity-70">Contact</a>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-lg font-medium"
                  style={{ backgroundColor: themeTokens.colors.primary, color: themeTokens.colors.bg }}
                >
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main>
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-8 text-sm font-medium" style={{
                backgroundColor: themeTokens.colors.surface,
                color: themeTokens.colors.textMuted,
                border: `1px solid ${themeTokens.colors.border}`
              }}>
                <span>Building Apps. Creating Content.</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ fontFamily: themeTokens.fonts.display }}>
                Push Beyond Limits
              </h1>

              <p className="text-xl md:text-2xl mb-12 leading-relaxed" style={{ color: themeTokens.colors.textMuted }}>
                ShoverHub is a modern digital product studio building innovative mobile applications, websites, digital tools, and content experiences.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                <a
                  href="#products"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg text-lg"
                  style={{ backgroundColor: themeTokens.colors.primary, color: themeTokens.colors.bg }}
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg text-lg"
                  style={{
                    backgroundColor: themeTokens.colors.surface,
                    color: themeTokens.colors.text,
                    border: `2px solid ${themeTokens.colors.border}`
                  }}
                >
                  <span>Start a Project</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm" style={{ color: themeTokens.colors.textMuted }}>
                <a href="https://hostelmanager.shoverhub.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Hostel Manager</a>
                <span>•</span>
                <a href="https://vcard.shoverhub.com" target="_blank" rel="noopener noreferrer" className="hover:underline">VCard</a>
                <span>•</span>
                <a href="https://blog.shoverhub.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Blog</a>
              </div>

              <div className="mt-10 text-left max-w-3xl mx-auto">
                <h2 className="text-lg font-semibold mb-4" style={{ color: themeTokens.colors.text, fontFamily: themeTokens.fonts.display }}>
                  Explore Our Core Services
                </h2>
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <a href={`${baseUrl}app-development`} className="rounded-lg px-4 py-3 transition-colors hover:opacity-90" style={{ backgroundColor: themeTokens.colors.surface, border: `1px solid ${themeTokens.colors.border}`, color: themeTokens.colors.text }}>
                    App Development Services
                  </a>
                  <a href={`${baseUrl}website-development`} className="rounded-lg px-4 py-3 transition-colors hover:opacity-90" style={{ backgroundColor: themeTokens.colors.surface, border: `1px solid ${themeTokens.colors.border}`, color: themeTokens.colors.text }}>
                    Website Development Services
                  </a>
                  <a href={`${baseUrl}product-design`} className="rounded-lg px-4 py-3 transition-colors hover:opacity-90" style={{ backgroundColor: themeTokens.colors.surface, border: `1px solid ${themeTokens.colors.border}`, color: themeTokens.colors.text }}>
                    Product Design Services
                  </a>
                  <a href={`${baseUrl}hostel-management-software`} className="rounded-lg px-4 py-3 transition-colors hover:opacity-90" style={{ backgroundColor: themeTokens.colors.surface, border: `1px solid ${themeTokens.colors.border}`, color: themeTokens.colors.text }}>
                    Hostel Management Software
                  </a>
                  <a href={`${baseUrl}digital-invitation-platform`} className="rounded-lg px-4 py-3 transition-colors hover:opacity-90 sm:col-span-2" style={{ backgroundColor: themeTokens.colors.surface, border: `1px solid ${themeTokens.colors.border}`, color: themeTokens.colors.text }}>
                    Digital Invitation Platform
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 md:py-32" style={{ backgroundColor: themeTokens.colors.surface }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: themeTokens.fonts.display }}>
                  What ShoverHub Means
                </h2>
                <p className="text-lg mb-6 leading-relaxed" style={{ color: themeTokens.colors.textMuted }}>
                  The name "ShoverHub" embodies our mission: to <strong style={{ color: themeTokens.colors.text }}>push beyond limits</strong>. We believe in moving forward, challenging conventions, and creating digital products that matter.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: themeTokens.colors.textMuted }}>
                  As a digital product studio, we combine technical expertise with creative vision to build applications, websites, and tools that solve real problems. Our work spans product development, content creation, and digital experiences.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-xl" style={{ backgroundColor: themeTokens.colors.bg, border: `1px solid ${themeTokens.colors.border}` }}>
                  <div className="text-3xl font-bold mb-2" style={{ color: themeTokens.colors.primary }}>4+</div>
                  <div className="text-sm" style={{ color: themeTokens.colors.textMuted }}>Active Products</div>
                </div>
                <div className="p-6 rounded-xl" style={{ backgroundColor: themeTokens.colors.bg, border: `1px solid ${themeTokens.colors.border}` }}>
                  <div className="text-3xl font-bold mb-2" style={{ color: themeTokens.colors.primary }}>100%</div>
                  <div className="text-sm" style={{ color: themeTokens.colors.textMuted }}>Client Focused</div>
                </div>
                <div className="p-6 rounded-xl" style={{ backgroundColor: themeTokens.colors.bg, border: `1px solid ${themeTokens.colors.border}` }}>
                  <div className="text-3xl font-bold mb-2" style={{ color: themeTokens.colors.primary }}>Modern</div>
                  <div className="text-sm" style={{ color: themeTokens.colors.textMuted }}>Tech Stack</div>
                </div>
                <div className="p-6 rounded-xl" style={{ backgroundColor: themeTokens.colors.bg, border: `1px solid ${themeTokens.colors.border}` }}>
                  <div className="text-3xl font-bold mb-2" style={{ color: themeTokens.colors.primary }}>Global</div>
                  <div className="text-sm" style={{ color: themeTokens.colors.textMuted }}>Reach</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: themeTokens.fonts.display }}>
                Our Product Ecosystem
              </h2>
              <p className="text-lg" style={{ color: themeTokens.colors.textMuted }}>
                A growing collection of digital products and platforms designed to solve real-world problems.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="group p-8 rounded-2xl transition-all hover:shadow-xl"
                  style={{
                    backgroundColor: themeTokens.colors.surface,
                    border: `1px solid ${themeTokens.colors.border}`,
                    boxShadow: themeTokens.shadows.md
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-sm font-medium mb-2" style={{ color: themeTokens.colors.primary }}>
                        {product.category}
                      </div>
                      <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: themeTokens.fonts.display }}>
                        {product.name}
                      </h3>
                    </div>
                    <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: themeTokens.colors.textMuted }} />
                  </div>

                  <p className="mb-6 leading-relaxed" style={{ color: themeTokens.colors.textMuted }}>
                    {product.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 rounded-full text-sm"
                        style={{ backgroundColor: themeTokens.colors.surfaceLow, color: themeTokens.colors.textMuted }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <a
                    href={product.url}
                    target={product.url.startsWith('http') ? '_blank' : '_self'}
                    rel={product.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center space-x-2 font-semibold transition-colors"
                    style={{ color: themeTokens.colors.primary }}
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20 md:py-32" style={{ backgroundColor: themeTokens.colors.surface }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: themeTokens.fonts.display }}>
                Services We Offer
              </h2>
              <p className="text-lg" style={{ color: themeTokens.colors.textMuted }}>
                Comprehensive digital solutions built with modern technology and design thinking.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="p-6 rounded-xl transition-all hover:shadow-lg"
                  style={{ backgroundColor: themeTokens.colors.bg, border: `1px solid ${themeTokens.colors.border}` }}
                >
                  <div className="inline-flex p-3 rounded-lg mb-4" style={{ backgroundColor: themeTokens.colors.surface }}>
                    <div style={{ color: themeTokens.colors.primary }}>{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ fontFamily: themeTokens.fonts.display }}>
                    {service.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: themeTokens.colors.textMuted }}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="text-sm font-semibold mb-4" style={{ color: themeTokens.colors.primary }}>
                  FEATURED PRODUCT
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: themeTokens.fonts.display }}>
                  Hostel Manager
                </h2>
                <p className="text-lg mb-8 leading-relaxed" style={{ color: themeTokens.colors.textMuted }}>
                  A comprehensive property management solution designed specifically for hostel and PG owners. Simplify operations, track tenants, manage rooms, and gain insights through detailed analytics.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="p-1 rounded" style={{ backgroundColor: themeTokens.colors.primary }}>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: themeTokens.colors.bg }}></div>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Complete Property Management</div>
                      <div className="text-sm" style={{ color: themeTokens.colors.textMuted }}>
                        Manage multiple properties, rooms, and amenities from one dashboard
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-1 rounded" style={{ backgroundColor: themeTokens.colors.primary }}>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: themeTokens.colors.bg }}></div>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Tenant & Staff Management</div>
                      <div className="text-sm" style={{ color: themeTokens.colors.textMuted }}>
                        Track tenant details, payments, and staff assignments efficiently
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="p-1 rounded" style={{ backgroundColor: themeTokens.colors.primary }}>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: themeTokens.colors.bg }}></div>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Reports & Analytics</div>
                      <div className="text-sm" style={{ color: themeTokens.colors.textMuted }}>
                        Data-driven insights to optimize occupancy and revenue
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="https://hostelmanager.shoverhub.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg"
                  style={{ backgroundColor: themeTokens.colors.primary, color: themeTokens.colors.bg }}
                >
                  <span>Visit Hostel Manager</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              <div className="rounded-2xl p-8 md:p-12" style={{ backgroundColor: themeTokens.colors.surface, border: `1px solid ${themeTokens.colors.border}` }}>
                <div className="aspect-square rounded-xl flex items-center justify-center" style={{ backgroundColor: themeTokens.colors.surfaceLow }}>
                  <Building2 className="w-24 h-24" style={{ color: themeTokens.colors.primary }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32" style={{ backgroundColor: themeTokens.colors.surface }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="rounded-2xl p-8 md:p-12" style={{ backgroundColor: themeTokens.colors.bg, border: `1px solid ${themeTokens.colors.border}` }}>
                  <div className="aspect-video rounded-xl flex items-center justify-center" style={{ backgroundColor: themeTokens.colors.surfaceLow }}>
                    <Palette className="w-24 h-24" style={{ color: themeTokens.colors.tertiary }} />
                  </div>
                </div>
              </div>

              <div className="order-1 md:order-2">
                <div className="text-sm font-semibold mb-4" style={{ color: themeTokens.colors.tertiary }}>
                  CONTENT & MEDIA
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: themeTokens.fonts.display }}>
                  Creating Meaningful Content
                </h2>
                <p className="text-lg mb-6 leading-relaxed" style={{ color: themeTokens.colors.textMuted }}>
                  Beyond building products, we create engaging content experiences. Our editorial blog shares thoughtful perspectives on technology, design, and digital culture.
                </p>
                <p className="text-lg mb-8 leading-relaxed" style={{ color: themeTokens.colors.textMuted }}>
                  We also produce entertainment content through channels like Mana Chittigadu, bringing stories and experiences to wider audiences.
                </p>
                <a
                  href="https://blog.shoverhub.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 font-semibold transition-colors"
                  style={{ color: themeTokens.colors.tertiary }}
                >
                  <span>Read Our Blog</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: themeTokens.fonts.display }}>
                Why Choose ShoverHub
              </h2>
              <p className="text-lg" style={{ color: themeTokens.colors.textMuted }}>
                We bring together product thinking, modern engineering, and user-centered design.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-8 rounded-xl" style={{ backgroundColor: themeTokens.colors.surface, border: `1px solid ${themeTokens.colors.border}` }}>
                <Zap className="w-10 h-10 mb-4" style={{ color: themeTokens.colors.primary }} />
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: themeTokens.fonts.display }}>
                  Product-First Thinking
                </h3>
                <p className="leading-relaxed" style={{ color: themeTokens.colors.textMuted }}>
                  We build products we believe in and understand the full lifecycle from concept to market.
                </p>
              </div>

              <div className="p-8 rounded-xl" style={{ backgroundColor: themeTokens.colors.surface, border: `1px solid ${themeTokens.colors.border}` }}>
                <Code2 className="w-10 h-10 mb-4" style={{ color: themeTokens.colors.primary }} />
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: themeTokens.fonts.display }}>
                  Modern Tech Stack
                </h3>
                <p className="leading-relaxed" style={{ color: themeTokens.colors.textMuted }}>
                  Built with cutting-edge frameworks, optimized for performance, scalability, and maintainability.
                </p>
              </div>

              <div className="p-8 rounded-xl" style={{ backgroundColor: themeTokens.colors.surface, border: `1px solid ${themeTokens.colors.border}` }}>
                <Users className="w-10 h-10 mb-4" style={{ color: themeTokens.colors.primary }} />
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: themeTokens.fonts.display }}>
                  User-Centered Design
                </h3>
                <p className="leading-relaxed" style={{ color: themeTokens.colors.textMuted }}>
                  Every interface is designed with real users in mind, balancing aesthetics with usability.
                </p>
              </div>

              <div className="p-8 rounded-xl" style={{ backgroundColor: themeTokens.colors.surface, border: `1px solid ${themeTokens.colors.border}` }}>
                <Shield className="w-10 h-10 mb-4" style={{ color: themeTokens.colors.primary }} />
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: themeTokens.fonts.display }}>
                  Security & Reliability
                </h3>
                <p className="leading-relaxed" style={{ color: themeTokens.colors.textMuted }}>
                  Built with security best practices and reliable infrastructure for peace of mind.
                </p>
              </div>

              <div className="p-8 rounded-xl" style={{ backgroundColor: themeTokens.colors.surface, border: `1px solid ${themeTokens.colors.border}` }}>
                <Layers className="w-10 h-10 mb-4" style={{ color: themeTokens.colors.primary }} />
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: themeTokens.fonts.display }}>
                  Scalable Architecture
                </h3>
                <p className="leading-relaxed" style={{ color: themeTokens.colors.textMuted }}>
                  Systems designed to grow with your needs, from MVP to enterprise scale.
                </p>
              </div>

              <div className="p-8 rounded-xl" style={{ backgroundColor: themeTokens.colors.surface, border: `1px solid ${themeTokens.colors.border}` }}>
                <Building2 className="w-10 h-10 mb-4" style={{ color: themeTokens.colors.primary }} />
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: themeTokens.fonts.display }}>
                  Long-Term Support
                </h3>
                <p className="leading-relaxed" style={{ color: themeTokens.colors.textMuted }}>
                  Ongoing maintenance, updates, and support to ensure your product stays competitive.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32" style={{ backgroundColor: themeTokens.colors.surface }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: themeTokens.fonts.display }}>
                About ShoverHub
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: themeTokens.colors.textMuted }}>
                ShoverHub is a digital product studio and brand ecosystem that specializes in building mobile applications, websites, digital tools, and content experiences. We serve businesses, property owners, event organizers, and individuals looking for modern digital solutions.
              </p>
            </div>

            <div className="space-y-8">
              <div className="p-6 rounded-xl" style={{ backgroundColor: themeTokens.colors.bg, border: `1px solid ${themeTokens.colors.border}` }}>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: themeTokens.fonts.display }}>
                  Our Products
                </h3>
                <p className="mb-4" style={{ color: themeTokens.colors.textMuted }}>
                  Our product ecosystem includes:
                </p>
                <ul className="space-y-2" style={{ color: themeTokens.colors.textMuted }}>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong style={{ color: themeTokens.colors.text }}>Hostel Manager</strong> - Property management application for hostels and PGs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong style={{ color: themeTokens.colors.text }}>VCard</strong> - Digital invitation and business card platform</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">•</span>
                    <span><strong style={{ color: themeTokens.colors.text }}>Blog</strong> - Editorial content on technology, design, and digital culture</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl" style={{ backgroundColor: themeTokens.colors.bg, border: `1px solid ${themeTokens.colors.border}` }}>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: themeTokens.fonts.display }}>
                  Who We Serve
                </h3>
                <p style={{ color: themeTokens.colors.textMuted }}>
                  We work with hostel and property owners, event organizers, businesses seeking custom applications, and individuals looking for digital tools and content. Our solutions are designed for both technical and non-technical users.
                </p>
              </div>

              <div className="p-6 rounded-xl" style={{ backgroundColor: themeTokens.colors.bg, border: `1px solid ${themeTokens.colors.border}` }}>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: themeTokens.fonts.display }}>
                  Our Approach
                </h3>
                <p style={{ color: themeTokens.colors.textMuted }}>
                  We combine modern development practices with thoughtful design to create products that are fast, reliable, and easy to use. Every project is built with SEO, performance, and long-term scalability in mind.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: themeTokens.fonts.display }}>
                Frequently Asked Questions
              </h2>
              <p className="text-lg" style={{ color: themeTokens.colors.textMuted }}>
                Everything you need to know about ShoverHub and our products.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group p-6 rounded-xl transition-all"
                  style={{ backgroundColor: themeTokens.colors.surface, border: `1px solid ${themeTokens.colors.border}` }}
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none">
                    <h3 className="text-lg font-semibold pr-8" style={{ fontFamily: themeTokens.fonts.display }}>
                      {faq.question}
                    </h3>
                    <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" style={{ color: themeTokens.colors.textMuted }} />
                  </summary>
                  <p className="mt-4 leading-relaxed" style={{ color: themeTokens.colors.textMuted }}>
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 md:py-32" style={{ backgroundColor: themeTokens.colors.surface }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: themeTokens.fonts.display }}>
                Let's Work Together
              </h2>
              <p className="text-lg" style={{ color: themeTokens.colors.textMuted }}>
                Have a project in mind or questions about our products? Get in touch.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 rounded-xl text-center" style={{ backgroundColor: themeTokens.colors.bg, border: `1px solid ${themeTokens.colors.border}` }}>
                <div className="inline-flex p-3 rounded-lg mb-4" style={{ backgroundColor: themeTokens.colors.surface }}>
                  <Mail className="w-6 h-6" style={{ color: themeTokens.colors.primary }} />
                </div>
                <h3 className="font-semibold mb-2">General Inquiries</h3>
                <a href="mailto:contact@shoverhub.com" className="text-sm hover:underline" style={{ color: themeTokens.colors.primary }}>
                  contact@shoverhub.com
                </a>
              </div>

              <div className="p-6 rounded-xl text-center" style={{ backgroundColor: themeTokens.colors.bg, border: `1px solid ${themeTokens.colors.border}` }}>
                <div className="inline-flex p-3 rounded-lg mb-4" style={{ backgroundColor: themeTokens.colors.surface }}>
                  <Code2 className="w-6 h-6" style={{ color: themeTokens.colors.primary }} />
                </div>
                <h3 className="font-semibold mb-2">Project Inquiries</h3>
                <a href="mailto:contact@shoverhub.com" className="text-sm hover:underline" style={{ color: themeTokens.colors.primary }}>
                  contact@shoverhub.com
                </a>
              </div>

              <div className="p-6 rounded-xl text-center" style={{ backgroundColor: themeTokens.colors.bg, border: `1px solid ${themeTokens.colors.border}` }}>
                <div className="inline-flex p-3 rounded-lg mb-4" style={{ backgroundColor: themeTokens.colors.surface }}>
                  <Building2 className="w-6 h-6" style={{ color: themeTokens.colors.primary }} />
                </div>
                <h3 className="font-semibold mb-2">Product Support</h3>
                <a href="mailto:contact@shoverhub.com" className="text-sm hover:underline" style={{ color: themeTokens.colors.primary }}>
                  contact@shoverhub.com
                </a>
              </div>
            </div>

            <form className="p-8 rounded-2xl space-y-6" style={{ backgroundColor: themeTokens.colors.bg, border: `1px solid ${themeTokens.colors.border}` }}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: themeTokens.colors.surface,
                      border: `1px solid ${themeTokens.colors.border}`,
                      color: themeTokens.colors.text
                    }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2"
                    style={{
                      backgroundColor: themeTokens.colors.surface,
                      border: `1px solid ${themeTokens.colors.border}`,
                      color: themeTokens.colors.text
                    }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2"
                  style={{
                    backgroundColor: themeTokens.colors.surface,
                    border: `1px solid ${themeTokens.colors.border}`,
                    color: themeTokens.colors.text
                  }}
                  placeholder="What's this about?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 resize-none"
                  style={{
                    backgroundColor: themeTokens.colors.surface,
                    border: `1px solid ${themeTokens.colors.border}`,
                    color: themeTokens.colors.text
                  }}
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-lg"
                style={{ backgroundColor: themeTokens.colors.primary, color: themeTokens.colors.bg }}
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t py-16" style={{ backgroundColor: themeTokens.colors.surface, borderColor: themeTokens.colors.border }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Logo />
                <span className="text-xl font-bold" style={{ fontFamily: themeTokens.fonts.display }}>ShoverHub</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: themeTokens.colors.textMuted }}>
                Building innovative digital products and content experiences. Push beyond limits.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: themeTokens.fonts.display }}>Products</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://hostelmanager.shoverhub.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-70" style={{ color: themeTokens.colors.textMuted }}>
                    Hostel Manager
                  </a>
                </li>
                <li>
                  <a href="https://vcard.shoverhub.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-70" style={{ color: themeTokens.colors.textMuted }}>
                    VCard
                  </a>
                </li>
                <li>
                  <a href="https://blog.shoverhub.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:opacity-70" style={{ color: themeTokens.colors.textMuted }}>
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: themeTokens.fonts.display }}>Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="transition-colors hover:opacity-70" style={{ color: themeTokens.colors.textMuted }}>
                    About
                  </a>
                </li>
                <li>
                  <a href="#services" className="transition-colors hover:opacity-70" style={{ color: themeTokens.colors.textMuted }}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#faq" className="transition-colors hover:opacity-70" style={{ color: themeTokens.colors.textMuted }}>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#contact" className="transition-colors hover:opacity-70" style={{ color: themeTokens.colors.textMuted }}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4" style={{ fontFamily: themeTokens.fonts.display }}>Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#privacy" className="transition-colors hover:opacity-70" style={{ color: themeTokens.colors.textMuted }}>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="transition-colors hover:opacity-70" style={{ color: themeTokens.colors.textMuted }}>
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#disclaimer" className="transition-colors hover:opacity-70" style={{ color: themeTokens.colors.textMuted }}>
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a href="#cookies" className="transition-colors hover:opacity-70" style={{ color: themeTokens.colors.textMuted }}>
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4" style={{ borderColor: themeTokens.colors.border }}>
            <p className="text-sm" style={{ color: themeTokens.colors.textMuted }}>
              © {new Date().getFullYear()} ShoverHub. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a href="mailto:contact@shoverhub.com" className="transition-colors hover:opacity-70" style={{ color: themeTokens.colors.textMuted }}>
                contact@shoverhub.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;





