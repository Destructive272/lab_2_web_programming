function Main() {
  return (
    <main className="flex flex-col gap-4 w-full max-w-4xl mx-auto my-4">
      
      {/* Про себе */}
      <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 shadow-lg hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group">
        <h2 className="text-2xl font-bold text-blue-400 border-b border-zinc-800 pb-2 mb-4 group-hover:text-blue-300 transition-colors">
          Про себе
        </h2>
        <p className="text-zinc-300 leading-relaxed">
          Мені 19 років, і я активно розвиваюся у сфері інформаційної безпеки та розробки на Python. 
          Маю досвід роботи з архітектурою комп'ютерних систем та мережами, базові навички проведення penetration testing, 
          базові навички Python, Java Script. 
          Ціную дисципліну як у навчанні, так і в особистому розвитку. Цікавлюсь спортом, кіберспортом, шахами, формулою 1, фільмами, музикою.
        </p>
      </section>

      {/* Освіта */}
      <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 shadow-lg hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/30 transition-all duration-300 group">
        <h2 className="text-2xl font-bold text-emerald-400 border-b border-zinc-800 pb-2 mb-4 group-hover:text-emerald-300 transition-colors">
          Освіта
        </h2>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-zinc-950/50 p-4 rounded-lg border border-zinc-800/50">
          <span className="text-zinc-200 font-semibold">Національний університет "Львівська політехніка" - Кібербезпека</span>
          <span className="mt-2 sm:mt-0 text-emerald-500 text-sm font-mono bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            2023 - теперішній час
          </span>
        </div>
      </section>

      {/* grid для навичок, щоб вони були у два стовпці на великих екранах */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Технічні навички */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 shadow-lg hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 group">
          <h2 className="text-2xl font-bold text-purple-400 border-b border-zinc-800 pb-2 mb-4 group-hover:text-purple-300 transition-colors">
            Технічні навички
          </h2>
          <p className="text-zinc-400 mb-4 text-sm italic">
            Загальний рівень моїх технічних навичок невеликий, але я стараюсь його розвивати.
          </p>
          {/* список у вигляді "тегів" */}
          <ul className="flex flex-wrap gap-2">
            <li className="bg-zinc-800 px-3 py-1.5 rounded-md text-zinc-300 text-sm border border-zinc-700 hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-500/50 transition-all cursor-default">Python</li>
            <li className="bg-zinc-800 px-3 py-1.5 rounded-md text-zinc-300 text-sm border border-zinc-700 hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-500/50 transition-all cursor-default">Java Script</li>
            <li className="bg-zinc-800 px-3 py-1.5 rounded-md text-zinc-300 text-sm border border-zinc-700 hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-500/50 transition-all cursor-default">Основи Penetration testing</li>
            <li className="bg-zinc-800 px-3 py-1.5 rounded-md text-zinc-300 text-sm border border-zinc-700 hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-500/50 transition-all cursor-default">Networks and Networks security</li>
          </ul>
        </section>

        {/* Соціальні навички */}
        <section className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 shadow-lg hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 group">
          <h2 className="text-2xl font-bold text-orange-400 border-b border-zinc-800 pb-2 mb-4 group-hover:text-orange-300 transition-colors">
            Соціальні навички
          </h2>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-zinc-300 hover:text-orange-300 transition-colors">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span> Дисципліна
            </li>
            <li className="flex items-center gap-3 text-zinc-300 hover:text-orange-300 transition-colors">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span> Мотивація
            </li>
            <li className="flex items-center gap-3 text-zinc-300 hover:text-orange-300 transition-colors">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span> Критичне мислення
            </li>
            <li className="flex items-center gap-3 text-zinc-300 hover:text-orange-300 transition-colors">
              <span className="w-2 h-2 rounded-full bg-orange-500"></span> Адаптивність
            </li>
          </ul>
        </section>

      </div>
    </main>
  );
}

export default Main;