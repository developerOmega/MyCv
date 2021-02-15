import React from 'react';
import styles from './CardJobShow.module.scss';
import JustContent from './flex/JustContent';
import Close from './icons/Close';
import Screen from "./tags/Screen";
import Btn from './tags/Btn';

const CardJobShow = () => {

  const flex = {
    display: 'flex',
    alignItems: "flex-start",
    justifyContent: "center",
  }

  return (
    <Screen style={flex}>
      
      <div className={styles.card}>
        
        <JustContent type="flex-end">
          <Btn type="button" style="none">
            <Close width="15px" className={styles.btn} />
          </Btn>
        </JustContent>

        <div className={styles.main}>
          <JustContent type="center">
            <h2 className={styles.head}> NuvaSoftware </h2>
            <p className={styles.head}> 7-mar-2019 / 20-ene-2020 </p>
          </JustContent>

          <JustContent type="center">
            <p className={styles.content}>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
            </p>
          </JustContent>
        </div>

      </div>
    </Screen>
  );
}

export default CardJobShow;