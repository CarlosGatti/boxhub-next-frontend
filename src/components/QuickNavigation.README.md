# QuickNavigation Component

Um componente de navegação rápida responsivo e acessível para páginas com múltiplas seções.

## 🚀 Características

- **Posicionamento inteligente**: Aparece apenas após scroll, não sobrepõe header/footer
- **Responsivo**: Comportamento diferente para mobile e desktop
- **Acessível**: Navegação por teclado, ARIA labels, screen reader friendly
- **Performance otimizada**: Throttled scroll events, IntersectionObserver
- **Sticky positioning**: Fica fixo durante scroll, mas "desgruda" no footer
- **Transições suaves**: Animações CSS para aparecer/desaparecer

## 📱 Comportamento

### Desktop (lg+)
- **Posição**: Sticky na sidebar ou fixo na lateral
- **Visibilidade**: Sempre visível quando ativo
- **Layout**: Lista vertical de links

### Mobile (< lg)
- **Posição**: Flutuante no topo após scroll
- **Visibilidade**: Aparece após 200px de scroll
- **Layout**: Accordion expansível/colapsável

## 🛠️ Uso Básico

```tsx
import { QuickNavigation } from './components/QuickNavigation'

const sections = [
  { id: 'intro', title: 'Introduction', href: '#intro' },
  { id: 'features', title: 'Features', href: '#features' },
  { id: 'contact', title: 'Contact', href: '#contact' }
]

function MyPage() {
  return (
    <div>
      {/* Seções com data-section attribute */}
      <section id="intro" data-section="intro">
        <h2>Introduction</h2>
      </section>
      
      <section id="features" data-section="features">
        <h2>Features</h2>
      </section>
      
      <section id="contact" data-section="contact">
        <h2>Contact</h2>
      </section>

      {/* Quick Navigation */}
      <QuickNavigation sections={sections} />
    </div>
  )
}
```

## 📋 Props

```tsx
interface QuickNavigationProps {
  sections: Array<{
    id: string      // ID único da seção
    title: string   // Título exibido no menu
    href: string    // Seletor CSS (ex: '#section-id')
  }>
  className?: string // Classes CSS adicionais
}
```

## 🎯 Requisitos do HTML

Para que o componente funcione corretamente, as seções devem ter:

1. **ID único**: `id="section-name"`
2. **Data attribute**: `data-section="section-name"`
3. **Footer**: Elemento `<footer>` para detectar limite inferior

```tsx
<section id="services" data-section="services">
  <h2>Our Services</h2>
</section>

<footer>
  <!-- Footer content -->
</footer>
```

## 🎨 Customização

### Posicionamento Desktop
```tsx
// Sidebar fixo
<div className="hidden lg:block fixed left-8 top-24 w-64 z-30">
  <QuickNavigation sections={sections} />
</div>

// Sidebar sticky
<div className="hidden lg:block lg:col-span-1">
  <div className="sticky top-8">
    <QuickNavigation sections={sections} />
  </div>
</div>
```

### Posicionamento Mobile
```tsx
// Topo flutuante
<div className="lg:hidden fixed top-20 left-4 right-4 z-40">
  <QuickNavigation sections={sections} />
</div>

// Canto inferior
<div className="lg:hidden fixed bottom-4 right-4 z-40">
  <QuickNavigation sections={sections} />
</div>
```

## ♿ Acessibilidade

- **ARIA labels**: `aria-label="Quick navigation"`
- **ARIA current**: `aria-current="location"` para seção ativa
- **ARIA expanded**: Para mobile accordion
- **Keyboard navigation**: Enter/Space para ativar
- **Focus management**: Anéis de foco visíveis
- **Screen readers**: Estrutura semântica adequada

## ⚡ Performance

- **Throttled scroll**: 16ms (~60fps)
- **Passive listeners**: Scroll events otimizados
- **IntersectionObserver**: Detecção eficiente do footer
- **RequestAnimationFrame**: Animações suaves
- **Cleanup**: Event listeners removidos adequadamente

## 🐛 Troubleshooting

### Quick Navigation não aparece
- Verifique se há scroll suficiente (> 200px)
- Confirme que as seções têm `data-section` attributes
- Verifique se há um elemento `<footer>` na página

### Navegação não funciona
- Confirme que os `href` são seletores CSS válidos
- Verifique se os elementos de destino existem
- Teste se os IDs são únicos

### Posicionamento incorreto
- Ajuste `top-24` para altura do seu header
- Verifique z-index se houver sobreposições
- Confirme que o container pai tem `position: relative`

## 📝 Exemplos

Veja `QuickNavigation.example.tsx` para exemplos completos de implementação em diferentes contextos. 