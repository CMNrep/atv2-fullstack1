import "./App.css";
import { useState } from "react";
import Carrossel from "./components/CarroselClass";
import Footer from "./components/footer";
import Header from "./components/Header";


// import trailer1 from "./assets/videos/ngnl0Trailer.mp4"

function App() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <Header />
        <Carrossel setOpenModal={() => {setOpenModal(prev => !prev)}}/>
      <Footer />
    </>
  );
}

export default App;
