# BoxHub

BoxHub é um sistema de gerenciamento de armazenamento e organização de itens, permitindo que usuários registrem, classifiquem e rastreiem seus objetos utilizando códigos QR. O projeto visa facilitar a organização e o controle de containers e itens, utilizando tecnologias modernas para garantir escalabilidade e acessibilidade.

## Funcionalidades Principais:

- **Gerenciamento de Containers**: Criação, edição e exclusão de containers para organização dos itens.
- **Cadastro de Itens**: Adição de itens com informações detalhadas, incluindo imagem e categoria.
- **Geração e Leitura de QR Codes**: Criação automática de QR Codes para containers e leitura via câmera para facilitar a busca.
- **Busca e Filtragem**: Pesquisa rápida de itens e containers por nome, categoria ou QR Code.
- **Interface Responsiva**: Design adaptável para desktop e dispositivos móveis.

---

# Deploy do Frontend com Next.js na Vercel

## Passo 1: Preparar o Projeto para Produção
Antes de implantar o projeto, verifique se ele está pronto para produção executando:

```sh
npm run build
```

Este comando gerará uma versão otimizada do aplicativo.

## Passo 2: Instalar a Vercel CLI

```sh
npm i -g vercel
```

## Passo 3: Clonar o Repositório

```sh
git clone https://github.com/CarlosGatti/boxhub-frontend.git
```

## Passo 4: Criar um Projeto na Vercel e Conectar ao GitHub

1. Acesse [Vercel](https://vercel.com/import)
2. Selecione "Import Git Repository"
3. Escolha o repositório GitHub e clique em "Continue"
4. Escolha "Next.js" como framework e clique em "Continue"
5. Configure as variáveis de ambiente e clique em "Deploy"

### Configurar Deploys Automáticos

1. Vá até a aba **Settings** do projeto na Vercel
2. Role até a seção **Git** e clique em "Connect to GitHub"
3. Autorize a Vercel para acessar sua conta do GitHub
4. Selecione o repositório e branch que deseja implantar automaticamente
5. Clique em "Save"

Agora, qualquer alteração enviada para o repositório GitHub será automaticamente implantada na Vercel. 🎉

---

## Projeto Online
Acesse o BoxHub em: [www.BoxHub.us](https://www.BoxHub.us/)

## Custos
- **Domínio**: $1.99
- **Hospedagem Frontend**: Vercel Free

## Repositório Conceitual
Confira o repositório do projeto conceitual: [GitHub](https://github.com/CarlosGatti/umass-bootcamp/blob/main/projects/78-project-capstone/Capstone.md)
