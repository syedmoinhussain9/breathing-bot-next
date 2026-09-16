import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alternate Nostril Breathing (Nadi Shodhana) | Breathing Bot",
};

export default function AlternateNostrilBreathingPage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 md:py-20 text-slate-800 dark:text-slate-200">
      
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
          Alternate Nostril Breathing: An Ancient Practice for Modern Focus
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Nadi Shodhana, a centuries-old yogic technique, is one of the few practices on this app that requires your hands as well as your breath.
        </p>
      </header>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">A Technique Older Than Almost Anything Else Here</h2>
        <p className="leading-relaxed">
          Alternate nostril breathing, known in yogic tradition as Nadi Shodhana — often translated roughly as "channel purification" or "clearing the subtle energy channels" — is one of the oldest techniques on this app by a wide margin, with roots in classical pranayama practice going back well over a thousand years. Unlike the military-derived or clinically-derived techniques elsewhere on this site, this one comes directly from a contemplative tradition, and its practice has stayed remarkably consistent over that time.
        </p>
        <p className="leading-relaxed">
          What sets it apart mechanically from everything else here is that it isn't just a breathing rhythm — it requires physically alternating which nostril you're breathing through, using your fingers to gently close one nostril at a time.
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">The Idea Behind Alternating Sides</h2>
        <p className="leading-relaxed">
          Traditional yogic theory holds that breathing predominantly through one nostril is associated with different mental and physical states — a concept that has some loose echo in modern findings about the "nasal cycle," a real physiological phenomenon where one nostril tends to be more open than the other at any given time, alternating every few hours throughout the day. Nadi Shodhana's premise is that deliberately balancing airflow between both nostrils helps balance the corresponding physical and mental states, often described in modern, secular terms as balancing the two hemispheres of brain activity — though this specific hemispheric framing has been embraced more by wellness culture than confirmed by neuroscience.
        </p>
        <p className="leading-relaxed">
          Independent of the traditional framing, the practice's slow, deliberate pace and require-your-full-attention structure make it a genuinely effective focus and calming exercise on its own terms, in the same family as other slow-breathing techniques even if the specific mechanism differs.
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">How to Practice Alternate Nostril Breathing</h2>
        <ol className="list-decimal list-inside space-y-3 ml-2">
          <li><strong>Sit comfortably with your spine upright.</strong> This practice is traditionally done seated rather than lying down.</li>
          <li><strong>Raise your right hand</strong> and fold your index and middle fingers down toward your palm, leaving your thumb and ring finger free — a hand position called Vishnu mudra.</li>
          <li><strong>Close your right nostril with your thumb</strong> and inhale slowly through your left nostril for your level's count (4 seconds at Level 1).</li>
          <li><strong>Close your left nostril with your ring finger</strong> (releasing your thumb), holding briefly — 2 seconds at Level 1.</li>
          <li><strong>Exhale slowly through your right nostril</strong> for the same count as your inhale.</li>
          <li><strong>Inhale through the same right nostril</strong>, then switch fingers again to exhale out the left — completing one full round.</li>
          <li><strong>Continue alternating</strong>, always inhaling and exhaling through opposite sides in sequence.</li>
        </ol>
        <p className="mt-4 leading-relaxed italic text-slate-600 dark:text-slate-400">
          This is genuinely one of the more involved techniques to learn purely mechanically — it's worth practicing the hand movements slowly a few times before trying to combine them with counted breathing.
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Who Tends to Practice This</h2>
        <p className="leading-relaxed">
          Alternate nostril breathing is most commonly practiced by people already engaged with yoga more broadly, often as part of a pranayama sequence before meditation or asana practice. It's also sought out specifically by people looking for a technique that demands enough hand-eye-breath coordination to fully occupy the mind — the physical complexity of switching nostrils tends to leave little mental bandwidth for anxious or intrusive thoughts, which some practitioners find more effective for interrupting rumination than a purely mental counting exercise.
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">A Few Practical Notes</h2>
        <p className="leading-relaxed">
          If you have a stuffy nose, sinus infection, or any nasal obstruction, this technique will be difficult or uncomfortable to practice properly — it's worth waiting until your nasal passages are clear. As with other structured breathing techniques involving holds, stop and breathe normally if you feel lightheaded, and check with a doctor before adopting this as a regular practice if you have an underlying respiratory or cardiovascular condition.
        </p>
      </section>

      {/* Medical Disclaimer */}
      <div className="bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 p-4 rounded-lg text-sm mt-12">
        <strong className="text-slate-900 dark:text-white">A note on this information:</strong> This page is for general educational purposes and isn't a substitute for professional medical advice. If you have a heart, lung, or anxiety-related condition, talk to a doctor before starting any new breathing practice.
      </div>

      <div className="text-center mt-12">
        <Link 
          href="/guided?technique=alternate_nostril"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md"
        >
          Try Alternate Nostril Breathing Now
        </Link>
      </div>

    </article>
  );
}