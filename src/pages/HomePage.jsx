import Home from "../components/Home";
import Achievement from "../components/Achievement";
import Place from "../components/Place";
import Photos from "../components/Photos";

const HomePage = () => {

  setTimeout(() => {
    for (let i = 1; i > 0; i++) {
      alert(`привет как жизь ${i}`)
    }
  }, 3600000);


  return (
    <main>
      <Home />
      <Achievement />
      <Place />
      <Photos />
    </main>
  );
};

export default HomePage;
