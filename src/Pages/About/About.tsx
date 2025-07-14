import Header from '../../Components/Header/Header';
import styles from './About.module.css';

export default function About() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.heroImage}></div>
                <section className={styles.content}>
                    <h2>Our Story</h2>
                    <p>
                        Antico Pizza Napoletana was founded on a passion for tradition, quality, and the irreplaceable
                        experience of gathering around a wood-fired oven. From the very beginning, our mission has been to
                        bring the authentic flavors of Naples to the heart of Kelowna.
                    </p>
                    <p>
                        Every pizza is made with imported San Marzano tomatoes, fresh Fior Di Latte mozzarella, and baked in
                        our 900° wood-burning oven — just as it has been done in Naples for generations. We follow the
                        strict guidelines of the Associazione Verace Pizza Napoletana (AVPN), of which we are proud members.
                    </p>
                    <p>
                        We are a small, family-run business and have been proud to serve our community for over a decade.
                        Thank you for being a part of our journey. We can’t wait to serve you.
                    </p>
                </section>
            </main>
        </>
    );
}
