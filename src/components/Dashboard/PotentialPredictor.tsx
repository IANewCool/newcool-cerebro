'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PotentialPredictorProps {
  userIdentity?: any
  learningProfile?: any
}

interface Prediction {
  type: 'breakthrough' | 'evolution' | 'transcendence'
  title: string
  description: string
  probability: number
  timeframe: string
  recommendations: string[]
  icon: string
  color: string
}

interface NextLeap {
  area: string
  potential: number
  catalyst: string
  timeToUnlock: string
  description: string
}

export function PotentialPredictor({ userIdentity, learningProfile }: PotentialPredictorProps) {
  const [currentPrediction, setCurrentPrediction] = useState<Prediction | null>(null)
  const [quantumField, setQuantumField] = useState(0)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  // Generar predicciones basadas en el perfil del usuario
  const generatePredictions = (): Prediction[] => {
    const completedTracks = learningProfile?.learning_history?.completed_tracks?.length || 0
    const emotionScore = learningProfile?.learning_history?.last_emotion_score || 0.5
    const timeSpent = Object.values(learningProfile?.learning_history?.time_spent_per_concept || {})
      .reduce((total: number, time: any) => total + time, 0) || 0

    const userScore = completedTracks * 10 + emotionScore * 100 + timeSpent

    return [
      {
        type: 'breakthrough',
        title: 'Salto Cuántico Matemático',
        description: 'Tu cerebro está preparándose para una comprensión revolucionaria de las fracciones que transformará tu percepción numérica para siempre.',
        probability: Math.min(95, 60 + (emotionScore * 35)),
        timeframe: '3-7 días',
        recommendations: [
          'Completa todos los mini-juegos de fracciones',
          'Medita 5 minutos antes de cada sesión',
          'Visualiza números como entidades vivas'
        ],
        icon: '🧮',
        color: 'from-blue-500 to-purple-500'
      },
      {
        type: 'evolution',
        title: 'Despertar de Creatividad Neuroplástica',
        description: 'Tus conexiones neuronales están formando patrones únicos que desbloquearán capacidades creativas extraordinarias.',
        probability: Math.min(90, 45 + (userScore / 10)),
        timeframe: '1-2 semanas',
        recommendations: [
          'Explora áreas STEAM desconocidas',
          'Combina música con visualización',
          'Practica pensamiento lateral diariamente'
        ],
        icon: '🎨',
        color: 'from-pink-500 to-orange-500'
      },
      {
        type: 'transcendence',
        title: 'Metamorfosis Cognitiva Completa',
        description: 'Te acercas a un estado de consciencia expandida donde el aprendizaje se convierte en una experiencia transcendental.',
        probability: Math.min(85, 30 + (userScore / 8)),
        timeframe: '2-4 semanas',
        recommendations: [
          'Mantén consistencia en tu práctica',
          'Conecta con otros pioneros evolutivos',
          'Integra lo aprendido en tu vida diaria'
        ],
        icon: '🌌',
        color: 'from-purple-500 to-cyan-500'
      }
    ]
  }

  const generateNextLeaps = (): NextLeap[] => [
    {
      area: 'Matemáticas Cuánticas',
      potential: 87,
      catalyst: 'Completar serie de fracciones avanzadas',
      timeToUnlock: '5 días',
      description: 'Comprensión intuitiva de conceptos matemáticos complejos'
    },
    {
      area: 'Sinestesia Educativa',
      potential: 72,
      catalyst: 'Combinar música con visualización STEAM',
      timeToUnlock: '12 días',
      description: 'Capacidad de "ver" sonidos y "escuchar" colores'
    },
    {
      area: 'Pensamiento Multidimensional',
      potential: 65,
      catalyst: 'Explorar todas las áreas de arquetipos',
      timeToUnlock: '18 días',
      description: 'Habilidad para procesar información en múltiples capas simultáneamente'
    }
  ]

  const predictions = generatePredictions()
  const nextLeaps = generateNextLeaps()

  // Simular análisis cuántico en tiempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setQuantumField(Math.random() * 100)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const runQuantumAnalysis = () => {
    setIsAnalyzing(true)
    setTimeout(() => {
      const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)]
      setCurrentPrediction(randomPrediction)
      setIsAnalyzing(false)
    }, 3000)
  }

  const getQuantumFieldLevel = (field: number) => {
    if (field >= 80) return { level: 'Transcendental', color: 'text-purple-400', emoji: '🌌' }
    if (field >= 60) return { level: 'Elevado', color: 'text-cyan-400', emoji: '⚡' }
    if (field >= 40) return { level: 'Activo', color: 'text-green-400', emoji: '🔥' }
    return { level: 'Estable', color: 'text-yellow-400', emoji: '💫' }
  }

  const quantumLevel = getQuantumFieldLevel(quantumField)

  return (
    <div className="bg-gradient-to-br from-gray-800/40 to-indigo-900/20 rounded-3xl p-8 backdrop-blur-xl border border-indigo-500/20">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity }
            }}
            className="text-4xl"
          >
            🔮
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">
              Predictor de Potencial
            </h3>
            <p className="text-gray-400">
              IA cuántica de evolución cognitiva
            </p>
          </div>
        </div>

        {/* Campo Cuántico */}
        <div className="text-center">
          <div className="flex items-center gap-2 mb-1">
            <span className={quantumLevel.color}>{quantumLevel.emoji}</span>
            <span className={`text-sm font-bold ${quantumLevel.color}`}>
              {quantumLevel.level}
            </span>
          </div>
          <div className="text-xs text-gray-400">
            Campo: {Math.floor(quantumField)}Hz
          </div>
        </div>
      </div>

      {/* Botón de Análisis Cuántico */}
      <div className="text-center mb-8">
        <motion.button
          onClick={runQuantumAnalysis}
          disabled={isAnalyzing}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold rounded-2xl shadow-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="flex items-center gap-3">
            <motion.span
              animate={isAnalyzing ? { rotate: 360 } : {}}
              transition={{ duration: 1, repeat: isAnalyzing ? Infinity : 0, ease: "linear" }}
            >
              {isAnalyzing ? '🌀' : '🔮'}
            </motion.span>
            <span>
              {isAnalyzing ? 'Analizando Campo Cuántico...' : 'Iniciar Análisis Predictivo'}
            </span>
          </div>
        </motion.button>
      </div>

      {/* Análisis en Progreso */}
      <AnimatePresence>
        {isAnalyzing && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-6 mb-8 border border-purple-500/20"
          >
            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-4xl mb-4"
              >
                🧠
              </motion.div>
              <h4 className="text-lg font-bold text-purple-400 mb-2">
                Escaneando Patrones Neuronales...
              </h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>📡 Analizando frecuencias cerebrales</div>
                <div>🔬 Evaluando potencial sináptico</div>
                <div>⚡ Calculando probabilidades evolutivas</div>
                <div>🌟 Generando predicciones personalizadas</div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Predicción Actual */}
      <AnimatePresence>
        {currentPrediction && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={`bg-gradient-to-r ${currentPrediction.color}/10 rounded-2xl p-6 mb-8 border-2 ${currentPrediction.color.replace('from-', 'border-').replace(' to-purple-500', '')}/30`}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className={`text-4xl p-4 rounded-xl bg-gradient-to-r ${currentPrediction.color}`}>
                {currentPrediction.icon}
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-2">
                  {currentPrediction.title}
                </h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {currentPrediction.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-gray-400">Probabilidad:</span>
                    <div className="text-2xl font-bold text-green-400">
                      {Math.floor(currentPrediction.probability)}%
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-400">Tiempo estimado:</span>
                    <div className="text-lg font-bold text-cyan-400">
                      {currentPrediction.timeframe}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recomendaciones */}
            <div className="bg-black/20 rounded-xl p-4">
              <h6 className="font-bold text-white mb-3 flex items-center gap-2">
                <span>💡</span>
                Aceleradores Cuánticos
              </h6>
              <div className="space-y-2">
                {currentPrediction.recommendations.map((rec, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="text-cyan-400">•</span>
                    <span>{rec}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Próximos Saltos Evolutivos */}
      <div className="space-y-6">
        <h5 className="text-lg font-bold text-white flex items-center gap-2">
          <span>🚀</span>
          Próximos Saltos Evolutivos
        </h5>

        {nextLeaps.map((leap, index) => (
          <motion.div
            key={leap.area}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 hover:border-indigo-500/30 transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <h6 className="font-bold text-white">{leap.area}</h6>
              <div className="text-right">
                <div className="text-lg font-bold text-indigo-400">
                  {leap.potential}%
                </div>
                <div className="text-xs text-gray-400">potencial</div>
              </div>
            </div>

            <p className="text-sm text-gray-300 mb-4">{leap.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-xs text-gray-400">Catalizador:</span>
                <div className="text-sm text-cyan-400 font-medium">
                  {leap.catalyst}
                </div>
              </div>
              <div>
                <span className="text-xs text-gray-400">Tiempo para desbloquear:</span>
                <div className="text-sm text-green-400 font-medium">
                  {leap.timeToUnlock}
                </div>
              </div>
            </div>

            {/* Barra de Potencial */}
            <div className="mt-4">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>Potencial</span>
                <span>{leap.potential}/100</span>
              </div>
              <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${leap.potential}%` }}
                  transition={{ duration: 1.5, delay: index * 0.2 }}
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 relative"
                >
                  <motion.div
                    animate={{ 
                      x: ['0%', '100%'],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                    className="absolute top-0 left-0 w-2 h-full bg-white/60 rounded-full"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}