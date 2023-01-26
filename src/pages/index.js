import Link from 'next/link';
import styles from '@/styles/modules/homepage.module.scss';

export default function Home() {
  return (
    <section className='homepage'>
      <div className={`${styles.billboard} c-hd type-spacing`}>
        <p className='t-label cr-secondary'>Hey There!</p>
        <h1 className='t-heading-2'>
          <Link className='t-link t-bold cr-primary' href="/about">Chang&nbsp;Ya&nbsp;Yin</Link> is a <span className='cr-primary'>web&nbsp;developer</span> & <span className='cr-primary'>UI/UX&nbsp;designer</span> who&nbsp;loves to create and get products into people&#39;s hands.
        </h1>
      </div>
    </section>
  )
}
