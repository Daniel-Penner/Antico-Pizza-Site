// src/Pages/Menu/Menu.tsx
import { useState } from 'react';
import Header from '../../Components/Header/Header';
import styles from './Menu.module.css';

const menuSections = ['Pizza Rossa', 'Pizza Bianca', 'Pasta al Forno', 'Salads', 'Small Plates', 'Dessert', 'Drinks'];

export default function Menu() {
    const [activeSection, setActiveSection] = useState('Pizza Rossa');

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.heroImage}></div>
                <section className={styles.menuSection}>
                    <h2>Menu</h2>
                    <div className={styles.menuFilters}>
                        {menuSections.map((item, idx) => (
                            <button
                                key={idx}
                                className={activeSection === item ? styles.active : ''}
                                onClick={() => setActiveSection(item)}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    {activeSection === 'Pizza Rossa' && (
                        <section className={styles.menu}>
                            <h3>Pizza Rossa</h3>
                            <p className={styles.sectionDescription}>
                                Authentic San Marzano Sauce, Fior Di Latte Mozzarella, Extra Virgin Olive Oil, Fresh Basil.
                            </p>
                            <ul className={styles.menuList}>
                                <li><strong>Margherita</strong> – Classic Neapolitan Tomato, Cheese, Basil Pizza. Add ‘extra toppings’ to make it your own. <span className={styles.price}>$16</span></li>
                                <li><strong>Marinara</strong> – Oregano, Garlic, Fresh Basil (No Cheese) <span className={styles.price}>$14</span></li>
                                <li><strong>Margherita Di Bufala</strong> – Made with Imported Mozzarella Di Bufala <span className={styles.price}>$19</span></li>
                                <li><strong>Carne-Val</strong> – Soppressata Salami, Genoa Salami, Italian Sausage <span className={styles.price}>$21</span></li>
                                <li><strong>al Greco</strong> – Feta, Kalamata Olives, Green Pepper, Red Onion <span className={styles.price}>$19</span></li>
                                <li><strong>Isola</strong> – Italian Cotto Ham, Fresh Pineapple, Aged Balsamic, Oregano, Garlic <span className={styles.price}>$20</span></li>
                                <li><strong>Americano</strong> – Pepperoni, Mushroom, Scamorza Cheese, Oregano <span className={styles.price}>$20</span></li>
                            </ul>
                        </section>
                    )}

                    {activeSection === 'Pizza Bianca' && (
                        <section className={styles.menu}>
                            <h3>Pizza Bianca</h3>
                            <p className={styles.sectionDescription}>
                                Fior Di Latte Mozzarella, Extra Virgin Olive Oil, No Tomato Sauce.
                            </p>
                            <ul className={styles.menuList}>
                                <li><strong>Tartufino</strong> – Black Summer Truffle, Cremini Mushroom, Arugula <span className={styles.price}>$20</span></li>
                                <li><strong>Primavera</strong> – Prosciutto, Arugula, Cherry Tomato, Shaved Parmasean Reggiano <span className={styles.price}>$21</span></li>
                                <li><strong>Calabrone</strong> – Sopresatta, Ricotta, Hot Honey, Parmesan Reggiano <span className={styles.price}>$21</span></li>
                                <li><strong>Casatiello</strong> – Fresh Egg, Mozzarella Di Bufala, Genoa Salami, Garlic <span className={styles.price}>$20</span></li>
                                <li><strong>Gallina</strong> – Chicken, Sun Dried Tomato, Garlic, Fresh Pesto <span className={styles.price}>$20</span></li>
                                <li><strong>Mortadella</strong> – Mortadella, Pesto, Ricotta, Lemon Zest <span className={styles.price}>$20</span></li>
                            </ul>
                            <h4>Extra Toppings</h4>
                            <p><strong>Deli:</strong> $3.50 each — Italian Cotto Ham, Soppressata Salami, Genoa Salami, Chicken, Italian Sausage, Prosciutto, Scamorza Cheese, Fior Di Latte. <br />
                                $1.50 — Shaved Parmasean Reggiano, Feta Cheese, Anchovies, Pepperoni.</p>
                            <p><strong>Veg:</strong> $2.50 each — Artichoke, Capers, Arugula.<br />
                                $1.00 — Garlic, Green Pepper, Red Onion, Black Olives, Mushroom, Pesto, Cherry Tomato.</p>
                        </section>
                    )}

                    {activeSection === 'Pasta al Forno' && (
                        <section className={styles.menu}>
                            <h3>Pasta al Forno</h3>
                            <p className={styles.sectionDescription}>Baked with Fior Di Latte Cheese & Parmesan Reggiano, Focaccina</p>
                            <ul className={styles.menuList}>
                                <li><strong>Pomodoro</strong> – San Marzano tomato sauce <span className={styles.price}>$19</span></li>
                                <li><strong>Bolognese</strong> – Traditionally made with beef & pancetta <span className={styles.price}>$21</span></li>
                                <li><strong>Crema e Tartufo</strong> – Cream sauce with black summer truffle <span className={styles.price}>$20</span></li>
                            </ul>
                        </section>
                    )}

                    {activeSection === 'Salads' && (
                        <section className={styles.menu}>
                            <h3>Salads</h3>
                            <ul className={styles.menuList}>
                                <li><strong>Caesar Salad</strong> – Romaine Heart, Italian Bacon, Foccacina (small <span className={styles.price}>$10</span> / large <span className={styles.price}>$12</span>)</li>
                                <li><strong>Greek Salad</strong> – Mixed Greens, Feta, Tomato, Cucumber, Onion (small <span className={styles.price}>$11</span> / large <span className={styles.price}>$14</span>)</li>
                                <li><strong>Caprese Salad</strong> – Bocconcini, Tomato, Basil, Arugula, EVOO, Aged Balsamic <span className={styles.price}>$15</span></li>
                                <li><strong>Bufala Arugula</strong> – Bocconcini, Arugula, Prosciutto, EVOO, Aged Balsamic <span className={styles.price}>$16</span></li>
                            </ul>
                        </section>
                    )}

                    {activeSection === 'Small Plates' && (
                        <section className={styles.menu}>
                            <h3>Small Plates</h3>
                            <ul className={styles.menuList}>
                                <li><strong>Antipasto (Mild)</strong> – Genoa Salami, Fior Di Latte, Olives, Foccacina <span className={styles.price}>$11</span></li>
                                <li><strong>Antipasto (Spicy)</strong> – Sopressata Salami, Parmesan Reggiano, La Bomba, Foccacina <span className={styles.price}>$12</span></li>
                                <li><strong>Prosciutto Rolls (3)</strong> – Arugula, Fior Di Latte, Aged Balsamic, Foccacina <span className={styles.price}>$12</span></li>
                                <li><strong>Hummus</strong> – With oven baked pita <span className={styles.price}>$10</span></li>
                                <li><strong>Pizza Sides</strong> – Hot Caesar Dip, Caesar Dip, Marinara, Chili Oil, or Balsamic & Olive Oil <span className={styles.price}>$2.00 ea</span></li>
                            </ul>
                        </section>
                    )}

                    {activeSection === 'Dessert' && (
                        <section className={styles.menu}>
                            <h3>Dessert</h3>
                            <ul className={styles.menuList}>
                                <li><strong>Miranda's Famous Cheese Cake</strong> – With Cherry Topping <span className={styles.price}>$8.25</span></li>
                                <li><strong>House Made Tiramisu</strong> <span className={styles.price}>$8.25</span></li>
                            </ul>
                        </section>
                    )}

                    {activeSection === 'Drinks' && (
                        <section className={styles.menu}>
                            <h3>Beer & Wine</h3>
                            <h4>Fresh Tap Wines (6oz / 9oz)</h4>
                            <ul className={styles.menuList}>
                                <li>Monvin Cab (Italy) <span className={styles.price}>$9/$12</span></li>
                                <li>Monvin Pinot Grigio (Italy) <span className={styles.price}>$9/$12</span></li>
                                <li>Mount Boucherie Merlot (BC) <span className={styles.price}>$11/$15</span></li>
                                <li>Mt. Boucherie (BC) <span className={styles.price}>$11/$15</span></li>
                            </ul>

                            <h4>Bottled Reds (750ml)</h4>
                            <ul className={styles.menuList}>
                                <li>Mission Hill Reserve Cab Sauv (BC) <span className={styles.price}>$49</span></li>
                                <li>Folonari Valpolicella (Italy) <span className={styles.price}>$39</span></li>
                                <li>Mount Boucherie Pinot Noir (BC) <span className={styles.price}>$49</span></li>
                                <li>Moon Curser Dolcetto (BC) <span className={styles.price}>$59</span></li>
                            </ul>

                            <h4>Bottled Whites (750ml)</h4>
                            <ul className={styles.menuList}>
                                <li>Mission Hill Reserve Sauvignon Blanc (BC) <span className={styles.price}>$45</span></li>
                                <li>50th Parallel Estate Pinot Gris (BC) <span className={styles.price}>$45</span></li>
                                <li>Quail's Gate Rosé (BC) <span className={styles.price}>$48</span></li>
                                <li>Prosecco Mionetto (Italy) 200ml <span className={styles.price}>$25</span> / 750ml <span className={styles.price}>$55</span></li>
                            </ul>

                            <h4>Beer</h4>
                            <ul className={styles.menuList}>
                                <li>Peroni (330ml) <span className={styles.price}>$7.50</span></li>
                                <li>Moretti (330ml) <span className={styles.price}>$7.50</span></li>
                                <li>BNA Animal IPA (440ml) <span className={styles.price}>$9.25</span></li>
                                <li>Slackwater Fume Bianco Pilsner (440ml) <span className={styles.price}>$9.25</span></li>
                                <li>Soma Organic Cider (355ml) <span className={styles.price}>$7.25</span></li>
                                <li>Radler (500ml) <span className={styles.price}>$8.50</span></li>
                                <li>Guinness (440ml) <span className={styles.price}>$8.75</span></li>
                            </ul>

                            <h4>Soft Drinks</h4>
                            <ul className={styles.menuList}>
                                <li>Coke, Diet Coke, Sprite (355ml can) <span className={styles.price}>$3.25</span></li>
                                <li>Imported Chinotto, Limonata, Aranciata (bottle or can) <span className={styles.price}>$4.75</span></li>
                                <li>Spring Water (500ml plastic bottle) <span className={styles.price}>$2.00</span></li>
                            </ul>
                            <p style={{ fontSize: '0.85rem', fontStyle: 'italic' }}>Taxes not included. Prices subject to change.</p>
                        </section>
                    )}
                </section>
            </main>
        </>
    );
}