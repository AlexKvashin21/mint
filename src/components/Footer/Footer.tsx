import styles from './footer.module.scss'
import Link from "next/link";

const links = [
    {name: 'Home', link: '/'},
    {name: 'Dashboard', link: '/'},
    {name: 'Mint', link: '/'},
    {name: 'FAQ', link: '/'},
]

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__content}>
                <div className={styles.footer__top}>
                    <Link href='/' className={styles.footer__logo}>
                        <picture>
                            <source
                                media='(min-width: 1280px)'
                                srcSet='/images/logo.png'
                            />
                            <img src='/images/logo.png' alt='Flowers'/>
                        </picture>
                    </Link>

                    <nav className={styles.footer__nav}>
                        {links.map((_, index) => {
                            return (
                                <Link href={_.link} className='' key={'link-' + index}>
                                    {_.name}
                                </Link>
                            )
                        })}
                    </nav>

                    <div className={styles.footer__buttons}>
                        <Link href='/' className='btn btn-3'>
                            support@fiftycapital.com
                        </Link>
                        <Link href='/' className='btn btn-3'>
                            Facebook
                        </Link>
                        <Link href='/' className='btn btn-3'>
                            Twitter
                        </Link>
                    </div>
                </div>
                <div className={styles.footer__bottom}>
                    <div className={styles.footer__line}/>
                    <div className={styles.footer__copyright}>
                        © 2023 — Copyright
                    </div>
                </div>
            </div>
        </footer>
    );
}
