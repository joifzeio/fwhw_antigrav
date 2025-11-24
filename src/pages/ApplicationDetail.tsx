import { Link, useParams } from 'react-router-dom';
import { QuoteModal } from '../components/QuoteModal';

const applicationData: Record<string, any> = {
    architectural: {
        title: "Architectural Glass",
        description: "Transform spaces with our architectural glass solutions",
        applications: [
            {
                name: "Glass Partition",
                description: "Create flexible, light-filled spaces with frameless or framed glass partitions"
            },
            {
                name: "Glass Staircase",
                description: "Modern floating glass stairs and treads for stunning architectural statements"
            },
            {
                name: "Glass Railings",
                description: "Safe and elegant glass railing systems for balconies and stairs"
            },
            {
                name: "Glass Balustrade",
                description: "Unobstructed views with strong, durable glass balustrade systems"
            },
            {
                name: "Pool Fence",
                description: "Safety-compliant frameless glass pool fencing for maximum visibility"
            },
            {
                name: "Frameless Glass Doors",
                description: "Sleek, modern door solutions without visible frames"
            },
            {
                name: "Shower Enclosures",
                description: "Custom glass shower enclosures in various configurations"
            },
            {
                name: "Curtain Wall Glass",
                description: "High-performance facade systems for commercial buildings"
            },
            {
                name: "Glass Terrace",
                description: "Covered outdoor spaces with glass roofing and walls"
            },
            {
                name: "Green House",
                description: "Specialized glass for optimal plant growth environments"
            }
        ]
    },
    furniture: {
        title: "Furniture Glass",
        description: "Elegant glass components for contemporary furniture designs",
        applications: [
            {
                name: "Glass Table Top",
                description: "Tempered glass table tops in various shapes and sizes"
            },
            {
                name: "Glass Shelves",
                description: "Strong, stylish glass shelving for display and storage"
            },
            {
                name: "Glass Splashbacks",
                description: "Hygienic, easy-to-clean kitchen and bathroom splashbacks"
            },
            {
                name: "Cabinet Glass",
                description: "Clear or decorative glass for cabinet doors and inserts"
            },
            {
                name: "Display Cases",
                description: "Showcase glass for retail and museum applications"
            }
        ]
    },
    special: {
        title: "Special Glass Applications",
        description: "Innovative glass solutions for unique requirements",
        applications: [
            {
                name: "Glass Louvers",
                description: "Adjustable glass blade systems for ventilation and light control"
            },
            {
                name: "Glass Padel Tennis Courts",
                description: "Specialized tempered glass walls for padel tennis facilities"
            },
            {
                name: "Glass Picture Frame",
                description: "Museum-quality framing glass with UV protection options"
            },
            {
                name: "Decorative Panels",
                description: "Custom decorative glass panels for interior design"
            },
            {
                name: "Custom Projects",
                description: "Bespoke glass solutions for unique architectural visions"
            }
        ]
    }
};

const ApplicationDetail = () => {
    const { category } = useParams();
    const data = category ? applicationData[category] : null;

    if (!data) {
        return (
            <div className="min-h-screen">
                <main className="py-20">
                    <div className="container mx-auto px-4 text-center">
                        <h1 className="text-4xl font-bold text-foreground mb-4">Application Not Found</h1>
                        <Link to="/application">
                            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                                Back to Applications
                            </button>
                        </Link>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen">
            <main>
                <section className="py-12 bg-secondary/30">
                    <div className="container mx-auto px-4">
                        <Link to="/application" className="text-accent hover:underline mb-4 inline-block">
                            ← Back to Applications
                        </Link>
                        <h1 className="text-5xl font-bold text-foreground mb-4">{data.title}</h1>
                        <p className="text-lg text-muted-foreground max-w-3xl">
                            {data.description}
                        </p>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {data.applications.map((app: any, idx: number) => (
                                <div key={idx} className="bg-card rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-6">
                                    <h3 className="text-xl font-bold text-foreground mb-3">{app.name}</h3>
                                    <p className="text-muted-foreground mb-4">{app.description}</p>
                                    <QuoteModal
                                        trigger={
                                            <button className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                                                Get Quote
                                            </button>
                                        }
                                        productName={app.name}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ApplicationDetail;
