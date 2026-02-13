export default function Experience() {
  const experiences = [
    {
      title: "Analista e Desenvolvedor de Software",
      company: "Fóton Informática",
      location: "São Paulo, Brasil",
      period: "2023 — Present",
      highlights: [
        "Integração de Microsserviços: Responsável pela integração e comunicação eficiente entre diversos microsserviços, utilizando Java com Quarkus e Spring Boot, bancos de dados PostgreSQL e Redis em um ambiente de CI/CD.",
        "Gerenciamento de APIs: Desenvolvimento e consumo de APIs RESTful para comunicação entre sistemas e integração de serviços.",
        "Arquitetura Orientada a Eventos (RabbitMQ): Implementei e otimizei filas para processos assíncronos, como a consulta de extratos de FGTS (+90 dias) e o envio de códigos de verificação por SMS.",
        "Implementação e manutenção de ambientes de teste com contêineres, utilizando Docker.",
      ],
    },
    {
      title: "Aspirante a Oficial",
      company: "Exército Brasileiro",
      location: "Santana/SP, Brasil",
      period: "01/2023 — 12/2023",
      highlights: [
        "Apoio à equipe na realização de tarefas diversas conforme a demanda, garantindo a agilidade e eficiência.",
        "Organização do trabalho diário, buscando otimizar o tempo e evitar imprevistos.",
        "Solução de problemas cotidianos, tomando decisões com segurança e autonomia.",
      ],
    },
  ];

  return (
    <section className="py-20" id="experience">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-4xl font-bold mb-16 text-center">
          Experiência Profissional
        </h2>
        <div className="relative border-l-2 border-gray-200 dark:border-gray-700 ml-3 md:ml-6 space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              <span className="absolute -left-[9px] top-0 h-5 w-5 rounded-full bg-primary border-4 border-white dark:border-gray-900"></span>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {exp.title}
                </h3>
                <span className="text-sm font-medium text-primary px-3 py-1 bg-primary/10 rounded-full mt-2 sm:mt-0 w-fit">
                  {exp.period}
                </span>
              </div>
              <div className="mb-4">
                <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                  {exp.company}
                </span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-gray-500 text-sm">{exp.location}</span>
              </div>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400 list-disc pl-5 marker:text-primary">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
