import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Implementación CRM Global",
    category: "Zoho CRM",
    description: "Automatización completa de ventas y marketing para una multinacional de logística, integrando 5 países en un solo sistema centralizado.",
    tags: ["Zoho CRM", "Automation", "Analytics"],
  },
  {
    id: 2,
    title: "Plataforma de Gestión Educativa",
    category: "Fullstack Development",
    description: "Sistema web a medida para la gestión de alumnos, calificaciones y cobranza, desarrollado con tecnologías modernas y escalables.",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    id: 3,
    title: "Zoho Creator ERP",
    category: "Zoho Creator",
    description: "ERP personalizado para manufactura, controlando inventarios, producción y despachos en tiempo real, optimizando recursos.",
    tags: ["Zoho Creator", "Deluge", "ERP"],
  },
  {
    id: 4,
    title: "Integración E-commerce",
    category: "Integraciones",
    description: "Conexión bidireccional entre Shopify y Zoho Inventory para sincronización de stock y pedidos en tiempo real.",
    tags: ["API", "Shopify", "Zoho Inventory"],
  },
];

const zohoApps = [
  { name: "Zoho CRM", icon: "/zoho/crm.svg" },
  { name: "Zoho Creator", icon: "/zoho/creator.svg" },
  { name: "Zoho Books", icon: "/zoho/books.svg" },
  { name: "Zoho Analytics", icon: "/zoho/analytics.svg" },
  { name: "Zoho Inventory", icon: "/zoho/inventory.svg" },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col font-sans bg-white text-slate-800">
      {/* Navigation */}
      <header className="fixed w-full z-50 bg-white shadow-sm transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/next-step/logo.svg"
              alt="Next Step Consulting"
              width={180}
              height={45}
              className="h-10 w-auto"
              priority
              style={{ width: 'auto', height: '40px' }}
            />
          </Link>
          <nav className="hidden md:flex gap-10 text-[15px] font-medium text-slate-600">
            <Link href="#servicios" className="hover:text-blue-600 transition-colors">Servicios</Link>
            <Link href="#proyectos" className="hover:text-blue-600 transition-colors">Proyectos</Link>
            <Link href="#contacto" className="hover:text-blue-600 transition-colors">Contacto</Link>
          </nav>
          <Link
            href="#contacto"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all bg-red-600 rounded-md hover:bg-red-700 shadow-sm focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
          >
            Hablemos
          </Link>
        </div>
      </header>
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 text-center lg:text-left">
                <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
                  Partner Certificado Zoho
                </span>
                <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.15]">
                  Simplifica tu Negocio con <br className="hidden lg:block" /> <span className="text-blue-600">Tecnología Inteligente</span>
                </h1>
                <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                  Somos especialistas en transformación digital. Implementamos soluciones <strong>Zoho</strong> y desarrollamos <strong>Software Fullstack</strong> para llevar tu empresa al siguiente nivel.
                </p>
                 <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link
                      href="#contacto"
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all bg-red-600 rounded-lg hover:bg-red-700 shadow-md hover:-translate-y-0.5"
                    >
                      Solicitar Consultoría
                    </Link>
                    <Link
                      href="#proyectos"
                      className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 transition-all bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 shadow-sm"
                    >
                      Ver Casos de Éxito
                    </Link>
                 </div>
              </div>
              
              {/* Hero Visual - Clean Grid */}
              <div className="flex-1 relative w-full max-w-md lg:max-w-full">
                   <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 relative">
                      <div className="grid grid-cols-2 gap-6">
                        <div className="flex flex-col items-center gap-3 p-6 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors">
                            <Image src="/zoho/crm.svg" alt="CRM" width={56} height={56} className="w-14 h-14" />
                            <span className="font-semibold text-slate-700">Ventas</span>
                        </div>
                        <div className="flex flex-col items-center gap-3 p-6 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors">
                            <Image src="/zoho/books.svg" alt="Books" width={56} height={56} className="w-14 h-14" />
                            <span className="font-semibold text-slate-700">Contabilidad</span>
                        </div>
                        <div className="flex flex-col items-center gap-3 p-6 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors">
                            <Image src="/zoho/creator.svg" alt="Creator" width={56} height={56} className="w-14 h-14" />
                            <span className="font-semibold text-slate-700">Apps a Medida</span>
                        </div>
                        <div className="flex flex-col items-center gap-3 p-6 bg-slate-50 rounded-xl hover:bg-blue-50 transition-colors">
                            <Image src="/zoho/analytics.svg" alt="Analytics" width={56} height={56} className="w-14 h-14" />
                            <span className="font-semibold text-slate-700">Inteligencia</span>
                        </div>
                      </div>
                   </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <div className="bg-blue-600 py-12">
            <div className="container mx-auto px-6">
                 <div className="flex flex-wrap justify-center md:justify-around gap-8 text-center text-white">
                     <div>
                         <div className="text-4xl font-bold mb-1">+50</div>
                         <div className="text-blue-100 text-sm opacity-90">Proyectos Exitosos</div>
                     </div>
                     <div>
                         <div className="text-4xl font-bold mb-1">100%</div>
                         <div className="text-blue-100 text-sm opacity-90">Clientes Satisfechos</div>
                     </div>
                     <div>
                         <div className="text-4xl font-bold mb-1">+10</div>
                         <div className="text-blue-100 text-sm opacity-90">Años de Experiencia</div>
                     </div>
                 </div>
            </div>
        </div>

        {/* Services Section */}
        <section id="servicios" className="py-24 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight mb-4">¿Cómo te podemos ayudar?</h2>
              <p className="text-slate-600 max-w-2xl mx-auto text-lg">Soluciones tecnológicas adaptadas a la madurez de tu negocio.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
              {/* Zoho Card */}
              <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300">
                <div className="mb-6 inline-block p-3 bg-yellow-50 rounded-lg">
                    <Image src="/zoho/zoho.svg" alt="Zoho" width={40} height={40} className="w-10 h-10"/> 
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Consultoría Zoho</h3>
                <p className="text-slate-600 leading-relaxed mb-8">
                    Implementación experta del ecosistema Zoho. Configuramos CRMs, ERPs y herramientas financieras para que operen en perfecta sincronía.
                </p>
                
                <h4 className="font-semibold text-slate-800 text-sm uppercase tracking-wide mb-4">Especialidades:</h4>
                <div className="flex flex-wrap gap-2">
                    {zohoApps.map((app) => (
                    <span key={app.name} className="px-3 py-1 bg-slate-100 rounded-full text-sm font-medium text-slate-600">
                        {app.name.replace('Zoho ', '')}
                    </span>
                    ))}
                </div>
              </div>

              {/* Fullstack Card */}
              <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300">
                 <div className="mb-6 inline-block p-3 bg-blue-50 rounded-lg text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                 </div>
                 <h3 className="text-2xl font-bold text-slate-900 mb-4">Desarrollo a Medida</h3>
                 <p className="text-slate-600 leading-relaxed mb-8">
                     Diseñamos y construimos software exclusivo para tu empresa. Desde portales de cliente hasta sistemas complejos de gestión interna.
                 </p>

                 <h4 className="font-semibold text-slate-800 text-sm uppercase tracking-wide mb-4">Stack Tecnológico:</h4>
                 <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-sm font-medium text-slate-600">Next.js</span>
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-sm font-medium text-slate-600">React</span>
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-sm font-medium text-slate-600">Node.js</span>
                    <span className="px-3 py-1 bg-slate-100 rounded-full text-sm font-medium text-slate-600">AWS/Vercel</span>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Preview */}
        <section id="proyectos" className="py-24 bg-white">
          <div className="container mx-auto px-6">
             <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                   <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Proyectos Recientes</h2>
                   <p className="text-slate-600 max-w-xl text-lg">
                    Resultados reales para empresas reales.
                   </p>
                </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {projects.map((project) => (
                <div key={project.id} className="group bg-slate-50 rounded-xl border border-slate-100 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                  <div className="h-40 bg-white border-b border-slate-100 flex items-center justify-center p-6 group-hover:bg-slate-50 transition-colors">
                     {/* Clean Icon based placeholder */}
                     <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-3xl">
                        {project.id === 1 ? '🚀' : project.id === 2 ? '🎓' : project.id === 3 ? '⚙️' : '🛒'}
                     </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2 block">{project.category}</span>
                        <h3 className="text-lg font-bold text-slate-900 mb-3">{project.title}</h3>
                        <p className="text-sm text-slate-600 leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Clean Style */}
        <section id="contacto" className="py-24 bg-slate-900 text-white">
          <div className="container mx-auto px-6 text-center">
             <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Hablemos de tu próximo paso</h2>
                <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                    Ya sea que necesites implementar Zoho CRM o desarrollar una plataforma web desde cero, estamos aquí para ayudarte.
                </p>
                <div className="flex justify-center gap-4">
                    <a href="mailto:contacto@nextstep.com" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-white rounded-lg hover:bg-slate-100 transition-all">
                        Enviar Correo
                    </a>
                </div>
             </div>
          </div>
        </section>
      </main>

      <footer className="bg-white pt-16 pb-8 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
             <div className="col-span-1 md:col-span-1">
                <Image
                    src="/next-step/logo.svg"
                    alt="Next Step Consulting"
                    width={180}
                    height={45}
                    className="h-9 w-auto mb-6"
                    style={{ width: 'auto', height: '36px' }}
                />
                <p className="text-sm text-slate-500 leading-relaxed">
                    Socios estratégicos para la digitalización de tu empresa. Monterrey, MX.
                </p>
             </div>
             <div>
                 <h4 className="font-bold text-slate-900 mb-4">Servicios</h4>
                 <ul className="space-y-3 text-sm text-slate-600">
                     <li><Link href="#" className="hover:text-blue-600 transition-colors">Zoho CRM</Link></li>
                     <li><Link href="#" className="hover:text-blue-600 transition-colors">Zoho Creator</Link></li>
                     <li><Link href="#" className="hover:text-blue-600 transition-colors">Desarrollo Web</Link></li>
                 </ul>
             </div>
             <div>
                 <h4 className="font-bold text-slate-900 mb-4">Compañía</h4>
                 <ul className="space-y-3 text-sm text-slate-600">
                     <li><Link href="#" className="hover:text-blue-600 transition-colors">Sobre Nosotros</Link></li>
                     <li><Link href="#" className="hover:text-blue-600 transition-colors">Contacto</Link></li>
                 </ul>
             </div>
             <div>
                 <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
                 <ul className="space-y-3 text-sm text-slate-600">
                     <li><Link href="#" className="hover:text-blue-600 transition-colors">Privacidad</Link></li>
                     <li><Link href="#" className="hover:text-blue-600 transition-colors">Términos</Link></li>
                 </ul>
             </div>
          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
             <div>
                &copy; {new Date().getFullYear()} Next Step Consulting.
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
