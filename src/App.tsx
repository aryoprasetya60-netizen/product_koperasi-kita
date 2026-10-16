import Button from "./components/button/Button";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Images from "./assets/images_1.jpg";
import "./App.css";

function App() {
  return (
    <section>
      <div>
        <Header />
      </div>
      <div>
        <Button name="Semua" variant="category" active></Button>

        <Button name="Kuliner & Kopi" variant="category"></Button>

        <Button name="Kriya & Batik" variant="category"></Button>

        <Button name="Pertanian Organik" variant="category"></Button>

        <Button name="Fashion Muslim" variant="category"></Button>
      </div>

      <div className="section-inventory-showcase">
        <Card
          image={Images}
          address="Aceh Tengah"
          name="Kopi Arabika Gayo Organik…"
          price="Rp 68.000"
          priceBefore="Rp 85.000"
          seller="UMKM Berkah Kopi Mandiri"
          rating={4.9}
          sold={340}
        />
        <Card
          image={Images}
          address="Pekalongan"
          name="Kopi Arabika Gayo Organik…"
          price="Rp 68.000"
          priceBefore="Rp 85.000"
          seller="UMKM Berkah Kopi Mandiri"
          rating={4.8}
          sold={120}
        />
        <Card
          image={Images}
          address="Flores, NTT"
          name="Kopi Arabika Gayo Organik…"
          price="Rp 68.000"
          priceBefore="Rp 85.000"
          seller="UMKM Berkah Kopi Mandiri"
          rating={4.8}
          sold={120}
        />
        <Card
          image={Images}
          address="Malang, Jatim"
          name="Kopi Arabika Gayo Organik…"
          price="Rp 68.000"
          priceBefore="Rp 85.000"
          seller="UMKM Berkah Kopi Mandiri"
          rating={4.8}
          sold={120}
        />
      </div>
      <div className="section-bottom-showcase-link">
        <strong>
          Jelajahi 1.200+ Produk Anggota di Etalase Komunitas -&gt;
        </strong>
      </div>
    </section>
  );
}

export default App;
