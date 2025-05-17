import React from 'react';

const MexicanCoffeeSection: React.FC = () => {
  const regions = [
    {
      name: "Chiapas",
      description: "Conocido por su brillante acidez, cuerpo medio y notas distintivas de chocolate y nueces.",
      image: "https://images.pexels.com/photos/2531178/pexels-photo-2531178.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Veracruz",
      description: "Ofrece un sabor suave y dulce con notas de vainilla, caramelo y una acidez equilibrada.",
      image: "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      name: "Oaxaca",
      description: "Presenta perfiles aromáticos y florales con toques de bayas y cítricos.",
      image: "https://images.pexels.com/photos/2159146/pexels-photo-2159146.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  return (
    <section id="about-coffee" className="py-20 bg-stone-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 data-animate">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-stone-800">
              La Rica Herencia del <span className="text-amber-700">Café Mexicano</span>
            </h2>
            <div className="w-20 h-1 bg-amber-500 mb-6"></div>
            <p className="text-lg text-stone-700 mb-6">
              México es uno de los mayores productores mundiales de café orgánico, con una rica tradición que se remonta al siglo XVIII. Los diversos microclimas y regiones de cultivo en altura crean granos únicamente sabrosos con características regionales distintivas.
            </p>
            <p className="text-lg text-stone-700 mb-8">
              Desde las regiones montañosas de Chiapas hasta las colinas costeras de Veracruz, el café mexicano es conocido por su sabor suave, ligera acidez y sutiles notas de chocolate, lo que lo hace perfecto para oportunidades de marca premium.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Cultivado en Sombra", "Sostenible", "Altura", "Granjas Familiares"].map((tag, index) => (
                <span key={index} className="px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4 data-animate">
            <div className="col-span-1 row-span-2 md:row-span-1">
              <img 
                src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Granja de café mexicana"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="col-span-1 row-span-1">
              <img 
                src="https://images.pexels.com/photos/2873301/pexels-photo-2873301.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Granos de café mexicano"
                className="w-full h-full object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="col-span-1 md:col-span-2 row-span-1">
              <img 
                src="https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Paisaje de plantación de café mexicana"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 data-animate">
          <h3 className="text-2xl font-bold mb-10 text-center text-stone-800">
            Regiones Notables de Café en México
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-md">
                <img 
                  src={region.image}
                  alt={`Región cafetalera de ${region.name}`}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                  <div className="absolute bottom-0 left-0 p-6">
                    <h4 className="text-xl font-bold text-white mb-2">{region.name}</h4>
                    <p className="text-stone-200">{region.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MexicanCoffeeSection;