import React from 'react';
import { Coffee } from 'lucide-react';
import { contactConfig } from '../config/contact';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="bg-stone-900 text-white py-6">
        <div className="container mx-auto px-4 md:px-6">
          <a href="/" className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-amber-500" />
            <span className="text-xl font-bold">Perro Café</span>
          </a>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 md:px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-stone-800 mb-8">Términos de Servicio</h1>
          
          <div className="prose prose-stone max-w-none">
            <p className="text-lg text-stone-600 mb-8">
              Última actualización: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">1. Aceptación de los Términos</h2>
              <p className="text-stone-600">
                Al acceder y utilizar nuestros servicios, usted acepta estar sujeto a estos términos y condiciones. 
                Si no está de acuerdo con alguna parte de estos términos, no podrá acceder a nuestros servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">2. Descripción de los Servicios</h2>
              <p className="text-stone-600 mb-4">
                Perro Café ofrece servicios de branding y consultoría para productores de café, incluyendo:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>Estrategia de marca</li>
                <li>Identidad visual</li>
                <li>Diseño de empaque</li>
                <li>Materiales de marketing</li>
                <li>Consultoría en presencia digital</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">3. Obligaciones del Cliente</h2>
              <p className="text-stone-600 mb-4">
                Al utilizar nuestros servicios, usted acepta:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>Proporcionar información precisa y completa</li>
                <li>Mantener la confidencialidad de su cuenta</li>
                <li>No utilizar nuestros servicios para fines ilegales</li>
                <li>Respetar los derechos de propiedad intelectual</li>
                <li>Cumplir con los plazos y requisitos establecidos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">4. Propiedad Intelectual</h2>
              <p className="text-stone-600 mb-4">
                Todos los derechos de propiedad intelectual relacionados con nuestros servicios son propiedad de Perro Café. 
                El cliente obtiene una licencia limitada para utilizar los materiales creados específicamente para su proyecto.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">5. Limitación de Responsabilidad</h2>
              <p className="text-stone-600">
                Perro Café no será responsable por daños indirectos, incidentales o consecuentes que resulten del uso o 
                la imposibilidad de usar nuestros servicios.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">6. Modificaciones</h2>
              <p className="text-stone-600">
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Las modificaciones entrarán 
                en vigor inmediatamente después de su publicación en nuestro sitio web.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">7. Contacto</h2>
              <p className="text-stone-600">
                Para cualquier consulta sobre estos términos, puede contactarnos a través de:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2 mt-4">
                <li>Correo electrónico: {contactConfig.email}</li>
                <li>WhatsApp: {contactConfig.whatsapp.number}</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-300 py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Perro Café. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService; 