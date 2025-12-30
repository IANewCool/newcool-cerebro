'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

interface CognitiveSkillsProps {
  learningProfile?: any
}

interface SkillData {
  name: string
  level: number
  maxLevel: number
  xp: number
  nextLevelXp: number
  description: string
  icon: string
  color: string
  neuralConnections: number
}

export function CognitiveSkills({ learningProfile }: CognitiveSkillsProps) {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null)

  // Generar datos de habilidades basado en el progreso del usuario
  const generateSkillData = (): SkillData[] => {
    const completedTracks = learningProfile?.learning_history?.completed_tracks?.length || 0
    const emotionScore = learningProfile?.learning_history?.last_emotion_score || 0.5
    const timeSpent = Object.values(learningProfile?.learning_history?.time_spent_per_concept || {})
      .reduce((total: number, time: any) => total + time, 0) || 0

    return [
      {
        name: 'Velocidad Sináptica',
        level: Math.min(10, Math.floor((completedTracks / 2) + (emotionScore * 5))),
        maxLevel: 10,
        xp: completedTracks * 25 + Math.floor(emotionScore * 100),
        nextLevelXp: 500,
        description: 'Rapidez de procesamiento de información nueva',
        icon: '⚡',
        color: 'from-yellow-400 to-orange-500',
        neuralConnections: Math.floor((completedTracks * 10) + (emotionScore * 50))
      },
      {
        name: 'Neuroplasticidad',
        level: Math.min(10, Math.floor((timeSpent / 10) + (emotionScore * 3))),
        maxLevel: 10,
        xp: Math.floor(timeSpent * 2) + Math.floor(emotionScore * 75),
        nextLevelXp: 750,
        description: 'Capacidad de formar nuevas conexiones neuronales',
        icon: '🧠',
        color: 'from-purple-400 to-pink-500',
        neuralConnections: Math.floor((timeSpent * 2) + (emotionScore * 30))
      },
      {
        name: 'Resonancia Creativa',
        level: Math.min(10, Math.floor(completedTracks / 3) + Math.floor(emotionScore * 4)),
        maxLevel: 10,
        xp: completedTracks * 30 + Math.floor(emotionScore * 120),
        nextLevelXp: 600,
        description: 'Habilidad para generar soluciones innovadoras',
        icon: '🎨',
        color: 'from-cyan-400 to-blue-500',
        neuralConnections: Math.floor((completedTracks * 8) + (emotionScore * 40))
      },
      {
        name: 'Coherencia Cuántica',
        level: Math.min(10, Math.floor((completedTracks / 4) + (timeSpent / 15))),
        maxLevel: 10,
        xp: Math.floor(completedTracks * 20) + Math.floor(timeSpent * 3),
        nextLevelXp: 800,
        description: 'Sincronización de múltiples procesos cognitivos',
        icon: '🌀',
        color: 'from-emerald-400 to-teal-500',
        neuralConnections: Math.floor((completedTracks * 6) + (timeSpent * 1.5))
      }
    ]
  }

  const skills = generateSkillData()
  const totalLevel = skills.reduce((sum, skill) => sum + skill.level, 0)
  const maxTotalLevel = skills.reduce((sum, skill) => sum + skill.maxLevel, 0)

  return (
    <div className="bg-gradient-to-br from-gray-800/40 to-blue-900/20 rounded-3xl p-8 backdrop-blur-xl border border-blue-500/20">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity
            }}
            className="text-4xl"
          >
            🔬
          </motion.div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">
              Laboratorio Cognitivo
            </h3>
            <p className="text-gray-400">
              Análisis de capacidades cerebrales
            </p>
          </div>
        </div>
        
        {/* Puntuación Total */}
        <div className="text-center">
          <div className="text-2xl font-bold text-cyan-400">
            {totalLevel}/{maxTotalLevel}
          </div>
          <div className="text-xs text-gray-400">Nivel Total</div>
        </div>
      </div>

      {/* Grid de Habilidades */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {skills.map((skill, index) => {
          const progressPercentage = (skill.level / skill.maxLevel) * 100
          const isSelected = selectedSkill === skill.name
          
          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedSkill(isSelected ? null : skill.name)}
              className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                isSelected 
                  ? 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-2 border-cyan-500/50 shadow-2xl' 
                  : 'bg-gray-800/30 border border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-800/50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Ícono y Nivel */}
              <div className="flex items-center justify-between mb-4">
                <div className={`text-3xl p-3 rounded-xl bg-gradient-to-r ${skill.color}`}>
                  {skill.icon}
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-white">Nv.{skill.level}</div>
                  <div className="text-xs text-gray-400">{skill.neuralConnections} conexiones</div>
                </div>
              </div>

              {/* Nombre y Descripción */}
              <h4 className="font-bold text-white mb-2">{skill.name}</h4>
              <p className="text-sm text-gray-400 mb-4">{skill.description}</p>

              {/* Barra de Progreso */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Progreso</span>
                  <span className="text-cyan-400">{Math.floor(progressPercentage)}%</span>
                </div>
                
                <div className="h-2 bg-gray-700/50 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressPercentage}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    className={`h-full bg-gradient-to-r ${skill.color} relative`}
                  >
                    {/* Pulsos de energía */}
                    <motion.div
                      animate={{ 
                        x: ['-100%', '100%'],
                        opacity: [0, 1, 0]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                      className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
                    />
                  </motion.div>
                </div>

                {/* XP Progress */}
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{skill.xp} XP</span>
                  <span>{skill.nextLevelXp} XP para Nv.{skill.level + 1}</span>
                </div>
              </div>

              {/* Efecto de selección */}
              {isSelected && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl pointer-events-none"
                />
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Panel de Detalles */}
      {selectedSkill && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-2xl p-6 border border-cyan-500/20"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🔬</span>
            <h5 className="text-lg font-bold text-cyan-400">Análisis Neuronal Detallado</h5>
          </div>
          
          {(() => {
            const skill = skills.find(s => s.name === selectedSkill)!
            return (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Estado Actual */}
                <div>
                  <h6 className="font-medium text-white mb-2">Estado Actual</h6>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div>Nivel: <span className="text-cyan-400 font-bold">{skill.level}/10</span></div>
                    <div>Conexiones: <span className="text-green-400 font-bold">{skill.neuralConnections}</span></div>
                    <div>Eficiencia: <span className="text-purple-400 font-bold">{Math.floor((skill.level / 10) * 100)}%</span></div>
                  </div>
                </div>

                {/* Próximas Mejoras */}
                <div>
                  <h6 className="font-medium text-white mb-2">Próximas Mejoras</h6>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div>XP Restante: <span className="text-orange-400 font-bold">{skill.nextLevelXp - skill.xp}</span></div>
                    <div>Tiempo Estimado: <span className="text-blue-400 font-bold">3-5 días</span></div>
                    <div>Mejora Esperada: <span className="text-green-400 font-bold">+15% eficiencia</span></div>
                  </div>
                </div>

                {/* Recomendaciones */}
                <div>
                  <h6 className="font-medium text-white mb-2">Potenciadores</h6>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div>• Completar más mini-juegos</div>
                    <div>• Explorar nuevas áreas STEAM</div>
                    <div>• Mantener alta motivación</div>
                  </div>
                </div>
              </div>
            )
          })()}
        </motion.div>
      )}

      {/* Botón de Entrenamiento Neuronal */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full mt-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold rounded-2xl shadow-lg transition-all duration-300"
      >
        <div className="flex items-center justify-center gap-3">
          <motion.span
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            ⚡
          </motion.span>
          <span>Iniciar Entrenamiento Neuronal</span>
        </div>
      </motion.button>
    </div>
  )
}