import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "1-4-2 Breathing: The Lung Conditioning Pattern | Breathing Bot",
};

export default function OneFourTwoBreathingPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 md:py-20 text-slate-800 dark:text-slate-200">
      
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
          1-4-2 Breathing: A Ratio Built for Lung Conditioning
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Why this uneven, mathematically deliberate ratio is used to train breath control rather than just to relax in the moment.
        </p>
      </header>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">What Makes 1-4-2 Different</h2>
        <p className="leading-relaxed">
          Most breathing techniques you'll encounter use equal or near-equal phase lengths — inhale for four, exhale for four. The 1-4-2 pattern is deliberately unequal: for every one count of inhale, you hold for four counts, then exhale for two[cite: 19]. At Level 1, that's a 1-second inhale, a 4-second hold, and a 2-second exhale[cite: 19]. At Level 5, it scales up to 5-4-20-10 — five seconds in, twenty seconds held, ten seconds out[cite: 19].
        </p>
        <p className="leading-relaxed">
          This isn't a technique built primarily for in-the-moment panic relief the way box breathing or coherent breathing are[cite: 19]. It's closer to a training exercise — a pattern that asks your respiratory system to do more work per breath than it's used to, in a structured, progressive way, similar to how a weightlifting program adds resistance over weeks rather than maxing out on day one[cite: 19].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">The Reasoning Behind the Ratio</h2>
        <p className="leading-relaxed">
          The extended hold relative to the short inhale is the core mechanic here[cite: 19]. A brief inhale followed by a much longer hold means your lungs are working with a smaller volume of air for a longer stretch of time, which some breath-training approaches use as a way to gradually build tolerance to rising carbon dioxide levels — one of the physiological factors linked to perceived lung capacity and breath-holding endurance over time[cite: 19]. The shorter exhale that follows (compared to the hold) keeps the whole cycle brisk rather than drawn-out, which is part of why this pattern feels more like an active exercise than a passive relaxation session[cite: 19].
        </p>
        <p className="leading-relaxed">
          Practiced consistently and progressively — moving up through the levels only as each one feels comfortable — this kind of structured hold training is the type of practice associated with freedivers, wind instrument musicians, and swimmers, all of whom have practical reasons to want more conscious control over their breath and a higher comfort threshold for holding it[cite: 19].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">How to Practice It Step by Step</h2>
        <ol className="list-decimal list-inside space-y-3 ml-2">
          <li><strong>Start seated</strong>, spine relatively straight, shoulders relaxed away from your ears[cite: 19].</li>
          <li><strong>Inhale briskly through your nose</strong> for the count specified by your level (1 second at Level 1, up to 5 seconds at Level 5)[cite: 19].</li>
          <li><strong>Hold the breath</strong> for four times that count, staying relaxed rather than tensing your chest or throat[cite: 19].</li>
          <li><strong>Exhale through your mouth</strong> for twice the inhale count, in a slow, controlled stream[cite: 19].</li>
          <li><strong>Begin the next cycle immediately</strong>, keeping a steady rhythm rather than resting between cycles[cite: 19].</li>
        </ol>
        <p className="mt-4 leading-relaxed italic text-slate-600 dark:text-slate-400">
          Because the hold is the longest and most demanding part of this cycle, it's worth starting at Level 1 even if you're an experienced breathwork practitioner, and only progressing once a level feels genuinely comfortable rather than just barely survivable[cite: 19].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Who This Pattern Tends to Suit</h2>
        <p className="leading-relaxed">
          1-4-2 breathing tends to appeal to people who already have some breathwork experience and are looking for a structured way to build lung capacity and hold tolerance over weeks and months, rather than a quick fix for an anxious moment[cite: 19]. It's a common choice for singers, brass and wind instrumentalists, competitive swimmers, and anyone doing progressive breath training as part of a broader fitness or performance practice[cite: 19].
        </p>
        <p className="leading-relaxed">
          If you're brand new to breathwork and looking for something to calm anxiety or panic in the moment, techniques with equal or exhale-dominant phases — like box breathing or 4-7-8 — are usually a gentler starting point[cite: 19]. You can always come back to 1-4-2 once you're comfortable with longer holds[cite: 19].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Cautions Worth Noting</h2>
        <p className="leading-relaxed">
          Extended breath holds, even short ones, can cause lightheadedness if pushed too far too soon[cite: 19]. Never practice this — or any breath-hold technique — while driving, operating machinery, swimming alone, or standing somewhere a sudden dizzy spell could be dangerous[cite: 19]. If you have a cardiovascular or respiratory condition, check with a doctor before starting a hold-based practice, since deliberately altering blood gas levels through breath control is generally safe for healthy adults but worth confirming for your specific situation[cite: 19].
        </p>
      </section>

      {/* Medical Disclaimer */}
      <div className="bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4 rounded-lg text-sm mt-12">
        <strong className="text-slate-900 dark:text-white">A note on this information:</strong> This page is for general educational purposes and isn't a substitute for professional medical advice. If you have a heart, lung, or anxiety-related condition, talk to a doctor before starting any new breathing practice[cite: 19].
      </div>

      <div className="text-center mt-12">
        <Link 
          href="/guided?technique=142" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md"
        >
          Try 1-4-2 Breathing Now
        </Link>
      </div>

    </article>
  );
}