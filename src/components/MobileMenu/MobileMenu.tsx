'use client'

import './style.scss'
import Link from "next/link";

const links = [
    {name: 'Home', link: '/'},
    {name: 'Dashboard', link: '/'},
    {name: 'Mint', link: '/'},
    {name: 'FAQ', link: '/'},
]


export default function MobileMenu() {
    const expandMenu = () => {
        // @ts-ignore
        document.getElementById('mobile-menu').classList.toggle('menu-open');
        // @ts-ignore
        document.getElementById('mobile-burger').classList.toggle('burger-open');
    }

    return (
        <>
            <button
                id={'mobile-burger'}
                onClick={() => expandMenu()}
                type='button'
                className={'icon-menu'}
            >
                <span></span>
            </button>


            <div className='menu' id={'mobile-menu'}>
                <nav className='menu__nav'>
                    {links.map((_, index) => {
                        return (
                            <Link href={_.link} className='btn btn-2' key={'link-' + index}>
                                {_.name}
                            </Link>
                        )
                    })}
                </nav>

                <div className='menu__buttons'>
                    <Link href='/' className='btn btn-1'>
                        Log in
                    </Link>

                    <Link href={'/'}>
                        <svg width="14" height="24" viewBox="0 0 14 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.584 13.5L13.2506 9.15656H9.0829V6.33797C9.0829 5.14969 9.66509 3.99141 11.5317 3.99141H13.4263V0.293438C13.4263 0.293438 11.707 0 10.0631 0C6.63087 0 4.38743 2.08031 4.38743 5.84625V9.15656H0.572266V13.5H4.38743V24H9.0829V13.5H12.584Z"
                                fill="#010101"/>
                        </svg>
                    </Link>

                    <Link href={'/'}>
                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_169_1039)">
                                <path
                                    d="M22.033 7.11175C22.0482 7.32494 22.0482 7.53817 22.0482 7.75136C22.0482 14.2539 17.099 21.7463 8.0533 21.7463C5.26648 21.7463 2.67767 20.9391 0.5 19.5382C0.895953 19.5838 1.27662 19.5991 1.68781 19.5991C3.98727 19.5991 6.10405 18.8224 7.79441 17.4976C5.63197 17.4519 3.81978 16.0356 3.19541 14.0864C3.5 14.132 3.80455 14.1625 4.12437 14.1625C4.56598 14.1625 5.00764 14.1016 5.41878 13.995C3.16498 13.5381 1.47458 11.5585 1.47458 9.16759V9.1067C2.12937 9.47219 2.89086 9.70061 3.69791 9.73103C2.37303 8.84777 1.50505 7.34017 1.50505 5.63458C1.50505 4.72089 1.74866 3.88333 2.17508 3.15236C4.59641 6.13713 8.23602 8.08633 12.3172 8.29956C12.2411 7.93408 12.1954 7.55341 12.1954 7.17269C12.1954 4.462 14.3883 2.25391 17.1141 2.25391C18.5304 2.25391 19.8095 2.84781 20.708 3.8072C21.8197 3.59402 22.8857 3.18283 23.8299 2.61939C23.4643 3.76155 22.6877 4.72094 21.6674 5.33003C22.6573 5.22348 23.6167 4.94931 24.4999 4.56864C23.83 5.54322 22.9924 6.4112 22.033 7.11175Z"
                                    fill="#010101"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_169_1039">
                                    <rect width="24" height="24" fill="white" transform="translate(0.5)"/>
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </div>
            </div>
        </>
    );
}
