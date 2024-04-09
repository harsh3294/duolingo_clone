# Full Stack Duolingo Clone with Next.js 14 App Router, React, Tailwind, Drizzle, Neon Database, Postgre SQL, Stripe

![Full Stack Duolingo Clone](https://harsh3294.github.io/StaticData/Duolingo/Images/thumbnail.png)

## Key Features

# Project Features Overview

- 🌐 **Next.js 14 & server actions**: Utilize Next.js 14 for server-side rendering and server actions.
- 💅 **TailwindCSS**: Employ modern styling frameworks like TailwindCSS for responsive and visually appealing designs.
- 📱 **Mobile responsiveness**: Ensure the application is optimized for various mobile devices, providing a consistent user experience across platforms.
- 🗣 **AI Voices using Elevenlabs AI**: Incorporate AI-generated voices from Elevenlabs AI for dynamic audio interactions.
- 🎨 **Beautiful component system using Shadcn UI**: Design visually appealing and responsive components using the Shadcn UI framework.
- 🎭 **Amazing characters thanks to KenneyNL**: Integrate captivating characters from KenneyNL to enhance the visual experience.
- 🔐 **Auth using Clerk**: Implement secure user authentication using Clerk for streamlined user management.
- 🔊 **Sound effects**: Enhance user experience with immersive sound effects to create an engaging atmosphere.
- ❤️ **Hearts system**: Implement a hearts system to track user progress and engagement.
- 🌟 **Points / XP system**: Gamify the learning experience with a points/XP system to incentivize participation.
- 💔 **No hearts left popup**: Notify users when they have no hearts left to continue their activities.
- 🚪 **Exit confirmation popup**: Prompt users with a confirmation popup before exiting the application to prevent accidental exits.
- 🔄 **Practice old lessons to regain hearts**: Allow users to revisit previous lessons to regain hearts and continue learning.
- 🏆 **Leaderboard**: Display a leaderboard to showcase top performers and encourage competition.
- 🗺 **Quests milestones**: Set up quests and milestones for users to achieve, providing clear goals and objectives.
- 🛍 **Shop system to exchange points with hearts**: Create a shop system where users can exchange points for hearts or other rewards.
- 💳 **Pro tier for unlimited hearts using Stripe**: Offer a premium tier with unlimited hearts using Stripe for secure payment processing.
- 🏠 **Landing page**: Develop an engaging landing page to attract and inform users about the application's features and benefits.
- 📊 **Admin dashboard React Admin**: Utilize React Admin to build an easy-to-use admin dashboard for efficient management.
- 🌧 **ORM using DrizzleORM**: Implement Object-Relational Mapping using DrizzleORM for seamless database interactions.
- 💾 **PostgresDB using NeonDB**: Store data using PostgresDB with NeonDB for reliable and scalable data management.
- 🚀 **Deployment on Vercel**: Deploy the application on Vercel for seamless hosting and scalability.




## Prerequisites

Before getting started, ensure you have the following:

- Node version 14.x
  
## Cloning the Repository

To clone the repository, run the following command:

```bash
git clone https://github.com/harsh3294/duolingo_clone
```
## Installing Packages

```bash
cd duolingo_clone
npm i
```

## Setup .env file

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
DATABASE_URL=
STRIPE_API_KEY=
NEXT_PUBLIC_APP_URL=http://localhost:3000
STRIPE_WEBHOOK_SECRET=
ADMIN_KEY=
```

## Seed Data for Local Environment

```bash
npm run db:seed
```

## Seed Data for Production Environment

```bash
npm run db:prod
```
## Reset the Database

```bash 
npm run db:reset
```


## Run the Drizzle Studio locally

```bash 
npm run db:studio
```

## Starting the App

```bash 
npm run dev
```
