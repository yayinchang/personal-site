import styles from '@/styles/modules/contact.module.scss'

export default function Contact({ data }) {
  return (
    <section className={`${styles.contact} type-spacing`}>
      <h3>Collaborations, projects, questions & coffee are&nbsp;all&nbsp;welcome&nbsp;👋</h3>
      <p className='t-large cr-secondary'>
        I always check my <a className='t-link-dotted' href={`mailto:${data.email}`}>e-mail</a>, sometimes post to <a className='t-link-dotted' href={data.social.facebook.url} target="_blank" rel="noreferrer noopener">{data.social.facebook.title}</a>.
        <br />
        You can also find me on <a className='t-link-dotted' href={data.social.linkedin.url} target="_blank" rel="noreferrer noopener">{data.social.linkedin.title}</a> or <a className='t-link-dotted' href={data.social.github.url} target="_blank" rel="noreferrer noopener">{data.social.github.title}</a>.</p>
    </section>
  )
}