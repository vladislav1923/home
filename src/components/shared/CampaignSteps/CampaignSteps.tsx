/* eslint-disable no-undef */
import { useState } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import styles from './campaign-steps.module.scss';
import { Dots } from '../../ui-kit/Dots';

interface Props {
    steps: JSX.Element[];
}

export function CampaignSteps({ steps }: Props) {
  const [currentStep, setCurrentStep] = useState<number>(0);

  return (
    <>
      <Carousel
        plugins={['fastSwipe']}
        draggable={false}
        value={currentStep}
        slides={steps}
        onChange={(value: number) => setCurrentStep(value)}
      />
      <div className={styles.dots}>
        <Dots value={currentStep} amount={steps.length} onChange={(value: number) => setCurrentStep(value)} />
      </div>
    </>
  );
}
