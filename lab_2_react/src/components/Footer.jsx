// src/components/Footer.jsx
function Footer() {
  return (
    <footer className="mt-12 pt-8 border-t border-zinc-800 text-center">
      
      {/* Блок з контактами */}
      <div className="flex justify-center gap-8 mb-6">
        <a 
          href="mailto:vladyslav.dziunych.kb.2023@lpnu.ua" 
          className="text-zinc-400 text-lg hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300"
        >
          Email
        </a>
        
        <a 
          href="https://github.com/Destructive272" 
          target="_blank" 
          rel="noreferrer" 
          className="text-zinc-400 text-lg hover:text-white hover:-translate-y-1 hover:shadow-white transition-all duration-300"
        >
          GitHub
        </a>

         <a 
          className="text-zinc-400 text-lg hover:text-emerald-400 hover:-translate-y-1 transition-all duration-300"
        >
          phone number: +380664324406
        </a>
      </div>

      {/* Копірайт */}
      <p className="text-sm text-zinc-600 hover:text-zinc-400 transition-colors duration-300 cursor-default">
        &copy; 2026 Vladyslav Dziunych.
      </p>
      
    </footer>
  );
}

export default Footer;