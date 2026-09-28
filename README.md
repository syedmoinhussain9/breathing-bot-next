# MuTimer 🍃 (Next.js Edition)

> A lightning-fast, developer-first productivity and wellness companion built with Next.js, TypeScript, and Tailwind CSS. Evolved from a Python/Django monolith into a lightweight, client-side progressive wellness suite.

---

## 🔄 The Evolution: From Django to Next.js

MuTimer started as a Django-powered web app (`breathing-bot-django`) relying on server-side rendering, Python logic, and traditional database structures. 

This **Next.js re-architecture** shifts the paradigm entirely:
* **Decoupled Architecture:** Removed all server-side database requirements. The app now operates entirely client-side using browser capabilities, making it instantly responsive and deployment-free of backend hosting constraints.
* **Procedural Audio Engine:** Replaced static audio files with a real-time Web Audio API synthesizer capable of generating continuous brown, pink, and white noise, alongside multi-voice ambient pads (Warm Major, Wistful Minor, Deep Sleep) with smooth mathematical fade-ins/outs.
* **Modernized UI/UX:** Rewritten in Next.js App Router and Tailwind CSS, featuring seamless dark/light mode switching (`next-themes`) and mobile-optimized layouts.
* **Strict Code Health:** Enforces rigorous TypeScript definitions and React compiler guidelines to completely eliminate memory leaks, cascading render bugs, and hydration mismatches.

---

## ✨ Core Features

1. **Developer-First Pomodoro Timer (`/pomodoro`):**
   - Customizable focus and break intervals (Sprint, Standard, Deep Work, or Custom).
   - Automated cycle tracking and live visual progress bars.
   - Built-in continuous focus noise generator (Brown, Pink, White) with real-time volume control.

2. **Guided Breathing Engine (`/guided`):**
   - Interactive visual breathing guides (Box Breathing, 4-7-8, Tactical, Coherent, etc.).
   - Dynamic audio cue synchronization supporting global voice languages.
   - Screen Wake Lock API integration to prevent mobile screens from sleeping during sessions.

3. **Meditation Room & Soundscapes (`/meditate`):**
   - Pure sound environment with zero distractions.
   - Real-time procedural ambient chord pads and noise generators with custom duration sliders.

4. **Panic Room / Quick Calm (`/panicroom`):**
   - Instant 4:4 coherent breathing routine designed for rapid nervous system de-escalation.

5. **Sleep Sanctuary & Extensive Learning Library (`/learn/...`):**
   - Comprehensive guides breaking down the science behind each breathing technique.

---

## 🛠️ Tech Stack

* **Framework:** Next.js (App Router, Client-Side Architecture)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Icons:** Lucide React
* **Audio API:** Native browser Web Audio API & HTML5 Audio

---

## 🚀 Getting Started Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18+) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/syedmoinhussain9/breathing-bot-next.git](https://github.com/syedmoinhussain9/breathing-bot-next.git)
   cd breathing-bot-next

```

2. **Install dependencies:**
```bash
npm install

```


3. **Run the development server:**
```bash
npm run dev

```


4. **Open your browser:**
Navigate to `http://localhost:3000` to explore the app.

---

## 🧪 Quality Assurance

To verify that the codebase maintains zero linter errors or type mismatches:

```bash
npm run lint

```

To build for production:

```bash
npm run build

```

---

## 📄 License & Attribution

Distributed under the MIT License. Built with care by [S. M. Hussain](https://github.com/syedmoinhussain9?utm_source=gemini).

```