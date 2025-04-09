import { motion, useScroll, useTransform } from 'framer-motion';

export default function WavesBackground() {
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.1, 0.2, 0.1]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-dark">
      {/* Primeira onda */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y: y1, opacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent blur-3xl">
          <svg
            viewBox="0 0 1000 1000"
            className="absolute h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2"
            style={{ top: '50%', left: '50%' }}
          >
            <motion.path
              d="M 0 500 C 200 400 400 600 600 500 C 800 400 1000 600 1200 500 V 1000 H 0 Z"
              fill="currentColor"
              style={{ rotate }}
            />
          </svg>
        </div>
      </motion.div>

      {/* Segunda onda */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y: y2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-accent to-primary blur-3xl">
          <svg
            viewBox="0 0 1000 1000"
            className="absolute h-[200%] w-[200%] -translate-x-1/2 -translate-y-1/2"
            style={{ top: '50%', left: '50%' }}
          >
            <motion.path
              d="M 0 600 C 200 500 400 700 600 600 C 800 500 1000 700 1200 600 V 1000 H 0 Z"
              fill="currentColor"
              style={{ rotate }}
            />
          </svg>
        </div>
      </motion.div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      
      {/* Gradiente de escurecimento */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 to-dark" />
    </div>
  );
} 