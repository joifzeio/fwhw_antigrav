import Hero from '../components/Hero';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Hero />

            {/* Introduction Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
                        Welcome to FW HW Glass Technology
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        We are Ethiopia's premier manufacturer and importer of architectural and safety glass solutions.
                        From our state-of-the-art factory in Koye Feche to our distribution network, we are committed to
                        innovating the glass industry with quality, safety, and sustainability.
                    </p>
                </div>
            </section>

            <Contact />
        </div>
    );
};

export default Home;
