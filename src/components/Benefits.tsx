import { FaRocket, FaMobileAlt, FaHeadset, FaCogs } from 'react-icons/fa';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: <FaRocket className="text-primary text-4xl" />,
    title: 'Entrega rápida e com qualidade',
    description: 'Projetos entregues no prazo com a máxima qualidade.'
  },
  {
    icon: <FaMobileAlt className="text-secondary text-4xl" />,
    title: 'Visual moderno e responsivo',
    description: 'Designs que se adaptam a qualquer dispositivo.'
  },
  {
    icon: <FaHeadset className="text-accent text-4xl" />,
    title: 'Suporte direto com o desenvolvedor',
    description: 'Contato direto para suporte e ajustes.'
  },
  {
    icon: <FaCogs className="text-primary text-4xl" />,
    title: 'Integrações com WhatsApp, redes sociais, Google, etc.',
    description: 'Conecte seu site com as principais plataformas.'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  }
};

export default function Benefits() {
  return (
    <section id="benefits" className="section-padding bg-dark-light relative">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Benefícios
          </h2>
          <p className="text-xl text-gray-400">
            Soluções completas para sua presença digital
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-xl bg-dark transition-transform duration-300">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 