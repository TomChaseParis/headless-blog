import Image from 'next/image'
import styles from './card.module.sass'

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card_imageWrap}>
        <div className={styles.card_images}>
          <Image src="/tigre.jpeg" alt="" fill={true} />
        </div>
      </div>
      <div className={styles.card_content}>
        <div className={`${styles.card_label} h6 mb-10 c-orange`}>Product Reviews</div>
        <div className={`${styles.card_title} h3 mb-20`}>Class aptent taciti sociosqu ad litora torquent per conubia nostra</div>
        <p className={styles.card_summary}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      </div>
    </div>
  )
}

export default Card 