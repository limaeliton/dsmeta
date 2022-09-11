import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./componets/Header";
import SalesCard from "./componets/SalesCard";

// ToastContainer é um componente do do react-toastify.
function App() {
  return (
    <>
    <ToastContainer/>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />

          </div>
        </section>
      </main>
    </>
  )

}

export default App;
