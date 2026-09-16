import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coherent Breathing: Resonance and Heart Rate Variability | Breathing Bot",
};

export default function CoherentBreathingPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 md:py-20 text-slate-800 dark:text-slate-200">
      
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
          Coherent Breathing: Finding Your Body's Resonant Rhythm
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          A gentle, hold-free technique built around one idea: breathing at roughly five to six breaths per minute may be where your nervous system naturally wants to settle[cite: 24].
        </p>
      </header>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">What "Coherent" Actually Means Here</h2>
        <p className="leading-relaxed">
          Coherent breathing — sometimes called resonant breathing — is built around a simple, symmetrical pattern: equal inhale and equal exhale, with no holds in between[cite: 24]. At Level 1, that's a 3-second inhale and 3-second exhale; at Level 5, 7 seconds each way[cite: 24]. What makes it "coherent" isn't the counting, though — it's the target: roughly five to six breaths per minute, a rate researchers have found tends to align breathing rhythm, heart rate, and blood pressure oscillations into a smoother, more synchronized pattern than our usual resting breath rate of twelve to twenty breaths per minute[cite: 24].
        </p>
        <p className="leading-relaxed">
          The term "resonance frequency" comes from this idea that everybody has a particular breathing rate where these different bodily rhythms line up most efficiently — for most adults, that lands somewhere close to 5.5 breaths per minute, though it varies slightly by height and physiology[cite: 24].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Why No Holds Matters Here</h2>
        <p className="leading-relaxed">
          Unlike box breathing or 4-7-8, coherent breathing deliberately skips the hold phases[cite: 24]. The goal isn't to challenge your breath-holding capacity or create a dramatic imbalance between inhale and exhale — it's to create one smooth, continuous wave, in and out, at a steady pace[cite: 24]. This makes it one of the gentlest techniques on this app, and one of the few that's specifically studied and recommended for people managing conditions like asthma, where breath-holding techniques might otherwise feel uncomfortable or counterproductive[cite: 24].
        </p>
        <p className="leading-relaxed">
          The absence of holds also makes coherent breathing easier to sustain for longer stretches — five, ten, even twenty minutes — since there's no demanding phase to brace for[cite: 24]. This is part of why it's often used less as an emergency-relief tool and more as a daily practice, similar to how someone might do ten minutes of stretching every morning rather than only stretching when something already hurts[cite: 24].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">How to Practice Coherent Breathing</h2>
        <ol className="list-decimal list-inside space-y-3 ml-2">
          <li><strong>Sit or lie comfortably</strong>, since this technique is gentle enough to practice in almost any position[cite: 24].</li>
          <li><strong>Inhale slowly and smoothly through your nose</strong> for your chosen count (3 seconds at Level 1, up to 7 at Level 5), without pausing at the top[cite: 24].</li>
          <li><strong>Transition directly into the exhale</strong>, releasing air for the same count, smoothly and without forcing it out[cite: 24].</li>
          <li><strong>Move straight into the next inhale</strong> with no pause — the whole practice should feel like one continuous wave rather than four distinct steps[cite: 24].</li>
          <li><strong>Continue for several minutes</strong>, letting your body settle into the rhythm rather than watching the clock[cite: 24].</li>
        </ol>
        <p className="mt-4 leading-relaxed italic text-slate-600 dark:text-slate-400">
          Because there's no strain from holding, many people find this the easiest technique to sustain for a full 10-to-20-minute session, which is roughly the duration researchers associate with the biggest shifts in heart rate variability[cite: 24].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Where This Technique Is Commonly Used</h2>
        <p className="leading-relaxed">
          Coherent breathing shows up frequently in HRV biofeedback programs, where a device tracks a person's heart rate variability in real time and coaches them toward their personal resonance frequency[cite: 24]. It's also a common recommendation for people managing generalized anxiety, mild asthma symptoms (outside of an acute attack), and general stress — precisely because its gentleness makes it approachable for people who find breath-holding techniques uncomfortable or triggering[cite: 24].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">A Few Cautions</h2>
        <p className="leading-relaxed">
          Coherent breathing is one of the gentler techniques on this app, but "gentle" doesn't mean risk-free for everyone[cite: 24]. If you have a diagnosed respiratory condition like asthma, this technique is often well-tolerated, but it should never replace prescribed treatment or be used during an active asthma attack — seek appropriate medical care in that situation instead[cite: 24]. As with any breathing exercise, stop and breathe normally if you feel lightheaded or unwell, and check with a doctor before adopting a new breathing practice if you have an underlying heart or lung condition[cite: 24].
        </p>
      </section>

      {/* Medical Disclaimer */}
      <div className="bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4 rounded-lg text-sm mt-12">
        <strong className="text-slate-900 dark:text-white">A note on this information:</strong> This page is for general educational purposes and isn't a substitute for professional medical advice[cite: 24]. If you have a heart, lung, or anxiety-related condition, talk to a doctor before starting any new breathing practice[cite: 24].
      </div>

      <div className="text-center mt-12">
        <Link 
          href="/guided?technique=coherent"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md"
        >
          Try Coherent Breathing Now
        </Link>
      </div>

    </article>
  );
}