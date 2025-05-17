import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "CaféBrand transformó el café de nuestra granja familiar en un producto premium que ahora se vende en tiendas especializadas a nivel nacional. Su estrategia de marca capturó perfectamente nuestra herencia y calidad.",
      author: "María Hernández",
      role: "Propietaria, Café Altura",
      stars: 5
    },
    {
      text: "El equipo entendió exactamente qué hace especial a nuestro café mexicano y creó una marca que cuenta nuestra historia auténtica. Las ventas han aumentado un 45% desde el rebranding.",
      author: "Carlos Rodríguez",
      role: "Co-fundador, Chiapas Beans",
      stars: 5
    },
    {
      text: "Estábamos luchando por diferenciar nuestro café en un mercado saturado. El paquete de branding que recibimos nos ayudó a destacar y conectar con clientes que aprecian la calidad.",
      author: "Luisa Méndez",
      role: "Directora de Marketing, Organic Oaxaca",
      stars: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-amber-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 data-animate">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-amber-100">
            Hemos ayudado a productores de café en todo México a transformar sus marcas y aumentar su valor en el mercado.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-amber-800 rounded-lg p-6 shadow-md relative data-animate"
            >
              {/* Quotation mark */}
              <div className="absolute -top-4 -left-2 text-6xl text-amber-700 opacity-50 font-serif">
                "
              </div>
              
              <div className="flex mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>
              
              <p className="mb-6 text-amber-100 relative z-10">
                "{testimonial.text}"
              </p>
              
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-amber-300 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;