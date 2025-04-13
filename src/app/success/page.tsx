'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const WHATSAPP_LINK = 'https://wa.me/5521999880830';

export default function Success() {
  return (
    <main className="min-h-screen bg-dark flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-dark-light rounded-2xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          className="mb-6"
        >
          <FaCheckCircle className="text-6xl text-primary mx-auto" />
        </motion.div>

        <h1 className="text-3xl font-bold text-white mb-4">
          Pagamento Confirmado!
        </h1>
        
        <p className="text-gray-400 mb-8">
          Obrigado pela confiança! Em breve entraremos em contato para iniciar seu projeto.
        </p>

        <div className="space-y-4">
          <motion.a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full inline-flex items-center justify-center gap-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaWhatsapp className="text-xl" />
            Falar com o Renan
          </motion.a>

          <Link href="/" className="text-gray-400 hover:text-white inline-block">
            Voltar para a página inicial
          </Link>
        </div>
      </motion.div>
    </main>
  );
} 