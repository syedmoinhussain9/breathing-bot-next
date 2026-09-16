import Link from "next/link";
import { Frown } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      
      <div className="mb-6">
        <Frown className="w-24 h-24 text-slate-300 dark:text-slate-700" strokeWidth={1.5} />
      </div>

      <h1 className="text-[6rem] leading-none font-bold text-slate-300 dark:text-slate-700 mb-4 tracking-tighter">
        404
      </h1>
      
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
        Page not found
      </h2>
      
      <p className="text-slate-500 dark:text-slate-400 max-w-md mb-8">
        The page you're looking for doesn't exist. It may have been moved or the URL might be wrong.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link 
          href="/" 
          className="w-full sm:w-auto px-8 py-3 bg-slate-900 hover:bg-black dark:bg-white dark:hover:bg-slate-200 text-white dark:text-slate-900 font-bold rounded-full transition-colors"
        >
          Go home
        </Link>
        <Link 
          href="/guided" 
          className="w-full sm:w-auto px-8 py-3 bg-transparent border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-bold rounded-full transition-colors"
        >
          Start breathing
        </Link>
      </div>

    </div>
  );
}