import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserIdentity {
  id: string
  title: string
  icon: string
  color: string
  suggestedAge: string
}

interface LearningProfile {
  userId: string
  identityId: string
  learning_history: {
    completed_tracks: string[]
    time_spent_per_concept: Record<string, number>
    last_emotion_score: number
  }
  preferences: {
    preferred_content_types: string[]
    difficulty_level: number
    interests: string[]
  }
}

interface CommunityMetrics {
  totalPioneers: number
  evolutionIndex: number
  collectiveProgress: number
  neuralConnections: number
  userContribution: number
}

interface CerebroState {
  userIdentity: UserIdentity | null
  learningProfile: LearningProfile | null
  communityMetrics: CommunityMetrics

  // Actions
  setUserIdentity: (identity: UserIdentity) => void
  setLearningProfile: (profile: LearningProfile) => void
  updateCommunityMetrics: (metrics: Partial<CommunityMetrics>) => void
  trackProgress: (concept: string, timeSpent: number) => void
  completeTrack: (trackId: string) => void
}

export const useCerebroStore = create<CerebroState>()(
  persist(
    (set, get) => ({
      userIdentity: {
        id: 'constructores',
        title: 'Constructores',
        icon: '📚',
        color: 'from-green-500 to-emerald-500',
        suggestedAge: '10-12 años'
      },
      learningProfile: {
        userId: 'demo-user',
        identityId: 'constructores',
        learning_history: {
          completed_tracks: [],
          time_spent_per_concept: {},
          last_emotion_score: 0.7
        },
        preferences: {
          preferred_content_types: ['game', 'song'],
          difficulty_level: 3,
          interests: ['matematicas', 'ciencias']
        }
      },
      communityMetrics: {
        totalPioneers: 2847,
        evolutionIndex: 456,
        collectiveProgress: 67,
        neuralConnections: 156789,
        userContribution: 23
      },

      setUserIdentity: (identity) => set({ userIdentity: identity }),

      setLearningProfile: (profile) => set({ learningProfile: profile }),

      updateCommunityMetrics: (metrics) => set((state) => ({
        communityMetrics: { ...state.communityMetrics, ...metrics }
      })),

      trackProgress: (concept, timeSpent) => set((state) => {
        if (!state.learningProfile) return state
        const currentTime = state.learningProfile.learning_history.time_spent_per_concept[concept] || 0
        return {
          learningProfile: {
            ...state.learningProfile,
            learning_history: {
              ...state.learningProfile.learning_history,
              time_spent_per_concept: {
                ...state.learningProfile.learning_history.time_spent_per_concept,
                [concept]: currentTime + timeSpent
              }
            }
          }
        }
      }),

      completeTrack: (trackId) => set((state) => {
        if (!state.learningProfile) return state
        const completed = state.learningProfile.learning_history.completed_tracks
        if (completed.includes(trackId)) return state
        return {
          learningProfile: {
            ...state.learningProfile,
            learning_history: {
              ...state.learningProfile.learning_history,
              completed_tracks: [...completed, trackId]
            }
          }
        }
      })
    }),
    {
      name: 'newcool-cerebro-storage'
    }
  )
)
