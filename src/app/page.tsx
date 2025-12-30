'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { NeuroMap } from '@/components/Dashboard/NeuroMap'
import { EvolutionIndex } from '@/components/Dashboard/EvolutionIndex'
import { CognitiveSkills } from '@/components/Dashboard/CognitiveSkills'
import { EvolutionaryMissions } from '@/components/Dashboard/EvolutionaryMissions'
import { CollectiveResonance } from '@/components/Dashboard/CollectiveResonance'
import { PotentialPredictor } from '@/components/Dashboard/PotentialPredictor'
import { T12Provider } from '@/components/T12Provider'
import { useCerebroStore } from '@/lib/stores/useCerebroStore'

export default function CerebroEvolutivoDashboard() {
  const { userIdentity, learningProfile } = useCerebroStore()

  return (
    <T12Provider>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-blue-900/20">
      {/* Particles Background Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
            animate={{
              x: [0, Math.random() * 100],
              y: [0, Math.random() * 100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="bg-gradient-to-r from-gray-900/80 via-purple-900/40 to-blue-900/40 backdrop-blur-xl border-b border-cyan-500/20 p-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-7xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                animate={{
                  boxShadow: ['0 0 20px #06b6d4', '0 0 40px #06b6d4', '0 0 20px #06b6d4']
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-6xl"
              >
                🧠
              </motion.div>
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Cerebro Evolutivo
                </h1>
                <p className="text-xl text-gray-300 mt-2">
                  Dashboard de Comunidad e Impacto | T12-COMMUNITY
                </p>
              </div>
            </div>

            {userIdentity && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${userIdentity.color} text-white shadow-lg`}
              >
                <span className="text-2xl">{userIdentity.icon}</span>
                <div>
                  <span className="font-bold">Pionero {userIdentity.title}</span>
                  <span className="ml-2 text-sm opacity-90">• {userIdentity.suggestedAge}</span>
                </div>
              </motion.div>
            )}
          </motion.div>
        </header>

        <div className="max-w-7xl mx-auto p-8 space-y-12">
          {/* Resonancia Colectiva - Metricas de Comunidad */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <CollectiveResonance />
          </motion.section>

          {/* Metricas de Evolucion */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.section
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <EvolutionIndex learningProfile={learningProfile} />
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <CognitiveSkills learningProfile={learningProfile} />
            </motion.section>
          </div>

          {/* Mapa Neuronal */}
          <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <NeuroMap userIdentity={userIdentity} learningProfile={learningProfile} />
          </motion.section>

          {/* Misiones y Predictor */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.section
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <EvolutionaryMissions userIdentity={userIdentity} learningProfile={learningProfile} />
            </motion.section>

            <motion.section
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <PotentialPredictor userIdentity={userIdentity} learningProfile={learningProfile} />
            </motion.section>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 text-gray-500 text-sm">
          <p>Cerebro Evolutivo | T12-COMMUNITY | NewCool Ecosystem</p>
          <p className="mt-1">Metricas de impacto real, comunidad que crece junta.</p>
        </footer>
      </div>
    </div>
    </T12Provider>
  )
}
