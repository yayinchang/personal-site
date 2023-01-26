import data from '@/data/site.yml';
import about from '@/data/about.yml';
import cdnImage from '@/lib/cdn_image';
import styles from '@/styles/modules/about.module.scss';

export default function About(){

  return (
    <>
      <section className={`${styles.intro} c-hd`}>
        <div className={`${styles.billboard} f-h f-a-c f-j-b gap-gutter`}>
          <div className={`${styles.intro} type-spacing`}>
            <h1 className='cr-primary'>{data.author}</h1>
            <h2>{about.subtitle}</h2>
            <div className='divider'/>
            <p className='w-lg cr-secondary'>{about.description}</p>
          </div>
          {cdnImage('yayinchang.jpeg', 280, 280, data.title, styles.profile)}
        </div>
        <div className={`${styles.summary} w-xl type-spacing`} dangerouslySetInnerHTML={{ __html: about.summary_html }}/>
      </section>
      <div className='divider divider--center'/>
      <section className={`${styles.details} g g-4`}>
        <div className={styles.details_col}>
          <p className={styles.details_label}>Education</p>
          <ul className={`${styles.details_list} ${styles.details_list_block}`}>
            {about.education.map(item =>
              <li className={styles.details_list_item} key={item.school}>
                <span className={styles.details_list_item_title}>{item.school}</span>
                {item.major}
                <span className='t-small t-italic'>{item.year}</span>
              </li>)}
          </ul>
        </div>
        <div className={styles.details_col}>
          <p className={`${styles.details_label}`}>Experience</p>
          <ul className={`${styles.details_list} ${styles.details_list_block}`}>
            {about.experience.map(item =>
              <li className={styles.details_list_item} key={item.company}>
                {item.url
                  ? (<a className={`${styles.details_list_item_title} t-link-dotted`} href={item.url} target="_blank" rel="noreferrer noopener">{item.company}</a>)
                  : (<span className={styles.details_list_item_title}>{item.company}</span>)}
                {item.title}
                <span className='t-small t-italic'>{item.year}</span>
              </li>)}
          </ul>
        </div>
        <div className={styles.details_col}>
          <p className={`${styles.details_label}`}>Domain Knowledge</p>
          <ul className={styles.details_list}>
            {about.knowledge.map(item => <li className={styles.details_list_item} key={item}>{item}</li>)}
          </ul>
        </div>
        <div className={styles.details_col}>
          <p className={`${styles.details_label}`}>Technical Skills</p>
          <ul className={styles.details_list}>
            {about.skills.map(item => <li className={styles.details_list_item} key={item}>{item}</li>)}
          </ul>
        </div>
      </section>
      <div className='divider divider--center'/>
      <section className={`${styles.gallery} g g-4`}>
        {about.gallery.map(image =>
          cdnImage(image.name, 280, 280, image.alt, styles.gallery_image)
        )}
      </section>
      <section className={`${styles.quote} c-xl`}>
        <blockquote>
          {about.quote}
        </blockquote>
      </section>
    </>
  )
}