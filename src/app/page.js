import Image from "next/image";
import styles from "./page.module.css";

const products = [
  {
    id: 1,
    title: "Laptop",
    image: "/next.svg",
    price: 999,
    description: "A powerful laptop for work and study.",
  },
  {
    id: 2,
    title: "Headphones",
    image: "/next.svg",
    price: 149,
    description: "Comfortable headphones with clear sound.",
  },
  {
    id: 3,
    title: "Smartphone",
    image: "/next.svg",
    price: 699,
    description: "A modern smartphone for everyday use.",
  },
];

export default function Home() {
  return (
    <main className={styles.page} id="top">
      <section className={styles.catalog} id="products">
        <div className={styles.sectionHeader}>
          <div>
            <p className={styles.eyebrow}>The collection</p>
            <h2>Featured products</h2>
          </div>
          <p className={styles.count}>03 items</p>
        </div>
        <div className={styles.productGrid}>
          {products.map((product) => (
            <article className={styles.productCard} key={product.id}>
              <div className={styles.imageFrame}>
                <span className={styles.productNumber}>0{product.id}</span>
                <Image
                  className={styles.productImage}
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={100}
                />
                <button
                  className={styles.wishlist}
                  type="button"
                  aria-label={`Save ${product.title}`}
                >
                  ♡
                </button>
              </div>
              <div className={styles.productInfo}>
                <div>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                </div>
                <strong>${product.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
