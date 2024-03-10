import './page.scss'
import Link from "next/link";

export default function page() {
    return (

            <main className="main">
                <h1 className='performance-text'>
                    Get your black card now
                </h1>
                <figure className='img'>
                    <img src="https://fiftycapital.co/wp-content/uploads/2024/03/APNG-ULTRA-HIGH.png" alt=""
                         loading="lazy"/>
                </figure>
                <div className='action'>
                    <Link href='/' className='btn btn-4 action__btn'>
                        Mint
                    </Link>
                    <span className='action__desc
                '>
                    Supply: 50
                </span>
                </div>

                <div className='bg-img'>
                    <img
                         src="https://fiftycapital.co/wp-content/themes/fifty/assets/images/decors/decor-01.svg"
                         loading="lazy" alt=""/>
                </div>
            </main>
    );
}
