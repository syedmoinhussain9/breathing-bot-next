import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pursed-Lip Breathing: A Technique Built From Respiratory Therapy | Breathing Bot",
};

export default function PursedLipBreathingPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 md:py-20 text-slate-800 dark:text-slate-200">
      
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
          Pursed-Lip Breathing: A Technique With Roots in Respiratory Care
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Unlike most breathing exercises on this app, this one didn't come from meditation traditions — it came from pulmonary rehabilitation programs[cite: 26].
        </p>
      </header>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">A Different Kind of Origin Story</h2>
        <p className="leading-relaxed">
          Most breathing techniques trace back to yogic pranayama or military and first-responder training[cite: 26]. Pursed-lip breathing is different — it's a technique that emerged from pulmonary rehabilitation, developed and taught by respiratory therapists to help people with chronic lung conditions manage shortness of breath[cite: 26]. Its defining feature is right there in the name: you exhale slowly through pursed lips, as though you were about to whistle or gently blow out a candle, rather than exhaling freely through an open mouth[cite: 26].
        </p>
        <p className="leading-relaxed">
          This app's version uses a short inhale followed by a considerably longer, controlled exhale — at Level 1, a 2-second inhale against a 4-second exhale, doubling by Level 5 to 6 seconds in and 12 seconds out[cite: 26]. That heavily exhale-weighted ratio is the whole mechanism, and it's worth understanding why[cite: 26].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">The Mechanics: Backpressure and Air Trapping</h2>
        <p className="leading-relaxed">
          In certain respiratory conditions — most notably COPD and emphysema — the small airways in the lungs can become floppy and prone to collapsing during exhalation, trapping stale air inside the lungs before a person can take their next full breath[cite: 26]. This is sometimes called "air trapping," and it's part of why some people with these conditions describe never feeling like they can get a truly full breath[cite: 26].
        </p>
        <p className="leading-relaxed">
          Pursing the lips during exhalation creates a small amount of resistance right at the mouth[cite: 26]. That resistance builds mild backpressure inside the airways, which helps keep them propped open for longer during the exhale, giving trapped air more of a chance to escape before the next inhale[cite: 26]. The slow, extended exhale itself also encourages a more complete, unhurried release of air rather than a short, incomplete one[cite: 26].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">How to Practice Pursed-Lip Breathing</h2>
        <ol className="list-decimal list-inside space-y-3 ml-2">
          <li><strong>Sit in a relaxed, upright position</strong>, shoulders down, neck relaxed[cite: 26].</li>
          <li><strong>Inhale slowly through your nose</strong> for your level's count (2 seconds at Level 1), keeping the breath gentle rather than deep and forceful[cite: 26].</li>
          <li><strong>Purse your lips</strong> as though preparing to blow out a candle or whistle softly[cite: 26].</li>
          <li><strong>Exhale slowly and steadily through pursed lips</strong> for double the inhale count, keeping the airflow controlled rather than rushed[cite: 26].</li>
          <li><strong>Repeat</strong>, keeping the exhale noticeably longer and slower than the inhale throughout[cite: 26].</li>
        </ol>
        <p className="mt-4 leading-relaxed italic text-slate-600 dark:text-slate-400">
          Respiratory therapists often teach this technique to be used specifically during moments of exertion — climbing stairs, standing up, or any activity that tends to trigger breathlessness — rather than only as a seated, eyes-closed practice[cite: 26].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Who This Technique Is Designed For</h2>
        <p className="leading-relaxed">
          While anyone can practice pursed-lip breathing and many people find it calming in general, it's most specifically associated with people managing COPD, emphysema, and other conditions involving airway obstruction or air trapping[cite: 26]. It's frequently taught as part of formal pulmonary rehabilitation programs, alongside guidance from a respiratory therapist or physician tailored to a person's specific lung function[cite: 26].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">An Important Note</h2>
        <p className="leading-relaxed">
          If you have a diagnosed lung condition, this technique is best learned and adjusted in coordination with your doctor or a respiratory therapist, who can tailor the counts and approach to your specific lung function — this page is meant as a general introduction, not a personalized treatment plan[cite: 26]. If you experience worsening shortness of breath, chest pain, or any symptoms of a respiratory emergency, seek medical attention rather than relying on any breathing exercise, including this one[cite: 26].
        </p>
      </section>

      {/* Medical Disclaimer */}
      <div className="bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4 rounded-lg text-sm mt-12">
        <strong className="text-slate-900 dark:text-white">A note on this information:</strong> This page is for general educational purposes and isn't a substitute for professional medical advice[cite: 26]. If you have a heart, lung, or anxiety-related condition, talk to a doctor before starting any new breathing practice[cite: 26].
      </div>

      <div className="text-center mt-12">
        <Link 
          href="/guided?technique=pursed_lip"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md"
        >
          Try Pursed-Lip Breathing Now
        </Link>
      </div>

    </article>
  );
}