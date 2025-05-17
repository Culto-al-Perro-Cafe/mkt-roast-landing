import React from 'react';
import { Coffee } from 'lucide-react';
import { contactConfig } from '../config/contact';

const PrivacyPolicy: React.FC = () => {
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
          <h1 className="text-4xl font-bold text-stone-800 mb-8">Política de Privacidad</h1>
          
          <div className="prose prose-stone max-w-none">
            <p className="text-lg text-stone-600 mb-8">
              Última actualización: {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">1. Información que Recopilamos</h2>
              <p className="text-stone-600 mb-4">
                Recopilamos información que usted nos proporciona directamente cuando:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>Se comunica con nosotros a través de WhatsApp o correo electrónico</li>
                <li>Solicita información sobre nuestros servicios</li>
                <li>Se suscribe a nuestro boletín informativo</li>
                <li>Participa en encuestas o promociones</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">2. Uso de la Información</h2>
              <p className="text-stone-600 mb-4">
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>Proporcionar y mantener nuestros servicios</li>
                <li>Responder a sus consultas y solicitudes</li>
                <li>Enviar información sobre nuestros servicios y actualizaciones</li>
                <li>Mejorar nuestros servicios y experiencia del usuario</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">3. Protección de Datos</h2>
              <p className="text-stone-600 mb-4">
                Implementamos medidas de seguridad técnicas y organizativas para proteger sus datos personales contra:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>Acceso no autorizado</li>
                <li>Alteración o destrucción</li>
                <li>Divulgación accidental</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">4. Sus Derechos</h2>
              <p className="text-stone-600 mb-4">
                Usted tiene derecho a:
              </p>
              <ul className="list-disc pl-6 text-stone-600 space-y-2">
                <li>Acceder a sus datos personales</li>
                <li>Rectificar información inexacta</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Solicitar la portabilidad de sus datos</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-stone-800 mb-4">5. Contacto</h2>
              <p className="text-stone-600">
                Si tiene preguntas sobre esta política de privacidad o sobre cómo manejamos sus datos personales, 
                puede contactarnos a través de:
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

export default PrivacyPolicy; 