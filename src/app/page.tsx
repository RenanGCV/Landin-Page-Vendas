'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp, FaRocket, FaArrowRight } from 'react-icons/fa';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import FinalCallToAction from '../components/FinalCallToAction';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import WavesBackground from '../components/WavesBackground';
import { PortfolioShowcase } from '../components/PortfolioShowcase';

const WHATSAPP_LINK = 'https://wa.me/5521999880830';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark relative">
      {/* Background Animado */}
      <WavesBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-dark-lighter opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Seu próximo cliente já está online.
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Sites e aplicativos rápidos, responsivos e otimizados para vender.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-400 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Desenvolvido por Renan Gonçalves, especialista em soluções digitais sob medida para empresas cariocas.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
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
                Quero meu site agora
              </motion.a>
              
              <motion.a
                href="#benefits"
                className="btn-secondary inline-flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Conheça nossos benefícios
                <FaArrowRight />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-1/3 floating"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
        </motion.div>
      </section>

      {/* Benefits Section */}
      <Benefits />

      {/* Portfolio Section */}
      <PortfolioShowcase />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Final Call to Action Section */}
      <FinalCallToAction />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </main>
  );
} 