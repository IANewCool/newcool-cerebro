'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface GlobalMetrics {
  totalPioneers: number
  evolutionIndex: number
  collectiveProgress: number
  neuralConnections: number
  consciousnessLevel: string
  nextEvolutionThreshold: number
  userContribution: number
}

export function CollectiveResonance() {
  const [metrics, setMetrics] = useState<GlobalMetrics>({
    totalPioneers: 0,
    evolutionIndex: 0,
    collectiveProgress: 0,
    neuralConnections: 0,
    consciousnessLevel: 'Despertar Inicial',
    nextEvolutionThreshold: 1000,
    userContribution: 0
  })

  const [pulseActive, setPulseActive] = useState(false)

  // Simular métricas globales en tiempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        totalPioneers: Math.floor(2847 + Math.random() * 10),
        evolutionIndex: Math.floor(456 + Math.random() * 20),
        collectiveProgress: Math.min(100, 67 + Math.random() * 5),
        neuralConnections: Math.floor(156789 + Math.random() * 1000),
        userContribution: Math.min(100, 23 + Math.random() * 3)
      }))
      
      // Activar pulso de resonancia ocasionalmente
      if (Math.random() > 0.7) {
        setPulseActive(true)
        setTimeout(() => setPulseActive(false), 2000)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const getConsciousnessLevel = (progress: number) => {
    if (progress >= 90) return { level: 'Transcendencia Colectiva', color: 'from-purple-400 to-pink-400', emoji: '🌌' }
    if (progress >= 75) return { level: 'Revolución Mental', color: 'from-blue-400 to-cyan-400', emoji: '🧠' }
    if (progress >= 50) return { level: 'Despertar Acelerado', color: 'from-green-400 to-emerald-400', emoji: '⚡' }
    if (progress >= 25) return { level: 'Resonancia Emergente', color: 'from-yellow-400 to-orange-400', emoji: '🔥' }
    return { level: 'Despertar Inicial', color: 'from-gray-400 to-gray-600', emoji: '💫' }
  }

  const consciousness = getConsciousnessLevel(metrics.collectiveProgress)

  return (
    <div className="bg-gradient-to-br from-gray-800/40 to-cyan-900/20 rounded-3xl p-8 backdrop-blur-xl border border-cyan-500/20">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <motion.div
          animate={{ 
            scale: pulseActive ? [1, 1.3, 1] : 1,
            filter: pulseActive ? ['brightness(1)', 'brightness(1.5)', 'brightness(1)'] : 'brightness(1)'
          }}
          transition={{ duration: 1 }}
          className="text-4xl"
        >
          🌍
        </motion.div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">
            Resonancia Colectiva
          </h3>
          <p className="text-gray-400">
            Red Neural Global de Pioneros
          </p>
        </div>
      </div>

      {/* Nivel de Consciencia Global */}
      <div className="text-center mb-8">
        <motion.div
          animate={{ 
            boxShadow: pulseActive 
              ? ['0 0 0 0 rgba(6, 182, 212, 0.7)', '0 0 0 20px rgba(6, 182, 212, 0)', '0 0 0 0 rgba(6, 182, 212, 0)']
              : '0 0 20px rgba(6, 182, 212, 0.3)'
          }}
          transition={{ duration: 1 }}
          className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r ${consciousness.color} text-white font-bold text-lg shadow-2xl`}
        >
          <span className="text-2xl">{consciousness.emoji}</span>
          <span>{consciousness.level}</span>
        </motion.div>
        
        <div className="mt-4 text-sm text-gray-400">
          Progreso hacia la próxima evolución: {Math.floor(metrics.collectiveProgress)}%
        </div>
        
        {/* Barra de Progreso Global */}
        <div className="mt-3 h-3 bg-gray-700/50 rounded-full overflow-hidden max-w-md mx-auto">
          <motion.div
            animate={{ width: `${metrics.collectiveProgress}%` }}
            transition={{ duration: 2 }}
            className={`h-full bg-gradient-to-r ${consciousness.color} relative`}
          >
            <motion.div
              animate={{ 
                x: ['0%', '100%', '0%'],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity
              }}
              className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
            />
          </motion.div>
        </div>
      </div>

      {/* Métricas Globales */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-cyan-500/10 rounded-2xl p-6 border border-cyan-500/20">
          <div className="flex items-center gap-3 mb-3">
            <motion.span
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-2xl"
            >
              👥
            </motion.span>
            <h5 className="font-bold text-cyan-400">Pioneros Activos</h5>
          </div>
          <div className="text-3xl font-black text-white mb-1">
            {metrics.totalPioneers.toLocaleString()}
          </div>
          <div className="text-sm text-gray-400">
            +{Math.floor(Math.random() * 50 + 10)} en las últimas 24h
          </div>
        </div>

        <div className="bg-purple-500/10 rounded-2xl p-6 border border-purple-500/20">
          <div className="flex items-center gap-3 mb-3">
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="text-2xl"
            >
              🧠
            </motion.span>
            <h5 className="font-bold text-purple-400">Índice Evolutivo</h5>
          </div>
          <div className="text-3xl font-black text-white mb-1">
            {metrics.evolutionIndex}
          </div>
          <div className="text-sm text-gray-400">
            Evolución colectiva promedio
          </div>
        </div>
      </div>

      {/* Red Neuronal Global */}
      <div className="bg-gray-800/30 rounded-2xl p-6 mb-6">
        <div className="flex items-center gap-3 mb-4">
          <motion.span
            animate={{ 
              textShadow: pulseActive 
                ? ['0 0 5px #06b6d4', '0 0 20px #06b6d4', '0 0 5px #06b6d4']
                : '0 0 5px #06b6d4'
            }}
            className="text-2xl"
          >
            🕸️
          </motion.span>
          <h5 className="font-bold text-white">Red Neural Planetaria</h5>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="text-lg font-bold text-cyan-400 mb-1">
              {metrics.neuralConnections.toLocaleString()}
            </div>
            <div className="text-sm text-gray-400">
              Conexiones sinápticas globales
            </div>
          </div>
          <div>
            <div className="text-lg font-bold text-green-400 mb-1">
              {Math.floor(metrics.neuralConnections / metrics.totalPioneers)} avg
            </div>
            <div className="text-sm text-gray-400">
              Conexiones por pionero
            </div>
          </div>
        </div>

        {/* Visualización de conexiones */}
        <div className="mt-4 h-20 relative bg-gray-900/50 rounded-lg overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full"
              animate={{
                x: [Math.random() * 400, Math.random() * 400],
                y: [Math.random() * 60, Math.random() * 60],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Tu Contribución */}
      <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl p-6 border border-emerald-500/20">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.span
              animate={{ 
                rotate: pulseActive ? [0, 360] : 0,
                scale: pulseActive ? [1, 1.2, 1] : 1
              }}
              className="text-2xl"
            >
              ⭐
            </motion.span>
            <h5 className="font-bold text-emerald-400">Tu Impacto Global</h5>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-white">
              {Math.floor(metrics.userContribution)}%
            </div>
            <div className="text-xs text-gray-400">Contribución</div>
          </div>
        </div>
        
        <div className="space-y-3 text-sm text-gray-300">
          <div className="flex justify-between">
            <span>Evolución personal:</span>
            <span className="text-cyan-400 font-medium">+{Math.floor(Math.random() * 10 + 5)} puntos</span>
          </div>
          <div className="flex justify-between">
            <span>Inspiración generada:</span>
            <span className="text-green-400 font-medium">{Math.floor(Math.random() * 50 + 20)} pioneros</span>
          </div>
          <div className="flex justify-between">
            <span>Resonancia creada:</span>
            <span className="text-purple-400 font-medium">Nivel {Math.floor(Math.random() * 5 + 3)}</span>
          </div>
        </div>

        <div className="mt-4 p-3 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
          <div className="text-sm text-emerald-300 font-medium mb-1">
            🌟 Mensaje de la Red Neural Global:
          </div>
          <div className="text-xs text-gray-300 leading-relaxed">
            &ldquo;Tu evolución está creando ondas de transformación que inspiran a otros pioneros.
            Cada paso que das hacia la transcendencia fortalece la consciencia colectiva planetaria.&rdquo;
          </div>
        </div>
      </div>

      {/* Pulso de Resonancia */}
      {pulseActive && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 flex items-center justify-center pointer-events-none z-50"
        >
          <motion.div
            animate={{ 
              scale: [1, 2, 1],
              opacity: [0.8, 0.2, 0.8]
            }}
            transition={{ duration: 2 }}
            className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 blur-xl"
          />
          <div className="absolute text-white text-center">
            <div className="text-2xl mb-2">🌊</div>
            <div className="text-sm font-bold">Onda de Resonancia</div>
            <div className="text-xs opacity-80">Consciencia Sincronizada</div>
          </div>
        </motion.div>
      )}
    </div>
  )
}