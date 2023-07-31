import "./App.css";
import { useEffect, useState } from "react";
import { Chart } from "./components/chart/Chart";
import { Card } from "./components/card/Card";
import { SOURCE_TYPE } from "./constans";
import { Navbar } from "./components/navbar/Navbar";
import { Button } from "./components/button/Button";
import { Footer } from "./components/footer/Footer";

function App() {
  const [dollarData, setDollarData] = useState([]);
  const [source, setSource] = useState(SOURCE_TYPE.blue);

  useEffect(() => {
    try {
      fetch("https://api.bluelytics.com.ar/v2/evolution.json")
        .then((res) => res.json())
        .then((data) => {
          data = data.filter((el) => el.source === source);
          setDollarData(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [source]);

  return (
    <div className="App">
      <Navbar />
      <div className="app-container">
        <h1>Cambio del dolar a peso</h1>
        <div className="btn-container">
          <Button
            source={source}
            setSource={setSource}
            type={SOURCE_TYPE.blue}
          />
          <Button
            source={source}
            setSource={setSource}
            type={SOURCE_TYPE.oficial}
          />
        </div>
        {dollarData.length > 0 && (
          <div className="cards-container">
            <Card
              title={source}
              value={dollarData[0].value_buy}
              type="Compra"
              color={"#0c88da"}
            />
            <Card
              title={source}
              value={dollarData[0].value_sell}
              type="Venta"
              color={"#f4587d"}
            />
          </div>
        )}
        <section className="chart-section">
          <h2>Chart de valor de compra dolar {source}</h2>
          <div className="chart-container">
            <Chart data={dollarData.slice(0, 30)} />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
