import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-stone-200 py-5 data-animate">
      <button 
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-medium text-stone-800">{question}</h3>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-amber-600" />
        ) : (
          <ChevronDown className="w-5 h-5 text-amber-600" />
        )}
      </button>
      <div 
        className={`mt-2 text-stone-600 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "¿Por qué debería invertir en branding para mi negocio de café?",
      answer: "El branding de café te ayuda a diferenciar tu producto en un mercado competitivo, establecer precios premium, construir lealtad de clientes y crear una experiencia memorable que va más allá del sabor. Transforma un producto básico en uno con resonancia emocional."
    },
    {
      question: "¿Qué hace especial al café mexicano?",
      answer: "El café mexicano es conocido por su perfil de sabor suave con notas achocolatadas, acidez ligera y cuerpo sedoso. A menudo se cultiva bajo sombra en altas altitudes, lo que contribuye a su sabor complejo. México es también uno de los mayores productores mundiales de café orgánico, con variaciones regionales distintivas."
    },
    {
      question: "¿Cuánto tiempo típicamente toma el proceso de branding?",
      answer: "Un paquete completo de branding de café típicamente toma de 6 a 8 semanas para completarse, incluyendo investigación, desarrollo de estrategia, creación de identidad visual, diseño de empaque y guías de marca. Podemos trabajar en tiempos acelerados cuando sea necesario."
    },
    {
      question: "¿Trabajan con productores de café de todos los tamaños?",
      answer: "Sí, trabajamos con negocios de café de todos los tamaños—desde pequeñas granjas familiares hasta grandes cooperativas. Adaptamos nuestros servicios de branding para que coincidan con tus necesidades específicas y presupuesto, manteniendo la calidad premium."
    },
    {
      question: "¿Cuánto cuesta típicamente el branding de café?",
      answer: "El branding de café es una inversión que va desde $5,000 para paquetes iniciales hasta $25,000+ para desarrollo de marca completo. Ofrecemos opciones flexibles y podemos crear un paquete personalizado basado en tus necesidades y presupuesto."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12 data-animate">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-stone-800">
            Preguntas Frecuentes
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-stone-600">
            Todo lo que necesitas saber sobre el branding de café y nuestros servicios
          </p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;