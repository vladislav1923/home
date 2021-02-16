/* eslint-disable no-undef */
import { useState } from 'react';
import { Step } from '../Step';
import { Image } from '../../ui-kit/Image';
import styles from './scale-steps.module.scss';
import { CampaignSteps } from '../CampaignSteps';

export function ScaleSteps() {
  const [steps] = useState<JSX.Element[]>([
    <Step
      index={1}
      title="Настройте целевую аудиторию по полу, возрасту, гео, интересам, поведению, намерениям, доходу"
      image={(
        <Image
          className={styles.image}
          src="/shared/scale-steps/scale-step-1@1x.png"
          src2x="/shared/scale-steps/scale-step-1@2x.png"
          alt="Scale Step 1"
        />
            )}
    />,
    <Step
      index={2}
      title="Выберите условия отправки: количество, даты, время"
      image={(
        <Image
          className={styles.image}
          src="/shared/scale-steps/scale-step-2@1x.png"
          src2x="/shared/scale-steps/scale-step-2@2x.png"
          alt="Scale Step 2"
        />
            )}
    />,
    <Step
      index={3}
      title="Выберите имя отправителя, напишите текст, добавьте картинку для MMS"
      image={(
        <Image
          className={styles.image}
          src="/shared/scale-steps/scale-step-3@1x.png"
          src2x="/shared/scale-steps/scale-step-3@2x.png"
          alt="Scale Step 3"
        />
            )}
    />,
    <Step
      index={4}
      title="Пройдите модерацию и запустите"
      image={(
        <Image
          className={styles.image}
          src="/shared/scale-steps/scale-step-4@1x.png"
          src2x="/shared/scale-steps/scale-step-4@2x.png"
          alt="Scale Step 4"
        />
            )}
    />,
  ]);

  return (
    <>
      <CampaignSteps steps={steps} />
    </>
  );
}
