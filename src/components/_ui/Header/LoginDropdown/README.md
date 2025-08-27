# LoginDropdown Component

## Overview

O `LoginDropdown` é um componente de autenticação adaptativo que oferece diferentes comportamentos baseados no tamanho da tela:

- **Desktop (≥ 768px)**: Abre um dropdown com formulário de login inline
- **Mobile (< 768px)**: Redireciona para a página `/account/login`

## Funcionalidades

### Desktop Features
- ✅ Dropdown com formulário completo
- ✅ Validação em tempo real (Yup + React Hook Form)
- ✅ Focus trap e navegação por teclado
- ✅ Fechamento por clique fora, ESC, ou mudança de rota
- ✅ Animações suaves (fade + scale)
- ✅ Estados de loading e erro
- ✅ Acessibilidade completa (WAI-ARIA)

### Mobile Features
- ✅ Redirecionamento automático para `/account/login`
- ✅ Fechamento automático do dropdown ao redimensionar

### Validação
- **Email/Username**: Mínimo 3 caracteres, validação de email se contém '@'
- **Password**: Mínimo 6 caracteres
- **Remember Me**: Checkbox opcional

### Acessibilidade
- ✅ `aria-haspopup="dialog"`
- ✅ `aria-expanded` e `aria-controls`
- ✅ `role="dialog"` e `aria-modal="true"`
- ✅ Focus trap ativo
- ✅ Labels associadas e `aria-invalid`
- ✅ Mensagens de erro com `aria-live="assertive"`

## Uso

```tsx
import { LoginDropdown } from '../components/_ui/Header/LoginDropdown'

// No header/navbar
<nav className="hidden md:flex gap-6">
  <Link href="/about">About</Link>
  <LoginDropdown />
</nav>
```

## Integração

O componente utiliza:
- **AuthContext**: Para autenticação (`useAuth` hook)
- **React Hook Form + Yup**: Para validação
- **React Toastify**: Para notificações
- **Lucide React**: Para ícones
- **Next.js Router**: Para navegação

## Estilos

- Utiliza Tailwind CSS
- Animações customizadas em `src/styles/tailwind.css`
- Cores e tokens consistentes com o design system
- Responsivo e acessível

## Comportamento

### Desktop
1. Clique em "Login" → Abre dropdown
2. Preencha formulário → Validação em tempo real
3. Submit → Integração com AuthContext
4. Sucesso → Fecha dropdown, mostra toast, redireciona

### Mobile
1. Clique em "Login" → Redireciona para `/account/login`
2. Mantém fluxo existente de autenticação

## Dependências

- `react-hook-form`
- `@hookform/resolvers/yup`
- `yup`
- `react-toastify`
- `lucide-react`
- `next/router`

## Testes

### Desktop
- [ ] Clique abre dropdown
- [ ] Tab navega entre campos
- [ ] ESC fecha dropdown
- [ ] Clique fora fecha dropdown
- [ ] Validação funciona
- [ ] Submit com credenciais válidas funciona
- [ ] Submit com credenciais inválidas mostra erro

### Mobile
- [ ] Clique redireciona para `/account/login`

### Acessibilidade
- [ ] Focus trap ativo
- [ ] ARIA attributes corretos
- [ ] Navegação por teclado funciona
- [ ] Screen reader friendly 