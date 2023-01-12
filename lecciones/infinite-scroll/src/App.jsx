import "./App.css";
import { useState, useEffect } from "react";
import CryptoList from "./components/CryptoList";
import Loader from "./components/Loader";
import axios from "axios";

function App() {
  // datos de coins
  const [coinsData, setCoinsData] = useState([]);
  // state para cambiar de pagina
  const [page, setPage] = useState(12);
  // loading para decir que hay mas elementos
  const [loading, setLoading] = useState(true);

  // hacer cabios cuando el valor de la pagina cambie
  useEffect(() => {
    const getPage = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products?limit=${page}`
      );
      // setCoinsData((prev) => [...prev, ...response.data]);
      setCoinsData(response.data);
      setLoading(false);
    };
    getPage();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true);
      setPage((prev) => prev + 4);
    }
  };
  // otro useEffect para addEventListener y aumentar la cantidad de pages
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <h1>Crypto Gallery</h1>
      <CryptoList coinsData={coinsData} />
      {loading && <Loader />}
    </div>
  );
}

export default App;
