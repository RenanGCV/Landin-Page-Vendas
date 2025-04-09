import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';

const testimonials = [
  {
    name: 'João Souza',
    role: 'CEO, TechCorp',
    feedback: 'O Renan transformou nossa presença online com um site incrível e funcional. A entrega foi rápida e o resultado superou nossas expectativas!',
    image: '/img/ton_telles-162-editar.jpg'
  },
  {
    name: 'Maria Silva',
    role: 'Diretora, Inovação Digital',
    feedback: 'Excelente profissional, sempre disponível para ajudar e ajustar conforme necessário. O site ficou exatamente como queríamos!',
    image: '/img/pexels-photo-774909.jpeg'
  },
  {
    name: 'Ana Pereira',
    role: 'Fundadora, CreativeLab',
    feedback: 'Nosso aplicativo ficou perfeito, superando todas as expectativas! O Renan entendeu perfeitamente nossa visão.',
    image: '/img/5591809ff56c527ff1897828d2fb3290.jpg'
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

const cardVariants = {
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

const quoteVariants = {
  hidden: { 
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
};

export default function Testimonials() {
  return (
    <section className="section-padding bg-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <motion.div
        className="absolute left-0 top-1/4 w-96 h-96 floating"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="w-full h-full bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl" />
      </motion.div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-400">
            Depoimentos de quem já transformou sua presença digital
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="card group relative"
            >
              <motion.div
                variants={quoteVariants}
                className="absolute -top-6 left-6 p-4 rounded-full bg-dark-light group-hover:scale-110 transition-transform duration-300"
              >
                <FaQuoteLeft className="text-primary text-2xl" />
              </motion.div>
              
              <div className="pt-8">
                <p className="text-lg text-gray-300 mb-6">
                  "{testimonial.feedback}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-primary to-secondary p-[2px]">
                    <div className="relative w-full h-full rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="rounded-full"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 