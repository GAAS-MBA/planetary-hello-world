import { createSignal, type Component } from 'solid-js'
import { HashRouter, Route } from '@solidjs/router'
import type { RouteSectionProps } from '@solidjs/router'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Home } from './pages/Home'
import { Architect } from './pages/Architect'
import { Axiomaticity } from './pages/Axiomaticity'
import { SpaceCalibration } from './pages/SpaceCalibration'
import { TimeOrbitCalibration } from './pages/TimeOrbitCalibration'
import { CivilCalibration } from './pages/CivilCalibration'
import { JourneyMap } from './pages/JourneyMap'

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
          <main class="flex-1 p-4 md:p-6 lg:p-8">{props.children}</main>
        </div>
      </div>
  )
}

export default function App() {
  return (
    <HashRouter root={AppLayout}>
      <Route path="/" component={Home} />
      <Route path="/architect" component={Architect} />
      <Route path="/axiomaticity" component={Axiomaticity} />
      <Route path="/space" component={SpaceCalibration} />
      <Route path="/time-orbit" component={TimeOrbitCalibration} />
      <Route path="/civil" component={CivilCalibration} />
      <Route path="/journey" component={JourneyMap} />
    </HashRouter>
  )
}
