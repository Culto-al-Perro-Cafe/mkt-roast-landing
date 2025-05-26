import React from 'react';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Antes, el café era nuestra parte más floja—muchos lo dejaban a la mitad. Pero desde que empezamos a trabajar con Culto Roasters, todo cambió. Ahora nuestros clientes piden otra taza, lo recomiendan y hasta preguntan por el origen. El café se volvió parte esencial de la experiencia en Gato Gordo. Ya no solo vienen a comer bien, vienen a disfrutar un café con historia y sabor real.",
      author: "Vicente Castro",
      role: "Dueño, Gato Gordo Comida Casera",
      stars: 5
    },
    {
      text: "La marca de Culto al Perro Café no nació por accidente. Fue un proceso de introspección, de entender qué nos hace únicos y cómo queríamos conectar con la gente. Gracias al equipo de branding, logramos plasmar en cada elemento —del logo al empaque— nuestra personalidad: cercana, divertida, pero con carácter. Hoy nuestra comunidad reconoce a Culto al Perro como algo más que una cafetería; es un espacio con identidad propia. Y todo comenzó cuando decidimos tomarnos en serio nuestra historia.",
      author: "Marco Madrid",
      role: "Co-Fundador, Culto al Perro Café",
      stars: 5
    },
    {
      text: "El café nos trajo a muchos clientes por primera vez, pero fue hasta que tuvimos una marca propia que todo cambió. El equipo entendió el corazón de nuestro restaurante: comida hecha con cariño, sin pretensiones, y lo convirtió en una identidad visual y narrativa que conecta con la gente. Desde el rebranding, no solo nos visitan más, también nos recuerdan. Ahora somos un lugar con alma y con nombre.",
      author: "Lucille Aguilar",
      role: "Fundadora y Dueña, Santo Alimento",
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