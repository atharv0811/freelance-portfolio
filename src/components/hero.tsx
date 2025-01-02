"use client";

import Image from "next/image";
import Link from "next/link";
import { Oswald } from "next/font/google";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const oswald = Oswald({ subsets: ["latin"] });

const headingVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: "easeInOut" },
    },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1, ease: "easeInOut" },
    },
};

const buttonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: "easeInOut" },
    },
};

const Hero: React.FC = () => {
    return (
        <section id="home" className="h-full lg:pt-[90px] pb-[25px] bg-[url('/hero-slider-bg.webp')] bg-cover bg-no-repeat bg-center relative px-8">
            <div className="max-w-[1200px] mx-auto flex flex-col-reverse lg:flex-row items-center justify-between px-8 space-y-8 lg:space-y-0">
                <motion.div
                    className="flex flex-col items-center lg:items-start text-center lg:text-left"
                    initial="hidden"
                    animate="visible"
                    variants={headingVariants}
                >
                    <motion.h1
                        className={`${oswald.className} font-[700] capitalize leading-[1.2] text-[40px] md:text-[50px] lg:text-[60px] text-[#221b68]`}
                        variants={headingVariants}
                    >
                        <span className="text-[#6930c3]">I Am Atharv Karnekar</span> <br />{" "}
                        For Your Personal Development
                    </motion.h1>
                    <motion.div
                        className="w-full flex items-center justify-center lg:justify-start gap-3 mt-8"
                        variants={buttonVariants}
                    >
                        <Link href="/about">
                            <Button className="w-[8rem] md:w-[10rem] h-[2.5rem] md:h-[3rem] font-bold bg-[#6930c3] hover:bg-transparent text-white hover:text-[#6930c3] border border-[#6930c3] text-sm md:text-lg rounded transition-colors duration-150">
                                About Me
                            </Button>
                        </Link>
                        <Link href="#projects">
                            <Button className="w-[8rem] md:w-[10rem] h-[2.5rem] md:h-[3rem] font-bold bg-transparent text-[#6930c3] border border-[#6930c3] hover:bg-[#6930c3] hover:text-white text-sm md:text-lg rounded transition-colors duration-150">
                                Projects
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="flex justify-center lg:justify-end"
                    initial="hidden"
                    animate="visible"
                    variants={imageVariants}
                >
                    <Image
                        src="/hero-img.png"
                        alt="Hero Image"
                        height={600}
                        width={600}
                        className="max-w-full h-auto"
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
