export default function Hero() {
  return (
    <section
      className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden"
      id="hero"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="md:w-3/4">
          <p className="text-primary font-medium tracking-wide uppercase mb-4 animate-fade-in-up">
            Hello, I'm João Victor
          </p>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6 text-gray-900 dark:text-white">
            Analista e <br /> <span className="text-primary italic">Desenvolvedor</span> de
            Software
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl leading-relaxed">
            Specializing in robust backend architectures, microservices, and
            financial ecosystems. Transforming complex requirements into
            scalable solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              href="#contact"
            >
              Get in Touch
            </a>
            <a
              className="border border-gray-300 dark:border-gray-600 px-8 py-3 rounded-full font-medium hover:border-primary hover:text-primary transition-all dark:hover:text-primary dark:hover:border-primary"
              href="#projects"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary opacity-10 blur-3xl rounded-full pointer-events-none"></div>
    </section>
  );
}
