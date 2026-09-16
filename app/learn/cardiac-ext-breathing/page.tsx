import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Extended Cardiac Exhale Breathing | Breathing Bot",
};

export default function CardiacExtBreathingPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 md:py-20 text-slate-800 dark:text-slate-200">
      
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
          Extended Cardiac Exhale: Breathing With the Heart in Mind
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          A technique built around one specific ratio — an exhale roughly double the inhale — designed with heart rate and vagal tone specifically in mind[cite: 23].
        </p>
      </header>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Why "Cardiac" Is in the Name</h2>
        <p className="leading-relaxed">
          Every technique on this app affects heart rate to some degree, but the extended cardiac exhale pattern is built specifically around that relationship[cite: 23]. The ratio here — roughly a 1:2 inhale-to-exhale split, with brief holds woven in at both ends — is designed to maximize the natural heart-rate-lowering effect that happens during a long, slow exhale, more deliberately than most other patterns on this app[cite: 23].
        </p>
        <p className="leading-relaxed">
          At Level 1, that's a 3-second inhale, a 1-second hold, a 6-second exhale, and another 1-second hold — the exhale doubled almost exactly relative to the inhale[cite: 23]. By Level 5, the pattern stretches to 6-2-12-2, keeping the same doubling ratio at a slower overall pace[cite: 23].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">The Vagus Nerve Connection</h2>
        <p className="leading-relaxed">
          The vagus nerve is the primary highway of your parasympathetic nervous system — the "rest and digest" branch that slows heart rate, aids digestion, and generally counteracts the stress response[cite: 23]. Exhaling stimulates vagal activity more than inhaling does, which is part of why techniques with long, emphasized exhales tend to feel calming in a way that's distinct from just "slow breathing" in general[cite: 23].
        </p>
        <p className="leading-relaxed">
          By mathematically doubling the exhale relative to the inhale, this pattern is designed to lean more heavily into that vagal, heart-rate-lowering effect than a technique with equal in-and-out phases would[cite: 23]. The short holds at each end aren't incidental either — they add brief pauses that give the body a moment to register each phase transition rather than blending inhale and exhale into one continuous motion, similar in spirit to coherent breathing but with a deliberately unbalanced ratio instead of a symmetrical one[cite: 23].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">How to Practice It</h2>
        <ol className="list-decimal list-inside space-y-3 ml-2">
          <li><strong>Sit or lie in a relaxed position</strong> where you won't need to move for the next several minutes[cite: 23].</li>
          <li><strong>Inhale through your nose</strong> for your level's count (3 seconds at Level 1)[cite: 23].</li>
          <li><strong>Hold briefly</strong> — just 1 second at Level 1 — without tensing[cite: 23].</li>
          <li><strong>Exhale slowly through your mouth or nose</strong> for double your inhale count (6 seconds at Level 1), keeping the release smooth rather than rushed toward the end[cite: 23].</li>
          <li><strong>Hold briefly again</strong> before beginning the next inhale[cite: 23].</li>
          <li><strong>Continue for several minutes</strong>, keeping the doubled ratio consistent throughout[cite: 23].</li>
        </ol>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Who This Pattern Is Often Used By</h2>
        <p className="leading-relaxed">
          Because of its specific framing around heart rate and vagal tone, this technique tends to appeal to people who are already tracking their heart rate variability through a wearable device or app, or who are specifically interested in techniques associated with modestly lowering resting heart rate and blood pressure over time through consistent practice[cite: 23]. It's also a reasonable choice for general stress management for anyone who prefers a slightly more structured, ratio-based approach over the fully symmetrical rhythm of coherent breathing[cite: 23].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Cautions</h2>
        <p className="leading-relaxed">
          If you have diagnosed hypertension, a heart condition, or are taking medication that affects heart rate or blood pressure, talk to a doctor before making structured breathing exercises like this one a regular part of your routine — this technique is intended as a general wellness practice, not a treatment for any cardiovascular condition, and shouldn't replace any care plan you already have in place[cite: 23]. As always, stop and return to normal breathing if you feel dizzy or unwell during practice[cite: 23].
        </p>
      </section>

      {/* Medical Disclaimer */}
      <div className="bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4 rounded-lg text-sm mt-12">
        <strong className="text-slate-900 dark:text-white">A note on this information:</strong> This page is for general educational purposes and isn't a substitute for professional medical advice[cite: 23]. If you have a heart, lung, or anxiety-related condition, talk to a doctor before starting any new breathing practice[cite: 23].
      </div>

      <div className="text-center mt-12">
        <Link 
          href="/guided?technique=cardiac_ext"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md"
        >
          Try Extended Cardiac Exhale Now
        </Link>
      </div>

    </article>
  );
}