import Header from '../../Components/Header/Header';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

// Badges
import avpnBadge from '../../assets/badges/vera-pizza-avpn.png';
import tripAdvisorBadge from '../../assets/badges/tripadvisor-excellence.jpg';
import top50Badge from '../../assets/badges/top50.png';
import big7Badge from '../../assets/badges/big7.jpg';

// Sections
import handmadeImg from '../../assets/sections/handmade.jpg';
import ovenImg from '../../assets/sections/true-neapolitan-oven.png';
import flameImg from '../../assets/sections/950f.png';
import oliveImg from '../../assets/sections/olive-orchard.jpg';

import frozenPromoImg from '../../assets/sections/frozen-antico.png';
import skipTheDishesLogo from '../../assets/sections/skip-logo.png';

export default function Home() {
    return (
        <>
            <Header />

            <main className={styles.main}>
                {/* Keep the original hero image block */}
                <div className={styles.heroImage} />

                {/* Intro copy + CTA */}
                <section className={styles.section}>
                    <div className={styles.container}>
                        <h2 className={styles.title}>Antico Pizza Napoletana</h2>
                        <p className={styles.lead}>
                            Proudly the #1 rated pizzeria in British Columbia and one of the top 3 pizzerias
                            “You must try before you die” in Canada.
                        </p>
                        <p className={styles.lead}>
                            Top 50 Italy has also ranked us among the top 50 Pizzerias in North America (no. 14).
                        </p>
                        <p className={styles.lead}>
                            We are officially recognized by the Associazione Verace Pizza Napoletana (AVPN) in Naples
                            as making <strong>TRULY AUTHENTIC</strong> Neapolitan pizza.
                        </p>

                        <div className={styles.actions}>
                            <Link to="/menu" className={styles.ctaBtn}>View the Menu</Link>
                        </div>
                    </div>
                </section>

                {/* Top Rated + Badges */}
                <section className={styles.section}>
                    <div className={styles.containerGrid}>
                        <div className={styles.badgesCol}>
                            <img src={avpnBadge} alt="Vera Pizza Napoletana (AVPN)" />
                            <img src={tripAdvisorBadge} alt="TripAdvisor Certificate of Excellence" />
                            <img src={top50Badge} alt="Top 50 Pizza" />
                            <img src={big7Badge} alt="Big 7 Travel Top Pizza" />
                        </div>

                        <div className={styles.textCol}>
                            <p className={styles.kicker}>always expect the best</p>
                            <h3 className={styles.h2}>Top Rated in North America!</h3>
                            <p>
                                We are very proud to be the #1 rated pizzeria in Kelowna and British Columbia as well
                                as one of the top 3 pizzerias “You must try before you die” in Canada. Top 50 Italy
                                has also ranked us among the top 50 Pizzerias in North America (no. 14).
                            </p>
                            <p>
                                We are officially recognized by the Associazione Verace Pizza Napoletana (AVPN) in Naples
                                as making <strong>TRULY AUTHENTIC</strong> Neapolitan pizza.
                            </p>
                        </div>
                    </div>
                </section>

                {/* From Napoli With Love */}
                <section className={styles.section}>
                    <div className={styles.container}>
                        <h3 className={styles.h2Center}>From Napoli With Love</h3>
                        <div className={styles.featureGrid}>
                            <article className={styles.card}>
                                <img src={handmadeImg} alt="Handmade dough" />
                                <h4>Handmade</h4>
                                <p>
                                    Every pizza is made fresh to order from our naturally leavened dough.
                                    We rise our dough at room temperature for 24–36 hours.
                                </p>
                            </article>

                            <article className={styles.card}>
                                <img src={ovenImg} alt="True Neapolitan oven" />
                                <h4>True Neapolitan Oven</h4>
                                <p>
                                    100% wood fired from an oven custom built in Naples by Gianni Acunto – a favourite
                                    of the great pizzaiolo’s of Naples.
                                </p>
                            </article>

                            <article className={styles.card}>
                                <img src={flameImg} alt="950 degrees" />
                                <h4>950°f</h4>
                                <p>
                                    The 90-second miracle – how long it takes to bake a true Neapolitan pizza.
                                    It produces a unique charred, yet soft and light crust.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Only the Finest Ingredients */}
                <section className={styles.sectionAlt}>
                    <div className={styles.split}>
                        <div className={styles.splitText}>
                            <p className={styles.kicker}>no shortcuts</p>
                            <h3 className={styles.h2}>ONLY THE FINEST INGREDIENTS</h3>
                            <p>
                                From our family-owned olive orchards with the freshest and finest olive oil,
                                to our (D.O.P) San Marzano tomatoes grown on the side of Mt. Vesuvius, we spare no expense.
                                Neapolitan Caputo soft wheat flour, real Parma Prosciutto, imported Italian
                                Mozzarella Di Bufala… it’s our passion!
                            </p>
                        </div>
                        <div className={styles.splitMedia}>
                            <img src={oliveImg} alt="Olive orchard" />
                        </div>
                    </div>
                </section>

                {/* Frozen Pizza Promo */}
                <section className={styles.section}>
                    <div className={styles.split}>
                        <div className={styles.splitMedia}>
                            <img src={frozenPromoImg} alt="Frozen Antico Pizza" />
                        </div>
                        <div className={styles.splitText}>
                            <h3 className={styles.h2}>FROZEN ANTICO PIZZA NOW AVAILABLE!</h3>
                            <h4 className={styles.h4}>THE NEXT BEST THING TO BEING THERE!</h4>
                            <p>
                                Antico Pizza is now available in a convenient frozen form for your home. Every pizza
                                is individually hand made by a Neapolitan trained pizzaiolo using the same techniques
                                and ingredients as you would find in the great pizzerias of Naples. Baked in a real
                                Neapolitan wood burning oven, you can now enjoy an artisanal pizza in your own home!
                            </p>
                            <p className={styles.accentLine}>
                                Available in house at Antico Pizza or Peter’s Independent Grocer.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Delivery */}
                <section className={styles.sectionTight}>
                    <div className={styles.containerCenter}>
                        <img className={styles.partnerLogo} src={skipTheDishesLogo} alt="SkipTheDishes" />
                        <p>Delivery through Skip The Dishes 4:00pm – 10:00pm. Click the link above!</p>
                    </div>
                </section>
            </main>
        </>
    );
}
