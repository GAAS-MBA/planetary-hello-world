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
import { CosmicEventCalibration } from './pages/CosmicEventCalibration'
import { JourneyMap } from './pages/JourneyMap'
import { GenesisTrigger } from './pages/GenesisTrigger'
import { TutorialStartupSequence } from './pages/TutorialStartupSequence'
import { TutorialRecommendedTraining } from './pages/TutorialRecommendedTraining'
import { TutorialErrorHandling } from './pages/TutorialErrorHandling'
import { TutorialSpecification } from './pages/TutorialSpecification'
import { TutorialSpecificationClassification } from './pages/tutorials/TutorialSpecificationClassification'
import { EventsSchedule } from './pages/EventsSchedule'
import { ScheduleArchive } from './pages/ScheduleArchive'
import { Calibrators } from './pages/Calibrators'
import { Cockpit } from './pages/Cockpit'
import { CockpitIndicatorEnvironmental } from './pages/cockpit/CockpitIndicatorEnvironmental'
import { CockpitIndicatorCivil } from './pages/cockpit/CockpitIndicatorCivil'
import { CockpitControllingModel } from './pages/cockpit/CockpitControllingModel'
import { CockpitVersion } from './pages/cockpit/CockpitVersion'
import { Library } from './pages/Library'
import { LibraryElements } from './pages/library/LibraryElements'
import { LibraryDynamics } from './pages/library/LibraryDynamics'
import { LibraryScale } from './pages/library/LibraryScale'
import { LibrarySpeciesLandscape } from './pages/library/LibrarySpeciesLandscape'
import { LibrarySpeciesTaxonomy } from './pages/library/LibrarySpeciesTaxonomy'
import { LibrarySI } from './pages/library/LibrarySI'

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
      <Route path="/calibration/cosmic-event" component={CosmicEventCalibration} />
      <Route path="/journey" component={JourneyMap} />
      <Route path="/genesis-trigger" component={GenesisTrigger} />
      <Route path="/tutorials/specification" component={TutorialSpecification} />
      <Route path="/tutorials/specification/classification" component={TutorialSpecificationClassification} />
      <Route path="/tutorials/startup-sequence" component={TutorialStartupSequence} />
      <Route path="/tutorials/recommended-training" component={TutorialRecommendedTraining} />
      <Route path="/tutorials/error-handling" component={TutorialErrorHandling} />
      <Route path="/events/schedule" component={EventsSchedule} />
      <Route path="/events/schedule-archive" component={ScheduleArchive} />
      <Route path="/calibrators" component={Calibrators} />
      <Route path="/cockpit" component={Cockpit} />
      <Route path="/cockpit/indicator-environmental" component={CockpitIndicatorEnvironmental} />
      <Route path="/cockpit/indicator-civil" component={CockpitIndicatorCivil} />
      <Route path="/cockpit/controlling-model" component={CockpitControllingModel} />
      <Route path="/cockpit/version" component={CockpitVersion} />
      <Route path="/library" component={Library} />
      <Route path="/library/elements" component={LibraryElements} />
      <Route path="/library/dynamics" component={LibraryDynamics} />
      <Route path="/library/scale" component={LibraryScale} />
      <Route path="/library/si" component={LibrarySI} />
      <Route path="/library/species-landscape" component={LibrarySpeciesLandscape} />
      <Route path="/library/species-taxonomy" component={LibrarySpeciesTaxonomy} />
    </Router>
  )
}
