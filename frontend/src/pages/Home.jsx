import { useState } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Education from "../components/Education";
import TechMarquee from "../components/TechMarquee";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
	const [showLogoutModal, setShowLogoutModal] = useState(false);

const handleLogout = () => {
  setShowLogoutModal(true);
};

const confirmLogout = () => {
  localStorage.removeItem("isAuthenticated");
  window.location.href = "/login";
};


  return (
    <div data-testid="home-page" className="relative min-h-screen bg-[#0A0E17] text-[#F8FAFC]">
	  <button
  onClick={handleLogout}
  className="fixed top-6 right-6 z-[999] px-5 py-2.5 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition shadow-lg"
>
  Logout
</button>
{showLogoutModal && (
  <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
    <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0F172A]/95 p-8 shadow-2xl">

      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600">
        <span className="text-2xl">🔐</span>
      </div>

      <h2 className="text-center text-2xl font-bold text-white">
        Sign out?
      </h2>

      <p className="mt-3 text-center text-sm leading-6 text-gray-400">
        Are you sure you want to sign out of your portfolio?
      </p>

      <div className="mt-7 flex gap-3">
        <button
          type="button"
          onClick={() => setShowLogoutModal(false)}
          className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 font-medium text-gray-300 transition hover:bg-white/10 hover:text-white"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={confirmLogout}
          className="flex-1 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:scale-[1.02]"
        >
          Sign Out
        </button>
      </div>

    </div>
  </div>
)}

      <Navigation />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
