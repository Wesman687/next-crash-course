import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.ul}>
                <Link href='/'><li className={styles.li}>Home</li></Link>
                <Link href="/posts" ><li>Posts</li></Link>
                <Link href='/users'> <li>Users</li></Link>
                <input placeholder='search'></input>
            </ul>
        </nav>
    )
}