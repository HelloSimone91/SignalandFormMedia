import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

export function SignupApp() {
  return (
    <div className="min-h-screen border-x-0 md:border-x-8 lg:border-x-[16px] border-black bg-cream flex flex-col justify-center items-center">
      <div className="w-full max-w-2xl px-8 py-16 text-center border border-black bg-cream-dark">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Stay in the loop</h1>
        <p className="text-lg md:text-xl font-serif mb-10 max-w-md mx-auto">
          Receive occasional Signal + Form project notes and new releases.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdnS710tTFREy17xr_Ygs-PVcesCfQnA7b1rseMeYChw_PsRQ/viewform?usp=pp_url&entry.1778128570=Yes"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-black rounded-full px-8 py-4 font-semibold uppercase text-sm tracking-widest hover:bg-black hover:text-cream transition-colors mb-8"
        >
          Join the email list
        </a>
        <div className="mt-8 pt-8 border-t border-black">
          <a href="/" className="uppercase text-xs tracking-widest font-semibold hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}

const container = document.getElementById('signup-root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <SignupApp />
  </React.StrictMode>
);