import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from 'next/link';
import styles from './header.module.css'
export default function Header() {

  return (
    <div>
      <header className={styles.header}>
        <Link href={'/'} className={styles.header_icon}>
          <ArrowBackIosNewIcon />
        </Link>
        <h1 className={styles.h2}>Brindes</h1>

      </header>
    </div>
  )
}
