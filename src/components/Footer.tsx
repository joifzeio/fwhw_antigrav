import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-200">
            <div className="container mx-auto px-4 py-12 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">FW HW Glass Technology</h3>
                        <p className="text-sm text-slate-400">
                            Premier Ethiopian-owned manufacturer and importer of architectural and safety glass solutions. Based in Addis Ababa, established to address the country's demand for high-quality, locally produced glass.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/owner-profile" className="hover:text-white transition-colors">Owner Profile</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">Contact Us</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start gap-2">
                                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                                <span>Koye Feche, Akaki-Kaliti Sub-city, Addis Ababa, Ethiopia</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone className="h-4 w-4 shrink-0" />
                                <span>+251 911 226 758 / +251 911 226 756</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail className="h-4 w-4 shrink-0" />
                                <span>fekaduglass@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-white">Follow Us</h3>
                        <div className="flex space-x-4">
                            {/* Social placeholders as specific URLs weren't provided except Telegram/WhatsApp handle */}
                            <a href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
                        </div>
                        <p className="text-sm text-slate-400">
                            Telegram/WhatsApp: @fwglasstech
                        </p>
                    </div>
                </div>

                {/* Google Maps */}
                <div className="mt-12 border-t border-slate-800 pt-8">
                    <h3 className="text-lg font-bold text-white mb-4 text-center">Our Location</h3>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.3!2d38.7!3d9.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMDAuMCJOIDM4wrA0MicwMC4wIkU!5e0!3m2!1sen!2set!4v1234567890"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="FW HW Glass Technology Location"
                        ></iframe>
                    </div>
                </div>

                <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm text-slate-400">
                    <p>&copy; 2025 FW HW Glass Technology PLC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
