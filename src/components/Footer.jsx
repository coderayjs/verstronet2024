import React from "react";
import verstronet from "../assets/verstronet.png";

const companyTitle = "Important Links";
                        const companyLinks = [
                            { label: "Contact", href: "#" },
                            { label: "Support", href: "#" },
                            { label: "Privacy", href: "#" },
                            { label: "Terms of Services", href: "#" },
                        ];

function Footer() {
    return (
        <footer className="bg-indigo-900">
            <div className="max-w-6xl mx-auto px-6 py-16 text-white">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    <div>
                        <h5 className="text-lg font-semibold"> Verstronet Inc.</h5>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <a href="#" className="hover:text-indigo-500">About us</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-indigo-500">Careers</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-indigo-500">Press</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-indigo-500">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-semibold">Classes</h5>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <a href="#" className="hover:text-indigo-500">Web Development</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-indigo-500">Mobile Development</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-indigo-500">UI/UX Design</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-indigo-500">Data Science</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-lg font-semibold">Features</h5>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <a href="#" className="hover:text-indigo-500">Tutorials</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-indigo-500">Resources</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-indigo-500">Guides</a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-indigo-500">Examples</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        

                        <h5 className="text-lg font-semibold">{companyTitle}</h5>
                        <ul className="mt-4 space-y-2">
                            {companyLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="hover:text-indigo-500">{link.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;