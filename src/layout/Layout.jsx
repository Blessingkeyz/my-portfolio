import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

export const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-dark-bg dark:text-white transition-colors duration-300">
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  )
}
