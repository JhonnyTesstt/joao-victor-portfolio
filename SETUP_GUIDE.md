# 📚 Guia Completo de Instalação e Execução - Portfólio João Victor

Bem-vindo ao guia de instalação do seu portfólio profissional em React.js! Este documento contém todas as instruções necessárias para configurar e executar o projeto em sua máquina local.

---

## 📋 Pré-requisitos

Antes de começar, você precisará ter os seguintes programas instalados em seu computador:

| Programa | Versão Mínima | Descrição |
|----------|---------------|-----------|
| **Node.js** | 18.0.0 ou superior | Runtime JavaScript necessário para executar o projeto |
| **npm** ou **pnpm** | 9.0.0 ou superior | Gerenciador de pacotes para instalar dependências |
| **Git** | 2.0.0 ou superior | Controle de versão (opcional, mas recomendado) |

### Como verificar se você tem os programas instalados:

Abra o terminal/prompt de comando e execute:

```bash
node --version
npm --version
```

Se os comandos retornarem números de versão, você está pronto para prosseguir!

---

## 🚀 Passo 1: Baixar o Projeto

Você tem duas opções para obter o projeto:

### Opção A: Usando Git (Recomendado)

```bash
git clone <URL_DO_REPOSITORIO>
cd joao-victor-portfolio
```

### Opção B: Download Manual

1. Faça o download do arquivo ZIP do projeto
2. Extraia a pasta em um local de sua escolha
3. Abra o terminal/prompt de comando
4. Navegue até a pasta do projeto:

```bash
cd caminho/para/joao-victor-portfolio
```

---

## 📦 Passo 2: Instalar as Dependências

No terminal, na raiz do projeto, execute:

```bash
npm install
```

Ou se você usar pnpm:

```bash
pnpm install
```

Este comando irá baixar e instalar todas as bibliotecas necessárias para o projeto funcionar. Pode levar alguns minutos dependendo da sua conexão com a internet.

**Saída esperada:**
```
added 500+ packages in 2m
```

---

## 🎯 Passo 3: Executar o Projeto em Modo de Desenvolvimento

Para iniciar o servidor de desenvolvimento local, execute:

```bash
npm run dev
```

Ou com pnpm:

```bash
pnpm dev
```

**Saída esperada:**
```
➜  Local:   http://localhost:3000/
➜  Network: http://192.168.x.x:3000/
```

---

## 🌐 Passo 4: Acessar o Portfólio

Após executar o comando acima, o seu portfólio estará disponível em:

- **Local:** [http://localhost:3000/](http://localhost:3000/)
- **Rede:** http://192.168.x.x:3000/ (para acessar de outro dispositivo na mesma rede)

Abra seu navegador favorito (Chrome, Firefox, Safari, Edge) e acesse `http://localhost:3000/`. Você deverá ver o portfólio carregado com sucesso!

---

## ✨ Funcionalidades Principais

### 🌙 Dark Mode (Modo Escuro)

O portfólio possui um botão de alternância de tema no canto superior direito da navegação. Clique no ícone de lua/sol para alternar entre modo claro e escuro.

**Como funciona:**
- O tema é salvo automaticamente no navegador
- Ao recarregar a página, seu tema preferido será mantido
- O dark mode é totalmente responsivo e funciona em todos os dispositivos

### 🔗 Navegação Suave

A navegação sticky (fixa no topo) permite que você acesse rapidamente as diferentes seções:

- **Home:** Retorna ao topo da página
- **About:** Seção de perfil profissional e habilidades técnicas
- **Experience:** Histórico de experiências profissionais
- **Projects:** Projetos em destaque
- **Contact:** Informações de contato e redes sociais

### 📱 Design Responsivo

O portfólio foi desenvolvido com design responsivo, funcionando perfeitamente em:

- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)

---

## 🛠️ Comandos Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Compila o projeto para produção |
| `npm run preview` | Visualiza a build de produção localmente |
| `npm run check` | Verifica erros de TypeScript |
| `npm run format` | Formata o código com Prettier |

---

## 📂 Estrutura do Projeto

```
joao-victor-portfolio/
├── client/
│   ├── public/              # Arquivos estáticos
│   ├── src/
│   │   ├── components/      # Componentes React
│   │   │   ├── Navigation.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/           # Páginas da aplicação
│   │   │   └── Home.tsx
│   │   ├── contexts/        # Contextos React
│   │   │   └── ThemeContext.tsx
│   │   ├── App.tsx          # Componente principal
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Estilos globais
│   └── index.html           # HTML principal
├── server/                  # Código do servidor (placeholder)
├── package.json             # Dependências do projeto
└── README.md               # Documentação
```

---

## 🎨 Personalizando o Portfólio

### Alterar Cores

As cores principais estão definidas em `client/src/index.css`. Procure pela seção `:root` e edite:

```css
:root {
  --primary: #7C9082;  /* Cor sage green */
  --background: oklch(0.98 0.001 286.375);
  /* ... outras cores ... */
}
```

### Adicionar Conteúdo

Para editar o conteúdo do portfólio, modifique os componentes em `client/src/components/`:

- **Navigation.tsx:** Menu de navegação
- **Hero.tsx:** Seção principal
- **About.tsx:** Sobre você e habilidades
- **Experience.tsx:** Experiências profissionais
- **Projects.tsx:** Projetos destacados
- **Footer.tsx:** Informações de contato

### Adicionar Imagens

Coloque as imagens em `client/public/` e referencie-as nos componentes:

```tsx
<img src="/nome-da-imagem.jpg" alt="Descrição" />
```

---

## 🐛 Solução de Problemas

### Problema: Porta 3000 já está em uso

**Solução:** Use uma porta diferente:

```bash
npm run dev -- --port 3001
```

### Problema: Módulos não encontrados

**Solução:** Reinstale as dependências:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Problema: Dark mode não funciona

**Solução:** Limpe o cache do navegador:
1. Pressione `Ctrl+Shift+Delete` (ou `Cmd+Shift+Delete` no Mac)
2. Selecione "Cookies e outros dados de sites"
3. Clique em "Limpar dados"
4. Recarregue a página

### Problema: Estilos não aparecem corretamente

**Solução:** Reinicie o servidor de desenvolvimento:

```bash
# Pressione Ctrl+C para parar o servidor
# Depois execute novamente:
npm run dev
```

---

## 📦 Construir para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Isto criará uma pasta `dist/` com os arquivos compilados prontos para serem publicados em um servidor web.

Para visualizar a build de produção localmente:

```bash
npm run preview
```

---

## 🌐 Publicar Online

Você pode publicar seu portfólio em diversos serviços gratuitos:

### Opção 1: Vercel (Recomendado)

1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Selecione seu repositório GitHub
4. Clique em "Deploy"

### Opção 2: Netlify

1. Acesse [netlify.com](https://netlify.com)
2. Clique em "New site from Git"
3. Conecte seu repositório
4. Clique em "Deploy site"

### Opção 3: GitHub Pages

1. Faça push do seu código para GitHub
2. Vá para "Settings" > "Pages"
3. Selecione "Deploy from a branch"
4. Escolha a branch `main` e pasta `dist/`

---

## 📞 Suporte e Ajuda

Se encontrar problemas:

1. **Verifique a documentação:** Leia este guia novamente
2. **Limpe o cache:** Limpe o cache do navegador e do Node.js
3. **Reinicie tudo:** Feche o terminal e comece do zero
4. **Atualize as dependências:** Execute `npm update`

---

## 📝 Notas Importantes

- O projeto usa **React 19** com **Tailwind CSS 4**
- O dark mode é persistido no localStorage do navegador
- A navegação é suave (scroll-smooth) para melhor experiência
- Todos os componentes são responsivos e acessíveis
- O projeto está pronto para ser publicado em produção

---

## 🎉 Parabéns!

Seu portfólio está pronto! Agora você pode:

✅ Visualizar o portfólio localmente  
✅ Personalizar cores, conteúdo e imagens  
✅ Usar o dark mode  
✅ Publicar online  

**Divirta-se com seu novo portfólio profissional!** 🚀
