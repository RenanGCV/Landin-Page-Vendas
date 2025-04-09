import { motion } from 'framer-motion';
import { FaRocket, FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_LINK = 'https://wa.me/5521999880830';

export default function FinalCallToAction() {
  return (
    <section className="section-padding bg-dark-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <motion.div
        className="absolute right-0 top-0 w-1/2 h-1/2 floating"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Seu cliente já está navegando…
            <br />
            Esteja pronto para recebê-lo.
          </h2>
          
          <p className="text-xl text-gray-400 mb-12">
            Não perca mais oportunidades. Transforme sua presença digital hoje mesmo.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="text-xl" />
              Falar com o Renan e Começar Agora
            </motion.a>

            <motion.a
              href="#benefits"
              className="btn-secondary inline-flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaRocket className="text-xl" />
              Ver Todos os Benefícios
            </motion.a>
          </motion.div>

          <motion.p
            className="mt-8 text-gray-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            ⚡ Apenas 3 vagas disponíveis esta semana
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
} 