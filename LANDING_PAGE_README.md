# 🚀 Landing Page - Pires Builders Inc

Landing page completa para captação de leads com integração HubSpot e fallback local.

## 📁 Estrutura de Arquivos

```
src/
├── components/lp/
│   ├── Hero.tsx              # Seção principal com headline e CTA
│   ├── SocialProof.tsx       # Depoimentos e selos de confiança
│   ├── LeadForm.tsx          # Formulário de captura de leads
│   ├── FAQ.tsx               # Perguntas frequentes
│   └── FooterMini.tsx        # Footer minimalista
├── lib/lead/
│   ├── validator.ts          # Schema de validação Zod
│   └── hubspot.ts            # Integração HubSpot Forms API
├── pages/
│   ├── lp/
│   │   ├── estimate.tsx      # Landing page principal
│   │   └── thank-you.tsx     # Página de agradecimento
│   └── api/
│       └── lead.ts           # API para processar leads
```

## 🎯 Funcionalidades

### ✅ Implementadas
- **Formulário de captura** com validação Zod + React Hook Form
- **Integração HubSpot** com fallback para armazenamento local
- **Design responsivo** com Tailwind CSS
- **Acessibilidade** (WAI-ARIA, navegação por teclado)
- **SEO otimizado** (meta tags, Schema.org, Open Graph)
- **Rate limiting** (5 requests/min por IP)
- **Anti-spam** (honeypot field)
- **Tracking de conversão** (GA4, Meta Pixel)
- **UTM parameters** preservados

### 🎨 Design
- **Cores**: Orange (#F2490A) + tons de cinza
- **Tipografia**: Consistente com o site principal
- **Animações**: Suaves e performáticas
- **Mobile-first**: Layout otimizado para dispositivos móveis

## ⚙️ Configuração

### 1. Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```bash
# HubSpot Configuration
HUBSPOT_PORTAL_ID=your_portal_id_here
HUBSPOT_FORM_ID=your_form_id_here
HUBSPOT_TOKEN=your_private_app_token_here

# Optional: Email Configuration (for fallback)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Analytics
GA_MEASUREMENT_ID=G-XXXXXXXXXX
META_PIXEL_ID=XXXXXXXXXX
```

### 2. HubSpot Setup

1. **Criar Private App**:
   - HubSpot → Settings → Account Setup → Integrations → Private Apps
   - Criar nova app com permissões: `forms` (read/write)

2. **Configurar Form**:
   - HubSpot → Marketing → Lead Capture → Forms
   - Criar form com campos: firstname, lastname, email, phone, city, project_type, message

3. **Obter IDs**:
   - Portal ID: Settings → Account Setup → Account Defaults
   - Form ID: URL do form após criação
   - Token: Private App → Auth

### 3. Analytics Setup

#### Google Analytics 4
```html
<!-- Adicionar no _document.tsx -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

#### Meta Pixel
```html
<!-- Adicionar no _document.tsx -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'META_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 🚀 Deploy

### Vercel
```bash
# Build e deploy automático
git push origin main
```

### Outros
```bash
npm run build
npm start
```

## 📊 Monitoramento

### Leads Armazenados Localmente
- Localização: `.next/cache/leads/`
- Formato: JSON com timestamp
- Estrutura:
```json
{
  "name": "João Silva",
  "email": "joao@email.com",
  "phone": "(857) 350-7504",
  "city": "Cambridge, MA",
  "projectType": "Renovation",
  "message": "Reforma de cozinha",
  "submittedAt": "2024-01-15T10:30:00.000Z",
  "source": "landing-page",
  "userAgent": "...",
  "ip": "192.168.1.1"
}
```

### Logs
- Console do servidor mostra leads salvos
- HubSpot dashboard para leads enviados
- Analytics para conversões

## 🎯 URLs

- **Landing Page**: `/lp/estimate`
- **Thank You**: `/lp/thank-you`
- **API**: `/api/lead`

## 🔧 Customização

### Cores
Editar em `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      'brand-orange': '#F2490A',
    }
  }
}
```

### Conteúdo
- **Hero**: `src/components/lp/Hero.tsx`
- **Depoimentos**: `src/components/lp/SocialProof.tsx`
- **FAQ**: `src/components/lp/FAQ.tsx`
- **Formulário**: `src/components/lp/LeadForm.tsx`

### Validação
Editar schema em `src/lib/lead/validator.ts`

## 🐛 Troubleshooting

### HubSpot não funciona
1. Verificar variáveis de ambiente
2. Confirmar permissões da Private App
3. Verificar logs no console
4. Fallback automático para armazenamento local

### Formulário não envia
1. Verificar validação Zod
2. Confirmar rate limiting
3. Verificar logs da API
4. Testar fallback local

### Performance
1. Lighthouse score deve ser ≥ 90
2. Imagens otimizadas com next/image
3. Lazy loading implementado
4. Bundle size otimizado

## 📈 Métricas de Sucesso

- **Conversão**: > 5% de visitantes para leads
- **Performance**: Lighthouse ≥ 90
- **Acessibilidade**: WCAG 2.1 AA
- **SEO**: Score ≥ 90
- **Mobile**: Score ≥ 90

## 🔒 Segurança

- Rate limiting implementado
- Validação de entrada com Zod
- Honeypot anti-spam
- Sanitização de dados
- HTTPS obrigatório

---

**Status**: ✅ Pronto para produção  
**Última atualização**: Janeiro 2024  
**Versão**: 1.0.0
