import type { Metadata } from "next";
import { Oswald } from 'next/font/google';
import Image from 'next/image';

const oswald = Oswald({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: "About | Atharv Karnekar",
    description: "Showcasing modern web development projects with expertise in React, Next.js, and MongoDB. Let’s build innovative, responsive, and user-friendly digital experiences together.",
};

const Data = [
    {
        "name": "HTML",
        "icon": "https://img.icons8.com/?size=100&id=20909&format=png&color=000000"
    },
    {
        "name": "CSS3",
        "icon": "https://img.icons8.com/color/48/000000/css3.png"
    },
    {
        "name": "JavaScript",
        "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png"
    },
    {
        "name": "Typescript",
        "icon": "https://img.icons8.com/color/48/000000/typescript.png"
    },
    {
        "name": "ReactJS",
        "icon": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/000000/external-react-a-javascript-library-for-building-user-interfaces-logo-color-tal-revivo.png"
    },
    {
        "name": "Redux",
        "icon": "https://img.icons8.com/color/48/000000/redux.png"
    },
    {
        "name": "NextJs",
        "icon": "https://img.icons8.com/color/48/000000/nextjs.png"
    },
    {
        "name": "NodeJS",
        "icon": "https://img.icons8.com/color/48/000000/nodejs.png"
    },
    {
        "name": "ExpressJS",
        "icon": "https://img.icons8.com/color/48/000000/express-js.png"
    },
    {
        "name": "MongoDB",
        "icon": "https://img.icons8.com/color/48/000000/mongodb.png"
    },
    {
        "name": "MySQL",
        "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png"
    },
    {
        "name": "Git VCS",
        "icon": "https://img.icons8.com/color/48/000000/git.png"
    },
    {
        "name": "GitHub",
        "icon": "https://img.icons8.com/?size=100&id=ARy6tFUfwclb&format=png&color=000000"
    },
    {
        "name": "Tailwind CSS",
        "icon": "https://img.icons8.com/color/48/tailwind_css.png"
    },
    {
        "name": "Bootstrap",
        "icon": "https://img.icons8.com/color/48/000000/bootstrap.png"
    },
]

const page = () => {
    return (
        <>
            {/* Header Section */}
            <div className="bg-[url('/about-bg.webp')] bg-no-repeat bg-cover bg-center py-16 md:py-[110px]">
                <div className='max-w-[1200px] mx-auto px-4'>
                    <div className='text-center'>
                        <h2
                            className={`${oswald.className} font-bold capitalize leading-[1.2] mb-0 text-[#221b68] text-3xl md:text-[48px]`}
                        >
                            About Me
                        </h2>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className='pt-16 pb-10 md:pt-[115px] md:pb-[80px]'>
                <div className='max-w-[1200px] mx-auto px-4 md:px-8'>
                    <div className='flex flex-col md:flex-row items-center gap-8'>
                        <div className='flex-[0_0_auto] max-w-full md:flex-[0_0_41.666667%] md:max-w-[41.666667%]'>
                            <Image
                                src="/hero-img.png"
                                alt="Hero Image"
                                height={600}
                                width={600}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                        <div className='flex-[0_0_auto] max-w-full md:flex-[0_0_58.333333%] md:max-w-[58.333333%]'>
                            <div>
                                <div className='mb-6'>
                                    <h2 className={`${oswald.className} font-bold capitalize leading-[1.2] text-[#221b68] text-2xl md:text-[48px]`}>
                                        <span className='text-[#6930c3]'>About</span> Myself
                                    </h2>
                                </div>
                                <div className='mb-6'>
                                    <h4 className={`${oswald.className} font-bold capitalize text-[#221b68] text-xl md:text-[25px]`}>
                                        I&apos;m Atharv Karnekar, a Fullstack Web Developer
                                    </h4>
                                </div>
                                <p className='font-medium text-justify text-sm md:text-base'>
                                    I am Full Stack Developer based in India. I have Completed Bachelor of Computer Application from Modern College of Arts, Science and Commerce, Pune. I am very passionate about improving my coding skills & developing applications & websites. I build WebApps and Websites using MERN Stack. Working for myself to improve my skills. Love to build Full-Stack clones.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Skills Section */}
            <div className='pb-10 md:pb-[80px]'>
                <div className='max-w-[1200px] mx-auto px-4 md:px-0'>
                    <div className='mb-10 md:mb-[4rem]'>
                        <div className='text-center'>
                            <h2
                                className={`${oswald.className} font-bold capitalize leading-[1.2] mb-0 text-[#221b68] text-3xl md:text-[48px]`}
                            >
                                <span className='text-[#6930c3]'>Skills</span> & Abilities
                            </h2>
                        </div>
                    </div>

                    <div className="bg-[#f1faff] text-white rounded-xl p-6 md:p-8 w-full mx-auto shadow-lg">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-7">
                            {Data.map(item => (
                                <div
                                    className='p-4 rounded-xl shadow-lg bg-[#f1faff] transition duration-200 hover:shadow-[0_8px_10px_rgba(0,2,68,0.8)] hover:bg-[#c3e8fc]'
                                    key={item.name}
                                >
                                    <div className='flex flex-col items-center gap-4'>
                                        <Image src={item.icon} alt={item.name} width={50} height={50} />
                                        <span className='text-sm md:text-base text-[#6930c3]'>{item.name}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page;
