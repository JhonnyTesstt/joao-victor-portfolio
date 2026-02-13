import profilePicture from "/img/Eu.jpeg";

export default function About() {
  const skills = [
    {
      category: "Backend Core",
      icon: "dns",
      items: [
        { name: "Java", level: 5 },
        { name: "Spring Boot", level: 4 },
        { name: "Quarkus", level: 4 },
        { name: "SQL", level: 5 },
      ],
    },
    {
      category: "Architecture & Data",
      icon: "schema",
      items: [
        { name: "Microservices", level: 4 },
        { name: "Redis", level: 3 },
        { name: "RabbitMQ", level: 4 },
        { name: "Docker", level: 3 },
      ],
    },
    {
      category: "Frontend & Tools",
      icon: "web",
      items: [
        { name: "React Js", level: 2 },
        { name: "Next Js", level: 3 },
        { name: "AWS", level: 3 },
        { name: "Angular", level: 3 },
      ],
    },
  ];

  const renderStars = (level: number) => {
    return "●".repeat(level) + "○".repeat(5 - level);
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4 lg:col-span-3">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-gray-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <img
                alt="João Victor Portrait"
                className="relative rounded-2xl shadow-xl w-full aspect-square object-cover"
                src={profilePicture}
              />
            </div>
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <span className="text-primary">📍</span>
                <span>São Paulo, Brasil</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <span className="text-primary">✉️</span>
                <span className="text-sm">jvdeoliveira1414@hotmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
                <span className="text-primary">📱</span>
                <span>(11) 98107-8786</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 lg:col-span-9 space-y-10">
            <div>
              <h2 className="font-serif text-3xl font-bold mb-6 flex items-center">
                <span className="w-8 h-1 bg-primary mr-4 rounded-full"></span>
                Perfil Profissional
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Analista e Desenvolvedor de Software com experiência no setor
                financeiro, atualmente atuando com Java, Quarkus, Spring Boot,
                microsserviços e bancos de dados relacionais como PostgreSQL.
                Tenho experiência prática na construção de APIs REST, integração
                com Redis e uso de arquitetura orientada a microsserviços em
                ambientes ágeis.
              </p>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill) => (
                  <div
                    key={skill.category}
                    className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-center mb-4">
                      <span className="text-primary mr-2 text-2xl">⚙️</span>
                      <h4 className="font-bold">{skill.category}</h4>
                    </div>
                    <div className="space-y-3">
                      {skill.items.map((item) => (
                        <div
                          key={item.name}
                          className="flex justify-between text-sm"
                        >
                          <span>{item.name}</span>
                          <span className="text-primary">
                            {renderStars(item.level)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
