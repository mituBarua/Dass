import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Play, Sparkles, Zap, Palette, Video, Monitor } from 'lucide-react';

export default function HeroSection(){
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const rotatingWords = ['Creative', 'Design', 'Video', 'Branding', 'Digital'];
  const currentWord = rotatingWords[currentWordIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { number: '500+', label: 'Projects Delivered', icon: <Palette className="w-5 h-5" /> },
    { number: '24-48h', label: 'Average Delivery', icon: <Zap className="w-5 h-5" /> },
    { number: '100%', label: 'Client Satisfaction', icon: <Sparkles className="w-5 h-5" /> },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center, #0f0f23 0%, #1a1a2e 50%, #0f0f23 100%)',
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full"
            style={{
              background: `radial-gradient(circle, ${i % 2 === 0 ? '#8b5cf6' : '#ec4899'} 0%, transparent 70%)`,
              left: `${10 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
            }}
            animate={{
              x: [0, 30, -30, 0],
              y: [0, -20, 20, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Gradient mesh */}
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, #8b5cf6 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, #ec4899 0%, transparent 50%)',
              'radial-gradient(circle at 40% 80%, #10b981 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Mouse follower effect */}
      <motion.div
        className="absolute w-6 h-6 rounded-full bg-white/20 pointer-events-none z-50"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          {/* Pre-title */}
         {/* Pre-title */}
          <motion.div
            className="flex items-center justify-center space-x-4 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex items-center space-x-2">
              <Palette className="w-5 h-5 text-purple-400" />
              <Video className="w-5 h-5 text-pink-400" />
              <Monitor className="w-5 h-5 text-blue-400" />
            </div>
            <div className="h-px w-20 bg-gradient-to-r from-purple-500 to-pink-500" />
          </motion.div>

          {/* Main Title with rotating word */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Your {currentWord === 'Creative' ? (
              <span className="font-medium bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {currentWord}
              </span>
            ) : currentWord === 'Design' ? (
              <span className="font-medium bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {currentWord}
              </span>
            ) : currentWord === 'Video' ? (
              <span className="font-medium bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                {currentWord}
              </span>
            ) : currentWord === 'Branding' ? (
              <span className="font-medium bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                {currentWord}
              </span>
            ) : (
              <span className="font-medium bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {currentWord}
              </span>
            )} Studio
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-300">
              on Subscription
            </span>
          </motion.h1>

          {/* Enhanced Description */}
          <motion.p
            className="text-xl md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Unlimited design requests, lightning-fast delivery, and premium creative services
            <br />
            <span className="text-purple-400">that transform your vision into reality</span>
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.a
              href="#pricing"
              className="group relative flex items-center justify-center px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center">
                <Play className="w-5 h-5 mr-2" />
                Start Your Project
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500"
                initial={{ x: '100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="#portfolio"
              className="group flex items-center justify-center px-10 py-4 border-2 border-gray-600 bg-transparent text-gray-300 rounded-xl hover:border-purple-500 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View Our Work</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>
          </motion.div>

          {/* Enhanced Stats */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gray-800/50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-gradient-to-br group-hover:from-purple-500/20 group-hover:to-pink-500/20 transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    {stat.icon}
                  </div>
                </motion.div>
                <div className="text-3xl font-light text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 pt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            {['Top Rated', 'Fast Delivery', '24/7 Support'].map((item, index) => (
              <motion.div
                key={item}
                className="flex items-center space-x-2 text-gray-500"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span className="text-sm">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 10, 0],
          opacity: [0.3, 1, 0.3]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="flex flex-col items-center">
          <ChevronDown className="w-6 h-6 text-gray-500 mb-2" />
          <div className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
};