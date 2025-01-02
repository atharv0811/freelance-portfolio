'use client'

import { Oswald } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";

const oswald = Oswald({ subsets: ["latin"] });

const abouts = [
    {
        img: '/task-list1.png',
        title: 'Empowering Growth',
        description: 'Tailored solutions designed to drive your business forward.',
    },
    {
        img: '/task-list2.png',
        title: 'Supporting Enterprises',
        description: 'Flexible strategies to navigate challenges with confidence.',
    },
    {
        img: '/task-list3.png',
        title: 'Igniting Creativity',
        description: 'Innovative ideas to transform visions into reality.',
    },
];

const About: React.FC = () => {
    const leftAnimation = {
        hidden: { opacity: 0, x: -40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    const rightAnimation = {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    };

    return (
        <section className="bg-[url('/about-bg.webp')] bg-no-repeat bg-cover relative pb-[60px] pt-[80px] md:pb-[80px] md:pt-[90px]">
            <div className="max-w-[1200px] mx-auto px-8">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col lg:flex-row items-center lg:items-start"
                >
                    <motion.div
                        variants={leftAnimation}
                        className="md:flex-[0,0,33.3333%] lg:max-w-[33.3333%] lg:mt-[3rem]"
                    >
                        <div className="relative">
                            <Image
                                src="/about-left.png"
                                alt="About Left"
                                width={800}
                                height={800}
                                className="block align-middle"
                                priority
                            />
                            <div className="hidden lg:block absolute -bottom-[76px] -right-[50px] lg:-right-[150px] w-[150px] lg:w-[220px]">
                                <Image
                                    src="/about-left2.png"
                                    alt="Decorative"
                                    height={250}
                                    width={250}
                                    className="block align-middle"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={rightAnimation}
                        className="w-full md:flex-[0,0,50%] lg:max-w-[50%] lg:ml-[16.66667%]"
                    >
                        <div className="bg-[url('/about-right-bg.webp')] bg-no-repeat bg-cover p-4 md:p-8">
                            <div className="mb-[40px] md:mb-[55px]">
                                <h2
                                    className={`${oswald.className} font-[700] capitalize leading-[1.2] mb-0 text-[32px] lg:text-[48px] text-[#221b68] text-center lg:text-start`}
                                >
                                    <span className="text-[#6930c3]">We Deliver</span> Beyond Expectations
                                </h2>
                            </div>
                            {abouts.map((about, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={rightAnimation}
                                    className="mb-[15px] lg:mb-[20px] bg-white p-4 lg:p-[25px] flex items-center shadow-md rounded-md"
                                >
                                    <div className="mr-[15px] md:mr-[20px] w-[50px]">
                                        <Image
                                            src={about.img}
                                            alt={about.title}
                                            width={50}
                                            height={50}
                                            className="block align-middle"
                                        />
                                    </div>
                                    <div>
                                        <h5
                                            className={`${oswald.className} font-[700] capitalize leading-[1.2] mb-0 text-[16px] md:text-[18px] text-[#221b68]`}
                                        >
                                            {about.title}
                                        </h5>
                                        <p className="font-[500] mt-[5px] mb-0 text-[14px] text-[#221b68]">
                                            {about.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
