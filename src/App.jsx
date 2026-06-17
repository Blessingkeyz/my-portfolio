import BgAnimation from './components/BackgrooundAnimation/BackgroundAnimation'
import Hero from './components/Hero/Hero'
import Projects from './components/Projects/Projects'
import Technologies from './components/Technologies/Technologies'
import Timeline from './components/TimeLine/TimeLine'
import { Layout } from './layout/Layout'
import { ThemeProvider } from './context/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
      <Layout>
        {/* Hero section: BgAnimation absolutely behind, Hero content on top */}
        <section className="relative max-w-content mx-auto px-4 md:px-12 overflow-hidden min-h-[calc(100vh-80px)]">
          <div className="absolute inset-0 flex items-center justify-end pointer-events-none">
            <BgAnimation />
          </div>
          <div className="relative z-10">
            <Hero />
          </div>
        </section>
        <Projects />
        <Technologies />
        <Timeline />
      </Layout>
    </ThemeProvider>
  )
}

export default App
