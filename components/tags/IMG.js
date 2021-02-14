import Image from 'next/image';
import styles from './IMG.module.scss';

const IMG = ({img, type="responsive", width="100%", height="100%"}) => {
  return (
    <div className={styles.img}>
      <Image src={img} layout={type} width={width} height={height} />
    </div>
  );
}

export default IMG;