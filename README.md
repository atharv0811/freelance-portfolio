# Freelancer Portfolio

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green.svg?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-brightgreen.svg?style=for-the-badge)

Welcome to the **Freelancer Portfolio**! A modern, full-featured portfolio and blog platform designed for freelancers to showcase their work, share insights, and connect with potential clients. Built with Next.js 15, TypeScript, and MongoDB, this application combines a stunning frontend with a powerful backend.

---

## 🌟 Key Features

- **👤 Professional Portfolio Showcase**: Display projects, services, and expertise with an elegant hero section and project gallery
- **📝 Integrated Blog System**: Full-featured blog with rich text editing, categories, tags, and search functionality
- **🔐 Admin Dashboard**: Secure admin panel for managing posts, with authentication using NextAuth
- **✍️ Rich Text Editor**: TipTap-powered editor with syntax highlighting and code block support
- **🔍 Search & Filter**: Advanced search functionality with categories, tags, and pagination
- **💾 MongoDB Integration**: Persistent data storage with Mongoose ODM
- **🎨 Responsive Design**: Mobile-first design with Tailwind CSS and shadcn/ui components
- **🌓 Dark Mode Support**: Next-themes integration for seamless dark/light theme switching
- **⚡ Performance Optimized**: Built with Next.js 15 using Turbopack for fast development and build times
- **📧 Form Validation**: Robust client-side validation with React Hook Form and Zod

---

## 🏗️ Project Structure

```bash
freelance-portfolio/
├── 📂 src/
│   ├── 📂 app/                 # Next.js App Router pages and layouts
│   │   ├── 📂 api/            # API routes for backend functionality
│   │   │   ├── auth/          # NextAuth configuration and routes
│   │   │   ├── create-post/   # POST endpoint for creating blog posts
│   │   │   ├── delete-post/   # DELETE endpoint for removing posts
│   │   │   ├── get-admin-posts/ # GET endpoint for admin post retrieval
│   │   │   ├── get-post/      # GET endpoint for single post by slug
│   │   │   └── get-posts/     # GET endpoint for all posts with filters
│   │   ├── 📂 admin/          # Admin dashboard pages
│   │   │   ├── 📂 add/        # New post creation page
│   │   │   └── 📂 _components/# Reusable admin components
│   │   ├── 📂 auth/           # Authentication pages
│   │   ├── 📂 blog/           # Public blog pages
│   │   │   ├── 📂 [slug]/    # Dynamic blog post pages
│   │   │   └── 📂 _components/# Blog-specific components
│   │   ├── 📂 about/          # About page
│   │   ├── 📂 plans/          # Services/plans page
│   │   ├── layout.tsx         # Root layout wrapper
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── 📂 components/         # Reusable React components
│   │   ├── 📂 ui/            # Shadcn/ui and base components
│   │   ├── hero.tsx          # Landing hero section
│   │   ├── navbar.tsx        # Navigation bar
│   │   ├── blog.tsx          # Blog preview section
│   │   ├── projects.tsx      # Projects showcase section
│   │   ├── services.tsx      # Services section
│   │   └── ...               # Other layout components
│   ├── 📂 context/           # React context providers
│   │   └── AuthProvider.tsx  # Authentication context wrapper
│   ├── 📂 features/          # Redux features/slices
│   │   └── search/           # Search functionality state
│   ├── 📂 hooks/             # Custom React hooks
│   ├── 📂 lib/               # Utility functions and helpers
│   │   ├── dbConnect.ts      # MongoDB connection handler
│   │   └── utils.ts          # General utility functions
│   ├── 📂 models/            # Mongoose schemas
│   │   ├── blogpost.model.ts # Blog post schema
│   │   └── user.model.ts     # User/admin schema
│   ├── 📂 schemas/           # Zod validation schemas
│   ├── 📂 types/             # TypeScript type definitions
│   ├── 📂 loaders/           # Skeleton loaders for loading states
│   ├── middleware.ts         # Next.js middleware (auth, redirects)
│   └── store.ts              # Redux store configuration
├── 📂 public/                # Static assets (images, fonts, etc.)
├── package.json              # Project dependencies and scripts
├── tsconfig.json             # TypeScript configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── next.config.ts            # Next.js configuration
├── components.json           # Shadcn/ui components configuration
└── eslint.config.mjs         # ESLint configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **MongoDB** (Local instance or Atlas connection string)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/freelance-portfolio.git
   cd freelance-portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env.local` file in the root directory with the following variables:

   ```bash
   # Database
   MONGODB_URI=your_mongodb_connection_string

   # NextAuth Configuration
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_secret_key_here

   # Google Authentication (Optional)
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret

   # Site Verification (Optional)
   GOOGLE_SITE_VERIFICATION=your_verification_code

   # Admin Credentials
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=your_secure_password
   ```

4. **Running the Application:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Create optimized production build
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

---

## 🛠️ Technology Stack

| Frontend                                                                                                 | Backend                                                                                                   | Database & Auth                                                                                        | Styling & UI                                                                                              |
| :------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------- |
| ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)        | ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=nodejs&logoColor=white)            | ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)        | ![Tailwind CSS](https://img.shields.io/badge/Tailwind-06B6D4?style=flat&logo=tailwindcss&logoColor=white) |
| ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)               | ![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)        | ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=flat&logo=mongodb&logoColor=white)      | ![Shadcn/UI](https://img.shields.io/badge/Shadcn/ui-000000?style=flat&logoColor=white)                    |
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) | ![NextAuth.js](https://img.shields.io/badge/NextAuth.js-000000?style=flat&logo=nextdotjs&logoColor=white) | ![NextAuth](https://img.shields.io/badge/NextAuth.js-000000?style=flat&logo=nextdotjs&logoColor=white) | ![Framer Motion](https://img.shields.io/badge/Framer-0055FF?style=flat&logo=framer&logoColor=white)       |
| React Hook Form                                                                                          | Zod Validation                                                                                            | bcryptjs (Password hashing)                                                                            | TipTap (Rich Text Editor)                                                                                 |
| Redux Toolkit                                                                                            | API Routes                                                                                                | JWT                                                                                                    | React Slick (Carousel)                                                                                    |
| Axios                                                                                                    | Mongoose ODM                                                                                              |                                                                                                        | Sonner (Toast Notifications)                                                                              |

---

## 📚 Key Dependencies

**Frontend:**

- `next` - React framework with App Router
- `react-hook-form` - Efficient form handling
- `zod` - TypeScript-first schema validation
- `@tiptap/react` - Rich text editor
- `framer-motion` - Animation library
- `@reduxjs/toolkit` - State management
- `next-auth` - Authentication solution
- `next-themes` - Dark mode support

**Backend:**

- `mongoose` - MongoDB ODM
- `bcryptjs` - Password encryption
- `next-auth` - OAuth and session management

**Styling:**

- `tailwindcss` - Utility-first CSS framework
- `@radix-ui/*` - Headless UI components
- `shadcn/ui` - High-quality component library

---

## 🔐 Authentication

This project uses **NextAuth.js** v4 for secure authentication:

- Admin login with username/password
- Session management with secure tokens
- Protected API routes and pages
- Support for OAuth providers (Google, etc.)

Admin credentials are configured via environment variables. Passwords are hashed using `bcryptjs` before storage.

---

## 📝 Blog Features

- **Create Posts**: Rich text editing with syntax highlighting for code blocks
- **Manage Categories**: Organize posts by categories
- **Tagging System**: Add multiple tags for better discoverability
- **Search & Filter**: Find posts by keywords, categories, or tags
- **Pagination**: Efficient content loading
- **Author Info**: Display author details and credentials
- **Comments Ready**: Infrastructure for future comment functionality

---

## 🎯 API Endpoints

### Blog Posts

- `GET /api/get-posts` - Fetch all posts with pagination and filters
- `GET /api/get-post/[slug]` - Get single post by slug
- `GET /api/get-admin-posts` - Get admin's posts (requires authentication)
- `POST /api/create-post` - Create new post (requires authentication)
- `DELETE /api/delete-post/[id]` - Delete post (requires authentication)

### Authentication

- `POST /api/auth/[...nextauth]` - NextAuth configuration and providers

---

## 🌐 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard
5. Deploy with a single click

For detailed instructions, visit [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying)

### Alternative: Self-hosted Deployment

- Build: `npm run build`
- Start: `npm run start`
- Ensure MongoDB is accessible from your server
- Set up SSL/TLS certificates for production

---

## 📖 Project Configuration Files

- **`tailwind.config.ts`** - Tailwind CSS theme customization
- **`tsconfig.json`** - TypeScript compiler options
- **`next.config.ts`** - Next.js app configuration
- **`components.json`** - Shadcn/ui components registry
- **`eslint.config.mjs`** - Code quality rules

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs) - Framework documentation
- [Tailwind CSS](https://tailwindcss.com) - Styling framework
- [Shadcn/UI](https://ui.shadcn.com) - Component library
- [NextAuth.js](https://next-auth.js.org) - Authentication solution
- [MongoDB](https://www.mongodb.com) - Database platform

---

Built with ❤️ by [Atharv Karnekar](https://github.com/yourusername)
