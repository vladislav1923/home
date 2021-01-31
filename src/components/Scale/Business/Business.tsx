import Link from 'next/link';
import styles from './business.module.scss';
import {Title} from "../../shared/Title";
import {Button} from "../../ui-kit/Button";
import {useContext} from "react";
import {GlobalContext} from "../../../contexts/Global";

export function Business() {
    const { authUrls } = useContext(GlobalContext);
    const { login } = authUrls;
    const list = [
        'недвижимость и строительство',
        'финансы',
        'страхование',
        'доставка еды',
        'красота и здоровье',
        'путешествия',
        'образование',
        'авто',
        'ювелирные украшения',
    ];

    return (
        <>
            <div className={styles.title}>
                <Title
                    title={'Какому бизнесу подходят SMS-рассылки'}
                    subtitle={'Хороший результат показывают рассылки как B2B, так и в B2C сегменте: привлечение клиентов \n ' +
                    'в точки продаж, в онлайн-магазины или продажа услуг. Важно — правильно настроить таргетинг \n' +
                    ' и сделать подходящее предложение'}
                />
            </div>

            <ul className={styles.list}>
                {list.map((item: string) =>
                    <li key={item} className={styles.item}>
                        <span className={styles.itemTitle}>{item}</span>
                    </li>
                )}
            </ul>

            <div className={styles.button}>
                <Link href={login}>
                    <Button uniqName="Кнопка Запутить рекламу">Запустить рекламу</Button>
                </Link>
            </div>
        </>
    )
}
