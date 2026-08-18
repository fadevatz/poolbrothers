---
name: Pool Brothers
description: O Autêntico Método Americano de Piscinas de Luxo
colors:
  primary: "#003B73"
  primary-dark: "#00254A"
  primary-light: "#00529E"
  primary-hover: "#002D59"
  secondary: "#00D2D2"
  secondary-light: "#33E0E0"
  secondary-dark: "#00A3A3"
  secondary-hover: "#00B8B8"
  accent-red: "#C8102E"
  accent-red-dark: "#9E0B22"
  neutral-bg: "#F4F8FA"
  neutral-surface: "#FFFFFF"
  neutral-dark: "#0A1728"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 700
    lineHeight: "1.1"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2rem, 3.5vw, 2.75rem)"
    fontWeight: 700
    lineHeight: "1.15"
  title:
    fontFamily: "Inter, Lato, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: "1.4"
  body:
    fontFamily: "Inter, Lato, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.625"
  label:
    fontFamily: "Inter, Lato, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.05em"
rounded:
  sm: "4px"
  md: "12px"
  lg: "16px"
  full: "9999px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-surface}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.primary-dark}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  button-secondary-hover:
    backgroundColor: "{colors.secondary-hover}"
  button-red:
    backgroundColor: "{colors.accent-red}"
    textColor: "{colors.neutral-surface}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  input-primary:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.neutral-dark}"
    rounded: "{rounded.md}"
    padding: "14px 16px"
  card-primary:
    backgroundColor: "{colors.neutral-surface}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Pool Brothers

## Overview

**Creative North Star: "The Sculpted Crystal Sanctuary"**

O sistema de design da **Pool Brothers** traduz a solidez da engenharia autêntica americana com a elegância cristalina de piscinas de resort de luxo. A atmosfera visual combina azuis profundos de autoridade com toques vibrantes de ciano translúcido e detalhes estratégicos em vermelho da bandeira americana, evocando precisão, frescor e prestígio.

O design prioriza uma experiência limpa e escultural: fundos suaves em tom gélido (`#F4F8FA`), cards brancos elevados com sombras difusas e bordas delicadas, além de microinterações fluidas ao passar o mouse.

**Key Characteristics:**
- **Autoridade Náutica & Corporativa**: Base ancorada em azul marinho profundo (`#003B73` / `#0A1728`).
- **Luminosidade Aquática**: Destaques e pontos de foco revestidos em ciano reluzente (`#00D2D2`).
- **Geometria Suave**: Raios de curvatura modernos (`12px` e `16px`) conferindo um visual amigável e sofisticado.
- **Herança Americana**: Detalhes em vermelho (`#C8102E`) utilizados pontualmente em selos e badges de garantia.

## Colors

A paleta é estruturada em torno de três pilares: a solidez do Azul Bandeira, a vitalidade do Ciano Cristalino e o contraste funcional dos Tons Neutros.

### Primary
- **Flag Blue** (`#003B73`): Utilizado como a cor de autoridade em botões primários, títulos principais e elementos de cabeçalho.
- **Flag Blue Dark** (`#00254A`): Tom profundo para hovers e fundos escuros de alta densidade.
- **Flag Blue Light** (`#00529E`): Tom intermediário para gradientes e destaques de suporte.

### Secondary
- **Pool Cyan** (`#00D2D2`): Cor de destaque vibrante que representa a água cristalina e a tecnologia de revestimento. Usada em botões de ação secundária, ícones ativos e brilhos difusos.
- **Pool Cyan Dark** (`#00A3A3`): Variante para estados de hover e texto sobre fundos claros.

### Tertiary (Accent)
- **Striped Red** (`#C8102E`): Vermelho da bandeira americana reservado para badges de urgência, garantia exclusiva e destaques promocionais de alta importância.

### Neutral
- **Ice Background** (`#F4F8FA`): Fundo gélido suave que sustenta a aplicação sem cansar os olhos.
- **Pure White** (`#FFFFFF`): Cor base para superfícies de cards, modais e campos de formulário.
- **Deep Navy Dark** (`#0A1728`): Tom quase preto com nuances azuladas para textos de alto contraste e seções noturnas.

### Named Rules
**The Crystal Highlight Rule.** O ciano (`#00D2D2`) deve ser aplicado em no máximo 15% de qualquer tela. Sua vivacidade deve atrair o olho do visitante exatamente para onde a conversão acontece.

## Typography

**Display Font:** Cormorant Garamond (com fallback `Georgia, serif`)
**Sans-Serif Font (Body & UI):** Inter / Lato (com fallback `sans-serif`)

A tipografia combina a sofisticação da fonte serifada **Cormorant Garamond** nos títulos principais com a precisão técnica e alta legibilidade da **Inter** nos textos de apoio, parágrafos, rótulos e elementos da interface.

### Hierarchy
- **Display** (weight: `700`, size: `clamp(2.5rem, 5vw, 4rem)`, line-height: `1.1`): Utilizado em h1 no Hero e títulos de seções principais para impactar o visitante.
- **Headline** (weight: `700`, size: `clamp(1.75rem, 3.5vw, 2.5rem)`, line-height: `1.15`): Subtítulos de seções primárias e destaques.
- **Title** (weight: `700`, size: `1.25rem`, line-height: `1.4`): Títulos de cards, modais e componentes.
- **Body** (weight: `400` / `500`, size: `1rem`, line-height: `1.625`): Texto corrido de parágrafos. Max line length: `65–75ch`.
- **Label** (weight: `700`, size: `0.75rem` / `12px`, letter-spacing: `0.05em`, uppercase): Rótulos de formulário, botões, tags de telemetria e badges.

### Named Rules
**The Contrast Authority Rule.** Títulos em azul marinho profundo (`#003B73`) sempre possuem peso forte (`700` ou `900`), garantindo presença e autoridade em fundos claros.

## Layout

O layout baseia-se em uma grade responsiva com largura máxima centralizada de `1280px` (container `max-w-7xl`). 

- **Espaçamento Vertical**: As seções principais mantêm espaçamento consistente de `4rem` (`64px`) em mobile a `6rem` (`96px`) em desktop.
- **Grid de Cards**: Layouts de diferenciais e galerias usam CSS Grid com `gap: 1.5rem` (`24px`).
- **Densidade**: Espaçada e arejada, priorizando o respiro visual e o destaque das imagens de piscinas.

## Elevation & Depth

O sistema utiliza elevação suave por meio de sombras difusas em tons de azul e ciano, simulando a refração da água sobre superfícies brancas.

### Shadow Vocabulary
- **Card Default Shadow** (`box-shadow: 0 10px 30px -10px rgba(0, 59, 115, 0.08)`): Elevação sutil em estado de repouso.
- **Card Hover Shadow** (`box-shadow: 0 20px 40px -10px rgba(0, 59, 115, 0.15)`): Resposta tátil ao passar o cursor sobre cards interativos.
- **Blue Glow** (`box-shadow: 0 0 25px rgba(0, 59, 115, 0.35)`): Brilho de autoridade sob botões primários.
- **Cyan Glow** (`box-shadow: 0 0 25px rgba(0, 210, 210, 0.4)`): Brilho aquático em botões e badges secundárias.

### Named Rules
**The Responsive Depth Rule.** Cards e superfícies permanecem planos ou levemente sombreados em repouso. A elevação máxima e o brilho aquático ativam-se mediante interação (hover/focus).

## Shapes

A linguagem de formas é caracterizada por cantos arredondados orgânicos e modernos, transmitindo suavidade sem perder o rigor geométrico.

- **Botões e Inputs**: `border-radius: 12px` (`0.75rem`).
- **Cards e Seções**: `border-radius: 16px` (`1rem`).
- **Badges e Avatares**: `border-radius: 9999px` (pílula).
- **Bordas**: Traços sutis de `1px` em `rgba(226, 232, 240, 0.8)` que ganham realce ciano (`rgba(0, 210, 210, 0.5)`) em hover.

## Components

### Buttons
- **Primary Button (`.btn-primary-pb`)**:
  - Background: `#003B73` (Flag Blue), Text: `#FFFFFF`, Weight: `700`, Radius: `12px`.
  - Padding: `0.875rem 1.75rem`. Shadow: `0 10px 20px -5px rgba(0, 59, 115, 0.3)`.
  - Hover: Background `#002D59`, `transform: translateY(-2px)`.
- **Secondary Button (`.btn-secondary-pb`)**:
  - Background: `#00D2D2` (Pool Cyan), Text: `#00254A`, Weight: `900`, Radius: `12px`.
  - Hover: Background `#00B8B8`, `transform: translateY(-2px)`.
- **Accent Red Button (`.btn-red-pb`)**:
  - Background: `#C8102E` (Striped Red), Text: `#FFFFFF`, Weight: `700`, Radius: `12px`.

### Inputs / Fields (`.input-pb`)
- **Style**: Background `#FFFFFF`, Border `2px solid rgba(0, 59, 115, 0.2)`, Radius `12px`, Padding `0.875rem 1rem`.
- **Focus**: Border Color `#003B73`.

### Cards & Panels (`.card-pb`)
- **Style**: Background `#FFFFFF`, Radius `16px`, Border `1px solid rgba(226, 232, 240, 0.8)`.
- **Shadow**: `0 10px 30px -10px rgba(0, 59, 115, 0.08)`.
- **Hover**: Border Color `rgba(0, 210, 210, 0.5)`, Shadow `0 20px 40px -10px rgba(0, 59, 115, 0.15)`.

## Do's and Don'ts

### Do:
- **Do** manter a hierarquia de cores onde o Azul Bandeira (`#003B73`) comanda a estrutura e o Ciano (`#00D2D2`) direciona a ação.
- **Do** utilizar raios de curvatura consistentes de `12px` para elementos de ação e `16px` para contêineres de conteúdo.
- **Do** aplicar o efeito de transição `transform: translateY(-2px)` em estados de hover para botões e cards.

### Don't:
- **Don't** utilizar fundos cinzas puros; prefira sempre a tonalidade gélida `#F4F8FA` para manter o frescor visual piscineiro.
- **Don't** aplicar a cor Vermelha (`#C8102E`) de forma generalizada; limite seu uso a selos de garantia, alertas e CTAs de urgência.
- **Don't** remover os estados de focus ou hover dos componentes interativos.
