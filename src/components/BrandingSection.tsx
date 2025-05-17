import React from 'react';
import { TrendingUp, Eye, Award, Bookmark } from 'lucide-react';

interface BrandingPointProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BrandingPoint: React.FC<BrandingPointProps> = ({ icon, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-stone-100 hover:shadow-md transition-shadow duration-300 data-animate">
      <div className="bg-amber-50 w-14 h-14 flex items-center justify-center rounded-full mb-4 text-amber-700">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-stone-800">{title}</h3>
      <p className="text-stone-600">{description}</p>
    </div>
  );
};

const BrandingSection: React.FC = () => {
  const brandingPoints = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Mayor Valor en el Mercado",
      description: "Una marca sólida agrega valor percibido, permitiéndote establecer precios premium para tus productos de café."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Reconocimiento de Marca",
      description: "Un branding distintivo hace que tu café destaque en un mercado saturado, haciéndolo instantáneamente reconocible."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Percepción de Calidad",
      description: "El branding profesional transmite calidad y artesanía, construyendo confianza con los amantes del café."
    },
    {
      icon: <Bookmark className="w-6 h-6" />,
      title: "Lealtad del Cliente",
      description: "Las conexiones emocionales creadas a través del branding convierten a compradores ocasionales en defensores de por vida."
    }
  ];

  return (
    <section id="services" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12 data-animate">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-800">
            Por Qué el Branding de Café es Importante
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-lg text-stone-600">
            En el mercado actual, un café excepcional no es suficiente. 
            Tu marca cuenta tu historia y crea una impresión duradera.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {brandingPoints.map((point, index) => (
            <BrandingPoint 
              key={index}
              icon={point.icon}
              title={point.title}
              description={point.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandingSection;