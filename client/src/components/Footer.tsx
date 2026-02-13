export default function Footer() {
  return (
    <footer
      className="bg-gray-50 dark:bg-black py-16 border-t border-gray-200 dark:border-gray-800"
      id="contact"
    >
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-serif text-3xl font-bold mb-6">
          Vamos Construir Algo Incrível?
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-10 max-w-lg mx-auto">
          Estou disponível para novas oportunidades e desafios no desenvolvimento
          de softwares. Entre em contato para discutirmos como posso agregar valor ao
          seu time.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
          {/* Email */}
          <a
            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 group"
            href="mailto:jvdeoliveira1414@hotmail.com"
          >
            <span className="text-primary group-hover:scale-110 transition-transform text-xl">
              ✉️
            </span>
            <span className="text-gray-700 dark:text-gray-200">
              jvdeoliveira1414@hotmail.com
            </span>
          </a>

          {/* LinkedIn */}
          <a
            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100 dark:border-gray-700 group"
            href="https://www.linkedin.com/in/jo%C3%A3o-victor-de-oliveira-63a883143/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-5 h-5 text-primary group-hover:scale-110 transition-transform fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            <span className="text-gray-700 dark:text-gray-200">LinkedIn</span>
          </a>
        </div>

        {/* Languages */}
        <div className="flex justify-center gap-8 text-sm text-gray-500">
          <div className="flex flex-col items-center">
            <span className="font-bold text-gray-900 dark:text-white mb-1">
              Languages
            </span>
            <span>Português (Nativo)</span>
            <span>Inglês (Intermediário)</span>
            <span>Espanhol (Básico)</span>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-16 text-xs text-gray-400">
          © 2024 João Victor Silva De Oliveira. Designed with minimal aesthetics.
        </p>
      </div>
    </footer>
  );
}
