# Vibrant Interactive Show

A modern, interactive portfolio and showcase website built with React, TypeScript, and cutting-edge UI technologies. Features smooth animations, particle effects, and a responsive design that brings your content to life.

## ✨ Features

- **Interactive Hero Section** - Engaging landing area with dynamic content
- **Smooth Carousel** - Showcase your work with elegant sliding transitions
- **Feature Highlights** - Present your key capabilities and offerings
- **Customer Testimonials** - Build trust with social proof
- **Video Showcase** - Embed and display video content seamlessly
- **Portfolio Gallery** - Display your projects and achievements
- **Testimonials Section** - Collect and display user feedback
- **Particle Background** - Animated particle effects for visual appeal
- **Mouse Follower** - Interactive cursor effects
- **Dark/Light Theme** - Toggle between themes for user preference
- **Responsive Design** - Optimized for all devices and screen sizes
- **Smooth Scrolling** - Enhanced navigation experience

## 🚀 Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS with custom animations
- **UI Components:** shadcn/ui with Radix UI primitives
- **Icons:** Lucide React
- **State Management:** TanStack Query
- **Routing:** React Router DOM
- **Theme Management:** next-themes
- **Form Handling:** React Hook Form with Zod validation
- **Charts & Data Visualization:** Recharts
- **Notifications:** Sonner toasts
- **Animations:** Tailwind CSS animations and custom effects

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/VIKASSAMVEL/vibrant-interactive-show.git
   cd vibrant-interactive-show
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` to view the application.

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run build:dev` - Build the project in development mode
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview the production build locally

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Features.tsx    # Features showcase
│   ├── Portfolio.tsx   # Portfolio gallery
│   └── ...
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── main.tsx           # Application entry point
```

## 🎨 Customization

### Themes
The application supports both dark and light themes. Users can toggle between themes using the theme switcher in the header.

### Content
Update the content in the respective component files:
- `src/components/Hero.tsx` - Main landing content
- `src/components/Features.tsx` - Feature descriptions
- `src/components/Portfolio.tsx` - Project showcases
- `src/components/Testimonials.tsx` - Customer testimonials

### Styling
- Global styles are in `src/index.css`
- Component-specific styles use Tailwind CSS classes
- Custom animations are defined in component files

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile devices (320px - 767px)

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deploy Options

- **Vercel:** Connect your GitHub repo for automatic deployments
- **Netlify:** Drag and drop the `dist` folder or connect via Git
- **GitHub Pages:** Use GitHub Actions for automated deployment
- **AWS S3 + CloudFront:** For scalable static hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Lovable](https://lovable.dev) - AI-powered development platform
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)
- Fonts and styling with [Tailwind CSS](https://tailwindcss.com)

---

**Made with ❤️ using modern web technologies**
