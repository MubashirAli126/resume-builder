# Resume Builder

A modern, single-page web application for creating professional resumes with a guided step-by-step workflow, live preview, and multiple design templates.

---

## Features

- **Guided Section Workflow** — Build your resume section by section: Personal Info, About Me, Education, Work Experience, Areas of Expertise, Languages, and References
- **Multiple Templates** — Choose from three professional designs (Orange & Black, Blue, Teal) with live preview
- **Live Preview** — See changes instantly as you type
- **Profile Photo** — Upload and display a profile image in your resume
- **Repeatable Sections** — Add multiple entries for Education, Work Experience, and References
- **Auto-Save** — Progress is saved to local storage so you can continue later
- **Final Preview** — Dedicated preview page with options to edit, download (PDF/PNG), and share

---

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS 4 |
| State Management | Zustand |
| Forms | React Hook Form |
| Routing | React Router DOM |
| Icons | Lucide React |

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd resume-builder

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in the terminal).

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
src/
├── components/
│   ├── layout/          # MainLayout, Sidebar, FormPanel, PreviewPanel, CategorySelector
│   └── forms/           # PersonalForm, EducationForm, WorkForm, etc.
├── pages/               # FinalPreviewPage
├── templates/           # Resume templates (OrangeBlack, Blue, Teal)
├── store/               # Zustand store (resumeStore)
├── constants/           # Step configuration
├── routes/              # App routes
├── App.jsx
└── main.jsx
```

---

## Usage

1. **Select a section** from the sidebar or category grid.
2. **Fill in your details** in the form panel.
3. **Preview your resume** in real time on the right.
4. **Switch templates** to find the design that fits you.
5. **Go to Final Preview** when ready to download or share.

---

## License

This project is private and not licensed for public use.
