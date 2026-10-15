import styles from "./Card.module.css";
import Button from "../button/Button";

type CardProps = {
  image: string;
  address: string;
  name: string;
  price: string;
  priceBefore: string;
  seller: string;
  rating: number;
  sold: number;
};

function Card({
  image,
  address,
  name,
  price,
  priceBefore,
  seller,
  rating,
  sold,
}: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} className={styles.image} />
      </div>

      <div className={styles.content}>
        <div className={styles.contentRow}>
          <div className={styles.address}>{address}</div>
          <div className={styles.rating}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.23125 11.0833L3.17917 6.98542L0 4.22917L4.2 3.86458L5.83333 0L7.46667 3.86458L11.6667 4.22917L8.4875 6.98542L9.43542 11.0833L5.83333 8.91042L2.23125 11.0833Z"
                fill="#904D00"
              />
            </svg>
            <span> {rating}</span>
            <span className={styles.sold}>({sold})</span>
          </div>
        </div>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.seller}>{seller}</div>
        <div className={styles.contentPrice}>
          <span className={styles.price}>{price}</span>
          <span className={styles.priceBefore}>{priceBefore}</span>
        </div>

        <Button name="Beli Harga Anggota" variant="buy" />
      </div>
    </div>
  );
}

export default Card;
