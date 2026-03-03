# Definedle

A daily word-definition game where you prove your vocabulary by writing dictionary-style definitions — not just guessing letters.

## How It Works

Each day, a new word is revealed. Your job is to write its definition as if crafting a real dictionary entry. An AI-powered scoring engine evaluates your response across three dimensions:

| Category | Points | What It Measures |
|---|---|---|
| **Key Concepts** | 75 | Whether your definition captures the core ideas of the word's meaning |
| **Precision** | 10 | Use of tight, specific vocabulary over vague or off-topic phrasing |
| **Detail** | 15 | How closely your entry reads like a real dictionary definition |

An optional etymology hint is available at the cost of 5 points.

## Game Modes

- **Daily** — One word per day, the same for every player. One shot to submit your best definition.
- **Practice** — Unlimited words to sharpen your skills, with no score pressure.
- **Mirror** — A reverse challenge: see the definition, guess the word in up to 3 tries. Available within Practice mode.

Both Daily and Practice support **Easy** and **Hard** difficulty levels.

## Features

- Daily streak tracking across devices
- Score history and personal stats
- Shareable results
- Dark/light theme

## Tech Stack

- [Next.js](https://nextjs.org/) 16 + React 19
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Supabase](https://supabase.com/) for score persistence and streak tracking
- [Vercel](https://vercel.com/) for deployment and analytics
