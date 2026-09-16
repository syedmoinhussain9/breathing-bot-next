import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Box Breathing: The Complete Guide | Breathing Bot",
};

export default function BoxBreathingPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 md:py-20 text-slate-800 dark:text-slate-200">
      
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
          Box Breathing: The Navy SEAL Technique for Instant Calm
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          A complete guide to the four-count breathing method used by elite operators, first responders, and anyone who needs to think clearly under pressure.
        </p>
      </header>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">What Is Box Breathing?</h2>
        <p className="leading-relaxed">
          Box breathing, sometimes called four-square breathing, is a deceptively simple pattern: inhale for a count, hold for the same count, exhale for the same count, hold again for the same count. Repeat. Draw it out on paper and the shape you get is a square — four equal sides, four equal phases. That geometry is where the name comes from, and it's also the whole method. There's no complicated ratio to memorize, no counting on your fingers to keep track of an odd rhythm. Just four equal beats, over and over.
        </p>
        <p className="leading-relaxed">
          The technique became widely known through its association with U.S. Navy SEALs, who reportedly use it to stay composed in high-stakes, high-adrenaline situations — a firefight, a underwater equipment failure, a mission briefing where the stakes are life and death. But the pattern itself is far older than any modern military unit. Slow, equal-count breathing shows up across centuries of yogic pranayama practice and in early 20th-century relaxation techniques. What the SEAL association really added was a rebrand: proof that a technique built for meditation cushions could also work in a helicopter under fire.
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">The Physiology: Why Four Equal Counts Works</h2>
        <p className="leading-relaxed">
          Your autonomic nervous system runs on two competing branches: the sympathetic branch, which gears you up for action (faster heart rate, shallower breathing, adrenaline), and the parasympathetic branch, which winds you back down. Stress and panic push you hard into sympathetic mode, and one of the fastest ways your body signals "danger" to your brain is through rapid, shallow chest breathing.
        </p>
        <p className="leading-relaxed">
          Box breathing works by deliberately overriding that signal. Slowing your breath to a fixed, equal-count rhythm sends the opposite message: nothing here requires an emergency response. The holds — both after the inhale and after the exhale — do extra work here. They give carbon dioxide levels in your blood a moment to stabilize, which is part of what triggers the shift toward parasympathetic, "rest and digest" activity. Practiced consistently, this pattern is also associated with improved heart rate variability (HRV), a measure researchers use as a rough proxy for how well your nervous system can flexibly respond to stress rather than staying stuck in high alert.
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">How to Practice Box Breathing, Step by Step</h2>
        <ol className="list-decimal list-inside space-y-3 ml-2">
          <li><strong>Sit upright</strong> in a stable, comfortable position. Box breathing works standing up too, but a stable seated posture makes it easier to focus for beginners.</li>
          <li><strong>Exhale fully</strong> through your mouth to empty your lungs and start from a neutral point.</li>
          <li><strong>Inhale slowly through your nose for 4 seconds</strong>, feeling your belly and lower ribs expand rather than lifting your shoulders.</li>
          <li><strong>Hold the breath for 4 seconds</strong>, without straining or clenching your throat.</li>
          <li><strong>Exhale slowly through your mouth or nose for 4 seconds</strong>, letting the air leave in a controlled, steady stream rather than a rush.</li>
          <li><strong>Hold the empty lungs for 4 seconds</strong> before beginning the next inhale.</li>
        </ol>
        <p className="mt-4 leading-relaxed italic text-slate-600 dark:text-slate-400">
          That's one full cycle. Most people start with 4 seconds per phase (Level 1 in the app) and can work up to longer counts — 6, 8, even 12 or 16 seconds per phase — as their comfort and lung capacity grow. There's no rush to reach the higher levels; the technique works at every level.
        </p>
      </section>

      {/* Medical Disclaimer */}
      <div className="bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4 rounded-lg text-sm mt-12">
        <strong className="text-slate-900 dark:text-white">A note on this information:</strong> This page is for general educational purposes and isn't a substitute for professional medical advice. If you have a heart, lung, or anxiety-related condition, talk to a doctor before starting any new breathing practice.
      </div>

      <div className="text-center mt-12">
        <Link 
          href="/guided?technique=box" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md"
        >
          Try Box Breathing Now
        </Link>
      </div>

    </article>
  );
}