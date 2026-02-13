export default function Projects() {
  const projects = [
    {
      title: "J17 Bank",
      category: "Fintech",
      description: "Desenvolvimento de Ecossistema Bancário",
      highlights: [
        {
          title: "Integração de Microsserviços",
          description:
            "Fui responsável pela integração e comunicação eficiente entre diversos microsserviços, utilizando Java com Quarkus e Spring Boot, bancos de dados PostgreSQL e Redis em um ambiente de CI/ CD.",
        },
        {
          title: "Mensageria Financeira (TED)",
          description:
            "Fluxos de transferência via STR com comunicação segura.",
        },
        {
          title: "Gerenciamento de APIs",
          description: "Desenvolvimento e consumo de APIs RESTful para comunicação entre sistemas e integração de serviços.",
        },
      ],
      tags: ["Java", "Compliance", "BACEN"],
    },
    {
      title: "Caixa",
      category: "Fintech",
      description: "SIGCX - Sistema Gerenciador Caixa",
      highlights: [
        {
          title: "Implementação e manutenção de ambientes",
          description:
            "Implementação de novas features e resolução de bugs de acordo com a regra de negócio estabelecida.",
        },
        {
          title: "Garantia de Qualidade e Segurança da Informação",
          description:
            "Implementação de camadas robustas de segurança com Spring Security e gestão de dados sensíveis.",
        },
        {
          title: "Estratégias de Cache Multi-nível: ",
          description: "Implementação de cache com Spring Cache (Redis) para reduzir a carga em bancos de dados relacionais e melhorar o tempo de resposta de endpoints de alta latência.",
        },
      ],
      tags: ["Java", "Angular", "AWS"],
    },
  ];

  const education = [
    {
      degree: "Superior em Análise e Desenvolvimento de Sistemas",
      institution: "Universidade Cruzeiro do Sul",
      period: "01/2023 – 06/2025",
    },
    {
      degree: "Técnico em Desenvolvimento de Sistemas",
      institution: "ETEC",
      period: "01/2020 – 12/2022",
    },
  ];

  const certifications = [
    "Java - Rocketseat",
    "Programação Orientada a Objetos em Java - ADA",
    "Inteligência Artificial e Produtividade - Google",
    "User Experience (UX) - FIAP",
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900" id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl font-bold mb-4">
            Projetos em Destaque
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:col-span-2">
            {projects.map((project, pidx) => (
              <div
                key={project.title + pidx}
                className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 w-full h-full"
              >
                <div className="p-8 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <span className="text-primary text-3xl">🏦</span>
                    </div>
                    <span className="text-xs font-bold tracking-wider uppercase text-gray-400 border border-gray-200 dark:border-gray-600 rounded-full px-3 py-1">
                      {project.category}
                    </span>
                  </div>

                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 mb-6">
                      {project.description}
                    </p>
                    <div className="space-y-4 mb-6">
                      {project.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex gap-3 items-start">
                          <span className="text-primary text-sm mt-1">✓</span>
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            <strong className="text-gray-900 dark:text-white">
                              {highlight.title}:
                            </strong>{" "}
                            {highlight.description}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-gray-600 dark:text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8 flex flex-col md:col-span-1">
            <div className="group relative bg-gray-50 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 border border-gray-100 dark:border-gray-700 w-full h-full">
              <div className="p-8 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <span className="text-primary text-3xl">🎓</span>
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                    Educação
                  </h3>
                  <div className="space-y-6 mb-6">
                    {education.map((edu, idx) => (
                      <div key={idx}>
                        {idx > 0 && (
                          <div className="border-t border-gray-100 dark:border-gray-700 pt-4"></div>
                        )}
                        <h4 className="font-bold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-sm text-primary">{edu.institution}</p>
                        <p className="text-xs text-gray-500 mt-1">{edu.period}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
