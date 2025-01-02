"use client";

import { Oswald } from "next/font/google";
import { motion } from "framer-motion";

const oswald = Oswald({ subsets: ["latin"] });

const projects = [
    {
        id: 1,
        img: "/project1.webp",
    },
    {
        id: 2,
        img: "/project2.webp",
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-[90px]">
            <div className="max-w-[1200px] mx-auto px-8">
                <div className="flex-[0,0,100%] max-w-[100%]">
                    <motion.div
                        className="mb-[55px] text-center"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h2
                            className={`${oswald.className} font-[700] capitalize leading-[1.2] mb-0 text-[#221b68] text-[48px]`}
                        >
                            <span className="text-[#6930c3]">Explore</span> My Work
                        </h2>
                    </motion.div>
                </div>

                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={idx}
                                className="w-full h-[17rem] shadow-lg rounded-lg"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div
                                    className="relative inline-block w-full h-full bg-cover bg-no-repeat bg-transparent bg-top hover:bg-bottom transition-all duration-5000 ease-in-out border border-[#bba1e4] rounded-lg"
                                    style={{ backgroundImage: `url(${project.img})` }}
                                ></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
