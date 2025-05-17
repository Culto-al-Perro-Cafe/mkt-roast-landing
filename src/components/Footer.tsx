import React from 'react';
import { Coffee, Mail, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';
import Button from './ui/Button';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-stone-900 text-stone-300">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-bold text-white">Perro Café</span>
            </div>
            <p className="text-stone-400">
              Transformamos café excepcional en marcas inolvidables que conectan con los clientes y obtienen precios premium.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {['Inicio', 'Servicios', 'Sobre el Café', 'Testimonios', 'FAQ'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-stone-400 hover:text-amber-500 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Nuestros Servicios</h3>
            <ul className="space-y-2">
              {[
                'Estrategia de Marca', 
                'Identidad Visual', 
                'Diseño de Empaque', 
                'Materiales de Marketing', 
                'Presencia Digital'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#services"
                    className="text-stone-400 hover:text-amber-500 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contáctanos</h3>
            <div className="space-y-4">
              <a 
                href="mailto:hello@perrocafe.com" 
                className="flex items-center space-x-3 text-stone-400 hover:text-amber-500 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>hello@perrocafe.com</span>
              </a>
              
              <div className="pt-4">
                <Button 
                  href="https://wa.me/123456789?text=Me%20interesa%20el%20branding%20de%20café" 
                  color="primary"
                  className="w-full flex items-center justify-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Escríbenos por WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-stone-500">
            &copy; {new Date().getFullYear()} Perro Café. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-stone-500 hover:text-amber-500 transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-sm text-stone-500 hover:text-amber-500 transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer