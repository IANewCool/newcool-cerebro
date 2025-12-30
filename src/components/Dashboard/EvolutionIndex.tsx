'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface EvolutionIndexProps {
  learningProfile?: any
}

export function EvolutionIndex({ learningProfile }: EvolutionIndexProps) {
  // Calcular métricas de evolución
  const calculateMetrics = () => {
    const completedTracks = learningProfile?.learning_history?.completed_tracks?.length || 0
    const emotionScore = learningProfile?.learning_history?.last_emotion_score || 0.5
    const timeSpent = Object.values(learningProfile?.learning_history?.time_spent_per_concept || {})
      .reduce((total: number, time: any) => total + time, 0) || 0

    // IEM - Índice de Evolución Mental (0-1000)
    const processingSpeed = Math.min(100, (completedTracks * 15) + (emotionScore * 50))
    const mentalFlexibility = Math.min(100, emotionScore * 100)
    const criticalThinking = Math.min(100, (timeSpent / 60) * 10) // basado en tiempo invertido
    const creativity = Math.min(100, (completedTracks * 20) + (emotionScore * 30))

    const iem = Math.floor((processingSpeed + mentalFlexibility + criticalThinking + creativity) * 2.5)

    return {
      iem,
      processingSpeed: Math.floor(processingSpeed),
      mentalFlexibility: Math.floor(mentalFlexibility),
      criticalThinking: Math.floor(criticalThinking),
      creativity: Math.floor(creativity),
      evolutionStage: getEvolutionStage(iem)
    }
  }

  const getEvolutionStage = (iem: number) => {
    if (iem >= 800) return { 
      stage: 'Homo Evolutis', 
      description: 'Transcendencia Cognitiva Alcanzada',
      color: 'from-purple-500 via-pink-500 to-red-500',
      emoji: '🌌',
      nextMilestone: 'Maestría Universal'
    }
    if (iem >= 600) return { 
      stage: 'Homo Creativus', 
      description: 'Revolución Creativa en Progreso',
      color: 'from-blue-500 via-cyan-500 to-teal-500',
      emoji: '🚀',
      nextMilestone: 'Transcendencia Cognitiva'
    }
    if (iem >= 400) return { 
      stage: 'Homo Sapiens Plus', 
      description: 'Despertar Mental Iniciado',
      color: 'from-green-500 via-emerald-500 to-cyan-500',
      emoji: '🧠',
      nextMilestone: 'Revolución Creativa'
    }
    return { 
      stage: 'Homo Sapiens', 
      description: 'Base Cognitiva Establecida',
      color: 'from-yellow-500 via-orange-500 to-red-500',
      emoji: '💡',
      nextMilestone: 'Despertar Mental'
    }
  }

  const metrics = calculateMetrics()

  return (
    <div className="bg-gradient-to-br from-gray-800/40 to-purple-900/20 rounded-3xl p-8 backdrop-blur-xl border border-purple-500/20">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity }
          }}
          className="text-4xl"
        >
          {metrics.evolutionStage.emoji}
        </motion.div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-1">
            Índice de Evolución Mental
          </h3>
          <p className="text-gray-400">
            Tu progreso hacia la transcendencia cognitiva
          </p>
        </div>
      </div>

      {/* IEM Score Principal */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className={`inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-r ${metrics.evolutionStage.color} text-white shadow-2xl`}
        >
          <div>
            <div className="text-3xl font-black">{metrics.iem}</div>
            <div className="text-xs opacity-90">IEM</div>
          </div>
        </motion.div>
        
        <div className="mt-4">
          <h4 className={`text-2xl font-bold bg-gradient-to-r ${metrics.evolutionStage.color} bg-clip-text text-transparent`}>
            {metrics.evolutionStage.stage}
          </h4>
          <p className="text-gray-400 text-sm mt-1">
            {metrics.evolutionStage.description}
          </p>
          <div className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-black/30 rounded-full">
            <span className="text-xs text-gray-400">Próximo hito:</span>
            <span className="text-sm text-cyan-400 font-medium">
              {metrics.evolutionStage.nextMilestone}
            </span>
          </div>
        </div>
      </div>

      {/* Métricas Cognitivas */}
      <div className="space-y-4">
        <h5 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <span>⚡</span>
          Capacidades Cognitivas
        </h5>
        
        {[
          { name: 'Velocidad de Procesamiento', value: metrics.processingSpeed, icon: '🏎️', color: 'from-red-500 to-orange-500' },
          { name: 'Flexibilidad Mental', value: metrics.mentalFlexibility, icon: '🤸', color: 'from-blue-500 to-cyan-500' },
          { name: 'Pensamiento Crítico', value: metrics.criticalThinking, icon: '🎯', color: 'from-green-500 to-emerald-500' },
          { name: 'Creatividad Neuroplástica', value: metrics.creativity, icon: '🎨', color: 'from-purple-500 to-pink-500' }
        ].map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-lg">{skill.icon}</span>
                <span className="text-sm font-medium text-white">{skill.name}</span>
              </div>
              <span className="text-sm font-bold text-cyan-400">{skill.value}/100</span>
            </div>
            
            {/* Barra de progreso neuronal */}
            <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.value}%` }}
                transition={{ duration: 1.5, delay: index * 0.2 }}
                className={`h-full bg-gradient-to-r ${skill.color} relative`}
              >
                {/* Efecto de chispa neuronal */}
                <motion.div
                  animate={{ 
                    x: ['0%', '100%', '0%'],
                    opacity: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                  className="absolute top-0 left-0 w-1 h-full bg-white/80 rounded-full"
                />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Predicción de Evolución */}
      <div className="mt-8 p-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl border border-cyan-500/20">
        <div className="flex items-center gap-3 mb-3">
          <motion.span
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-2xl"
          >
            🔮
          </motion.span>
          <h6 className="font-bold text-cyan-400">Predicción Evolutiva</h6>
        </div>
        
        <p className="text-sm text-gray-300 leading-relaxed">
          {metrics.iem < 400 && "Tu cerebro está despertando. Continúa explorando diferentes áreas de conocimiento para acelerar tu evolución mental."}
          {metrics.iem >= 400 && metrics.iem < 600 && "Estás en plena transformación cognitiva. Tu capacidad de conectar ideas está expandiéndose exponencialmente."}
          {metrics.iem >= 600 && metrics.iem < 800 && "Has alcanzado la revolución creativa. Tu mente opera en frecuencias superiores de consciencia."}
          {metrics.iem >= 800 && "Felicidades, has transcendido los límites cognitivos convencionales. Eres un pionero de la nueva humanidad."}
        </p>
        
        <div className="mt-3 flex items-center gap-2 text-xs text-cyan-300">
          <span>⚡</span>
          <span>Próxima evolución estimada: {Math.max(1, Math.floor((1000 - metrics.iem) / 100))} semana{Math.floor((1000 - metrics.iem) / 100) !== 1 ? 's' : ''}</span>
        </div>
      </div>
    </div>
  )
}