import styles from './basic-about.module.scss';
import { Image } from '../../ui-kit/Image';
import { AboutContent } from './AboutContent';

interface Props {
    image1xUrl: string;
    image2xUrl: string;
    title: string;
    subtitle: string;
    advantageText?: string;
    buttonText: string;
}

export function BasicAbout(props: Props) {
  const { image1xUrl, image2xUrl } = props;

  return (
    <div className={styles.wrapper}>
      <div className={styles.background} />
      <div className={styles.content}>
        <AboutContent {...props} />
      </div>
      <Image className={styles.imageOutFlow} src={image1xUrl} src2x={image2xUrl} />
    </div>
  );
}
