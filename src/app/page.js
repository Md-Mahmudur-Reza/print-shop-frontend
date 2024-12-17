import Image from "next/image";
import styles from "./page.module.css";

import Navbar from "@/module/navbar/navbar";
import Header from "@/module/header/header";
import Services from "@/module/services/services";
import Location from "@/module/location/location";
import Footer from "@/module/footer/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Header />
      <Services />
      <Location />
      <Footer />
      <script
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCLRlZFHfYyUU5Ka6kY1bPsnO-tS8ttEY8"
  async
></script>
    </main>
  );
}
