import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Mirrors', path: '/mirrors' },
        { name: 'Application', path: '/application' },
        { name: 'About', path: '/about' },
        { name: 'Owner Profile', path: '/owner-profile' },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Link to="/" className="flex items-center space-x-2">
                            <span className="text-xl font-bold tracking-tight text-primary">
                                FW HW Glass Technology
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Contact Button (Desktop) */}
                    <div className="hidden md:flex items-center">
                        <a
                            href="tel:+251911226758"
                            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 gap-2"
                        >
                            <Phone className="h-4 w-4" />
                            <span>+251 911 226 758</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-muted-foreground hover:text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden border-t">
                    <div className="container mx-auto px-4 py-4 space-y-4">
                        <nav className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                        <div className="pt-4 border-t">
                            <a
                                href="tel:+251911226758"
                                className="flex items-center justify-center w-full rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 gap-2"
                            >
                                <Phone className="h-4 w-4" />
                                <span>+251 911 226 758</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
