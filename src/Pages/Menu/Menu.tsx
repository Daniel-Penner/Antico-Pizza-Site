import Header from '../../Components/Header/Header';
import styles from './Menu.module.css';

export default function Menu() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.heroImage}></div>
                <section className={styles.menuSection}>
                    <h2>Menu</h2>
                    <div className={styles.menuFilters}>
                        {['Pizza Rossa', 'Pizza Bianca', 'Pasta al Forno', 'Small Plates'].map((item, idx) => (
                            <button key={idx}>{item}</button>
                        ))}
                    </div>
                </section>
            </main>
        </>
    );
}
