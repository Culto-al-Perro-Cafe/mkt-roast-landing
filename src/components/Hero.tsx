import React from 'react';
import Button from './ui/Button';
import { MessageCircle } from 'lucide-react';
import { contactConfig } from '../config/contact';

const Hero: React.FC = () => {
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=${contactConfig.whatsapp.number}&text=${encodeURIComponent(contactConfig.whatsapp.message)}`;

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10"
          aria-hidden="true"
        ></div>
        <img
          src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Máquina tostadora de café"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 animate-fade-in">
        <div className="max-w-3xl mx-auto md:mx-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Convierte Tu Café en una <span className="text-amber-400">Marca Memorable</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-xl mx-auto md:mx-0">
            Ayudamos a productores de café a mostrar su calidad única e historia a través de una marca excepcional.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <Button 
              href={whatsappUrl}
              color="primary"
              className="group"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Contáctanos por WhatsApp
            </Button>
            <Button 
              href="#services" 
              color="secondary"
              className="group"
            >
              Explora Nuestros Servicios
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-white text-sm mb-2">Desplázate</span>
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;