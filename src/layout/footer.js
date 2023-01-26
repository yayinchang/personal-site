import MainLogo from "@/components/main-logo"
import styles from '@/styles/modules/Footer.module.scss'

export default function Footer() {
  const facebookUrl = process.env.NEXT_PUBLIC_FACEBOOK_URL;
  const linkedinUrl = process.env.NEXT_PUBLIC_LINKEDIN_URL;
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;

  return (
    <footer className={`${styles.footer} c f-h f-j-b f-a-c`}>
      <MainLogo footer/>
      <nav>
        <ul className="f-h gap-gutter cr-secondary">
          <li>
            <a href={facebookUrl} className="t-label-small" target="_blank" rel="noreferrer noopener">Facebook</a>
          </li>
          <li>
            <a href={linkedinUrl} className="t-label-small" target="_blank" rel="noreferrer noopener">LinkedIn</a>
          </li>
          <li>
            <a href={githubUrl} className="t-label-small" target="_blank" rel="noreferrer noopener">GitHub</a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}