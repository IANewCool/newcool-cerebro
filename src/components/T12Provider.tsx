'use client'

import { useEffect } from 'react'
import { useT12Init, useT12Subscribe, T12_EVENTS } from '@newcool/t12-shared'
import type { NPSSubmittedPayload } from '@newcool/t12-shared'
import { useCerebroStore } from '@/lib/stores/useCerebroStore'

export function T12Provider({ children }: { children: React.ReactNode }) {
  useT12Init('cerebro')

  const updateCommunityMetrics = useCerebroStore((s) => s.updateCommunityMetrics)

  // Listen for NPS events from feedback module
  useT12Subscribe<NPSSubmittedPayload>(T12_EVENTS.NPS_SUBMITTED, (event) => {
    console.log('[Cerebro] Received NPS update:', event.payload)

    // Update evolution index based on NPS score
    // NPS range is -100 to +100, we map it to affect evolutionIndex
    const npsScore = event.payload.npsMetrics.score
    const evolutionBonus = Math.round((npsScore + 100) / 4) // Maps -100..100 to 0..50

    updateCommunityMetrics({
      evolutionIndex: Math.min(1000, evolutionBonus + 400), // Clamp to max 1000
    })
  })

  return <>{children}</>
}
