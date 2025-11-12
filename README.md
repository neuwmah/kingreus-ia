# 👑 KingReus IA

Uma landing page moderna e responsiva para serviços de automação WhatsApp e criação de sites profissionais.

## 🚀 O que é este projeto?

Este é um site construído com **Next.js** (um framework do React) que oferece dois tipos de serviços:

1. **Assistente de Atendimento WhatsApp** - Bot automático para responder clientes 24h
2. **Site Vitrine Profissional** - Páginas para mostrar trabalhos e portfólio

## 🛠️ Tecnologias utilizadas

- **Next.js 16** - Framework React para criar sites rápidos
- **TypeScript** - JavaScript com tipagem (mais seguro para programar)
- **Tailwind CSS** - Framework CSS para estilização rápida
- **Swiper** - Biblioteca para criar carrosséis/sliders
- **React 19** - Biblioteca para criar interfaces de usuário

## 📁 Estrutura do projeto

```
kingreus-ia/
├── src/
│   ├── app/                  # Páginas do site
│   │   ├── page.tsx          # Página inicial
│   │   ├── layout.tsx        # Layout base
│   │   ├── globals.css       # Estilos globais
│   │   ├── politica/         # Página de política de privacidade
│   │   └── termos/           # Página de termos de uso
│   ├── components/           # Componentes reutilizáveis
│   │   ├── Header.tsx        # Cabeçalho do site
│   │   ├── Footer.tsx        # Rodapé do site
│   │   ├── PricingCard.tsx   # Cartão de preços
│   │   ├── Carousel.tsx      # Carrossel de imagens
│   │   ├── AnimatedWave.tsx  # Animação de ondas
│   │   └── MobileMenu.tsx    # Menu para celular
│   ├── config/
│   │   └── plans.ts          # Configuração dos planos
│   ├── types/
│   │   └── index.ts          # Tipos TypeScript
│   └── utils/
│       └── whatsapp.ts       # Funções do WhatsApp
├── public/                   # Arquivos públicos (imagens, etc.)
├── package.json              # Dependências do projeto
└── README.md                 # Este arquivo
```

## 🏃‍♂️ Como rodar o projeto

### Pré-requisitos

Você precisa ter instalado em seu computador:
- **Node.js** (versão 18 ou superior) - [Download aqui](https://nodejs.org/)
- **Git** - [Download aqui](https://git-scm.com/)

### Passo a passo

1. **Clone o projeto** (baixe os arquivos):
   ```bash
   git clone https://github.com/seu-usuario/kingreus-ia.git
   cd kingreus-ia
   ```

2. **Instale as dependências** (bibliotecas necessárias):
   ```bash
   npm install
   ```

3. **Execute o projeto**:
   ```bash
   npm run dev
   ```

4. **Abra no navegador**:
   Acesse: `http://localhost:3000`

## ⚙️ Scripts disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria versão para produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Verifica erros no código

## 🎨 Funcionalidades principais

### 1. **Página inicial com planos**

- Dois cartões de preços interativos
- Botões que abrem WhatsApp automaticamente
- Design responsivo (funciona em celular e desktop)

### 2. **Integração com WhatsApp**

- Clique no botão e abre WhatsApp com mensagem pronta
- Mensagens personalizadas para cada plano
- Sistema configurável de números de WhatsApp

### 3. **Componentes reutilizáveis**

- **PricingCard**: Cartão de preços com badge e recursos
- **Carousel**: Carrossel de imagens com Swiper
- **AnimatedWave**: Animação de ondas no fundo
- **Header/Footer**: Cabeçalho e rodapé consistentes

### 4. **TypeScript**

- Código mais seguro com tipagem
- Autocompletar melhor no editor
- Menos bugs em produção

## 🔧 Como customizar

### Alterar os planos

Edite o arquivo `src/config/plans.ts`:

```typescript
export const plans: Plan[] = [
  {
    id: 'basico',
    name: 'Seu Plano Básico',
    price: 'R$ 99,99/mês',
    features: [
      'Recurso 1',
      'Recurso 2',
      'Recurso 3'
    ],
    whatsappNumber: '5511999999999' // Seu número
  }
];
```

### Alterar cores e estilos

O projeto usa **Tailwind CSS**. As principais cores estão em:
- `bg-green-600` - Verde dos botões
- `bg-yellow-400` - Amarelo dos badges
- `bg-black` - Fundo preto
- `text-white` - Texto branco

### Alterar números do WhatsApp

No arquivo `src/config/plans.ts`, altere:
```typescript
whatsappNumber: '559999999999' // Coloque seu número aqui
```

## 🌐 Deploy (colocar no ar)

### Vercel (recomendado)

1. Crie conta na [Vercel](https://vercel.com)
2. Conecte seu repositório GitHub
3. Clique em "Deploy"
4. Pronto! Seu site estará no ar

### Netlify

1. Crie conta na [Netlify](https://netlify.com)
2. Arraste a pasta `out` depois de rodar `npm run build`
3. Site no ar!

## 🤝 Como contribuir

1. Faça um fork do projeto
2. Crie uma branch: `git checkout -b minha-feature`
3. Commit suas mudanças: `git commit -m 'Adiciona nova feature'`
4. Push para a branch: `git push origin minha-feature`
5. Abra um Pull Request

## 📋 Para iniciantes

### O que é cada tecnologia?

- **React**: Biblioteca para criar sites interativos
- **Next.js**: Framework que torna o React mais fácil
- **TypeScript**: JavaScript com "regras" extras para evitar erros
- **Tailwind**: CSS pré-pronto (classes como `bg-blue-500`)
- **npm**: Gerenciador de pacotes (como uma "loja de código")

### Arquivos importantes para entender:

1. **`src/app/page.tsx`** - Página principal do site
2. **`src/components/PricingCard.tsx`** - Como os cartões são criados
3. **`src/config/plans.ts`** - Onde estão os preços e recursos
4. **`src/utils/whatsapp.ts`** - Como funciona a integração WhatsApp

### Conceitos importantes:

- **Componente**: Pedaço de código reutilizável (como um botão)
- **Props**: Informações passadas entre componentes
- **Estado**: Dados que podem mudar na tela
- **Hook**: Função especial do React (useState, useEffect)

## 🐛 Problemas comuns

### Erro "Module not found"

```bash
npm install
```

### Erro de porta ocupada

```bash
# Use outra porta
npm run dev -- -p 3001
```

### Erro de TypeScript

Verifique se os tipos estão corretos em `src/types/index.ts`

---

**🐰 2014**