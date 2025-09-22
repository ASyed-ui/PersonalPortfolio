import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {

    return (
        <section 
            id="home"
            className="min-h-screen flex items-center justify-center relative w-full"
        >
            <RevealOnScroll>
                <div className="w-full flex flex-col md:flex-row items-center mx-auto px-4 gap-20">
                    
                    {/* Profile picture */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <img 
                            src="images/aadilProfilePic.jpg" 
                            alt="Aadil Syed"
                            className="w-80 h-80 object-cover rounded-full shadow-[0_4px_15px_rgba(59,130,246,0.5)]"
                        />
                    </div>

                    {/* Right side: Home Page Text */}
                    <div className="w-full md:w-2/3 text-left">
                        <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-snug">
                            Hi, I'm Aadil Syed
                        </h1>

                        <p className="text-gray-400 text-lg mb-8 max-w-lg">
                            I'm a full-stack developer who loves crafting clean, scalable web applications. My goal is to build solutions that offer both exceptional performance and a delightful user experience.
                        </p>

                        <div className="flex space-x-4">
                            <a 
                                href="#projects"
                                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
                            >
                                View Projects
                            </a>

                            <a 
                                href="#contact"
                                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>

                </div>
            </RevealOnScroll>
        </section>
    );
};
