import Header from '../../Components/Header/Header';
import styles from './Home.module.css';

export default function Home() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.heroImage}></div>
                <section className={styles.content}>
                    <h2>Antico Pizza Napoletana</h2>
                    <p>
                        Proudly the #1 rated pizzeria in British Columbia and one of the top 3 pizzerias
                        "You must try before you die" in Canada.
                    </p>
                    <p>
                        Top 50 Italy has also ranked us among the top 50 Pizzerias in North America (no. 14).
                    </p>
                    <p>
                        We are officially recognized by the Associazione Verace Pizza Napoletana (AVPN) in Naples
                        as making TRULY AUTHENTIC Neapolitan pizza.
                    </p>
                </section>
            </main>
        </>
    );
}
