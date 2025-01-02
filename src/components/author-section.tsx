import { Oswald } from "next/font/google";
import Image from "next/image";

const oswald = Oswald({ subsets: ["latin"] });

const AuthorSection = () => {
    return (
        <section className="pb-[50px] md:pb-[110px]">
            <div className="max-w-[1200px] mx-auto px-5">
                <div className="relative py-[30px] px-4 sm:px-[30px] md:px-[90px] bg-[url('/author-bg.webp')] bg-no-repeat bg-cover bg-center -mt-[50px] md:-mt-[100px] z-0 shadow-custom">
                    <div className="flex flex-wrap items-center">
                        <div className="w-full md:w-5/12 px-[15px] mb-6 md:mb-0">
                            <div>
                                <Image
                                    src="/author-img.png"
                                    alt="Author"
                                    width={700}
                                    height={700}
                                    className="block align-middle"
                                />
                            </div>
                        </div>

                        <div className="w-full md:w-7/12 px-[15px]">
                            <div>
                                <h2
                                    className={`mb-[20px] md:mb-[30px] ${oswald.className} text-[#221b68] text-[48px] font-[700] capitalize leading-[1.2]`}
                                >
                                    <span className="text-[#6930c3]">If you</span> have any
                                    question I&apos;m waiting for you
                                </h2>
                                <div className="flex items-center">
                                    <a
                                        href="https://wa.me/919370755714?text=Hello, How can I help you ?"
                                        target="_blank"
                                        className="py-[10px] sm:py-[12px] w-[120px] sm:w-[143px] text-center bg-[#6930c3] text-white font-[700] capitalize rounded-[6px] inline-block relative overflow-auto z-[1] hover:bg-[#3b1775] transition-colors duration-300"
                                    >
                                        Let&apos;s talk
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuthorSection;
