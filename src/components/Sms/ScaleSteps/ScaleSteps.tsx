import {Step} from "../../shared/Step";
import {Image} from "../../ui-kit/Image";
import styles from "./scale-steps.module.scss";

export function ScaleSteps() {
    return (
        <>
            <Step
                index={1}
                title="Настройте целевую аудиторию по полу, возрасту, гео, интересам, поведению, намерениям, доходу"
                image={
                    <Image
                        className={styles.image}
                        src="/shared/scale-steps/scale-step-1@1x.png"
                        src2x="/shared/scale-steps/scale-step-1@2x.png"
                        alt="MMS Example"
                    />
                }
            />
        </>
    )
}