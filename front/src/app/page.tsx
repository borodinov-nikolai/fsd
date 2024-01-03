import styles from "./Home.module.scss";
import {Home_presentation} from "@/widgets/presentation_block";

export default function Home() {
  return (
    <main className={styles.root}>
      <Home_presentation />
    </main>
  );
}
