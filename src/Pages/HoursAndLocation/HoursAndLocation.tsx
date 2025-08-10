import Header from '../../Components/Header/Header';
import styles from './HoursAndLocation.module.css';

export default function HoursAndLocation() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <section className={styles.hours}>
                    <h2 className={styles.h2Center}>HOURS &amp; LOCATION</h2>
                    <p className={styles.hoursLine}><strong>Tuesday – Sunday</strong></p>
                    <p className={styles.hoursLine}>11:30AM – 10:00pm</p>
                    <p className={styles.note}>
                        Since Antico provides counter service, reservations are not taken or necessary. Just come on in!
                    </p>

                    <address className={styles.addr}>
                        <strong>Antico Pizza Napoletana</strong>
                        <br />
                        347 Bernard Avenue
                        <br />
                        Kelowna, BC, Canada
                        <br />
                        V1Y6N6
                        <br />
                        <a href="tel:12507173741">250.717.3741</a>
                        <br />
                        <a href="mailto:info@anticopizza.ca">info@anticopizza.ca</a>
                    </address>

                    <div className={styles.mapWrap}>
                        <iframe
                            title="Antico Pizza Napoletana Map"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps?q=Antico%20Pizza%20Napoletana%20347%20Bernard%20Avenue%20Kelowna&output=embed"
                        />
                    </div>
                </section>
            </main>
        </>
    );
}
