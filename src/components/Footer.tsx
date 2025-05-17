import React from 'react';
import { Coffee, Mail, MessageCircle, Facebook, Twitter, Instagram } from 'lucide-react';
import Button from './ui/Button';
import { contactConfig } from '../config/contact';
import { brandConfig } from '../config/brand';

const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/${contactConfig.whatsapp.number}?text=${encodeURIComponent(contactConfig.whatsapp.message)}`;

  return (
    <footer id="contact" className="bg-stone-900 text-stone-300">
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-amber-500" />
              <span className="text-2xl font-bold text-white">{brandConfig.name}</span>
            </div>
            <p className="text-stone-400">
              Somos tostadores, conocemos el producto y sabemos cómo ayudarte a construir una marca auténtica que conecte y crezca.
            </p>
            <div className="flex space-x-4 pt-4">
              <a 
                href={`https://instagram.com/${brandConfig.social.instagram}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-stone-400 hover:text-amber-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={`https://facebook.com/${brandConfig.social.facebook}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-stone-400 hover:text-amber-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={`https://x.com/${brandConfig.social.twitter}`}
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-stone-400 hover:text-amber-500 transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {[
                { text: 'Inicio', id: 'home' },
                { text: 'Servicios', id: 'services' },
                { text: 'Sobre el Café', id: 'about-coffee' },
                { text: 'Testimonios', id: 'testimonials' },
                { text: 'FAQ', id: 'faq' }
              ].map((item) => (
                <li key={item.text}>
                  <a 
                    href={`#${item.id}`}
                    className="text-stone-400 hover:text-amber-500 transition-colors"
                  >
                    {item.text}
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
                href={`mailto:${brandConfig.contact.email}`}
                className="flex items-center space-x-3 text-stone-400 hover:text-amber-500 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{brandConfig.contact.email}</span>
              </a>
              
              <div className="pt-4">
                <Button 
                  href={whatsappUrl}
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
            &copy; {new Date().getFullYear()} {brandConfig.name}. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacidad" className="text-sm text-stone-500 hover:text-amber-500 transition-colors">
              Política de Privacidad
            </a>
            <a href="/terminos" className="text-sm text-stone-500 hover:text-amber-500 transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;