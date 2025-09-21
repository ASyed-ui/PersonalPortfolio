
export const Projects = () => {

    return (
    
        <section 
            id="projects"
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-[85rem] mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <img 
                            src="images/projects/cloudPlatform.png" 
                            alt="Cloud Platform Project" 
                            className="w-full h-55 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2 text-center">Cloud Platform</h3>
                        <p className="text-gray-400 mb-4">
                            Scalable cloud infrastructure management with real-time monitoring and automated scaling.
                            </p>
                        <div className="flex flex-wrap gap-2">
                            {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <img 
                            src="images/projects/ecommerceApp.png" 
                            alt="Cloud Platform Project" 
                            className="w-full h-55 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2 text-center">E-Commerce Web App</h3>
                        <p className="text-gray-400 mb-4">
                            Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.
                            </p>
                        <div className="flex flex-wrap gap-2">
                            {["Next.js", "TypeScript", "Stripe", "PostgreSQL"].map((tech, key) => (
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <img 
                            src="images/projects/chatApp.png" 
                            alt="Cloud Platform Project" 
                            className="w-full h-55 object-cover rounded-lg mb-4"
                        />
                        <h3 className="text-xl font-bold mb-2 text-center">Real-Time Chat App</h3>
                        <p className="text-gray-400 mb-4">
                            Scalable chat platform supporting real-time messaging, presence, and group chat features.
                            </p>
                        <div className="flex flex-wrap gap-2">
                            {["Socket.IO", "Express", "React", "Redis"].map((tech, key) => (
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">View Project →</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};