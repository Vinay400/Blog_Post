# Blog Website

A modern, responsive blog website built with React, Material UI, and Tailwind CSS. This project allows users to browse featured posts, read blog articles, learn about the author, and connect via a contact form. The site is designed for personal blogging and storytelling, with a clean and engaging UI.

## Features

- **Home Page:** Highlights featured posts and recent articles.
- **Blog Posts:** Browse and read individual blog posts with images, author info, and summaries.
- **About Me:** Dedicated section to introduce the author, including a profile card and personal story.
- **Contact:** Contact form for visitors to reach out.
- **Search:** Search bar to quickly find posts by title or tag.
- **Responsive Design:** Works well on desktop and mobile devices.
- **Social Links:** Floating social button for easy access to social profiles.
- **Subscribe:** Section for users to subscribe to updates.

## Tech Stack

- **React** (with React Router)
- **Material UI** and **Emotion** for UI components
- **Tailwind CSS** for utility-first styling
- **FontAwesome** for icons

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd blog-website
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build
```
The optimized build will be in the `build/` folder.

### Run Tests

```bash
npm test
```

## Project Structure

- `src/components/` - React components (Navbar, FeaturedPosts, Mainsection, About Me, Posts, etc.)
- `src/styles/` - CSS files for styling
- `public/` - Static assets and HTML template

## Customization
- Add or edit blog posts in the `HorizontalCard` and `PostPage` components.
- Update author info and images in the `About Me` components.
- Adjust styles in the `src/styles/` directory.

## License

This project is for personal and educational use. Feel free to modify and use it as a starting point for your own blog!
