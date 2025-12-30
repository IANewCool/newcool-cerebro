'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface EvolutionaryMissionsProps {
  userIdentity?: any
  learningProfile?: any
}

interface Mission {
  id: string
  title: string
  description: string
  progress: number
  maxProgress: number
  difficulty: 'Iniciado' | 'Evolucionario' | 'Trascendental'
  reward: {
    xp: number
    title: string
    description: string
  }
  icon: string
  color: string
  isCompleted: boolean
  isUnlocked: boolean
  requirements?: string[]
}

export function EvolutionaryMissions({ userIdentity, learningProfile }: EvolutionaryMissionsProps) {
  const [selectedMission, setSelectedMission] = useState<string | null>(null)

  // Generar misiones basadas en el progreso del usuario
  const generateMissions = (): Mission[] => {
    const completedTracks = learningProfile?.learning_history?.completed_tracks?.length || 0
    const emotionScore = learningProfile?.learning_history?.last_emotion_score || 0.5
    const timeSpent = Object.values(learningProfile?.learning_history?.time_spent_per_concept || {})
      .reduce((total: number, time: any) => total + time, 0) || 0

    return [
      {
        id: 'explorer',
        title: 'Explorador Cósmico',
        description: 'Descubre todas las áreas STEAM y expande tu consciencia interdisciplinaria',
        progress: Math.min(5, completedTracks),
        maxProgress: 5,
        difficulty: 'Iniciado',
        reward: {
          xp: 500,
          title: 'Navegante Estelar',
          description: 'Acceso a contenido avanzado de exploración'
        },
        icon: '🚀',
        color: 'from-blue-500 to-cyan-500',
        isCompleted: completedTracks >= 5,
        isUnlocked: true
      },
      {
        id: 'fraction-master',
        title: 'Maestro de Fracciones Cuánticas',
        description: 'Domina todos los mini-juegos matemáticos con perfección neuronal',
        progress: Math.floor(emotionScore * 4), // Asumiendo que han jugado algunos juegos
        maxProgress: 4,
        difficulty: 'Evolucionario',
        reward: {
          xp: 750,
          title: 'Arquiteto Matemático',
          description: 'Desbloquea geometría sagrada avanzada'
        },
        icon: '🧮',
        color: 'from-purple-500 to-pink-500',
        isCompleted: emotionScore >= 0.9,
        isUnlocked: completedTracks >= 2
      },
      {
        id: 'dream-architect',
        title: 'Arquitecto de Sueños',
        description: 'Crea una playlist que combine 3+ arquetipos de aprendizaje diferentes',
        progress: userIdentity ? 1 : 0,
        maxProgress: 3,
        difficulty: 'Evolucionario',
        reward: {
          xp: 1000,
          title: 'Tejedor de Realidades',
          description: 'Capacidad de crear experiencias de aprendizaje únicas'
        },
        icon: '🌈',
        color: 'from-emerald-500 to-teal-500',
        isCompleted: false, // Esta es más compleja de trackear
        isUnlocked: completedTracks >= 3,
        requirements: ['Completar al menos 3 canciones', 'Tener identidad de aprendizaje']
      },
      {
        id: 'mental-revolutionary',
        title: 'Revolucionario Mental',
        description: 'Influencia positiva en la evolución colectiva de otros pioneros',
        progress: Math.floor(timeSpent / 30), // Basado en tiempo dedicado
        maxProgress: 10,
        difficulty: 'Trascendental',
        reward: {
          xp: 2000,
          title: 'Catalizador de Consciencia',
          description: 'Acceso a herramientas de liderazgo evolutivo'
        },
        icon: '👑',
        color: 'from-orange-500 to-red-500',
        isCompleted: timeSpent >= 300, // 5+ horas de dedicación
        isUnlocked: emotionScore >= 0.7,
        requirements: ['Nivel alto de evolución mental', 'Contribución significativa']
      },
      {
        id: 'neuro-alchemist',
        title: 'Alquimista Neuronal',
        description: 'Transforma patrones de pensamiento limitantes en sabiduría transcendental',
        progress: Math.floor((completedTracks + emotionScore * 10) / 3),
        maxProgress: 7,
        difficulty: 'Trascendental',
        reward: {
          xp: 3000,
          title: 'Maestro de la Transformación',
          description: 'Habilidad para guiar la metamorfosis cognitiva de otros'
        },
        icon: '🔮',
        color: 'from-violet-500 to-purple-500',
        isCompleted: (completedTracks + emotionScore * 10) >= 21,
        isUnlocked: completedTracks >= 5 && emotionScore >= 0.8
      }
    ]
  }

  const missions = generateMissions()
  const completedMissions = missions.filter(m => m.isCompleted).length
  const totalXP = missions.filter(m => m.isCompleted).reduce((sum, m) => sum + m.reward.xp, 0)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Iniciado': return 'text-green-400'
      case 'Evolucionario': return 'text-blue-400'
      case 'Trascendental': return 'text-purple-400'
      default: return 'text-gray-400'
    }
  }

  return (
    <div className="bg-gradient-to-br from-gray-800/40 to-emerald-900/20 rounded-3xl p-8 backdrop-blur-xl border border-emerald-500/20">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              filter: ['hue-rotate(0deg)', 'hue-rotate(360deg)', 'hue-rotate(0deg)']
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity
            }}
            className="text-4xl"
          >
            🎯
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">
              Misiones Evolutivas
            </h3>
            <p className="text-gray-400">
              Desafíos para acelerar tu transformación
            </p>
          </div>
        </div>
        
        {/* Estadísticas */}
        <div className="text-center">
          <div className="text-2xl font-bold text-emerald-400">
            {completedMissions}/{missions.length}
          </div>
          <div className="text-xs text-gray-400">Completadas</div>
          <div className="text-sm text-yellow-400 mt-1">
            {totalXP} XP ganado
          </div>
        </div>
      </div>

      {/* Lista de Misiones */}
      <div className="space-y-4">
        {missions.map((mission, index) => {
          const progressPercentage = (mission.progress / mission.maxProgress) * 100
          const isSelected = selectedMission === mission.id
          
          return (
            <motion.div
              key={mission.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <motion.div
                onClick={() => setSelectedMission(isSelected ? null : mission.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  !mission.isUnlocked 
                    ? 'opacity-50 bg-gray-800/20 border border-gray-700/30' 
                    : mission.isCompleted 
                      ? 'bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-2 border-green-500/50'
                      : isSelected
                        ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-2 border-emerald-500/50'
                        : 'bg-gray-800/30 border border-gray-700/50 hover:border-emerald-500/30'
                }`}
              >
                {/* Status Icon */}
                <div className="absolute top-4 right-4">
                  {!mission.isUnlocked && (
                    <div className="text-gray-500 text-xl">🔒</div>
                  )}
                  {mission.isCompleted && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{ delay: 0.5 }}
                      className="text-green-400 text-xl"
                    >
                      ✅
                    </motion.div>
                  )}
                </div>

                {/* Content */}
                <div className="flex items-start gap-4">
                  <div className={`text-3xl p-3 rounded-xl bg-gradient-to-r ${mission.color} ${!mission.isUnlocked ? 'grayscale' : ''}`}>
                    {mission.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="font-bold text-white">{mission.title}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full bg-black/30 ${getDifficultyColor(mission.difficulty)}`}>
                        {mission.difficulty}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-400 mb-4">{mission.description}</p>
                    
                    {/* Progress Bar */}
                    {mission.isUnlocked && (
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-400">Progreso</span>
                          <span className="text-emerald-400">
                            {mission.progress}/{mission.maxProgress} ({Math.floor(progressPercentage)}%)
                          </span>
                        </div>
                        
                        <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${progressPercentage}%` }}
                            transition={{ duration: 1.5, delay: index * 0.2 }}
                            className={`h-full bg-gradient-to-r ${mission.color} relative`}
                          >
                            {/* Sparkle effect */}
                            {mission.isCompleted && (
                              <motion.div
                                animate={{ 
                                  x: ['0%', '100%'],
                                  opacity: [0, 1, 0]
                                }}
                                transition={{ 
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: Math.random() * 2
                                }}
                                className="absolute top-0 left-0 w-2 h-full bg-white/60 rounded-full"
                              />
                            )}
                          </motion.div>
                        </div>
                        
                        {/* Reward Preview */}
                        <div className="flex items-center justify-between text-xs">
                          <span className="text-yellow-400">Recompensa: {mission.reward.xp} XP</span>
                          <span className="text-purple-400">{mission.reward.title}</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Requirements */}
                    {!mission.isUnlocked && mission.requirements && (
                      <div className="mt-3 text-xs text-gray-500">
                        <div className="font-medium mb-1">Requisitos:</div>
                        {mission.requirements.map((req, i) => (
                          <div key={i} className="flex items-center gap-1">
                            <span>•</span>
                            <span>{req}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Expanded Details */}
              <AnimatePresence>
                {isSelected && mission.isUnlocked && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-2xl p-6 mt-4 border border-emerald-500/20"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h6 className="font-medium text-emerald-400 mb-3">Detalles de la Misión</h6>
                        <p className="text-sm text-gray-300 leading-relaxed mb-4">
                          {mission.description}
                        </p>
                        <div className="space-y-2 text-xs text-gray-400">
                          <div>Dificultad: <span className={getDifficultyColor(mission.difficulty)}>{mission.difficulty}</span></div>
                          <div>Progreso: {mission.progress}/{mission.maxProgress}</div>
                          <div>Estado: {mission.isCompleted ? '✅ Completada' : '⏳ En progreso'}</div>
                        </div>
                      </div>
                      
                      <div>
                        <h6 className="font-medium text-yellow-400 mb-3">Recompensas</h6>
                        <div className="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20">
                          <div className="font-medium text-white mb-1">{mission.reward.title}</div>
                          <div className="text-sm text-gray-300 mb-2">{mission.reward.description}</div>
                          <div className="text-yellow-400 font-bold">{mission.reward.xp} XP</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}