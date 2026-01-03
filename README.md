<div align="center">

# 🎨 Shared Collaborative Whiteboard

### A powerful web application that enables real-time collaboration through an interactive whiteboard

Built with modern web technologies, this platform allows teams to brainstorm, plan, and visualize ideas together seamlessly across multiple projects.

[![Live Demo](https://img.shields.io/badge/demo-live-success?style=for-the-badge)](https://shared-collaborative-whiteboard.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)


[Live Demo](https://shared-collaborative-whiteboard.vercel.app/) · 

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🤝 Real-time Collaboration
Work simultaneously with team members with live cursor tracking and instant updates

### 📁 Multi-Project Management
Create and manage multiple whiteboards for different projects and teams

### 🎨 Drawing Tools
Complete set of drawing tools including pen, shapes, text, and more

</td>
<td width="50%">

### 🔐 User Authentication
Secure authentication powered by Clerk with multiple sign-in options

### 💾 Persistent Storage
All your work is automatically saved using Convex backend

### 📱 Responsive Design
Works seamlessly across desktop, tablet, and mobile devices

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Frontend** | ![Next.js](https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=flat-square&logo=typescript) ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black) |
| **Styling** | ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) ![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=flat-square&logo=shadcnui&logoColor=white) |
| **Real-time** | ![Liveblocks](https://img.shields.io/badge/Liveblocks-4285F4?style=flat-square) |
| **Backend** | ![Convex](https://img.shields.io/badge/Convex-FF6B6B?style=flat-square) |
| **Authentication** | ![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=flat-square&logo=clerk&logoColor=white) |
| **State Management** | ![Zustand](https://img.shields.io/badge/Zustand-443E38?style=flat-square) |
| **Deployment** | ![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white) |

</div>

---

## 🚀 Getting Started

### 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18.x or higher
- **npm** / **yarn** / **pnpm** / **bun** package manager

### 🔧 Installation

<details>
<summary><b>Step 1: Clone the repository</b></summary>

```bash
git clone https://github.com/AhmedHamzaSaifi/Shared-Collaborative-Whiteboard.git
cd Shared-Collaborative-Whiteboard
```
</details>

<details>
<summary><b>Step 2: Install dependencies</b></summary>

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```
</details>

<details>
<summary><b>Step 3: Set up environment variables</b></summary>

Create a `.env.local` file in the root directory:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Convex Backend
NEXT_PUBLIC_CONVEX_URL=your_convex_deployment_url
CONVEX_DEPLOYMENT=your_convex_deployment

# Liveblocks
LIVEBLOCKS_SECRET_KEY=your_liveblocks_secret_key
```

**How to get API keys:**
- **Clerk**: Sign up at [clerk.com](https://clerk.com) and create a new application
- **Convex**: Sign up at [convex.dev](https://convex.dev) and create a new project
- **Liveblocks**: Sign up at [liveblocks.io](https://liveblocks.io) and get your secret key

</details>

<details>
<summary><b>Step 4: Run the development server</b></summary>

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application! 🎉

</details>

---

## 📁 Project Structure

```
Shared-Collaborative-Whiteboard/
├── 📂 app/                    # Next.js app directory (routes & pages)
├── 📂 components/             # Reusable React components
│   ├── ui/                   # shadcn/ui components
│   └── ...                   # Custom components
├── 📂 convex/                 # Convex backend functions & schema
├── 📂 hooks/                  # Custom React hooks
├── 📂 lib/                    # Utility functions and helpers
├── 📂 providers/              # React context providers
├── 📂 public/                 # Static assets (images, icons)
├── 📂 store/                  # Zustand state management
├── 📂 types/                  # TypeScript type definitions
├── 📄 middleware.ts           # Next.js middleware (auth, etc.)
├── 📄 liveblocks.config.ts   # Liveblocks configuration
├── 📄 tailwind.config.ts     # Tailwind CSS configuration
└── 📄 package.json           # Project dependencies & scripts
```

---

## 🎯 Key Features Explained

<details>
<summary><b>🤝 Real-time Collaboration</b></summary>

Powered by **Liveblocks**, multiple users can work on the same whiteboard simultaneously with:
- Live cursor tracking
- Real-time presence indicators
- Instant synchronization of all changes
- Conflict-free collaboration

</details>

<details>
<summary><b>🔐 Authentication & Security</b></summary>

Secure user authentication and management using **Clerk**:
- Email/password authentication
- Social logins (Google, GitHub, etc.)
- Session management
- Protected routes

</details>

<details>
<summary><b>💾 Data Persistence</b></summary>

**Convex** provides a reliable backend for:
- Storing whiteboard data
- User information management
- Project details
- Real-time synchronization across devices

</details>

<details>
<summary><b>🎨 Drawing Tools</b></summary>

Comprehensive set of tools for creative collaboration:
- ✏️ Freehand drawing with customizable brush
- 🔲 Shapes (rectangles, circles, lines, arrows)
- 📝 Text annotations
- 🎨 Color picker with palette
- 🧹 Eraser tool
- ↩️ Undo/Redo functionality
- 🖱️ Selection and move tools

</details>

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | 🚀 Start development server |
| `npm run build` | 🔨 Create production build |
| `npm start` | ▶️ Start production server |
| `npm run lint` | 🔍 Run ESLint for code quality |

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy your Next.js app:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/AhmedHamzaSaifi/Shared-Collaborative-Whiteboard)

**Manual Deployment Steps:**

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Import Project"
4. Select your repository
5. Configure environment variables (same as `.env.local`)
6. Click "Deploy"

That's it! Your app will be live in minutes. ✨

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**! 🙏

<details>
<summary><b>How to Contribute</b></summary>

1. **Fork the Project**
   ```bash
   # Click the 'Fork' button at the top right of this page
   ```

2. **Clone your Fork**
   ```bash
   git clone https://github.com/your-username/Shared-Collaborative-Whiteboard.git
   cd Shared-Collaborative-Whiteboard
   ```

3. **Create a Feature Branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```

4. **Make your Changes**
   - Write clean, maintainable code
   - Follow the existing code style
   - Add comments where necessary

5. **Commit your Changes**
   ```bash
   git add .
   git commit -m 'Add some AmazingFeature'
   ```

6. **Push to the Branch**
   ```bash
   git push origin feature/AmazingFeature
   ```

7. **Open a Pull Request**
   - Go to your fork on GitHub
   - Click "Pull Request"
   - Provide a clear description of your changes

</details>

### 💡 Contribution Ideas

- 🐛 Report bugs
- 💡 Suggest new features
- 📝 Improve documentation
- 🎨 Enhance UI/UX
- ⚡ Optimize performance

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License - you are free to use, modify, and distribute this software.
```

---

## 🙏 Acknowledgments

Special thanks to these amazing technologies and services:

<div align="center">

| Technology | Description |
|-----------|-------------|
| [**Next.js**](https://nextjs.org/) | The React framework for production |
| [**Liveblocks**](https://liveblocks.io/) | Real-time collaboration infrastructure |
| [**Convex**](https://www.convex.dev/) | Backend platform with real-time sync |
| [**Clerk**](https://clerk.com/) | Complete authentication solution |
| [**shadcn/ui**](https://ui.shadcn.com/) | Beautiful UI components |
| [**Tailwind CSS**](https://tailwindcss.com/) | Utility-first CSS framework |
| [**Vercel**](https://vercel.com/) | Hosting and deployment platform |

</div>

---

## 📞 Contact & Support

<div align="center">

### Ahmed Hamza Saifi

[![GitHub](https://img.shields.io/badge/GitHub-@AhmedHamzaSaifi-181717?style=for-the-badge&logo=github)](https://github.com/AhmedHamzaSaifi)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin)](https://linkedin.com/in/AhmedHamzaSaifi)

**Project Link:** [Shared-Collaborative-Whiteboard](https://github.com/AhmedHamzaSaifi/Shared-Collaborative-Whiteboard)

</div>

---

<div align="center">

### ⭐ Show your support

Give a ⭐️ if this project helped you!

**Made with ❤️ by [Ahmed Hamza Saifi](https://github.com/AhmedHamzaSaifi)**

</div>
