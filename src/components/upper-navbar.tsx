import {
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    Phone,
    Twitter,
} from "lucide-react";

const UpperNavbar = () => {
    return (
        <div className="bg-white py-4 border-b">
            <div className="max-w-[1200px] mx-auto px-6 flex flex-wrap justify-between items-center">
                <div className="flex items-center space-x-6 w-full md:w-[11rem] mb-2 sm:mb-0">
                    <a
                        href="mailto:karnekaratharv12@gmail.com"
                        className="flex items-center text-[#6930c3]"
                    >
                        <span className="border rounded-full border-[#6930c3] p-2 mr-3">
                            <Mail className="w-4 h-4" />
                        </span>
                        <span className="font-semibold">karnekaratharv12@gmail.com</span>
                    </a>
                </div>

                <div className="hidden md:flex items-center space-x-5 md:w-[11rem]">
                    <a
                        href="https://www.facebook.com/atharv.karnekar.98"
                        target="_blanck"
                        title="facebook"
                        className="text-[#6930c3]"
                    >
                        <span className="group inline-flex items-center justify-center w-8 h-8 border border-current rounded-full hover:bg-[#6930c3] transition-colors duration-500">
                            <Facebook className="w-5 h-5 group-hover:text-white transition-colors duration-500" />
                        </span>
                    </a>
                    <a href="https://x.com/AtharvKarnekar" target="_blank" title="Twitter" className="text-[#6930c3]">
                        <span className="group inline-flex items-center justify-center w-8 h-8 border border-current rounded-full hover:bg-[#6930c3] transition-colors duration-500">
                            <Twitter className="w-5 h-5 group-hover:text-white transition-colors duration-500" />
                        </span>
                    </a>
                    <a href="https://www.instagram.com/atharv__karnekar/" target="_blank" title="Instagram" className="text-[#6930c3]">
                        <span className="group inline-flex items-center justify-center w-8 h-8 border border-current rounded-full hover:bg-[#6930c3] transition-colors duration-500">
                            <Instagram className="w-5 h-5 group-hover:text-white transition-colors duration-500" />
                        </span>
                    </a>
                    <a href="https://www.linkedin.com/in/atharv-karnekar-1932b7201/" target="_blank" title="Linkedin" className="text-[#6930c3]">
                        <span className="group inline-flex items-center justify-center w-8 h-8 border border-current rounded-full hover:bg-[#6930c3] transition-colors duration-500">
                            <Linkedin className="w-5 h-5 group-hover:text-white transition-colors duration-500" />
                        </span>
                    </a>
                </div>

                <div className="flex items-center space-x-6 w-full md:w-[11rem] mt-2 sm:mt-0">
                    <a href="tel:9370755714" className="flex items-center text-[#6930c3]">
                        <span className="border rounded-full border-[#6930c3] p-2 mr-3">
                            <Phone className="w-4 h-4" />
                        </span>
                        <span className="font-semibold text-nowrap">+91-9370755714</span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default UpperNavbar;
