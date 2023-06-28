import Link from 'next/link'
import styles from './NavBar.module.css';

export default function NavBar(){
    return(
        <>
        <div className={styles.NavContainer}>
            <div className={styles.Logo}></div>
            <div>
                <Link href="/" className={styles.HomeButton}>Home</Link>
                <Link href="/school" className={styles.Button}>Schools</Link>
                <Link href="/location" className={styles.Button}>Locations</Link>
                <Link href="/type" className={styles.Button}>Types</Link>
                <Link href="/colour" className={styles.Button}>Colours</Link>
                <Link href="/size" className={styles.Button}>Sizes</Link>
                <Link href="/new-item" className={styles.Button}>Add New Item</Link>
            </div>
        </div>
        </>
    )
}