import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tactical Breathing: Sustained Focus Under Pressure | Breathing Bot",
};

export default function TacticalBreathingPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 md:py-20 text-slate-800 dark:text-slate-200">
      
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
          Tactical Breathing: A Low-Overhead Pattern for Sustained Equilibrium
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          A cousin of box breathing, built with shorter holds for people who need calm focus for an extended stretch rather than a brief reset[cite: 27].
        </p>
      </header>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">How This Differs From Box Breathing</h2>
        <p className="leading-relaxed">
          Tactical breathing looks similar to box breathing at first glance — inhale, hold, exhale, hold — but the proportions are different[cite: 27]. Where box breathing uses four fully equal phases, tactical breathing shortens the two hold phases relative to the inhale and exhale[cite: 27]. At Level 1, that's a 4-4-4-2 pattern: 4 seconds in, 2 seconds held, 4 seconds out, 2 seconds held[cite: 27]. The holds are there, but they're brief — just enough to add a moment of stillness without the demand of a full equal-length pause[cite: 27].
        </p>
        <p className="leading-relaxed">
          This makes tactical breathing feel less like a discrete "exercise" you do for two minutes and step away from, and more like a rhythm you can hold in the background while doing something else that requires attention — monitoring a situation, staying alert during a long shift, or working through a stressful task that doesn't have a clear stopping point[cite: 27].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Why Shorter Holds Matter for Longer Sessions</h2>
        <p className="leading-relaxed">
          Long holds, like the ones in box breathing at higher levels, take real concentration and can become tiring to sustain for more than a few minutes — which is exactly the point when you're using box breathing for a brief, intense reset[cite: 27]. But if what you actually need is calm, steady attention over twenty or thirty minutes rather than two, a technique with lighter holds is easier to maintain without the practice itself becoming another source of mental fatigue[cite: 27].
        </p>
        <p className="leading-relaxed">
          The name "tactical" reflects this practical, sustained-use framing — it's oriented toward situations where you need functional calm while still being able to think, observe, and respond, rather than the deep, eyes-closed stillness that a longer meditation session aims for[cite: 27].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">How to Practice Tactical Breathing</h2>
        <ol className="list-decimal list-inside space-y-3 ml-2">
          <li><strong>Start in whatever position suits your situation</strong> — seated, standing, or even while walking slowly, since this pattern doesn't demand stillness the way longer-hold techniques do[cite: 27].</li>
          <li><strong>Inhale through your nose</strong> for your level's count (4 seconds at Level 1, up to 8 at Level 5)[cite: 27].</li>
          <li><strong>Hold briefly</strong> — 2 seconds at Level 1 — without tensing[cite: 27].</li>
          <li><strong>Exhale for the same count as your inhale.</strong>[cite: 27]</li>
          <li><strong>Hold briefly again</strong> for the same short count before beginning the next cycle[cite: 27].</li>
          <li><strong>Sustain the rhythm</strong> for as long as your situation requires, rather than treating it as a fixed, short exercise[cite: 27].</li>
        </ol>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Who Reaches for This Pattern</h2>
        <p className="leading-relaxed">
          Tactical breathing is a common choice among people in professions that require sustained composure — first responders, security and safety personnel, drivers, and anyone monitoring a situation that could escalate without warning[cite: 27]. It's also useful for everyday situations that stretch on longer than a typical two-minute breathing break can cover: a long, tense meeting, a difficult multi-hour drive, or a stretch of study or work where anxiety is creeping in but stepping away entirely isn't an option[cite: 27].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">A Few Things to Keep in Mind</h2>
        <p className="leading-relaxed">
          Because the holds here are shorter than in box breathing, tactical breathing tends to be well-tolerated by more people, but it's still a structured breathing pattern that changes your normal breathing rhythm[cite: 27]. If you feel lightheaded at any level, drop back down or return to normal breathing[cite: 27]. This technique, like the others on this app, is intended as a general wellness practice rather than a treatment for any diagnosed condition — talk to a doctor if you have an underlying heart or lung condition before making structured breathing a regular part of your routine[cite: 27].
        </p>
      </section>

      {/* Medical Disclaimer */}
      <div className="bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4 rounded-lg text-sm mt-12">
        <strong className="text-slate-900 dark:text-white">A note on this information:</strong> This page is for general educational purposes and isn't a substitute for professional medical advice[cite: 27]. If you have a heart, lung, or anxiety-related condition, talk to a doctor before starting any new breathing practice[cite: 27].
      </div>

      <div className="text-center mt-12">
        <Link 
          href="/guided?technique=tactical" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md"
        >
          Try Tactical Breathing Now
        </Link>
      </div>

    </article>
  );
}