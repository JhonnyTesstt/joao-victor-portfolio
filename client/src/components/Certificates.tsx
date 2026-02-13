import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Certificate {
  id: string;
  title: string;
  platform: string;
  icon: string;
  date: string;
  url: string;
  category: "programming" | "ai" | "database" | "design" | "education" | "other";
}

const certificates: Certificate[] = [
  {
    id: "java-nlw",
    title: "Java NLW 2025",
    platform: "Rocketseat",
    icon: "☕",
    date: "Fevereiro 2025",
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029627527/tWbMYCWLhEYTIBaY.pdf",
    category: "programming",
  },
  {
    id: "asp-net",
    title: "ASP.NET",
    platform: "Rocketseat",
    icon: "🔷",
    date: "Março 2025",
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029627527/HqiSGPoeXEwNTLyl.pdf",
    category: "programming",
  },
  {
    id: "ia-immersion",
    title: "Imersão de IA",
    platform: "Alura",
    icon: "🤖",
    date: "Outubro 2024",
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029627527/eqaJZIQeaNWewxDs.pdf",
    category: "ai",
  },
  {
    id: "ia-generativa",
    title: "IA Generativa",
    platform: "MIT",
    icon: "✨",
    date: "Setembro 2024",
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029627527/sJYHPuRyyeZqIzTV.pdf",
    category: "ai",
  },
  {
    id: "ia-computational",
    title: "Inteligência Artificial e Computacional",
    platform: "FIAP",
    icon: "🧠",
    date: "Outubro 2024",
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029627527/xLxlQqwKTBMYHLGX.png",
    category: "ai",
  },
  {
    id: "java-environment",
    title: "Ambiente de Desenvolvimento Java",
    platform: "Rocketseat",
    icon: "☕",
    date: "Setembro 2024",
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029627527/shWrIikgEvbahgVS.pdf",
    category: "programming",
  },
  {
    id: "oop-java",
    title: "POO Básica - Java",
    platform: "Alura",
    icon: "📦",
    date: "Setembro 2024",
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029627527/nIQzIoHoPWoRbYfH.pdf",
    category: "programming",
  },
  {
    id: "git-versionamento",
    title: "Git e Versionamento",
    platform: "Rocketseat",
    icon: "🔀",
    date: "Setembro 2024",
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029627527/DgINtCOwyLIdMUMK.pdf",
    category: "programming",
  },
  {
    id: "ia-context",
    title: "IA e o Novo Contexto da Cultura Digital",
    platform: "Bradesco",
    icon: "🌐",
    date: "Agosto 2024",
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029627527/LionEyqWkVAzNCdn.pdf",
    category: "ai",
  },
  {
    id: "IA-productivity",
    title: "Inteligência Artificial e Produtividade",
    platform: "Google",
    icon: "⚙️",
    date: "Agosto 2024",
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029627527/LionEyqWkVAzNCdn.pdf",
    category: "ai",
  },
  {
    id: "oop-python",
    title: "Desenvolvimento OOP - Python",
    platform: "Alura",
    icon: "🐍",
    date: "Agosto 2024",
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029627527/ZqxakjZbJmazvmyq.pdf",
    category: "programming",
  },
  {
    id: "design-thinking",
    title: "Design Thinking para Educadores",
    platform: "Bradesco",
    icon: "💡",
    date: "Agosto 2024",
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029627527/YHLsDPqeoeJgUuYs.pdf",
    category: "design",
  },
  {
    id: "database-admin",
    title: "Administrando Banco de Dados",
    platform: "Bradesco",
    icon: "🗄️",
    date: "Agosto 2024",
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029627527/zoUUcOTwxNCvTRLi.pdf",
    category: "database",
  },
  {
    id: "fullstack",
    title: "FullStack",
    platform: "Rocketseat",
    icon: "🚀",
    date: "Abril 2024",
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029627527/paVHTUWjhYoxrHyT.pdf",
    category: "programming",
  },
  {
    id: "nodejs",
    title: "Node.js",
    platform: "Rocketseat",
    icon: "🟢",
    date: "Abril 2024",
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029627527/isbvEEWFVHCkgZmB.pdf",
    category: "programming",
  },
  {
    id: "reactjs",
    title: "React.js",
    platform: "Rocketseat",
    icon: "⚛️",
    date: "Abril 2024",
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029627527/SiMbQfikOcjCeTIX.pdf",
    category: "programming",
  },
  {
    id: "java",
    title: "Java",
    platform: "Rocketseat",
    icon: "☕",
    date: "Abril 2024",
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029627527/GvhqHGlTRWOSGSss.pdf",
    category: "programming",
  },
  {
    id: "csharp",
    title: "C#",
    platform: "Rocketseat",
    icon: "🔷",
    date: "Abril 2024",
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029627527/rzHuupodCkNOtAQT.pdf",
    category: "programming",
  },
  {
    id: "python",
    title: "Python",
    platform: "Rocketseat",
    icon: "🐍",
    date: "Abril 2024",
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029627527/ZfSzQJxwYUAxjoXI.pdf",
    category: "programming",
  },
  {
    id: "python-pythonando",
    title: "Python Pythonando",
    platform: "Alura",
    icon: "🐍",
    date: "Abril 2024",
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029627527/jBaBjiMzgMGwazqW.png",
    category: "programming",
  },
  {
    id: "html-css-js",
    title: "HTML, CSS e JavaScript",
    platform: "Rocketseat",
    icon: "🌐",
    date: "Fevereiro 2024",
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029627527/EBnTiNPKaIxbpShV.pdf",
    category: "programming",
  },
  {
    id: "ux-design",
    title: "User Experience",
    platform: "FIAP",
    icon: "🎨",
    date: "Fevereiro 2024",
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029627527/LCLLcLZTyKJtaoXo.png",
    category: "design",
  },
  {
    id: "database-implementation",
    title: "Implementando Banco de Dados",
    platform: "Bradesco",
    icon: "🗄️",
    date: "Março 2024",
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029627527/eXdwbZKBLCPqnMvv.pdf",
    category: "database",
  },
  {
    id: "data-modeling",
    title: "Modelagem de Dados",
    platform: "Bradesco",
    icon: "📊",
    date: "Março 2024",
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029627527/SCeZXYHlsVEOYFaH.pdf",
    category: "database",
  },
  {
    id: "diploma",
    title: "Diploma - Faculdade",
    platform: "Universidade Cruzeiro do Sul",
    icon: "🎓",
    date: "2025",
    url: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663029627527/oMkOuHXyhSGCHMWH.pdf",
    category: "education",
  },
];

const categoryLabels: Record<string, string> = {
  programming: "Programação",
  ai: "Inteligência Artificial",
  database: "Banco de Dados",
  design: "Design",
  education: "Educação",
  other: "Outros",
};

const categoryColors: Record<string, string> = {
  programming: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
  ai: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300",
  database: "bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300",
  design: "bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300",
  education: "bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300",
  other: "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300",
};

export default function Certificates() {
  const groupedCertificates = certificates.reduce(
    (acc, cert) => {
      if (!acc[cert.category]) {
        acc[cert.category] = [];
      }
      acc[cert.category].push(cert);
      return acc;
    },
    {} as Record<string, Certificate[]>
  );

  return (
    <section id="certificates" className="py-20 px-4 bg-background dark:bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground dark:text-foreground mb-4">
            Certificações & Badges
          </h2>
          <p className="text-lg text-muted-foreground dark:text-muted-foreground max-w-2xl">
            Certificações profissionais em programação, inteligência artificial, design e desenvolvimento de software.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(groupedCertificates).map(([category, certs]) => (
            <div key={category} className="animate-fade-in-up">
              {/* Category Title */}
              <div className="mb-6">
                <h3 className="text-2xl font-serif font-bold text-foreground dark:text-foreground mb-2">
                  {categoryLabels[category as keyof typeof categoryLabels]}
                </h3>
                <div className="h-1 w-16 bg-primary rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certs.map((cert) => (
                  <a
                    key={cert.id}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-card dark:bg-card border border-border dark:border-border rounded-lg p-6 hover:shadow-lg dark:hover:shadow-lg/50 transition-all duration-300 hover:scale-105 cursor-pointer"
                  >
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {cert.icon}
                    </div>

                    <h4 className="text-lg font-semibold text-foreground dark:text-foreground mb-2 line-clamp-2">
                      {cert.title}
                    </h4>

                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[category]}`}>
                        {cert.platform}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4">{cert.date}</p>

                    <div className="flex items-center gap-2 text-primary dark:text-primary font-medium group-hover:gap-3 transition-all duration-300">
                      <span>Ver Certificado</span>
                      <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                    </div>

                    <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-border dark:border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="animate-fade-in-up">
              <div className="text-3xl font-bold text-primary dark:text-primary mb-2">
                {certificates.length}
              </div>
              <p className="text-muted-foreground dark:text-muted-foreground">Certificações</p>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-3xl font-bold text-primary dark:text-primary mb-2">
                {Object.keys(groupedCertificates).length}
              </div>
              <p className="text-muted-foreground dark:text-muted-foreground">Categorias</p>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-3xl font-bold text-primary dark:text-primary mb-2">
                {new Set(certificates.map((c) => c.platform)).size}
              </div>
              <p className="text-muted-foreground dark:text-muted-foreground">Plataformas</p>
            </div>
            <div className="animate-fade-in-up">
              <div className="text-3xl font-bold text-primary dark:text-primary mb-2">
                2024-2025
              </div>
              <p className="text-muted-foreground dark:text-muted-foreground">Período</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
