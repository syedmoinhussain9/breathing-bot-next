import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Physiological Sigh: The Fastest Way to Calm Down | Breathing Bot",
};

export default function PhysioSighPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 md:py-20 text-slate-800 dark:text-slate-200">
      
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
          The Physiological Sigh: A Built-In Reflex You Can Trigger on Demand
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Your body already does this automatically when you're stressed — this technique just teaches you to do it on purpose, faster[cite: 25].
        </p>
      </header>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">A Breath Pattern You Already Know</h2>
        <p className="leading-relaxed">
          Watch someone finish crying, or notice your own breathing right after a wave of stress passes, and you'll often catch a very particular pattern: a sharp inhale, a small second inhale right on top of it without fully exhaling in between, and then one long, releasing exhale[cite: 25]. That's the physiological sigh — a reflex your nervous system produces on its own, without being asked, usually during or right after emotional intensity[cite: 25].
        </p>
        <p className="leading-relaxed">
          The physiological sigh technique simply recreates this reflex deliberately, rather than waiting for your body to trigger it involuntarily[cite: 25]. It's built as a double-inhale pattern: a first inhale, no exhale, a second smaller "top-up" inhale layered right on top of it, then one slow, complete exhale — noticeably longer than either inhale[cite: 25].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Why Two Inhales Instead of One</h2>
        <p className="leading-relaxed">
          Deep in your lungs are tiny air sacs called alveoli, where oxygen actually crosses into your bloodstream[cite: 25]. Under stress, shallow breathing, or just sitting still for a long time, some of these alveoli can partially collapse — a completely normal, minor occurrence that reduces the surface area available for gas exchange in that moment[cite: 25]. The second, smaller inhale in a physiological sigh acts almost like a manual reinflation: it pops open any recently collapsed alveoli that the first inhale alone didn't reach[cite: 25].
        </p>
        <p className="leading-relaxed">
          With more alveoli open and available, the long exhale that follows can then release a larger volume of carbon dioxide in one breath than a normal single inhale-exhale cycle would[cite: 25]. Of the techniques on this app, the physiological sigh is the one most specifically studied for producing a rapid shift in calm — researchers investigating brief breathing interventions have found this double-inhale pattern associated with faster reductions in physiological arousal compared to some other single-breath techniques, when done for even a few cycles[cite: 25].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">How to Practice the Physiological Sigh</h2>
        <ol className="list-decimal list-inside space-y-3 ml-2">
          <li><strong>Take a full inhale through your nose</strong> for your level's first count (3 seconds at Level 1)[cite: 25].</li>
          <li><strong>Without exhaling, take a second, shorter sip of air</strong> right on top of the first — a quick top-up inhale, layered directly onto the breath you're already holding[cite: 25].</li>
          <li><strong>Exhale slowly and completely through your mouth</strong> for a noticeably longer count than either inhale (5 seconds at Level 1, scaling up through the levels), letting all the air out in one long release[cite: 25].</li>
          <li><strong>Pause briefly</strong> before beginning the next cycle[cite: 25].</li>
          <li><strong>Repeat for just one to three cycles</strong> to start — this technique is designed to work in a very small number of breaths, unlike longer meditative practices[cite: 25].</li>
        </ol>
        <p className="mt-4 leading-relaxed italic text-slate-600 dark:text-slate-400">
          Because the effect is meant to be fast, most people don't need to do this for more than a minute or two at a time to notice a shift[cite: 25].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Where This Fits Best</h2>
        <p className="leading-relaxed">
          The physiological sigh's biggest advantage is speed — it's a good fit for the exact moment a wave of stress, sudden anxiety, or overwhelm hits and you need something that works in seconds rather than minutes[cite: 25]. It works well before a stressful phone call, in the middle of a panic spike, or any moment where a longer, slower technique like coherent breathing would feel too gradual for what you're experiencing right now[cite: 25].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">A Few Cautions</h2>
        <p className="leading-relaxed">
          The double-inhale can feel unusual the first few times you try it — that's normal and not a sign you're doing it wrong[cite: 25]. If you feel lightheaded, stop and return to normal breathing rather than pushing through additional cycles[cite: 25]. As with all breathing techniques on this app, people with diagnosed respiratory or cardiovascular conditions should check with a doctor before adopting a new breath practice, and this technique isn't a substitute for appropriate emergency care during a genuine medical crisis like a severe panic attack requiring intervention or a respiratory emergency[cite: 25].
        </p>
      </section>

      {/* Medical Disclaimer */}
      <div className="bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4 rounded-lg text-sm mt-12">
        <strong className="text-slate-900 dark:text-white">A note on this information:</strong> This page is for general educational purposes and isn't a substitute for professional medical advice[cite: 25]. If you have a heart, lung, or anxiety-related condition, talk to a doctor before starting any new breathing practice[cite: 25].
      </div>

      <div className="text-center mt-12">
        <Link 
          href="/guided?technique=physio_sigh"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md"
        >
          Try the Physiological Sigh Now
        </Link>
      </div>

    </article>
  );
}