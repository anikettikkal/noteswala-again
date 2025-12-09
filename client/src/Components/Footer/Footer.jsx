import React from "react";
import Logo from "../../assets/Logo/bcs-noteswala-logo.jpg"

function Footer() {
    return (
        <>
            <footer className="bg-gray-50 py-12">
                <div className="container mx-auto px-6 md:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                        <div>
                            <div className="flex items-center">
                                <img className="h-[100px]" src={Logo} alt="" /> &nbsp;&nbsp;&nbsp;
                                <span className="text-lg font-bold text-gray-900">BCS-NOTESWALA</span>
                            </div>
                            <p className="mt-4 text-gray-600">
                                Empowering students with quality educational resources since 2018.
                            </p>
                        </div>
                        <div>
                            <h3 className="mb-4 text-sm font-bold uppercase text-gray-500">Resources</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 hover:text-purple-600">Study Notes</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-purple-600">Question Papers</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-purple-600">Textbooks</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-purple-600">Study Guides</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 text-sm font-bold uppercase text-gray-500">Company</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 hover:text-purple-600">About Us</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-purple-600">Contact</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-purple-600">Careers</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-purple-600">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-4 text-sm font-bold uppercase text-gray-500">Legal</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="text-gray-600 hover:text-purple-600">Privacy Policy</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-purple-600">Terms of Service</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-purple-600">Copyright</a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </footer>
        </>
    )
}
export default Footer