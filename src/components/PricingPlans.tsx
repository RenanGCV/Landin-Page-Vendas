import { motion } from 'framer-motion';
import { FaCheck, FaShoppingCart } from 'react-icons/fa';
import { useState } from 'react';
import { stripePromise } from '../lib/stripe';

const plans = [
  {
    id: 'essential',
    name: 'Pacote Essencial',
    price: '197,90',
    features: [
      'Site responsivo (até 5 páginas)',
      'Design personalizado',
      'Integração com mídias sociais',
      'SEO básico',
      'Prazo: 7 dias'
    ],
    cta: 'Contratar Essencial'
  },
  {
    id: 'premium',
    name: 'Pacote Premium',
    price: '257,90',
    features: [
      'Tudo do Essencial +',
      'Copywriting persuasivo',
      'Animações suaves',
      'Imagens e fontes personalizadas',
      'Logo incluso',
      'Suporte pós-entrega (15 dias)'
    ],
    isPopular: true,
    cta: 'Contratar Premium'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function PricingPlans() {
  const [isLoading, setIsLoading] = useState<string | null>(null);

  const handleCheckout = (url: string) => {
    window.location.href = url; // Redireciona para o link externo
  };

  const handleEssentialCheckout = () => {
    handleCheckout('https://buy.stripe.com/5kA8xp2gr6tb17a8wx'); // Link do plano essencial
  };

  const handlePremiumCheckout = () => {
    handleCheckout('https://buy.stripe.com/aEUfZRg7h3gZdTW144'); // Link do plano premium
  };

  return (
    <section className="section-padding bg-dark relative">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Planos Disponíveis
          </h2>
          <p className="text-xl text-gray-400">
            Escolha o plano ideal para o seu negócio
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              variants={cardVariants}
              className={`card group relative overflow-hidden flex flex-col justify-between ${
                plan.isPopular ? 'border-primary/30' : 'border-white/5'
              }`}
            >
              {plan.isPopular && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-6 right-6"
                >
                  <span className="bg-primary/20 text-primary px-4 py-1 rounded-full text-sm font-medium">
                    Mais Popular
                  </span>
                </motion.div>
              )}

              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-gray-400">R$</span>
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                  </div>
                </div>

                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-4 mb-8"
                >
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      variants={featureVariants}
                      custom={idx}
                      className="flex items-start gap-3"
                    >
                      <FaCheck className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <motion.button
                onClick={plan.id === 'premium' ? handlePremiumCheckout : handleEssentialCheckout}
                className={`w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-lg font-medium transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-primary hover:bg-primary-dark text-white'
                    : 'bg-dark-light hover:bg-dark text-white'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FaShoppingCart className="text-xl" />
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 