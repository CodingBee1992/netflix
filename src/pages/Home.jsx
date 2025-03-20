import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navigation from "../components/Navigation"


const Home = () => {
  return (
    <div className="flex flex-col bg-black text-white h-full">
        <Navigation />
        <Hero />
        <Footer />
    </div>
  )
}

export default Home