import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageHeader from '../components/PageHeader';
import ServicesSection from '../components/ServicesSection';

const Services = () => {
    return (
        <div className="min-h-screen bg-dark-950">
            <Navbar />
            <PageHeader
                title="Our Services"
                subtitle="Comprehensive technology solutions tailored for enterprise growth."
            />
            <ServicesSection />
            <Footer />
        </div>
    );
};

export default Services;
