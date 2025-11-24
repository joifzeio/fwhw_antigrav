import { CheckCircle2 } from 'lucide-react';

const About = () => {
    const timeline = [
        {
            year: '2004',
            title: 'Established as Fekadu General Glass Work',
            description: 'Started as a glass import and aluminum works business.'
        },
        {
            year: '2014',
            title: 'Established FW HW Importers PLC',
            description: 'Expanded into major glass import and distribution.'
        },
        {
            year: '2016',
            title: 'Diversified into Bamu Trading & Manufacturing PLC',
            description: 'Ventured into furniture and appliances.'
        },
        {
            year: 'Present',
            title: 'FW HW Glass Technology PLC',
            description: 'Established the manufacturing arm with high-temperature furnaces and polishing lines.'
        }
    ];

    const values = [
        'Quality', 'Integrity', 'Innovation', 'Efficiency',
        'Customer Focus', 'Reliability', 'Safety', 'Sustainability'
    ];

    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="container mx-auto px-4 md:px-6">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl mb-4">About Us</h1>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Innovating Ethiopia's Glass Industry for a Safer, Sustainable Future.
                    </p>
                </div>

                {/* Mission & Vision */}
                <div className="grid gap-12 md:grid-cols-2 mb-20">
                    <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-primary">
                        <h2 className="text-2xl font-bold mb-4 text-slate-900">Our Vision</h2>
                        <p className="text-lg text-slate-600">
                            To become Africa's benchmark in safety glass innovation, empowering infrastructure with sustainable, high-performance glass solutions.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-secondary">
                        <h2 className="text-2xl font-bold mb-4 text-slate-900">Our Mission</h2>
                        <p className="text-lg text-slate-600">
                            To locally manufacture world-class safety glass using advanced technology, reduce import dependency, create skilled employment, and elevate construction safety standards across Ethiopia.
                        </p>
                    </div>
                </div>

                {/* Our Story / Timeline */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Our Story</h2>
                    <div className="relative border-l border-slate-200 ml-3 md:ml-6 space-y-12">
                        {timeline.map((item, index) => (
                            <div key={index} className="relative pl-8 md:pl-12">
                                <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border border-white bg-primary shadow-sm" />
                                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                                    <span className="text-xl font-bold text-primary min-w-[80px]">{item.year}</span>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                                        <p className="text-slate-600">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Core Values */}
                <div>
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Core Values</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map((value, index) => (
                            <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                                <CheckCircle2 className="h-5 w-5 text-green-500 mr-3" />
                                <span className="font-medium text-slate-900">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
