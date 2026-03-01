# Kajal Ghadage | Portfolio

A premium, interactive personal portfolio built with **React** and **Vite**, featuring advanced UI/UX elements, theme awareness, and smooth transitions.

## 🚀 Live Demo
*()*

## ✨ Key Features
- **Dynamic Theming**: Seamless switching between Dark and Light modes with a custom-animated Sun/Moon toggle.
- **Interactive Spotlight**: A mouse-following radial gradient that illuminates content, with theme-aware colors (Teal for Dark, Depth for Light).
- **Tactile Interactions**:
    - **Shake Animation**: Subtle horizontal oscillation on social icons (GitHub, LinkedIn, Mail) for interactive feedback.
    - **Header Lift**: High-end hover effects on footer tagline and navigation indicators.
- **Scroll-Synced Navigation**: Active section tracking in the sidebar navigation as you scroll through the content.
- **Web-Native Resume**: A standalone `resume.html` for better accessibility and SEO, linked directly from the portfolio.
- **Audio Feedback**: Subtle, non-intrusive sound effects synchronized with theme transitions.

## 🛠️ Tech Stack
- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS, Vanilla CSS (Semantic Variables)
- **Icons**: React Icons (Fi, Fa, Si)
- **Fonts**: Inter (Google Fonts)

## 📂 Project Structure
```text
├── public/               # Static assets & standalone HTML resume
├── src/
│   ├── assets/           # Images, SVGs, and brand assets
│   ├── components/       # Functional React components (Sidebar, MainContent)
│   ├── App.jsx           # Core app logic & state (Theme, Spotlight, Audio)
│   ├── index.css         # Global styles & premium animations (@keyframes)
│   └── main.jsx          # Entry point
└── tailwind.config.js    # Design system configuration
```

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Kajal-ghadage2000/Portfolio-project.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development
Run the development server with HMR:
```bash
npm run dev
```

### Build
Generate a production-ready build in the `dist/` folder:
```bash
npm run build
```

## 📄 License
MIT License - Created with obsession for detail by Kajal Ghadage.