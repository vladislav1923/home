import {useState} from "react";
import {useForm} from 'react-hook-form';
import styles from './presentation-form.module.scss';
import {sendPresentation} from "../../../../services/client/presentation";
import {Button} from '../../../ui-kit/Button';
import {Input} from '../../../ui-kit/Input';
import {Email} from '../../icons/Email';
import {Feedback} from "../../../../interfaces/feedback";
import {emailErrorMessages, emailPattern} from '../../../../utils/validation';

interface FormFields {
    email: string;
}

export function PresentationForm() {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isDone, setIsDone] = useState<boolean>(false);
    const {register, handleSubmit, errors} = useForm<FormFields>();
    const onSubmit = async (form: FormFields) => {
        try {
            setIsSubmitting(true);
            const data: Feedback = {email: form.email};
            await sendPresentation(data);
            setIsDone(true);
        } catch (e) {
            setIsSubmitting(false);
            throw e;
        }
    };

    return (
        <div className={styles.form}>
            <h3 className={styles.title}>Презентация сервиса</h3>
            <p className={styles.subtitle}>
                С обзором дополнительных возможностей и кейсами клиентов
            </p>

            {!isDone &&
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.field}>
                        <Input
                            name="email"
                            placeholder="Ваш email"
                            isRequired
                            isDisable={isSubmitting}
                            isError={!!errors.email}
                            errorMessage={errors.email?.message}
                            registerRef={register({
                                required: emailErrorMessages.get('required'),
                                pattern: {value: emailPattern, message: emailErrorMessages.get('pattern')},
                            })}
                            icon={<Email className={styles.icon}/>}
                            uniqName="Презентация сервиса - Поле ввода почты"
                        />
                    </div>

                    <Button
                        type="submit"
                        isSpinner={isSubmitting}
                        uniqName="Презентация сервиса - Кнопка получить"
                    >
                        Получить
                    </Button>
                </form>
            }

            {isDone &&
                <p className={styles.submittedMessage}>
                    Презентация придет <br />
                    в течение 5 минут
                </p>
            }

        </div>
    );
}
