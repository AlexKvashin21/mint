import Header from '@/components/Header/Header'
import Footer from "@/components/Footer/Footer";

const layout = ({children}: Readonly<{ children: React.ReactNode; }>) => {
    return (
        <div className='wrapper'>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default layout
