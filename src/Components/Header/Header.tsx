// src/Components/Header.tsx
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
    const [showBanner, setShowBanner] = useState(true);

    return (
        <>
            {showBanner && (
                <div className={styles.anniversaryBanner}>
                    <span>Celebrating 10 Years of Authentic Neapolitan Pizza in Kelowna!</span>
                    <button
                        className={styles.closeBanner}
                        onClick={() => setShowBanner(false)}
                        aria-label="Close Anniversary Banner"
                    >
                        ×
                    </button>
                </div>
            )}
            <header className={styles.header}>
                <div className={styles.navBar}>
                    <p>347 Bernard Avenue Kelowna, BC V1Y6N6 | 250-717-3741</p>
                    <hr />
                    <h1 className={styles.logo}>Antico Pizza Napoletana</h1>
                    <nav className={styles.nav}>
                        <a href="/">Home</a>
                        <a href="/menu">Menu</a>
                        <a href="/hours">Hours + Location</a>
                        <a href="/about">About Us</a>
                    </nav>
                </div>
            </header>
        </>
    );
}
