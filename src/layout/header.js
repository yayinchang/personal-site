import Link from "next/link";
import { useRouter } from 'next/router';
import MainLogo from "@/components/main-logo"
import styles from '@/styles/modules/Header.module.scss'

export default function Header() {
  const router = useRouter();

  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.wrapper} c f-h f-j-b f-a-c`}>
          <MainLogo />
          <nav>
            <ul className="f-h gap-gutter">
              <li>
                <Link className={`${styles.nav_item} t-small t-label ${router.pathname == '/about' ? 'is-active' : ''}`} href='/about'>About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}