import styles from "./Header.module.css";

function Header() {
  return (
    <section className={styles.header}>
      <div className={styles.content}>
        <div className={styles.label}>
          <svg
            width="12"
            height="14"
            viewBox="0 0 12 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.33333 14C0.966667 14 0.652778 13.8694 0.391667 13.6083C0.130556 13.3472 0 13.0333 0 12.6667V4.66667C0 4.3 0.130556 3.98611 0.391667 3.725C0.652778 3.46389 0.966667 3.33333 1.33333 3.33333H2.66667C2.66667 2.41111 2.99167 1.625 3.64167 0.975C4.29167 0.325 5.07778 0 6 0C6.92222 0 7.70833 0.325 8.35833 0.975C9.00833 1.625 9.33333 2.41111 9.33333 3.33333H10.6667C11.0333 3.33333 11.3472 3.46389 11.6083 3.725C11.8694 3.98611 12 4.3 12 4.66667V12.6667C12 13.0333 11.8694 13.3472 11.6083 13.6083C11.3472 13.8694 11.0333 14 10.6667 14H1.33333ZM1.33333 12.6667H10.6667V4.66667H1.33333V12.6667ZM6 8.66667C6.92222 8.66667 7.70833 8.34167 8.35833 7.69167C9.00833 7.04167 9.33333 6.25556 9.33333 5.33333H8C8 5.88889 7.80556 6.36111 7.41667 6.75C7.02778 7.13889 6.55556 7.33333 6 7.33333C5.44444 7.33333 4.97222 7.13889 4.58333 6.75C4.19444 6.36111 4 5.88889 4 5.33333H2.66667C2.66667 6.25556 2.99167 7.04167 3.64167 7.69167C4.29167 8.34167 5.07778 8.66667 6 8.66667ZM4 3.33333H8C8 2.77778 7.80556 2.30556 7.41667 1.91667C7.02778 1.52778 6.55556 1.33333 6 1.33333C5.44444 1.33333 4.97222 1.52778 4.58333 1.91667C4.19444 2.30556 4 2.77778 4 3.33333ZM1.33333 12.6667V4.66667V12.6667Z"
              fill="#904D00"
            />
          </svg>
          <span>PASAR KOMUNITAS ANGGOTA KOPERASI</span>
        </div>

        <h1 className={styles.title}>Produk Unggulan Komunitas Anggota</h1>

        <p className={styles.description}>
          Dukung ekonomi lokal dan nikmati harga khusus anggota koperasi hingga{" "}
          <strong>diskon 20%!</strong>
        </p>
      </div>

      <div className={styles.navigation}>
        <button
          type="button"
          className={styles.prevButton}
          aria-label="Produk sebelumnya"
        >
          ‹
        </button>

        <button
          type="button"
          className={styles.nextButton}
          aria-label="Produk berikutnya"
        >
          ›
        </button>
      </div>
    </section>
  );
}

export default Header;
