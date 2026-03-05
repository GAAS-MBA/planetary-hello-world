import { createSignal, type Component } from 'solid-js'
import { Router, Route } from '@solidjs/router'
import type { RouteSectionProps } from '@solidjs/router'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Breadcrumb } from './components/Breadcrumb'
import { PageMeta } from './components/PageMeta'
import { Home } from './pages/Home'
import { Architect } from './pages/Architect'
import { Axiom } from './pages/Axiom'
import { Axiomaticity } from './pages/Axiomaticity'
import { AxiomaticSystem } from './pages/AxiomaticSystem'
import { SpaceCalibration } from './pages/SpaceCalibration'
import { GalaxyCalibration } from './pages/GalaxyCalibration'
import { SolarCalibration } from './pages/SolarCalibration'
import { PlanetCalibration } from './pages/PlanetCalibration'
import { CivilCalibration } from './pages/CivilCalibration'
import { TimeOrbitCalibration } from './pages/TimeOrbitCalibration'
import { JourneyMap } from './pages/JourneyMap'
import { GenesisTrigger } from './pages/GenesisTrigger'
import { TutorialStartupSequence } from './pages/TutorialStartupSequence'
import { TutorialRecommendedTraining } from './pages/TutorialRecommendedTraining'
import { TutorialErrorHandling } from './pages/TutorialErrorHandling'
import { EventsStarInSeries } from './pages/EventsStarInSeries'

const AppLayout: Component<RouteSectionProps> = (props) => {
  const [sidebarOpen, setSidebarOpen] = createSignal(false)

  return (
    <div class="flex min-h-screen flex-col md:flex-row">
      <Sidebar open={sidebarOpen()} onClose={() => setSidebarOpen(false)} />
      <div class="flex flex-1 flex-col">
        <Header
          onMenuToggle={() => setSidebarOpen((o) => !o)}
          sidebarOpen={sidebarOpen()}
        />
        <main class="flex-1 p-4 md:p-6 lg:p-8">
          <PageMeta />
          <Breadcrumb />
          {props.children}
        </main>
        </div>
      </div>
  )
}

export default function App() {
  return (
    <Router root={AppLayout}>
      <Route path="/" component={Home} />
      <Route path="/architect" component={Architect} />
      <Route path="/axiom" component={Axiom} />
      <Route path="/axiomaticity" component={Axiomaticity} />
      <Route path="/axiomatic-system" component={AxiomaticSystem} />
      <Route path="/calibration/space" component={SpaceCalibration} />
      <Route path="/calibration/galaxy" component={GalaxyCalibration} />
      <Route path="/calibration/solar" component={SolarCalibration} />
      <Route path="/calibration/planet" component={PlanetCalibration} />
      <Route path="/calibration/civil" component={CivilCalibration} />
      <Route path="/calibration/orbit" component={TimeOrbitCalibration} />
      <Route path="/journey" component={JourneyMap} />
      <Route path="/genesis-trigger" component={GenesisTrigger} />
      <Route path="/tutorials/startup-sequence" component={TutorialStartupSequence} />
      <Route path="/tutorials/recommended-training" component={TutorialRecommendedTraining} />
      <Route path="/tutorials/error-handling" component={TutorialErrorHandling} />
      <Route path="/events/star-in-series" component={EventsStarInSeries} />
    </Router>
  )
}
