import { useContext } from 'react';
import { GlobalContext } from '../../../../contexts/Global';
import styles from './about-content.module.scss';
import { Title } from '../../Title';
import { ButtonLink } from '../../../ui-kit/ButtonLink';
import { Image } from '../../../ui-kit/Image';
import { Phone } from '../../icons';

interface Props {
    image1xUrl: string;
    image2xUrl: string;
    title: string;
    subtitle: string;
    advantageText: string;
    buttonText: string;
}

export function AboutContent(props: Props) {
  const {
    image1xUrl,
    image2xUrl,
    title,
    subtitle,
    advantageText,
    buttonText,
  } = props;
  const { authUrls } = useContext(GlobalContext);
  const { login } = authUrls;

  return (
    <div className={styles.content}>
      <div className={styles.title}>
        <Title title={title} titleTag="h1" subtitle={subtitle} />
      </div>
      <div className={styles.button}>
        <ButtonLink uniqName="Кнопка запустить рекламу" href={login}>{buttonText}</ButtonLink>
      </div>
      <p className={styles.advantageText}>{advantageText}</p>
      <Image className={styles.imageInFlow} src={image1xUrl} src2x={image2xUrl} />
      <div>
        <a href="tel:88002501111" className={styles.contact}>
          <Phone className={styles.contactIcon} />
          <span className={styles.contactTitle}>Бесплатная консультация 8 800 250-11-11</span>
        </a>
      </div>
    </div>
  );
}
