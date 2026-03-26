import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
   <div className="min-h-screen bg-zinc-950 text-zinc-300 font-mono py-10 px-4">
      <div className="max-w-5xl mx-auto bg-zinc-900 shadow-2xl rounded-2xl border border-zinc-800 p-8">
        <Header />
        <main className="space-y-8">
          <Main />
        </main>
        <Footer />
      </div>
    </div>
  );
}
export default App;