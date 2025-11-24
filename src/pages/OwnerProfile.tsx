import { Award, Briefcase } from 'lucide-react';
import ownerProfileImage from '../assets/owner-profile.png';

const OwnerProfile = () => {
    return (
        <div className="min-h-screen bg-slate-50 py-12">
            <div className="container mx-auto px-4 md:px-6">

                {/* Profile Header */}
                <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-12">
                    <div className="bg-slate-900 h-32 md:h-48 relative"></div>
                    <div className="px-8 pb-8">
                        <div className="relative flex flex-col md:flex-row items-center md:items-end -mt-12 md:-mt-16 mb-6">
                            <div className="h-32 w-32 md:h-40 md:w-40 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-md">
                                <img src={ownerProfileImage} alt="Ato Fekadu Woldegebriel Kidane" className="h-full w-full object-cover" />
                            </div>
                            <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                                <h1 className="text-3xl font-bold text-slate-900">Ato Fekadu Woldegebriel Kidane</h1>
                                <p className="text-lg text-primary font-medium">Founder & General Manager</p>
                            </div>
                        </div>

                        <div className="prose max-w-none text-slate-600">
                            <p className="text-lg leading-relaxed">
                                An accomplished Ethiopian entrepreneur with over 23 years of experience in glass technology, construction materials, and manufacturing.
                                Ato Fekadu has been a pivotal figure in modernizing Ethiopia's glass industry, driving innovation from simple imports to advanced local manufacturing.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                    {/* Business Portfolio */}
                    <div className="md:col-span-2 space-y-8">
                        <h2 className="text-2xl font-bold text-slate-900 flex items-center">
                            <Briefcase className="mr-2 h-6 w-6 text-primary" />
                            Business Portfolio
                        </h2>

                        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-primary">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Fekadu General Glass Work</h3>
                            <p className="text-sm text-slate-500 mb-4">Established 2004</p>
                            <p className="text-slate-600">
                                The foundation of the group, specializing in glass import and aluminum works, setting the standard for quality installation and service.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-primary">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">FW HW Importers PLC</h3>
                            <p className="text-sm text-slate-500 mb-4">Established 2014 • Level 1 Taxpayer</p>
                            <p className="text-slate-600">
                                A major player in glass import and distribution, recognized as a compliant and significant contributor to the national economy.
                            </p>
                        </div>

                        <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-primary">
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Bamu Trading & Manufacturing PLC</h3>
                            <p className="text-sm text-slate-500 mb-4">Established 2016</p>
                            <p className="text-slate-600">
                                A diversified venture into furniture and pharmaceuticals, demonstrating broad business acumen and commitment to local industrial development.
                            </p>
                        </div>
                    </div>

                    {/* Awards & Recognition */}
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900 flex items-center mb-8">
                            <Award className="mr-2 h-6 w-6 text-yellow-500" />
                            Awards & Recognition
                        </h2>

                        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg shadow-sm p-6 border border-yellow-100">
                            <div className="flex items-center justify-center h-16 w-16 bg-yellow-100 rounded-full mb-4 mx-auto">
                                <Award className="h-8 w-8 text-yellow-600" />
                            </div>
                            <h3 className="text-lg font-bold text-center text-slate-900 mb-2">2025 Gold Award</h3>
                            <p className="text-sm text-center text-slate-600 mb-4">Ethiopian Customs Commission</p>
                            <p className="text-sm text-center text-slate-500 italic">
                                Endorsed by the Office of the Prime Minister
                            </p>
                            <div className="mt-4 pt-4 border-t border-yellow-200 text-sm text-slate-700 text-center">
                                Recognized for exemplary tax compliance and significant economic contribution.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default OwnerProfile;
