import Link from "next/link";
import { ArrowLeft, Moon, Waves, Volume2 } from "lucide-react";

export default function SleepSanctuaryGuide() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#020617] text-slate-800 dark:text-slate-300 font-sans py-12 px-4 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-sm text-slate-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>

        <header className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
          <div className="flex items-center gap-3 mb-4">
            <Moon className="w-8 h-8 text-indigo-600 dark:text-indigo-500" />
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
              Sleep Soundscapes & Rest
            </h1>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Understanding the acoustics of deep rest and why synthetic soundscapes outperform standard music for sleep.
          </p>
        </header>

        <article className="space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Waves className="w-6 h-6 text-amber-600" /> The Acoustic Blanket
            </h2>
            <p className="mb-4">
              When you try to sleep, the brain doesn't completely shut off its audio processing. Sudden spikes in sound—like a car alarm, construction noise, or unpredictable rolling thunderstorms—can jolt your nervous system out of light sleep before you reach the restorative deep sleep phases.
            </p>
            <p className="mb-4">
              The Sleep Sanctuary utilizes procedural <strong>Brown Noise</strong> to create an acoustic blanket. Because brown noise heavily weights the lower frequencies (sounding like a distant waterfall or heavy rain), it smooths out the ambient noise floor of your bedroom. When a thunderstorm rolls in, the brown noise minimizes the delta between the room's silence and the sudden thunderclap, preventing your brain from registering it as a threat.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Volume2 className="w-6 h-6 text-blue-500" /> The Deep Sleep Drone
            </h2>
            <p className="mb-4">
              Traditional sleep music often relies on melodies. While relaxing, melodies inherently require the brain to process pattern and structure, which can inadvertently keep you mentally engaged. 
            </p>
            <p className="mb-4">
              Instead of music, the Sanctuary generates a procedural <strong>Deep Sleep Pad</strong>. This relies on specific, low-pass filtered frequencies spanning G2 to D4 (98.00Hz to 293.66Hz). By layering these fundamental sine waves with a slow, 14-second amplitude cycle (LFO), the pad mimics the slow, rhythmic pace of a resting heart and breathing rate. It provides a heavy, drowsy texture that guides the body toward rest without asking the brain to listen to a song.
            </p>
          </section>

          <section className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">How to Use the Sanctuary</h3>
            <ol className="list-decimal pl-5 space-y-3 marker:text-slate-500">
              <li>Open the tool as you prepare for bed and set the Auto Fade Timer (e.g., 30m or 45m).</li>
              <li>Toggle on the Brown Noise to blanket your environment from sudden sounds.</li>
              <li>Toggle on the Deep Sleep Drone to establish a slow, resting rhythm.</li>
              <li>Adjust the volume sliders to a comfortable, low level.</li>
              <li>Hit Enter Sanctuary. The audio will automatically begin a slow, gentle fade-out during its final two minutes so it never cuts off abruptly and wakes you up.</li>
            </ol>
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
              <Link href="/sleep" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-colors">
                Open Sleep Sanctuary
              </Link>
            </div>
          </section>

        </article>
      </div>
    </main>
  );
}