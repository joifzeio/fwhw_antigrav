import type { ReactNode } from 'react';
import { Layers, ShieldCheck, Zap, Box } from 'lucide-react';
import { QuoteModal } from '../components/QuoteModal';

// Using available images
import decorativeGlass from '../assets/images/decorative_glass_product_1763630451517.png';
import insulatedGlass from '../assets/images/insulated_glass_product_1763630444602.png';

import mirrorGlass from '../assets/images/mirror_glass_product_1763630458029.png';
import temperedGlass from '../assets/images/tempered_glass_product_1763630419374.png';

interface ProductItem {
    name: string;
    specs?: string;
    details?: string;
}

interface ProductCategory {
    title: string;
    icon: ReactNode;
    description: string;
    image: string;
    items: ProductItem[];
}

const Products = () => {
    const categories: ProductCategory[] = [
        {
            title: "Float Glass (Imported)",
            icon: <Layers className="h-6 w-6" />,
            description: "High-quality imported float glass for various architectural applications.",
            image: mirrorGlass, // Using mirror glass image as placeholder for float glass
            items: [
                { name: "Dark Grey", specs: "4mm - 6mm" },
                { name: "Ford Green", specs: "6mm" },
                { name: "Reflective Clear", specs: "5mm - 6mm" },
                { name: "Reflective Bronze", specs: "4mm" },
                { name: "Reflective Ford Blue", specs: "5mm - 6mm" }
            ]
        },
        {
            title: "Safety Glass (Local Mfg)",
            icon: <ShieldCheck className="h-6 w-6" />,
            description: "Locally manufactured safety glass meeting global standards.",
            image: temperedGlass,
            items: [
                {
                    name: "Tempered Glass",
                    specs: "6mm - 12mm (Clear & Bronze)",
                    details: "Heat-treated, 4-5x stronger than ordinary glass."
                },
                {
                    name: "Laminated Glass",
                    specs: "6.38mm - 10mm (Clear & Bronze)",
                    details: "Bonded with PVB interlayer for safety/security."
                }
            ]
        },
        {
            title: "Specialty Glass",
            icon: <Zap className="h-6 w-6" />,
            description: "Advanced glass solutions for specific performance requirements.",
            image: insulatedGlass,
            items: [
                {
                    name: "Insulated Glass Units (IGU)",
                    details: "Soundproof, gas-filled (Argon) for energy efficiency."
                },
                {
                    name: "Precision Cut & Polished",
                    details: "Custom dimensions and edge finishing."
                }
            ]
        },
        {
            title: "Other Materials",
            icon: <Box className="h-6 w-6" />,
            description: "Additional construction and decorative materials.",
            image: decorativeGlass,
            items: [
                {
                    name: "Polycarbonate Sheets",
                    specs: "2mm, 3mm",
                    details: "Clear, Brown, Orange, Blue"
                },
                {
                    name: "Acrylic Sheets",
                    specs: "3mm - 4mm",
                    details: "Clear, Blue, Black, Red, Yellow"
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-4">Our Products</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        From imported float glass to locally manufactured safety solutions, we offer a comprehensive range of high-quality glass products.
                    </p>
                </div>

                <div className="space-y-20">
                    {categories.map((category, index) => (
                        <div key={index} id={category.title.toLowerCase().replace(/\s+/g, '-')} className="scroll-mt-24">
                            <div className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-start`}>

                                {/* Image Section */}
                                <div className="w-full md:w-1/2 overflow-hidden rounded-xl shadow-lg">
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="w-full md:w-1/2 space-y-6">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                            {category.icon}
                                        </div>
                                        <h2 className="text-3xl font-bold text-slate-900">{category.title}</h2>
                                    </div>

                                    <p className="text-lg text-slate-600">
                                        {category.description}
                                    </p>

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        {category.items.map((item, itemIndex) => (
                                            <div key={itemIndex} className="bg-white p-4 rounded-lg border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                                                <h3 className="font-bold text-slate-900">{item.name}</h3>
                                                {item.specs && (
                                                    <p className="text-sm font-medium text-primary mt-1">{item.specs}</p>
                                                )}
                                                {item.details && (
                                                    <p className="text-sm text-slate-500 mt-2">{item.details}</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-6">
                                        <QuoteModal
                                            trigger={
                                                <button className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-accent text-accent-foreground hover:bg-accent/90 h-10 px-4 py-2">
                                                    Request Quote for {category.title}
                                                </button>
                                            }
                                            productName={category.title}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Products;
