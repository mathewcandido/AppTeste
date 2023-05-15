
import { Inter } from 'next/font/google'
import styles from '@/styles/confirmPage.module.css'
import list from './api/products.json'
import Header from '@/components/Header'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, } from '@mui/material';
import Button from '@/components/Button'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

    const [value, setVelue] = useState({});
    const router = useRouter();

    useEffect(() => {
        //console.log(router.query)
        setVelue(router.query);
    }, [router.query])

    //  console.log(value.valuerange);



    return (
        <>
            <Header />
            <h2 className={styles.title}>O brinde já é quase seu</h2>
            <div >
                <p className={styles.text}>Apresente esse Qr Code no balcão <br /> de atendimento para retirar</p>
            </div>
            <div className={styles.boxCode}>
                <img className={styles.imgCode} src="assets/qrcode.jpg" alt="" />
                <p className={styles.code}>894756578</p>
            </div>
            {list.filter((item) => {
                 return item.title == value.valuerange
                //console.log(item.title)
            })
                .map((prod, i) => {
                    return (
                        <div key={prod.id} className={styles.cardMother}>
                            <div className={styles.box}>
                                <img className={styles.img} src={prod.avatar} />
                                <div className={styles.info}>
                                    <h2 className={styles.h2}>{prod.title}</h2>
                                    <p className={styles.p}>{prod.subTitle}</p>
                                </div>
                            </div>
                        </div>)

                })}
        </>
    )
}
