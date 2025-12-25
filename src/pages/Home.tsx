import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ServicesSection from '../components/ServicesSection';
import VisionMission from '../components/VisionMission';
import TechStack from '../components/TechStack';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <ServicesSection />
            <VisionMission />
            <TechStack />
            <Footer />
        </div>
    );
};

export default Home;
