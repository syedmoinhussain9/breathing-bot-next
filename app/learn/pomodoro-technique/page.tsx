import Link from "next/link";
import { ArrowLeft, Timer, Brain, Headphones } from "lucide-react";

export default function PomodoroTechnique() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#020617] text-slate-800 dark:text-slate-300 font-sans py-12 px-4 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center text-sm text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Home
        </Link>

        <header className="mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
          <div className="flex items-center gap-3 mb-4">
            <Timer className="w-8 h-8 text-blue-600 dark:text-blue-500" />
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-100">
              The Science of Deep Work
            </h1>
          </div>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            How structured time blocks and colored noise prevent cognitive fatigue and trigger flow states.
          </p>
        </header>

        <article className="space-y-10 text-slate-700 dark:text-slate-300 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Brain className="w-6 h-6 text-emerald-500" /> Why Sprints Work
            </h2>
            <p className="mb-4">
              Human attention is not designed for continuous, unbroken output. When we try to force focus for hours at a time, our cognitive reserves deplete, leading to distractions, prolonged decision-making, and burnout. 
            </p>
            <p className="mb-4">
              The Pomodoro technique relies on working with the brain's natural rhythms. By breaking work into dedicated "sprints" followed by guaranteed "breaks," you remove the anxiety of an endless task. Knowing a break is coming allows you to fully commit your cognitive load to the task at hand.
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-blue-500">
              <li><strong>Standard (25/5):</strong> 25 minutes of work, 5 minutes of rest. Ideal for tasks requiring high mental agility or frequent context switching.</li>
              <li><strong>Deep Work (50/10):</strong> 50 minutes of work, 10 minutes of rest. Best suited for programming, writing, and tasks where entering a "flow state" requires a longer warm-up period.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Headphones className="w-6 h-6 text-amber-500" /> The Role of Continuous Noise
            </h2>
            <p className="mb-4">
              A timer keeps your structure, but your environment can still break your focus. Sudden noises—doors closing, traffic outside, or conversations—disrupt your train of thought by hijacking the brain's threat-detection systems.
            </p>
            <p className="mb-4">
              Pairing your focus sprints with <strong>Brown</strong> or <strong>Pink</strong> noise creates an acoustic blanket. Unlike White noise, which can be harsh and hissy, Brown noise concentrates its energy in the lower frequencies. This effectively masks unpredictable environmental sounds without intruding on the specific frequency ranges where your internal monologue (vital for logic and writing) sits.
            </p>
          </section>

          <section className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">How to Use the Focus Timer</h3>
            <ol className="list-decimal pl-5 space-y-3 marker:text-slate-500">
              <li>Select your preferred interval (Sprint, Standard, Deep Work, or Custom).</li>
              <li>Set your target auto-cycles (e.g., 2 cycles will run Focus &rarr; Break &rarr; Focus &rarr; Done).</li>
              <li>Toggle your preferred Focus Soundscape (Brown noise is highly recommended for coding).</li>
              <li>Hit Play. The noise will automatically cut out the moment your break begins, signaling you to step completely away from the screen.</li>
            </ol>
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800">
              <Link href="/pomodoro" className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors">
                Open Focus Timer
              </Link>
            </div>
          </section>

        </article>
      </div>
    </main>
  );
}