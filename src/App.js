import './App.scss';
import '@/components/TheHeader/TheHeader.js'
import TheHeader from './components/TheHeader/TheHeader';

function App() {
  return (
    <>
      <TheHeader />
      <main>
        <section className='cta-reserve-table'>
        </section>
        <section className='specials'>
        </section>
        <section className='testimonials'>
        </section>
        <section className='about-us'>
        </section>
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
