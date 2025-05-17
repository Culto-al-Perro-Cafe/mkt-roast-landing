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
      question: "¿Qué incluye el servicio de crear mi propia marca de café?",
      answer: "Nosotros tostamos el café y lo empacamos con tu propia marca. Tú eliges el origen, el tipo de tostado, el empaque, y decides si traes tu propio diseño o si quieres que creemos uno contigo (con costo adicional). Al final, tienes un producto listo para vender."
    },
    {
      question: "¿Puedo usar mi propio diseño o branding?",
      answer: "Sí. Si ya tienes nombre, logo o empaque diseñado, trabajamos con eso. Solo necesitamos tus archivos. También podemos encargarnos del diseño y desarrollo de marca si lo prefieres, por un costo adicional."
    },
    {
      question: "¿Ustedes venden el café o tengo que llevar el mío?",
      answer: "Nosotros tostamos el café que seleccionamos directamente de fincas con las que ya trabajamos, porque creemos en lo que hacen y confiamos en su calidad. Principalmente usamos cafés de Chiapas y Veracruz. No trabajamos con café verde."
    },
    {
      question: "¿Cuál es la cantidad mínima para empezar?",
      answer: "Podemos arrancar desde 10 kg por batch, lo que te permite probar tu marca sin grandes compromisos. A partir de ahí, puedes escalar según lo que necesites."
    },
    {
      question: "¿Cuánto cuesta tener mi propia marca de café?",
      answer: "Depende del volumen, el empaque y si ya tienes diseño. Un paquete básico comienza desde $4,500 MXN, e incluye café tostado, empaque y tu marca. Si necesitas branding desde cero, cotizamos por separado."
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
            Todo lo que necesitas saber para lanzar tu propia marca de café (y cómo te ayudamos a lograrlo)
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