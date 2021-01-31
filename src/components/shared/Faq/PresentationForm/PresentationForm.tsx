import { useForm } from 'react-hook-form';
import styles from './presentation-form.module.scss';
import { Button } from '../../../ui-kit/Button';
import { Input } from '../../../ui-kit/Input';
import { emailErrorMessages, emailPattern } from '../../../../utils/validation';
import { Email } from '../../icons/Email';

interface FormFields {
    email: string;
}

export function PresentationForm() {
  const { register, handleSubmit, errors } = useForm<FormFields>();
  const onSubmit = (data: FormFields) => console.log(data);

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h3 className={styles.title}>Презентация сервиса</h3>
      <p className={styles.subtitle}>
        С обзором дополнительных возможностей и кейсами клиентов
      </p>

      <div className={styles.field}>
        <Input
          name="email"
          placeholder="Ваш email"
          isRequired
          isError={!!errors.email}
          errorMessage={errors.email?.message}
          registerRef={register({
            required: emailErrorMessages.get('required'),
            pattern: { value: emailPattern, message: emailErrorMessages.get('pattern') },
          })}
          icon={<Email className={styles.icon} />}
          uniqName="Презентация сервиса - Поле ввода почты"
        />
      </div>

      <Button type="submit">Получить</Button>
    </form>
  );
}
