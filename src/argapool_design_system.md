# Design System: Argapool (argapool.com.br)

Mapeamento completo do **Design System** extraído diretamente do site oficial da **Argapool** (`https://argapool.com.br/`), referência no mercado de revestimentos monolíticos e cimentícios para piscinas de alto padrão no Brasil.

---

## 🎨 1. Paleta de Cores e Tokens Visuais

### Cores de Interface (UI Colors)
| Token / Aplicação | Código Hex / RGBA | Descrição Visual |
| :--- | :--- | :--- |
| **Navy Primário** | `#132238` / `#0F1E36` | Azul escuro fechado e profundo. Usado no cabeçalho sticky, rodapé e títulos principais. Transmite elegância e solidez. |
| **Ciano / Azul Água** | `#00A8CC` / `#00B4D8` | Azul turquesa cristalino. Usado em destaques, botões de ação, hovers e ícones de água. |
| **Verde Sucesso / WhatsApp** | `#25D366` / `#57B33E` | Verde vibrante usado no botão flutuante de atendimento direto via WhatsApp. |
| **Fundo Neutro Claro** | `#F8FAFC` / `#F1F5F9` | Cinza quase branco para seções limpas de texto e grids de produtos. |
| **Fundo Card / Transparência** | `#13223882` (50% Opacidade) | Fundo translúcido usado na barra de navegação sticky sobre o vídeo/banner principal. |
| **Texto Principal** | `#1E293B` / `#334155` | Chumbo escuro para alta legibilidade e contraste confortável. |
| **Texto Secundário / Muted** | `#64748B` / `#94A3B8` | Cinza médio para descrições secundárias e legendas. |

---

## 💎 2. Paleta do Produto (Swatches de Revestimento Plaster)

A Argapool divide suas cores de revestimento mineral em duas linhas conceituais:

### 🏝️ Linha Águas do Brasil
- **Branco Jericoacoara**: Branco luminoso inspirado no hotel Essenza, tom de água turquesa super clara.
- **Verde Pipa**: Turquesa natural com reflexos cristalinos.
- **Bege Arraial**: Areia de praia com toque levemente dourado ao sol.
- **Azul Noronha**: Azul oceânico profundo e uniforme.

### 🌐 Linha Destinos
- **Verde Bali**: Esmeralda natural estilo pedras vulcânicas/hiji.
- **Cinza Nova Iorque**: Concreto arquitetônico moderno e urbano.
- **Preto Dubai**: Preto espelho d'água de altíssimo luxo.
- **Bege Toscana**: Bege rústico elegante e acolhedor.

---

## 🔤 3. Tipografia

- **Fonte Principal (Headings & Body)**: `Hind Madurai` (Google Font sem serifa, geométrica, com alta legibilidade).
- **Fonte Secundária / Fallback**: `Poppins` & `Roboto`.
- **Hierarquia de Texto**:
  - **Títulos Hero (H1)**: `36px - 48px`, Peso `700` (Bold), Caixa Alta (`uppercase`), Espaçamento entre letras amplo (`letter-spacing: 0.05em`).
  - **Títulos de Seção (H2)**: `28px - 36px`, Peso `700` (Bold), Caixa Alta (`uppercase`).
  - **Subtítulos & Categorias**: `14px - 16px`, Peso `600` (Semi-bold), Caixa Alta (`uppercase`), Cor Ciano/Azul Água.
  - **Texto de Corpo**: `16px - 18px`, Peso `400` (Regular), Entrelinha relaxada (`line-height: 1.6`).
  - **Itens de Menu**: `13px - 14px`, Peso `600` (Semi-bold), Caixa Alta (`uppercase`).

---

## 🖥️ 4. Estrutura de Layout e Navegação

### Cabeçalho (Header)
- **Estilo**: Sticky / Transparente que ganha fundo semi-translúcido (`#13223882`) ao rolar a página.
- **Layout**: Logotipo com ícone de diamante/piscina à esquerda, links de navegação horizontais ao centro e botão Off-Canvas (menu lateral) à direita.
- **Links**: *Sobre*, *Produtos*, *Onde Encontrar*, *Faça Você Mesmo*, *Serviços*, *Revenda*, *Galeria*, *Contato*.

### Hero Section
- **Fundo**: Vídeo full-screen em loop mostrando tomada aérea de piscina orgânica com águas cristalinas e acabamento monolítico.
- **Overlay**: Gradiente escuro para legibilidade.
- **Tipografia**: Título centralizado em letras maiúsculas destacando revestimentos cimentícios e monolíticos.

---

## 🧱 5. Componentes & Micro-interações

- **Swatches de Cores (Cards Quadrados Arredondados)**: Cards de textura com cantos suavemente arredondados (`border-radius: 16px`), sombra sutil (`box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1)`) e efeito de zoom ao passar o mouse (`hover:scale-105`).
- **Botões (CTAs)**:
  - Formato: Retangular com cantos levemente arredondados (`border-radius: 8px` a `12px`).
  - Animação: `shrink` / `grow` suave no hover com transição de cor do azul marinho para o ciano.
- **Botão Flutuante de WhatsApp**: Ícone oficial verde no canto inferior direito com badge fixa e mensagem direta para vendas/revenda.
