'use client';

import Slider from 'react-slick';
import { Oswald } from 'next/font/google';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const oswald = Oswald({ subsets: ['latin'] });

const testimonialData = [
    {
        id: 1,
        text: "The website they built for us is stunning and user-friendly. Our traffic has doubled, and we couldn’t be happier!",
        name: "Chetan Bhatkar",
        company: "Continental Constructions",
        image: "/client.png",
    },
    {
        id: 2,
        text: "Amazing team! They delivered a sleek, functional website that our customers love. Highly recommend!",
        name: "John Doe",
        company: "XYZ Corporation",
        image: "/client.png",
    },
    {
        id: 3,
        text: "They exceeded our expectations! The website transformed our online presence and boosted our client reach.",
        name: "Jane Smith",
        company: "ABC Enterprises",
        image: "/client.png",
    },
];

const Testimonials: React.FC = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const headingAnimation = {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: 'easeOut' },
    };

    const slideAnimation = {
        initial: { opacity: 0, y: -50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.7, ease: 'easeOut' },
    };

    return (
        <section className="bg-[url('/about-bg.webp')] bg-no-repeat bg-cover relative pt-[80px] pb-[220px] md:pt-[90px]">
            <div className="max-w-[1200px] mx-auto">
                <motion.div
                    initial={headingAnimation.initial}
                    whileInView={headingAnimation.animate}
                    transition={headingAnimation.transition}
                    viewport={{ once: true, amount: 0.5 }}
                    className="flex-[0,0,100%] max-w-[100%]"
                >
                    <div className="mb-[55px] text-center">
                        <h2
                            className={`${oswald.className} font-[700] capitalize leading-[1.2] mb-0 text-[#221b68] text-[48px]`}
                        >
                            <span className="text-[#6930c3]">Client</span> Testimonial
                        </h2>
                    </div>
                </motion.div>

                <div className='overflow-hidden'>
                    <Slider {...settings}>
                        {testimonialData.map((testimonial) => (
                            <motion.div
                                key={testimonial.id}
                                className="p-4 h-[18rem]"
                                initial={slideAnimation.initial}
                                whileInView={slideAnimation.animate}
                                transition={slideAnimation.transition}
                                viewport={{ once: true, amount: 0.5 }}
                            >
                                <div className="bg-white p-6 shadow-md flex flex-col h-full">
                                    <div className="flex-1 mb-6">
                                        <p className="font-[500] text-[#221b68] text-sm md:text-base">
                                            {testimonial.text}
                                        </p>
                                    </div>

                                    <div className="flex flex-row-reverse justify-between items-center gap-4">
                                        <Image
                                            src={testimonial.image}
                                            alt={`${testimonial.name}'s photo`}
                                            width={60}
                                            height={60}
                                            className="object-cover"
                                        />
                                        <div>
                                            <h4
                                                className={`${oswald.className} font-[700] capitalize leading-[1.2] mb-0 text-[#221b68] text-[16px] md:text-[20px]`}
                                            >
                                                {testimonial.name}
                                            </h4>
                                            <span className="block mt-[6px] text-[#7e7e7e] text-[14px] md:text-[16px]">
                                                {testimonial.company}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
