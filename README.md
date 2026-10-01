# Yasaman Karbalaii — Portfolio

A modern and responsive personal portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

The portfolio showcases my frontend development skills, projects, professional experience, and contact information.

## Live Demo

Coming soon.

## Features

* Responsive design for desktop, tablet, and mobile
* Modern dark UI with purple and pink accents
* Hero section with personal introduction
* About Me section
* Skills and technologies
* Featured projects with GitHub links
* Professional experience
* Contact form with email delivery
* Smooth scrolling navigation
* Mobile navigation menu

## Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* Resend
* ESLint

## Project Structure

```text
src/
└── app/
    ├── api/
    │   └── contact/
    │       └── route.ts
    ├── assets/
    │   └── mypic.jpg
    ├── components/
    │   ├── Header.tsx
    │   ├── Hero.tsx
    │   ├── About.tsx
    │   ├── Skills.tsx
    │   ├── Projects.tsx
    │   ├── Experience.tsx
    │   ├── Contact.tsx
    │   └── Footer.tsx
    ├── globals.css
    ├── layout.tsx
    └── page.tsx
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/YasamanKarbalaiiH/portfolio.git
```

Navigate to the project:

```bash
cd portfolio
```

Install dependencies:

```bash
npm install
```

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=your_resend_api_key
```

Start the development server:

```bash
npm run dev
```

Open the application in your browser:

```text
http://localhost:3000
```

## Contact Form

The contact form uses the Resend API to send messages to the portfolio owner's email address.

The API key is stored in `.env.local` and is not included in the repository.

## Available Scripts

```bash
npm run dev
```

Starts the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server.

```bash
npm run lint
```

Runs ESLint to check the codebase.

## Author

**Yasaman Karbalaii**

Front-End Developer

* GitHub: https://github.com/YasamanKarbalaiiH
* LinkedIn: https://www.linkedin.com/in/yasaman-karbalaei-663524436/

## License

This project is for personal portfolio and educational purposes.
