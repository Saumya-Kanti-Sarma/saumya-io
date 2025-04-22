import Link from "next/link";
import styles from "./home.module.css";

const Page = () => {
  return (
    <div className={styles.videoArea}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={styles.pfpVideo}
      >
        <source src="/assets/vdo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.videoTextContainer}>
        <Link href={""} className={styles.videoArticletitle}>
          How I changed from Chemistry to Computer!
        </Link><br />
        <Link href={""} className={styles.videoArticledescp}>A journey that took me 3000kms away from my comfort zone...</Link>
      </div>
    </div>
  );
};

export default Page;