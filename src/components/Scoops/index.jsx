import { useEffect, useState } from "react";
import Card from "../Card";
import axios from "axios";

const Scoops = () => {
  const [data, setData] = useState([]);
  const [basket, setBasket] =useState([]);
  useEffect(()=> {
 axios.get("http://localhost:3500/scoops")
 .then((res)=> setData(res.data));
  }, []);

   // sepette eleman ekler
  const addToBasket = (item) => {
    setBasket([...basket, item])
  };
  // sepetten elemen kaldırır
  const clearFromBasket = (delete_id) => {
    //id bildigimiz ürünü diziden kaldır
    const filtred = basket.filter((i) => i.id !== delete_id);
     //state güncelle
     setBasket(filtred);

  };  
  return (
    <div>
      <h1>Dondurma Çeşitleri</h1>

      <p>
        Tanesi : <span className="text-success">20</span>₺
      </p>

      <h3>
        Çeşitler ücreti {" "}
         <span data-testid="total"
          className="text-success">{basket.length*20}</span>₺
        </h3>
      <div className="row gap-5 justify-content-between mt-4">

      {data.map((i) => (
      <Card key={i.id} item={i}
      addToBasket={addToBasket}
      clearFromBasket={clearFromBasket}
      amount={basket.filter((basket_i) => basket_i.id === i.id).length}
      />
      ))}
     </div>
      
    </div>
  );
};

export default Scoops;
