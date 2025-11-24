import { Link } from 'react-router-dom';
import temperedGlass from '../assets/images/tempered_glass_product_1763630419374.png';
import decorativeGlass from '../assets/images/decorative_glass_product_1763630451517.png';
import insulatedGlass from '../assets/images/insulated_glass_product_1763630444602.png';

const applications = [
    {
        category: "Architectural Glass",
        slug: "architectural",
        description: "Premium glass solutions for modern architecture",
        image: temperedGlass,
        types: [
            "Glass Partition",
            "Glass Staircase",
            "Glass Railings",
            "Glass Balustrade",
            "Pool Fence",
            "Frameless Glass Doors",
            "Shower Enclosures",
            "Curtain Wall Glass",
            "Glass Terrace",
            "Green House"
        ]
    },
    {
        category: "Furniture Glass",
        slug: "furniture",
        description: "Elegant glass components for furniture applications",
        image: decorativeGlass,
        types: [
            "Glass Table Top",
            "Glass Shelves",
            "Glass Splashbacks",
            "Cabinet Glass",
            "Display Cases"
        ]
    },
    {
        category: "Special Glass",
        slug: "special",
        description: "Specialized glass solutions for unique requirements",
        image: insulatedGlass,
        types: [
            "Glass Louvers",
            "Glass Padel Tennis Courts",
            "Glass Picture Frame",
            "Decorative Panels",
            "Custom Projects"
        ]
    }
];

const Application = () => {
    return (
        <div className="min-h-screen">
            <main>
                <section className="py-20 bg-secondary/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12 animate-fade-in">
                            <h1 className="text-5xl font-bold text-foreground mb-4">Glass Applications</h1>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                Discover the versatility of glass across diverse applications. From architectural marvels
                                to functional furniture components, our glass solutions bring beauty and performance to
                                every project.
                            </p>
                        </div>

                        <div className="space-y-12">
                            {applications.map((app, index) => (
                                <div
                                    key={app.slug}
                                    className="bg-card rounded-lg shadow-sm overflow-hidden animate-slide-up"
                                    style={{ animationDelay: `${index * 150}ms` }}
                                >
                                    <div className="h-64 overflow-hidden">
                                        <img
                                            src={app.image}
                                            alt={app.category}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="bg-secondary/20 p-6">
                                        <h2 className="text-3xl font-bold text-card-foreground mb-2">{app.category}</h2>
                                        <p className="text-base text-muted-foreground">{app.description}</p>
                                    </div>
                                    <div className="p-6">
                                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                                            {app.types.map((type, idx) => (
                                                <div
                                                    key={idx}
                                                    className="border border-border rounded-lg p-4 hover:bg-secondary/20 transition-colors"
                                                >
                                                    <p className="font-medium text-foreground">{type}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <Link to={`/application/${app.slug}`}>
                                            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                                                View {app.category} Details
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 bg-background rounded-lg p-8 shadow-lg text-center">
                            <h2 className="text-3xl font-bold text-foreground mb-4">
                                Need Help Choosing the Right Solution?
                            </h2>
                            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                                Our experienced team can help you select the perfect glass type and specification
                                for your specific application. Get expert advice tailored to your project requirements.
                            </p>
                            <a href="/#contact">
                                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-accent text-accent-foreground hover:bg-accent/90 h-11 px-8">
                                    Consult Our Experts
                                </button>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Application;
