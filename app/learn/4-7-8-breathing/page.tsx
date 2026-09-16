import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "4-7-8 Breathing: The Natural Sleep Aid | Breathing Bot",
};

export default function FourSevenEightBreathingPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 md:py-20 text-slate-800 dark:text-slate-200">
      
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
          4-7-8 Breathing: A Simple Pattern Popularized as a Sleep Aid
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Why this particular ratio, with its long, drawn-out exhale, became so closely associated with falling asleep faster.
        </p>
      </header>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">The Pattern and Where It Comes From</h2>
        <p className="leading-relaxed">
          The 4-7-8 technique is built around a simple ratio: inhale for 4 counts, hold for 7, exhale for 8[cite: 20]. It was popularized in the West by Dr. Andrew Weil, who described it as an adaptation of pranayama, the ancient yogic breath-control tradition, and framed it as a "natural tranquilizer for the nervous system."[cite: 20]. It's since become one of the most widely shared breathing exercises for sleep, anxiety, and general calm, showing up in wellness apps, sleep hygiene guides, and casual conversation alike[cite: 20].
        </p>
        <p className="leading-relaxed">
          What sets it apart from something like box breathing is the imbalance: every phase is a different length, and the exhale is nearly twice as long as the inhale[cite: 20]. That imbalance is deliberate, and it's the core of why the technique is associated with drowsiness rather than alertness[cite: 20].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Why a Long Exhale Feels So Different From a Long Inhale</h2>
        <p className="leading-relaxed">
          Your heart rate naturally speeds up slightly during inhalation and slows slightly during exhalation — a subtle effect called respiratory sinus arrhythmia[cite: 20]. Extend the exhale relative to the inhale, and you tip the average heart rate for the whole cycle downward, nudging your body gently toward the parasympathetic "rest and digest" state rather than the sympathetic "alert and ready" state that shorter, choppier breathing tends to trigger[cite: 20].
        </p>
        <p className="leading-relaxed">
          The 7-second hold in the middle adds another layer: a stretch of stillness between an in-breath and a long release, giving your nervous system a moment without new sensory input from the act of breathing itself[cite: 20]. Combined, the effect many people describe is a kind of physical "settling" — muscles loosening, the urge to keep moving or scrolling fading, which is exactly the state you want to be in right before sleep[cite: 20].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">How to Practice 4-7-8 Breathing</h2>
        <ol className="list-decimal list-inside space-y-3 ml-2">
          <li><strong>Get into position for sleep</strong> — lying down, lights dim, phone aside — if you're using this as a bedtime wind-down[cite: 20]. It also works seated for daytime anxiety relief[cite: 20].</li>
          <li><strong>Let your lips part slightly and exhale completely</strong> through your mouth, making a soft whooshing sound if that feels natural[cite: 20].</li>
          <li><strong>Close your mouth and inhale quietly through your nose for 4 seconds.</strong>[cite: 20]</li>
          <li><strong>Hold your breath for 7 seconds.</strong>[cite: 20]</li>
          <li><strong>Exhale completely through your mouth for 8 seconds</strong>, again with a soft whoosh if comfortable[cite: 20].</li>
          <li><strong>Repeat</strong> for at least 4 full cycles to start[cite: 20].</li>
        </ol>
        <p className="mt-4 leading-relaxed italic text-slate-600 dark:text-slate-400">
          Dr. Weil's original guidance suggests limiting beginners to 4 cycles at a time, twice a day, and building up gradually — the hold, in particular, can feel surprisingly demanding until your body adjusts to the rhythm[cite: 20].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Beyond Sleep: Where Else People Use It</h2>
        <p className="leading-relaxed">
          While it's best known as a sleep aid, plenty of people reach for 4-7-8 breathing in moments of acute anxiety, before a stressful conversation, or as a way to interrupt a stress spiral during the day[cite: 20]. Because the ratio is fixed and doesn't require much mental math beyond "4, 7, 8," it's also a technique that's easy to recall and use in public without drawing attention — on a train, in a waiting room, before walking into a meeting[cite: 20].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Things to Watch For</h2>
        <p className="leading-relaxed">
          The 7-second hold is the part most likely to cause lightheadedness for beginners, particularly if you rush the pace before your body has adjusted[cite: 20]. If you feel dizzy, shorten the counts proportionally (try 2-3.5-4 instead of 4-7-8) rather than pushing through discomfort[cite: 20]. As with any structured breath-holding practice, people with respiratory conditions like asthma or COPD, or cardiovascular conditions, should check with a doctor before adding it to a regular routine — and this technique, like all breathing exercises on this site, is meant to complement, not replace, any treatment plan you have with a healthcare provider[cite: 20].
        </p>
      </section>

      {/* Medical Disclaimer */}
      <div className="bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4 rounded-lg text-sm mt-12">
        <strong className="text-slate-900 dark:text-white">A note on this information:</strong> This page is for general educational purposes and isn't a substitute for professional medical advice[cite: 20]. If you have a heart, lung, or anxiety-related condition, talk to a doctor before starting any new breathing practice[cite: 20].
      </div>

      <div className="text-center mt-12">
        <Link 
          href="/guided?technique=478" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md"
        >
          Try 4-7-8 Breathing Now
        </Link>
      </div>

    </article>
  );
}