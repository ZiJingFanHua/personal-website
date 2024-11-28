# Minimalist Dragon - Portfolio Template

Single page portfolio made with [Astro](https://astro.build/) and based on [Minimalist Portfolio](https://github.com/slydragonn/minimalist-portfolio)


## Clone:
```
git clone https://github.com/slydragonn/minimalist-dragon.git
```

## Install:

```
npm install
```

## Run:
```
npm run dev
```

## Project Struture
```
├── src/
│   ├── components/
│   │   ├── Button.astro
│   │   ├── Footer.astro
│   │   ├── Navbar.astro
│   │   ├── ProjectCard.astro
│   │   ├── SkillCard.astro
│   │   └── Title.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
├── public/
│   ├── favicon.svg
│   ├── design.svg
│   ├── dragon.png
│   ├── email.svg
│   ├── external-link.svg
│   ├── database.svg
│   └── server.svg
├── astro.config.mjs
├── package.json
├── .gitignore
├── README.md
└── tsconfig.json
```

## Components

**Button:**
```
<Button
    message='Latest Posts'
    icon='/external-link.svg'
    link='#'
/>
```

**Title:**
```
<Title 
    text='Skills & Technologies'
/>
```

**SkillCard:**
```
<SkillCard 
	title='Frontend Development'
	description='Developing websites with JavaScript and the best Frameworks like React, Vue, and Astro'
	icon='/design.svg'
/>
```

**ProjectCard:**
```
<ProjectCard 
	title='My Project #1'
	description='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
	link='#'
/>
```

## Deploy
You can deploy this site on your favorite static hosting service such as Vercel, Netlify, GitHub Pages, etc.