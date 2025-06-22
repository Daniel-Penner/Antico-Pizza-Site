import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.navBar}>
                <p>347 Bernard Avenue Kelowna, BC V1Y6N6 | 250-717-3741</p>
                <hr/>
                <h1 className={styles.logo}>Antico Pizza Napoletana</h1>
                <nav className={styles.nav}>
                    <a href="/">Home</a>
                    <a href="/menu">Menu</a>
                    <a href="#">Delivery</a>
                    <a href="#">Hours + Location</a>
                    <a href="#">About Us</a>
                </nav>
            </div>
        </header>
    );
}