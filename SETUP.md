# Getting Started - Quick Setup Guide

## 📋 Prerequisites
- Node.js v16+ installed
- npm or yarn
- Git installed

## 🚀 Quick Start (3 Steps)

### 1. Clone the Repository
```bash
git clone https://github.com/genierosemagsulao-commits/Barangay-Nazareth-Financial-Management-Information-System.git
cd Barangay-Nazareth-Financial-Management-Information-System
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

The app will open at **http://localhost:5173**

## 📦 Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (hot reload) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Check code quality with ESLint |

## 🗂️ Project Structure

```
src/
├── components/       # Reusable React components
├── pages/            # Page components (Login, Dashboard, etc.)
├── styles/           # CSS stylesheets
├── App.jsx          # Main app component
└── main.jsx         # Entry point

public/
├── index.html       # HTML template
└── [feature pages]  # Feature-specific pages

vite.config.js       # Vite configuration
.eslintrc.json       # ESLint rules
package.json         # Dependencies & scripts
```

## 🔧 Development Workflow

1. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** in `src/components/` or `src/pages/`

3. **Test locally** with `npm run dev`

4. **Commit and push**:
   ```bash
   git add .
   git commit -m "Add: description of your changes"
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request** on GitHub

## 🛠️ Tech Stack

- **React** 18 - UI Framework
- **Vite** - Build tool & dev server
- **React Router** v6 - Routing
- **Axios** - HTTP client
- **ESLint** - Code quality
- **CSS** - Styling

## 📝 Features to Build

- [ ] Login/Authentication
- [ ] Dashboard
- [ ] Budget Management
- [ ] Income Tracking
- [ ] Expense Tracking
- [ ] Reports & Analytics
- [ ] User Management
- [ ] Document Management

## 🐛 Troubleshooting

### Port 5173 already in use?
```bash
npm run dev -- --port 3000
```

### Clear cache and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build fails?
Make sure all dependencies are installed:
```bash
npm install --legacy-peer-deps
```

## 📚 Resources

- [React Docs](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [React Router Docs](https://reactrouter.com)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT

---

**Ready to code?** Run `npm run dev` and start building! 🎉
