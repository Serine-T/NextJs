import Link from "next/link";
import styles from '../styles/error.module.css'

export default function ErrorPage() {
  return (
    <>
      <h1 className={styles.error}>Error 404</h1>
      <p>Please <Link href={'/'}><a className={styles.link}>go back</a></Link> to safety</p>
    </> 
  )
}