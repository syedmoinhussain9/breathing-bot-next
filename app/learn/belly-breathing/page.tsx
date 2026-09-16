import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Belly Breathing: The Foundation Every Technique Builds On | Breathing Bot",
};

export default function BellyBreathingPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 md:py-20 text-slate-800 dark:text-slate-200">
      
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
          Belly Breathing: The Foundational Skill Behind Every Other Technique
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Before box breathing, 4-7-8, or any counted pattern, there's a more basic question: are you actually breathing with your diaphragm at all?
        </p>
      </header>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">The Habit Most People Don't Know They Have</h2>
        <p className="leading-relaxed">
          Most adults, most of the time, breathe shallowly from the chest — small movements of the upper ribcage and shoulders, without much involvement from the diaphragm, the large dome-shaped muscle beneath your lungs that's actually built to do most of the work of breathing[cite: 22]. Chest breathing isn't dangerous, but it tends to be shallower and faster, and it's closely associated with the kind of breathing your body defaults to under stress[cite: 22].
        </p>
        <p className="leading-relaxed">
          Belly breathing — also called diaphragmatic or abdominal breathing — is the practice of deliberately breathing in a way that lets the diaphragm do its job: pulling downward on the inhale so your belly visibly expands, then rising back up on the exhale as your belly falls[cite: 22]. It's not really a "technique" in the same sense as box breathing or 4-7-8, with a specific count or ratio to memorize[cite: 22]. It's closer to relearning a basic mechanical skill that most of us have quietly stopped using[cite: 22].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Why This Matters More Than It Sounds Like It Should</h2>
        <p className="leading-relaxed">
          Every other technique on this app — box breathing, 4-7-8, coherent breathing, all of it — assumes you're breathing from the diaphragm to begin with[cite: 22]. If you're actually breathing shallowly from the chest while trying to follow a 4-7-8 count, you're getting the rhythm right but missing a good portion of the physiological benefit, since shallow chest breathing simply doesn't move as much air, or engage the same nervous system pathways, as a full diaphragmatic breath[cite: 22].
        </p>
        <p className="leading-relaxed">
          Diaphragmatic breathing on its own is associated with a lower resting heart rate, reduced muscle tension (particularly around the neck and shoulders, where chest-breathers tend to hold stress), and a more efficient exchange of oxygen and carbon dioxide with each breath, simply because more of the lung's total volume gets used[cite: 22].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">How to Practice Belly Breathing</h2>
        <ol className="list-decimal list-inside space-y-3 ml-2">
          <li><strong>Lie down or sit comfortably</strong>, and place one hand on your chest and one on your belly, just below your ribcage — this is optional but genuinely useful for learning the movement[cite: 22].</li>
          <li><strong>Inhale slowly through your nose</strong> for your level's count (4 seconds at Level 1), aiming to feel your belly hand rise while your chest hand stays relatively still[cite: 22].</li>
          <li><strong>Exhale slowly through your mouth or nose</strong> for the same count, feeling your belly hand fall as your diaphragm relaxes back upward[cite: 22].</li>
          <li><strong>Keep your shoulders and chest quiet</strong> throughout — the movement should be concentrated in your midsection, not your upper body[cite: 22].</li>
          <li><strong>Repeat</strong>, gradually letting go of the hand-checking once the movement starts to feel natural[cite: 22].</li>
        </ol>
        <p className="mt-4 leading-relaxed italic text-slate-600 dark:text-slate-400">
          Many people find it easier to first learn this lying on their back, where gravity naturally discourages chest-lifting, before practicing it seated or standing[cite: 22].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Who Benefits Most</h2>
        <p className="leading-relaxed">
          Belly breathing is genuinely useful for almost everyone, but it's especially recommended as a starting point for people who are brand new to breathwork entirely, since it builds the underlying mechanical skill that every other technique on this app assumes you already have[cite: 22]. It's also commonly used by singers and voice teachers, yoga practitioners, and anyone working through chronic tension in the neck, shoulders, or upper back that may be linked to a habit of shallow chest breathing[cite: 22].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Worth Knowing</h2>
        <p className="leading-relaxed">
          Belly breathing is one of the gentlest practices you can do — there are no aggressive holds or extreme ratios here, so it's well-tolerated by nearly everyone[cite: 22]. That said, if you have a diagnosed respiratory or abdominal condition, it's still worth a quick conversation with your doctor before making any new breathing practice a regular habit, simply as general good practice[cite: 22].
        </p>
      </section>

      {/* Medical Disclaimer */}
      <div className="bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4 rounded-lg text-sm mt-12">
        <strong className="text-slate-900 dark:text-white">A note on this information:</strong> This page is for general educational purposes and isn't a substitute for professional medical advice[cite: 22]. If you have a heart, lung, or anxiety-related condition, talk to a doctor before starting any new breathing practice[cite: 22].
      </div>

      <div className="text-center mt-12">
        <Link 
          href="/guided?technique=belly" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md"
        >
          Try Belly Breathing Now
        </Link>
      </div>

    </article>
  );
}