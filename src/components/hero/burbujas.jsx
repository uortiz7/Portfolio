import styles from "./burbujas.module.css";

export default function Burbujas() {
  return (
    <div className={styles.burbujas}>
      <span style={{ "--i": 11 }}></span>
      <span style={{ "--i": 12 }}></span>
      <span style={{ "--i": 25 }}></span>
      <span style={{ "--i": 17 }}></span>
      <span style={{ "--i": 5 }}></span>
      <span style={{ "--i": 19 }} className="hidden md:block"></span>
      <span style={{ "--i": 30 }} className="hidden md:block"></span>
      <span style={{ "--i": 11 }} className="hidden md:block"></span>
      <span style={{ "--i": 7 }} className="hidden md:block"></span>
      <span style={{ "--i": 9 }} className="hidden md:block"></span>
    </div>
  );
}
