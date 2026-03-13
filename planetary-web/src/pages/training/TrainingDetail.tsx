import { type Component } from 'solid-js'
import { useParams, Navigate } from '@solidjs/router'
import { getTrainingBySlug } from '../../lib/training-config'
import { TrainingPunchProtocol } from './TrainingPunchProtocol'
import { TrainingFootbagSoccerBall } from './TrainingFootbagSoccerBall'
import { TrainingManifoldAxiomaticitySports } from './TrainingManifoldAxiomaticitySports'
import { TrainingNoLookManagement } from './TrainingNoLookManagement'
import { TrainingObjectSpaceEmbodiment } from './TrainingObjectSpaceEmbodiment'
import { TrainingSoccerKolmogorovEmbodiment } from './TrainingSoccerKolmogorovEmbodiment'

const SLUG_TO_COMPONENT: Record<string, Component> = {
  '30-minute-punch-protocol': TrainingPunchProtocol,
  'footbag-soccer-ball': TrainingFootbagSoccerBall,
  'manifold-axiomaticity-sports': TrainingManifoldAxiomaticitySports,
  'no-look-management': TrainingNoLookManagement,
  'object-space-embodiment': TrainingObjectSpaceEmbodiment,
  'soccer-kolmogorov-embodiment': TrainingSoccerKolmogorovEmbodiment,
}

export const TrainingDetail: Component = () => {
  const params = useParams<{ slug: string }>()
  const training = () => getTrainingBySlug(params.slug)
  const PageComponent = () => SLUG_TO_COMPONENT[params.slug]

  if (!training()) return <Navigate href="/training" />
  const Comp = PageComponent()
  if (!Comp) return <Navigate href="/training" />

  return <Comp />
}
