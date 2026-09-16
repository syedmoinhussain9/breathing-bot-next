import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Breathing Bot",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 md:py-20 text-slate-800 dark:text-slate-200">
      
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Last updated: July 2026
        </p>
      </div>

      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800/30 text-amber-800 dark:text-amber-300 p-4 rounded-xl text-sm mb-8">
        <strong>Note:</strong> Breathing Bot is currently in an experimental beta phase. Features may be updated, and your feedback is highly appreciated as we improve the experience.
      </div>

      <div className="flex flex-col gap-6">
        
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm p-6 rounded-2xl">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">No Accounts, No Personal Data</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Breathing Bot does not have user accounts, logins, or profiles of any kind. There is nothing to sign up for, and we do not collect your name, email address, or any personally identifying information.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm p-6 rounded-2xl">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">What We Store</h2>
          <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-2 ml-1">
            <li><strong>Anonymous Session Logs:</strong> When you complete a breathing exercise, we log the technique used, the number of cycles, and the duration — with no identifying information attached to any of it.</li>
            <li><strong>Language Preference:</strong> A single cookie remembers your chosen language between visits.</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm p-6 rounded-2xl">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">What We Do Not Do</h2>
          <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-2 ml-1">
            <li><strong>No Data Selling:</strong> We do not sell any data to third parties.</li>
            <li><strong>No Accounts to Breach:</strong> Since there are no user accounts or passwords, there is no personal login data that could ever be exposed.</li>
            <li><strong>No Medical Tracking:</strong> We do not collect medical or biometric health metrics.</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm p-6 rounded-2xl">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Advertising & Third-Party Cookies</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
            Breathing Bot displays minimalist advertisements to support free access to the application.
          </p>
          <ul className="list-disc list-inside text-sm text-slate-600 dark:text-slate-400 space-y-2 ml-1">
            <li>We partner with Google AdSense (or similar networks) to serve advertisements.</li>
            <li>Ad partners may use cookies and similar technologies to collect device identifiers, IP addresses, and browsing behavior in order to serve relevant ads.</li>
            <li><strong>Control:</strong> You can opt out of personalized advertising at any time via your Google Account Settings or your device's ad tracking preferences.</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm p-6 rounded-2xl">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Educational Content Disclaimer</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            The breathing technique articles on this site are provided for general educational purposes only and are not medical advice. If you have a heart, lung, or anxiety-related condition, consult a doctor before starting any new breathing practice.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm p-6 rounded-2xl">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Infrastructure & Data Storage</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Anonymous session data is stored on secure, production-grade cloud server infrastructure.
          </p>
        </div>

        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm p-6 rounded-2xl">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Contact & Support</h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            If you have questions regarding this policy or data handling practices, please contact us at:<br />
            <a href="mailto:breathing_bot_syed@outlook.com" className="text-blue-600 dark:text-blue-400 hover:underline font-medium mt-2 inline-block">
              breathing_bot_syed@outlook.com
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}