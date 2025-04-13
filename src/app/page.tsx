'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp, FaRocket, FaArrowRight } from 'react-icons/fa';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import FinalCallToAction from '../components/FinalCallToAction';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import { PortfolioShowcase } from '../components/PortfolioShowcase';
import PricingPlans from '../components/PricingPlans';
import dynamic from 'next/dynamic';

// Importando o componente Lottie com SSR desabilitado
const LottieComponent = dynamic(() => import('../components/LottieAnimation'), {
  ssr: false,
  loading: () => (
    <div className="w-[400px] h-[400px] bg-dark-light/20 rounded-lg animate-pulse" />
  ),
});

const WHATSAPP_LINK = 'https://wa.me/5521999880830';

export default function Home() {
  return (
    <main className="min-h-screen bg-dark relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-light to-dark-lighter opacity-90" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
        
        <div className="container-custom relative z-10 flex items-center justify-between">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5,
                staggerChildren: 0.2
              }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                Seu próximo cliente já está online.
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Sites e aplicativos rápidos, responsivos e otimizados para vender.
              </p>
              
              <p className="text-lg text-gray-400 mb-12">
                Desenvolvido por Renan Gonçalves, especialista em soluções digitais sob medida para empresas cariocas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaWhatsapp className="text-xl" />
                  Quero meu site agora
                </motion.a>
                
                <motion.a
                  href="#benefits"
                  className="btn-secondary inline-flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Conheça nossos benefícios
                  <FaArrowRight />
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block w-1/3 relative"
          >
            <div className="w-[400px] h-[400px] relative mx-auto">
              <LottieComponent />
            </div>
          </motion.div>
        </div>

        {/* Floating Elements - Simplified */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-1/3">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
        </div>
      </section>

      {/* Benefits Section */}
      <Benefits />

      {/* Portfolio Section */}
      <PortfolioShowcase />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Pricing Plans Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <PricingPlans />
      </motion.div>

      {/* Final Call to Action Section */}
      <FinalCallToAction />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </main>
  );
} 