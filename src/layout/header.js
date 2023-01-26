import Link from "next/link";
import { useRouter } from 'next/router';
import MainLogo from "@/components/main-logo"
import styles from '@/styles/modules/header.module.scss'

export default function Header({ nav }) {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={`${styles.wrapper} c f-h f-j-b f-a-c`}>
        <MainLogo />
        <nav>
          <ul className="f-h gap-gutter">
            {nav.map(item =>
              <li key={item.title}>
                <Link className={`${styles.nav_item} t-small t-label ${router.pathname == `/${item.path}` ? styles.nav_item_active : ''}`} href={`/${item.path}`}>{item.title}</Link>
              </li>)}
          </ul>
        </nav>
      </div>
    </header>
  )
}