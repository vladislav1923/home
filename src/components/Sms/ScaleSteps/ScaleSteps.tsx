import { useState } from 'react';
import { Step } from '../../shared/Step';
import { Image } from '../../ui-kit/Image';
import styles from './scale-steps.module.scss';
import { Dots } from '../../ui-kit/Dots';
import { CampaignStep } from '../../../interfaces/campaign-step';

export function ScaleSteps() {
  const [steps] = useState<CampaignStep[]>(
    [
      {
        title: 'Настройте целевую аудиторию по полу, возрасту, гео, интересам, поведению, намерениям, доходу',
        image1x: '/shared/scale-steps/scale-step-1@1x.png',
        image2x: '/shared/scale-steps/scale-step-1@2x.png',
        imageAlt: 'Scale Step 1',
      },
    ],
  );
  const [currentStep, setCurrentStep] = useState<number>(1);

  return (
    <>
      {
                steps.map((step: CampaignStep, index: number) => (
                  <Step
                    key={step.title}
                    index={index + 1}
                    title={step.title}
                    image={(
                      <Image
                        className={styles.image}
                        src={step.image1x}
                        src2x={step.image2x}
                        alt={step.imageAlt}
                      />
                          )}
                  />
                ))
            }
      <div className={styles.dots}>
        <Dots value={currentStep} amount={steps.length} onChange={(value: number) => setCurrentStep(value)} />
      </div>
    </>
  );
}
