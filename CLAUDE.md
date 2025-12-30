# CLAUDE.md - NewCool Cerebro Evolutivo

## Identidad del Modulo

```
MODULO: newcool-cerebro
DEPARTAMENTO: T12-COMMUNITY
ROL: Dashboard de Metricas de Comunidad e Impacto
DOMINIO: cerebro.newcool.io
```

## Descripcion

Cerebro Evolutivo es el dashboard central de metricas de comunidad, impacto y evolucion colectiva del ecosistema NewCool. Visualiza en tiempo real el progreso de los "pioneros" (usuarios) y su contribucion a la consciencia colectiva.

## Componentes Principales

| Componente | Funcion | Prioridad |
|------------|---------|-----------|
| `CollectiveResonance` | Metricas globales de comunidad | P0 |
| `EvolutionIndex` | Indice de evolucion mental (IEM) | P0 |
| `PotentialPredictor` | Predicciones de potencial evolutivo | P1 |
| `NeuroMap` | Mapa neuronal de progreso | P1 |
| `CognitiveSkills` | Habilidades cognitivas | P1 |
| `EvolutionaryMissions` | Misiones de evolucion | P2 |

## Metricas Clave

```yaml
community_metrics:
  totalPioneers: "Usuarios activos en el ecosistema"
  evolutionIndex: "Indice promedio de evolucion"
  collectiveProgress: "Progreso hacia metas colectivas"
  neuralConnections: "Conexiones entre usuarios"
  userContribution: "Impacto individual en la comunidad"

evolution_stages:
  - name: "Homo Sapiens"
    iem_range: "0-400"
    description: "Base cognitiva establecida"
  - name: "Homo Sapiens Plus"
    iem_range: "400-600"
    description: "Despertar mental iniciado"
  - name: "Homo Creativus"
    iem_range: "600-800"
    description: "Revolucion creativa en progreso"
  - name: "Homo Evolutis"
    iem_range: "800-1000"
    description: "Transcendencia cognitiva alcanzada"
```

## Stack Tecnologico

```
Frontend: Next.js 15, React 19
Animaciones: Framer Motion
Estado: Zustand (persistente)
Estilos: Tailwind CSS 4
Puerto: 3012
```

## Comandos

```bash
# Desarrollo
npm run dev

# Build
npm run build

# Produccion
npm run start
```

## Integracion con T12-COMMUNITY

```yaml
recibe_de:
  - newcool-community: datos de usuarios
  - newcool-impact: metricas de impacto
  - newcool-analytics: datos agregados

provee_a:
  - T12: visualizacion de metricas
  - T03-EDUCATION: progreso de aprendizaje
  - T02-ATLAS: datos de personalizacion
```

## API Endpoints (Planificados)

```yaml
GET /api/metrics/community:
  description: "Metricas de comunidad en tiempo real"
  response: CommunityMetrics

GET /api/metrics/user/{userId}:
  description: "Metricas individuales de usuario"
  response: UserEvolutionMetrics

GET /api/predictions/{userId}:
  description: "Predicciones de potencial evolutivo"
  response: PredictionResult
```

## Estructura de Archivos

```
newcool-cerebro/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx           # Dashboard principal
│   │   └── globals.css
│   ├── components/
│   │   └── Dashboard/
│   │       ├── CollectiveResonance.tsx
│   │       ├── EvolutionIndex.tsx
│   │       ├── PotentialPredictor.tsx
│   │       ├── NeuroMap.tsx
│   │       ├── CognitiveSkills.tsx
│   │       └── EvolutionaryMissions.tsx
│   └── lib/
│       └── stores/
│           └── useCerebroStore.ts
├── package.json
├── tsconfig.json
├── next.config.mjs
└── CLAUDE.md
```

## Principios de Diseno

```
1. Visualizacion en tiempo real
2. Metricas de impacto REAL (no vanity)
3. Gamificacion etica (sin FOMO)
4. Feedback positivo y constructivo
5. Privacidad de datos del usuario
```

**Mantra: "Comunidad que crece junta, impacto que se mide."**
