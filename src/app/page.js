import Image from "next/image";
import styles from "./page.module.css";

import Navbar from "@/module/navbar/navbar";
import Header from "@/module/header/header";
import Services from "@/module/services/services";
import Footer from "@/module/footer/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Header />
      <Services />
      <Footer />
    </main>
  );
}
