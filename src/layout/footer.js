import styles from '@/styles/modules/footer.module.scss'

export default function Footer({ data }) {
  return (
    <footer className={`${styles.footer} c f-h f-j-e`}>
      <p className="cr-secondary t-small">© {new Date().getFullYear()}, {data.author}</p>
    </footer>
  )
}