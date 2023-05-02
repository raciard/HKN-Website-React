import styles from "@/styles/components/Header.module.css";
import Image from "next/image";
import {useRouter} from "next/router";


const Header = () => {
    const router = useRouter();
    const isActive = (pathname : string) => router.pathname === pathname;

    return (
        <header className={styles.header}>
            <div className={styles.logoTitle} onClick={() => router.push('/')} >
                <Image className={styles.logo} src="/hkn_logo_white_vector.svg" alt="HKN PoliTO Logo" width={120} height={120}/>
                {/*<div className={styles.title} >
                    <text style={{fontSize:25, fontWeight:600}}>HKN</text>
                    <text style={{fontSize:15.2, fontWeight:400, marginTop:-10}}>POLITO</text>
                </div>*/}
            </div>

            <div className={styles.menu}>
                <div className={isActive('/') ? styles.active : styles.inactive} onClick={() => router.push('/')}>
                    Home
                </div>
                <div className={isActive('/AboutUs') ? styles.active : styles.inactive} onClick={() => router.push('/AboutUs')}>
                    About
                </div>
                <div className={isActive('/Events') ? styles.active : styles.inactive} onClick={() => router.push('/Events')}>
                    Events
                </div>
                <div className={isActive('/People') ? styles.active : styles.inactive} onClick={() => router.push('/People')}>
                    People
                </div>
                <div className={isActive('/Recognitions') ? styles.active : styles.inactive} onClick={() => router.push('/Recognitions')}>
                    Recognitions
                </div>
            </div>

            <div className={styles.headerSpace}>
                <div className={isActive('/JoinUs') ? styles.active : styles.inactive} onClick={() => router.push('/JoinUs')}>
                    Join Us
                </div>
            </div>
        </header>
    )
}

export default Header;
