import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brown, White, and Pink Noise: A Guide to Sound | Breathing Bot",
};

export default function NoiseGuidePage() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-12 md:py-20 text-slate-800 dark:text-slate-200">
      
      <header className="mb-12 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
          Brown, White, and Pink Noise: What's Actually Different?
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Three colors of noise, three different sound textures, and three slightly different reasons people reach for each one[cite: 26].
        </p>
      </header>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Why Sound Gets a "Color" at All</h2>
        <p className="leading-relaxed">
          The "color" naming for different types of noise is a borrowed metaphor from light[cite: 26]. White light contains every visible wavelength at roughly equal intensity, so white noise, by the same logic, contains every audible frequency at equal intensity — the audio equivalent of static, evenly spread from the lowest bass tones to the highest treble[cite: 26]. Brown and pink noise are variations on that same idea, but with the balance of frequencies shifted in specific, describable ways rather than staying perfectly even[cite: 26].
        </p>
        <p className="leading-relaxed">
          None of these are actual colors of light, obviously — it's just a naming convention that happened to stick because it's a useful shorthand for describing how a sound's frequency content is distributed[cite: 26].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">White Noise: The Original, Evenly Distributed Static</h2>
        <p className="leading-relaxed">
          White noise is the most "textbook" of the three — every frequency, from low to high, present at equal power[cite: 26]. In practice, this makes white noise sound relatively harsh and hissy to a lot of listeners, closer to an untuned radio or a running vacuum cleaner than a soothing background hum[cite: 26]. Its main practical strength is masking — because it covers the entire frequency spectrum evenly, it's particularly effective at drowning out sudden, sharp, unpredictable sounds like a door slamming or a dog barking, which is why it's a long-standing recommendation for infant sleep and for people trying to block out unpredictable environmental noise[cite: 26].
        </p>
        <p className="leading-relaxed">
          For meditation specifically, some people find white noise's brighter, hissier texture a bit too stimulating or grating for a truly relaxed session, especially compared to the other two options — though this varies a lot by individual preference[cite: 26].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Pink Noise: A Softer, More Balanced Middle Ground</h2>
        <p className="leading-relaxed">
          Pink noise still contains the full range of frequencies, but the power decreases as frequency increases — each time the frequency doubles, the power roughly halves[cite: 26]. In practical listening terms, this shifts the balance away from the harsher high frequencies and toward the lower ones, producing a sound often described as deeper and more "natural" than white noise — closer to steady rainfall, wind through leaves, or a distant waterfall[cite: 26].
        </p>
        <p className="leading-relaxed">
          Because human hearing is naturally more sensitive to higher frequencies, some researchers suggest pink noise's downward-sloped energy distribution roughly matches how we perceive sound intensity across the spectrum, which may be part of why many listeners describe it as more balanced or pleasant than white noise for extended listening[cite: 26]. Pink noise has also been the subject of research into deep sleep and memory consolidation, with some studies exploring whether it can help stabilize brainwave patterns during slow-wave sleep — though this remains an active area of study rather than settled science[cite: 26].
        </p>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Brown Noise: Deep, Low, and Rumbling</h2>
        <p className="leading-relaxed">
          Brown noise (sometimes called "red noise," and named after Brownian motion rather than the color, though the color name is what stuck) pushes the same downward-sloping idea even further than pink noise — power drops off much more steeply as frequency rises, concentrating most of the sound's energy in the low end[cite: 26]. The result is a deep, rumbling texture, often compared to a low waterfall, distant thunder, a strong steady wind, or the inside of an airplane cabin[cite: 26].
        </p>
        <p className="leading-relaxed">
          Because it's so heavily weighted toward low frequencies, many listeners find brown noise the least fatiguing of the three for long listening sessions — there's no hiss or brightness to it at all, just a steady, enveloping low rumble[cite: 26]. It's become a particularly popular choice among people with ADHD or general difficulty concentrating, anecdotally described as a background sound that fills mental "space" without demanding attention the way music or speech does, allowing focus to settle into a task rather than drift[cite: 26].
        </p>
      </section>

      {/* NEW SECTION: Ambient Pads */}
      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Beyond Noise: Ambient Pads and Emotional Tone</h2>
        <p className="leading-relaxed">
          While noise colors are excellent for masking distractions, sometimes you want sound to actively set a mood. That is where the ambient synth pads come in. Instead of static, these pads use slowly modulating sine waves and specific musical intervals to create a seamless, breathing texture designed to resonate with specific emotional states:
        </p>
        <ul className="list-disc list-inside space-y-3 ml-2">
          <li><strong>Warm Major:</strong> Built on a major chord structure, this pad feels hopeful, resolved, and contented. It is ideal for gratitude practices, morning sessions, or any time you want to cultivate a sense of calm optimism.</li>
          <li><strong>Wistful Minor:</strong> With a slightly dissonant, suspended minor feel, this pad is deeply introspective. It is well-suited for sessions focused on letting go, processing complex emotions, or just sitting quietly with uncertainty.</li>
          <li><strong>Deep Sleep:</strong> Pitched much lower with a very slow, heavy modulation cycle. It physically moves slower than the other pads, making it the perfect undercurrent for winding down at night.</li>
        </ul>
      </section>

      <section className="mb-10 space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">So Which One Should You Actually Use?</h2>
        <p className="leading-relaxed">
          There's no single correct answer — this genuinely comes down to personal preference and what you're using it for[cite: 26]:
        </p>
        <ul className="list-disc list-inside space-y-3 ml-2">
          <li><strong>For meditation and unwinding:</strong> brown noise's deep, rumbling texture tends to be the least distracting choice for many people, though pink noise's softer, rain-like quality is a close second and some people prefer it[cite: 26]. Alternatively, an ambient pad can help anchor a specific emotional intention.</li>
          <li><strong>For masking sudden, unpredictable noise</strong> (a noisy street, a snoring partner, an office with unpredictable chatter): white noise's even coverage across all frequencies tends to be the most effective at blending sharp sounds into the background[cite: 26].</li>
          <li><strong>For sleep specifically:</strong> pink and brown noise are both commonly preferred over white noise, since their softer, bass-weighted textures tend to feel less jarring over a full night compared to white noise's brighter hiss[cite: 26].</li>
          <li><strong>For focus and concentration while working or studying:</strong> brown noise is the most frequently recommended of the three in anecdotal reports, though this is highly individual — it's worth trying all three and noticing which one actually helps you settle into a task[cite: 26].</li>
        </ul>
        <p className="mt-4 leading-relaxed italic text-slate-600 dark:text-slate-400">
          The most reliable way to find what works for you is simply to try each one during an actual meditation or focus session and pay attention to how your mind responds — the "right" choice is ultimately whichever one lets you stop noticing the sound and get on with settling your mind or your attention[cite: 26].
        </p>
      </section>

      <div className="text-center mt-12">
        <Link 
          href="/meditate" 
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md"
        >
          Try All Sounds in the Meditation Room
        </Link>
      </div>

    </article>
  );
}