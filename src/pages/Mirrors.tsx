import { QuoteModal } from '../components/QuoteModal';
import mirrorGlassImage from '../assets/images/mirror_glass_product_1763630458029.png';
import glassInteriorImage from '../assets/images/glass_hero_background_1763630412264.png';

const mirrorTypes = [
    {
        title: "Aluminum Mirror",
        slug: "aluminum-mirror",
        description: "Cost-effective mirrors with aluminum coating, ideal for general applications",
        features: ["Standard quality", "Various sizes", "Economical option"],
        image: mirrorGlassImage
    },
    {
        title: "Silver Mirror",
        slug: "silver-mirror",
        description: "Premium mirrors with silver coating for superior reflection",
        features: ["High reflectivity", "Excellent clarity", "Durable coating"],
        image: mirrorGlassImage
    },
    {
        title: "Copper & Lead Free Mirror",
        slug: "copper-lead-free",
        description: "Environmentally friendly mirrors without harmful chemicals",
        features: ["Eco-friendly", "Safe for all applications", "Green building certified"],
        image: mirrorGlassImage
    },
    {
        title: "Safety Mirror",
        slug: "safety-mirror",
        description: "Laminated mirrors for enhanced safety and security",
        features: ["Shatter-proof", "Safety backing", "Public space approved"],
        image: mirrorGlassImage
    },
    {
        title: "Antique Mirror",
        slug: "antique-mirror",
        description: "Decorative mirrors with aged, vintage appearance",
        features: ["Unique patterns", "Custom aging", "Artistic designs"],
        image: glassInteriorImage
    },
    {
        title: "2 Way Mirror",
        slug: "two-way-mirror",
        description: "One-way observation mirrors for security and commercial use",
        features: ["Privacy control", "Professional grade", "Custom specifications"],
        image: mirrorGlassImage
    },
    {
        title: "Smart Mirror",
        slug: "smart-mirror",
        description: "Technology-integrated mirrors with display capabilities",
        features: ["Digital display", "Touch interface", "IoT compatible"],
        image: glassInteriorImage
    }
];

const Mirrors = () => {
    return (
        <div className="min-h-screen">
            <main>
                <section className="py-20 bg-secondary/30">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12 animate-fade-in">
                            <h1 className="text-5xl font-bold text-foreground mb-4">Mirror Glass Solutions</h1>
                            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                                Premium quality mirrors manufactured to the highest standards. From standard aluminum mirrors
                                to cutting-edge smart mirrors, we provide complete mirror solutions for residential, commercial,
                                and industrial applications.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {mirrorTypes.map((mirror, index) => (
                                <div
                                    key={mirror.slug}
                                    className="bg-card rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-slide-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="h-48 overflow-hidden">
                                        <img
                                            src={mirror.image}
                                            alt={mirror.title}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-card-foreground mb-2">{mirror.title}</h3>
                                        <p className="text-muted-foreground mb-4">{mirror.description}</p>
                                        <ul className="space-y-2 mb-4">
                                            {mirror.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center text-sm text-muted-foreground">
                                                    <span className="mr-2 text-accent">✓</span>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <QuoteModal
                                            trigger={
                                                <button className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
                                                    Request Quote
                                                </button>
                                            }
                                            productName={mirror.title}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 bg-background rounded-lg p-8 shadow-lg">
                            <h2 className="text-3xl font-bold text-foreground mb-6">Custom Mirror Manufacturing</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground mb-4">Capabilities</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <span className="text-accent mr-2">•</span>
                                            <span className="text-muted-foreground">Custom sizes up to 3300mm x 2440mm</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent mr-2">•</span>
                                            <span className="text-muted-foreground">Various thickness options (3mm-8mm)</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent mr-2">•</span>
                                            <span className="text-muted-foreground">Edge polishing and beveling</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent mr-2">•</span>
                                            <span className="text-muted-foreground">Shape cutting and drilling</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent mr-2">•</span>
                                            <span className="text-muted-foreground">Safety backing options</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-foreground mb-4">Applications</h3>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <span className="text-accent mr-2">•</span>
                                            <span className="text-muted-foreground">Bathroom and vanity mirrors</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent mr-2">•</span>
                                            <span className="text-muted-foreground">Wall mirrors and decorative pieces</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent mr-2">•</span>
                                            <span className="text-muted-foreground">Gym and dance studio mirrors</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent mr-2">•</span>
                                            <span className="text-muted-foreground">Retail and commercial displays</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="text-accent mr-2">•</span>
                                            <span className="text-muted-foreground">Architectural feature mirrors</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-6 text-center">
                                <QuoteModal
                                    trigger={
                                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-accent text-accent-foreground hover:bg-accent/90 h-11 px-8">
                                            Request Custom Quote
                                        </button>
                                    }
                                    productName="Custom Mirror Solutions"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Mirrors;
