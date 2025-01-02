'use client'

import { Oswald } from "next/font/google";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const oswald = Oswald({ subsets: ["latin"] });

const services = [
    {
        img: '/service-icon1.png',
        title: 'UI & UX Design',
        description: [
            "Craft clean, modern, and user-friendly interfaces tailored to your audience.",
            "Focus on user-centered design principles for seamless interactions.",
            "Ensure responsive and accessible designs across all devices.",
        ]
    },
    {
        img: '/service-icon2.png',
        title: 'Web Development',
        description: [
            "Develop fast, secure, and responsive websites using the latest technologies.",
            "Ensure cross-browser compatibility and smooth performance.",
            "Integrate dynamic features like forms, APIs, and animations.",
        ]
    },
    {
        img: '/service-icon3.png',
        title: 'WordPress',
        description: [
            "Build custom WordPress websites from scratch or optimize existing ones.",
            "Implement themes and plugins to meet your specific requirements.",
            "Ensure websites are SEO-friendly and mobile-optimized.",
        ]
    },
    {
        img: '/service-icon4.png',
        title: 'SEO',
        description: [
            "Conduct in-depth keyword research to improve your search rankings.",
            "Optimize on-page elements like meta tags, headings, and content.",
            "Enhance website performance, speed, and mobile-friendliness.",
        ]
    },
];

const Services: React.FC = () => {
    return (
        <section id="services" className="py-[90px] bg-gradient-to-b from-[#f9f9ff] to-white">
            <div className="max-w-[1200px] mx-auto px-8">
                <motion.div
                    className="text-center mb-[55px]"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className={`${oswald.className} text-[#221b68] text-[48px] font-[700] capitalize leading-[1.2] mb-0`}>
                        <span className="text-[#6930c3]">
                            Our
                        </span>{" "}
                        Solution Services
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            className="group relative p-6 border border-blue-200 rounded-lg shadow-md bg-white overflow-hidden"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute inset-0 bg-[#6930c3] opacity-0 transition-transform duration-300 transform scale-0 group-hover:scale-150 group-hover:opacity-[75%] rounded-lg"></div>

                            <div className="relative z-10 w-20 h-20 mb-4 mx-auto">
                                <Image
                                    src={service.img}
                                    alt={service.title || "Service Image"}
                                    width={100}
                                    height={100}
                                />
                            </div>

                            <h4 className={`${oswald.className} relative z-10 text-[20px] font-bold text-[#221b68] mb-4 text-center group-hover:text-white`}>
                                {service.title}
                            </h4>

                            <ul className="relative z-10 text-gray-600 group-hover:text-white text-sm space-y-5">
                                {service.description.map((desc, descIdx) => (
                                    <li key={descIdx} className="flex gap-2">
                                        <span><CheckCircle className="h-4 w-4 mt-[0.12rem]" /></span> {desc}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
