# 📦 **BoxHub**  
> Gestão inteligente de inventário pessoal e empresarial usando QR Codes.

---

## 📖 **Visão Geral**  

**BoxHub** é uma plataforma moderna para **organizar, catalogar e gerenciar** itens em containers físicos, utilizando QR Codes para identificação rápida e precisa.  
Ideal para uso pessoal, pequenas empresas, estoques e mudanças.  
Construído focando em **eficiência, escalabilidade e experiência do usuário**.

---

## 🚀 **Conceitos Fundamentais**  

- **Container:** Unidade principal de armazenamento (caixas, gavetas, prateleiras, etc.)
- **Item:** Objetos individuais cadastrados dentro de containers.
- **QR Code:** Código único para cada container, permitindo acesso rápido às suas informações.
- **Família (Opcional):** Agrupamento de containers e itens, útil para empresas ou famílias grandes.

---

## 🛠 **Funcionalidades Principais**

- ✔️ Cadastro de Containers e Itens com fotos e descrições.
- ✔️ Geração e Leitura de QR Codes para containers.
- ✔️ Busca inteligente por nome, categoria ou QR Code.
- ✔️ Interface adaptada para desktop e mobile.
- ✔️ Dashboard com dados estatísticos.
- ✔️ Gerenciamento de famílias de usuários (opcional).

---

## 📋 **Requisitos Técnicos**

- Node.js 18+
- Banco de Dados PostgreSQL
- Hospedagem (Vercel ou similar)
- Conta gratuita no ImgBB (upload de imagens)

---

## 🧠 **Tecnologias Utilizadas**

- **Next.js 14** — Frontend e Server-side Rendering
- **TailwindCSS** — Estilização moderna e responsiva
- **GraphQL + graphql-request** — Comunicação eficiente com a API
- **Prisma ORM** — Manipulação de banco de dados
- **NestJS** — Backend estruturado e escalável
- **ImgBB API** — Upload e armazenamento de imagens
- **JWT Authentication** — Controle de acesso seguro

---

# 🏗 **Guia de Início Rápido (Get Started)**  

### 📦 Clonando o Projeto

\`\`\`bash
git clone https://github.com/CarlosGatti/boxhub-frontend.git
cd boxhub-frontend
npm install
\`\`\`

### 🛠 Configuração das Variáveis de Ambiente (`.env.local`)

\`\`\`bash
NEXT_PUBLIC_GRAPHQL_API_URL=https://your-api-url/graphql
NEXT_PUBLIC_IMGBB_API_KEY=your-imgbb-api-key
\`\`\`

**No backend (NestJS)** configurar:
\`\`\`bash
DATABASE_URL=postgresql://user:password@host:port/dbname
JWT_SECRET=your_jwt_secret
\`\`\`

### 🚀 Executando Localmente

\`\`\`bash
npm run dev
\`\`\`
Acesse: [http://localhost:3000](http://localhost:3000)

---

# 🌐 **Deploy do Frontend (Vercel)**

### 🔥 Passos:

1. **Build do Projeto:**
   \`\`\`bash
   npm run build
   \`\`\`
2. **Instalar CLI da Vercel:**
   \`\`\`bash
   npm install -g vercel
   \`\`\`
3. **Deploy:**
   \`\`\`bash
   vercel
   \`\`\`
4. Configure corretamente as **variáveis de ambiente** na plataforma Vercel.

---

## 📊 **Status Atual do Projeto**

- ✅ Cadastro de Containers e Itens.
- ✅ Upload de imagens otimizadas.
- ✅ Dashboard funcional.
- ⏳ Em andamento: Busca avançada e gestão multiusuário.

---

## 🌍 **Acesse o Projeto**

🔗 [www.boxhub.us](https://www.boxhub.us/)

---

## 💰 **Custos de Manutenção**

- Domínio: **$1.99/ano**  
- Frontend (Vercel): **Plano Free**  
- Backend (Hospedagem): **A definir (atualmente localhost para desenvolvimento)**

---

## 📚 **Documentação Extra**

- [Documentação Conceitual e Capstone](https://github.com/CarlosGatti/umass-bootcamp/blob/main/projects/78-project-capstone/Capstone.md)
- [Backend - NestJS API (em breve)]

---

# ✨ **Contribuição**

Fique à vontade para abrir issues, propor melhorias ou contribuir com o projeto. Vamos tornar o **BoxHub** cada vez melhor!

---

# 📬 **Contato**

Se precisar de ajuda, sugestões ou quiser colaborar:

- GitHub: [CarlosGatti](https://github.com/CarlosGatti)
- Email: [eduardo.gf@hotmail.com](mailto:eduardo.gf@hotmail.com)

---

## 🚀 Let's make organization simple again with **BoxHub**!
"""

with open("/mnt/data/README.md", "w") as file:
    file.write(readme_content)

"/mnt/data/README.md criado com sucesso!"
