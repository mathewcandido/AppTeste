import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import listProducts from './api/products.json'
import Header from '@/components/Header'
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, } from '@mui/material';
import Button from '@/components/Button'
import { useRouter } from 'next/router';
import { useState } from 'react';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [hadleButon, setHandleButton] = useState(true);
  const [valuerange, setvaluerange] = useState('');

  const router = useRouter();

  const handleClick = (event) => {

    setvaluerange(event.target.value);
    setHandleButton(false);
  }

  //console.log(valuerange);

  const takeValue = () => {
    //  console.log(valuerange);
    router.push({
      pathname: '/confirmPage',
      query: { valuerange: valuerange },

    });
  }


  return (
    <>
      <main className={styles.main}>
        <Header />

        <div className={styles.container}>

          <h2 className={styles.label}>Escolha o seu Brindes</h2>
          <FormControl className={styles.form}  >

            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >

              <div>
                {listProducts.map((prod, i) => {
                  return (
                    <div key={prod.id} className={styles.cardMother}>
                      <div className={styles.box}>
                        <img className={styles.img} src={prod.avatar} />
                        <div className={styles.info}>
                          <h2 className={styles.h2}>{prod.title}</h2>
                          <p className={styles.p}>{prod.subTitle}</p>
                        </div>
                      </div>
                      <FormControlLabel onClick={handleClick} value={prod.title} control={<Radio />} />
                    </div>)

                })}
              </div>
            </RadioGroup>

          </FormControl>

          <div className={styles.motherButton}>
            <Button click={takeValue} disable={hadleButon} >continuar</Button>
          </div>

        </div>
        <Footer/>
      </main>
    
    </>
  )
}
