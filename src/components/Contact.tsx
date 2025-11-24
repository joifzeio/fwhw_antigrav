import { Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Get in Touch</h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Visit our factory or warehouse for inquiries and orders.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Factory Address */}
                    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm text-center">
                        <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Head Office & Factory</h3>
                        <p className="text-slate-600">
                            Koye Feche, Akaki-Kaliti Sub-city<br />
                            Addis Ababa, Ethiopia<br />
                            (6,000 m² facility)
                        </p>
                    </div>

                    {/* Warehouse Address */}
                    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm text-center">
                        <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Warehouse</h3>
                        <p className="text-slate-600">
                            Near Gerji Roba Bakery<br />
                            Bole Sub-city, Addis Ababa<br />
                            (1,350 m²)
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm text-center">
                        <div className="p-3 rounded-full bg-primary/10 text-primary mb-4">
                            <Phone className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Contact Details</h3>
                        <p className="text-slate-600 mb-2">
                            <a href="tel:+251911226758" className="hover:text-primary">+251 911 226 758</a>
                        </p>
                        <p className="text-slate-600 mb-2">
                            <a href="tel:+251911226756" className="hover:text-primary">+251 911 226 756</a>
                        </p>
                        <p className="text-slate-600">
                            <a href="mailto:fekaduglass@gmail.com" className="hover:text-primary">fekaduglass@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
