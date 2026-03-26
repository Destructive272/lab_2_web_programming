function Header() {
  return (
    <header className="flex flex-col items-center border-b border-zinc-700 pb-8 mb-8">
      <h1 className="text-4xl font-bold text-white mb-2 tracking-widest">Владислав Дзюнич</h1>
      <p className="text-lg text-emerald-400">Студент кібербезпеки | Python Developer & Pentester (basics) </p>
      <div className="mt-4 flex gap-4 text-sm text-zinc-400">
        <span className="bg-zinc-800 px-3 py-1 rounded-md">Lviv, Ukraine</span>
      </div>
    </header>
  );
}
export default Header;