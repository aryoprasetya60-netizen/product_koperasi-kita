import Button from "./components/button/Button";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Images from "./assets/images_1.jpg";
import Images2 from "./assets/images_2.jpg";
import Images3 from "./assets/images_3.jpg";
import Images4 from "./assets/images_4.jpg";
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
          image={Images2}
          address="Pekalongan"
          name="Kain Batik Tulis Motif Truntum"
          price="Rp 380.000"
          priceBefore="Rp 450.000"
          seller="Sanggar Batik Lestari"
          rating={5.0}
          sold={128}
        />
        <Card
          image={Images3}
          address="Flores, NTT"
          name="Madu Hutan Liar Murni Flores"
          price="Rp 115.000"
          priceBefore="Rp 140.000"
          seller="Koperasi Tani Hutan Bersama"
          rating={4.8}
          sold={512}
        />
        <Card
          image={Images4}
          address="Malang, Jatim"
          name="Kripik Tempe Renyah Oven"
          price="Rp 52.000"
          priceBefore="Rp 65.000"
          seller="UMKM Dapur Barokah"
          rating={4.9}
          sold={890}
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
