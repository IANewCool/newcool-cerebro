'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface NeuroMapProps {
  userIdentity?: any
  learningProfile?: any
}

interface NeuroNode {
  id: string
  x: number
  y: number
  size: number
  area: string
  active: boolean
  connections: string[]
  color: string
  skill: string
}

export function NeuroMap({ userIdentity, learningProfile }: NeuroMapProps) {
  const [activeNodes, setActiveNodes] = useState<Set<string>>(new Set())
  const [neuralActivity, setNeuralActivity] = useState<number>(0)

  // Definir las regiones cerebrales y sus habilidades asociadas
  const neuroNodes: NeuroNode[] = [
    // Córtex Prefrontal - Pensamiento Crítico y Liderazgo
    { id: 'pfc-1', x: 50, y: 25, size: 25, area: 'Prefrontal', active: false, connections: ['pfc-2', 'temp-1'], color: 'from-yellow-400 to-orange-500', skill: 'Liderazgo' },
    { id: 'pfc-2', x: 45, y: 20, size: 20, area: 'Prefrontal', active: false, connections: ['pfc-1', 'par-1'], color: 'from-yellow-400 to-orange-500', skill: 'Pensamiento Crítico' },
    
    // Lóbulo Temporal - Procesamiento Musical y Lenguaje
    { id: 'temp-1', x: 30, y: 45, size: 22, area: 'Temporal', active: false, connections: ['temp-2', 'occ-1'], color: 'from-pink-400 to-rose-500', skill: 'Procesamiento Musical' },
    { id: 'temp-2', x: 25, y: 50, size: 18, area: 'Temporal', active: false, connections: ['temp-1', 'par-2'], color: 'from-pink-400 to-rose-500', skill: 'Comprensión Lingüística' },
    
    // Lóbulo Parietal - Matemáticas y Espacial
    { id: 'par-1', x: 60, y: 35, size: 24, area: 'Parietal', active: false, connections: ['par-2', 'occ-1'], color: 'from-purple-400 to-violet-500', skill: 'Razonamiento Matemático' },
    { id: 'par-2', x: 70, y: 45, size: 20, area: 'Parietal', active: false, connections: ['par-1', 'temp-2'], color: 'from-purple-400 to-violet-500', skill: 'Percepción Espacial' },
    
    // Lóbulo Occipital - Creatividad Visual y Artes
    { id: 'occ-1', x: 80, y: 60, size: 21, area: 'Occipital', active: false, connections: ['occ-2', 'temp-1'], color: 'from-cyan-400 to-blue-500', skill: 'Creatividad Visual' },
    { id: 'occ-2', x: 75, y: 70, size: 19, area: 'Occipital', active: false, connections: ['occ-1', 'cer-1'], color: 'from-cyan-400 to-blue-500', skill: 'Procesamiento Visual' },
    
    // Cerebelo - Coordinación y Aprendizaje Motor
    { id: 'cer-1', x: 65, y: 80, size: 16, area: 'Cerebelo', active: false, connections: ['cer-2'], color: 'from-green-400 to-emerald-500', skill: 'Coordinación Motora' },
    { id: 'cer-2', x: 55, y: 85, size: 14, area: 'Cerebelo', active: false, connections: ['cer-1'], color: 'from-green-400 to-emerald-500', skill: 'Automatización' },
    
    // Tronco Cerebral - Procesamiento Base
    { id: 'brain-1', x: 50, y: 90, size: 12, area: 'Tronco', active: false, connections: ['cer-1', 'cer-2'], color: 'from-gray-400 to-gray-600', skill: 'Procesos Básicos' }
  ]

  // Simular actividad neuronal basada en el progreso del usuario
  useEffect(() => {
    const interval = setInterval(() => {
      // Activar neuronas aleatoriamente para simular actividad
      const randomNodes = new Set<string>()
      const numActive = Math.floor(Math.random() * 4) + 2
      
      for (let i = 0; i < numActive; i++) {
        const randomNode = neuroNodes[Math.floor(Math.random() * neuroNodes.length)]
        randomNodes.add(randomNode.id)
      }
      
      setActiveNodes(randomNodes)
      setNeuralActivity(Math.random() * 100)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  // Calcular nivel evolutivo basado en el progreso
  const getEvolutionLevel = () => {
    const completedActivities = learningProfile?.learning_history?.completed_tracks?.length || 0
    const emotionScore = learningProfile?.learning_history?.last_emotion_score || 0
    const totalScore = completedActivities * 10 + emotionScore * 100

    if (totalScore > 500) return { level: 'Homo Evolutis', color: 'from-purple-500 to-pink-500', percentage: 95 }
    if (totalScore > 200) return { level: 'Homo Creativus', color: 'from-blue-500 to-cyan-500', percentage: 70 }
    return { level: 'Homo Sapiens', color: 'from-green-500 to-emerald-500', percentage: 35 }
  }

  const evolutionLevel = getEvolutionLevel()

  return (
    <div className="bg-gray-800/30 rounded-3xl p-8 backdrop-blur-xl border border-cyan-500/20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              🌟
            </motion.span>
            Red Neuronal Evolutiva
          </h2>
          <p className="text-gray-400">
            Visualización en tiempo real de tu crecimiento cognitivo
          </p>
        </div>
        
        {/* Indicador de Nivel Evolutivo */}
        <div className="text-center">
          <div className={`inline-flex px-6 py-3 rounded-full bg-gradient-to-r ${evolutionLevel.color} text-white font-bold text-lg shadow-lg`}>
            {evolutionLevel.level}
          </div>
          <div className="mt-2 text-sm text-gray-400">
            Evolución al {evolutionLevel.percentage}%
          </div>
        </div>
      </div>

      {/* Mapa Cerebral SVG */}
      <div className="relative w-full h-96 bg-gradient-to-br from-gray-900/50 to-purple-900/20 rounded-2xl overflow-hidden">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Conexiones Sinápticas */}
          {neuroNodes.map(node => 
            node.connections.map(connectionId => {
              const connectedNode = neuroNodes.find(n => n.id === connectionId)
              if (!connectedNode) return null
              
              const isActive = activeNodes.has(node.id) || activeNodes.has(connectionId)
              
              return (
                <motion.line
                  key={`${node.id}-${connectionId}`}
                  x1={node.x}
                  y1={node.y}
                  x2={connectedNode.x}
                  y2={connectedNode.y}
                  stroke={isActive ? '#06b6d4' : '#374151'}
                  strokeWidth={isActive ? '0.3' : '0.1'}
                  opacity={isActive ? 0.8 : 0.3}
                  animate={{
                    strokeDasharray: isActive ? ['0 4', '4 0'] : '0 4',
                  }}
                  transition={{
                    duration: 1,
                    repeat: isActive ? Infinity : 0
                  }}
                />
              )
            })
          )}
          
          {/* Nodos Neuronales */}
          {neuroNodes.map(node => {
            const isActive = activeNodes.has(node.id)
            
            return (
              <g key={node.id}>
                {/* Halo de activación */}
                <AnimatePresence>
                  {isActive && (
                    <motion.circle
                      initial={{ r: node.size / 10, opacity: 0 }}
                      animate={{ r: node.size / 5, opacity: 0.4 }}
                      exit={{ r: node.size / 10, opacity: 0 }}
                      cx={node.x}
                      cy={node.y}
                      fill="url(#neuralGlow)"
                      className="animate-pulse"
                    />
                  )}
                </AnimatePresence>
                
                {/* Nodo principal */}
                <motion.circle
                  cx={node.x}
                  cy={node.y}
                  r={node.size / 10}
                  fill={isActive ? '#06b6d4' : '#4b5563'}
                  animate={{
                    scale: isActive ? [1, 1.2, 1] : 1,
                    fill: isActive ? ['#06b6d4', '#8b5cf6', '#06b6d4'] : '#4b5563'
                  }}
                  transition={{
                    duration: 1,
                    repeat: isActive ? Infinity : 0
                  }}
                  className="cursor-pointer"
                  whileHover={{ scale: 1.3 }}
                />
                
                {/* Etiqueta de habilidad */}
                <motion.text
                  x={node.x}
                  y={node.y - 4}
                  textAnchor="middle"
                  className="fill-gray-300 text-xs font-medium"
                  opacity={isActive ? 1 : 0.6}
                >
                  {node.skill}
                </motion.text>
              </g>
            )
          })}
          
          {/* Definiciones de gradientes */}
          <defs>
            <radialGradient id="neuralGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
        
        {/* Indicador de Actividad Neuronal */}
        <div className="absolute top-4 right-4 bg-black/50 rounded-lg p-3">
          <div className="flex items-center gap-2 text-white text-sm">
            <motion.div
              className="w-3 h-3 bg-cyan-400 rounded-full"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
            <span>Actividad: {Math.floor(neuralActivity)}%</span>
          </div>
        </div>
      </div>
      
      {/* Leyenda de Áreas Cerebrales */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
        {['Prefrontal', 'Temporal', 'Parietal', 'Occipital', 'Cerebelo'].map((area, index) => {
          const colors = [
            'from-yellow-400 to-orange-500',
            'from-pink-400 to-rose-500', 
            'from-purple-400 to-violet-500',
            'from-cyan-400 to-blue-500',
            'from-green-400 to-emerald-500'
          ]
          
          return (
            <div key={area} className="flex items-center gap-2">
              <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${colors[index]}`} />
              <span className="text-sm text-gray-300">{area}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}