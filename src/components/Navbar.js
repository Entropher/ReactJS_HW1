import styles from "./Navbar.module.css";

export default function Navbar({ list }) {
  return (
    <nav className={styles.navbar} aria-label="Main navigation">
      <a className={styles.brand} href="#top" aria-label="Entropher home">
        <span className={styles.brandMark}>E</span>
        <span className={styles.brandName}>Entropher</span>
      </a>
      <ul className={styles.links}>
        {list.map((item, index) => (
          <li key={item}>
            <a href={`#${id}`} className={isActive ? styles.active : ""}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <button
        className={styles.profile}
        type="button"
        aria-label="Open profile"
      >
        <span>JD</span>
      </button>
    </nav>
  );
}
