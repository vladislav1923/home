import styles from './targets.module.scss';
import {Title} from "../../shared/Title";
import {Profile, Settings, Geo, Scope, DataBase} from "../../shared/icons";
import {BasicCard, Card} from "../../shared/Card";
import {Star} from "../../shared/icons/Star";
import {Lock} from "../../shared/icons/Lock";

export function Targets() {
    return (
        <>
            <div className={styles.title}>
                <Title title="Настройки аудитории" />
            </div>

            <ul className={styles.cardsList}>
                <li className={styles.card}>
                    <Card icon={<Profile className={styles.cardIcon} />}>
                        <BasicCard
                            title="Демография и технологии"
                            subtitle="Пол, возраст, город, доход, занятость, устройства и т.д."
                        />
                    </Card>
                </li>
                <li className={styles.card}>
                    <Card icon={<Settings className={styles.cardIcon} />}>
                        <BasicCard
                            title="Демография и технологии"
                            subtitle="Пол, возраст, город, доход, занятость, устройства и т.д."
                        />
                    </Card>
                </li>
                <li className={styles.card}>
                    <Card icon={<Geo className={styles.cardIcon} />}>
                        <BasicCard
                            title="Геотаргетинг"
                            subtitle="Выбор зоны, где часто бывает целевая аудитория"
                        />
                    </Card>
                </li>
                <li className={styles.card}>
                    <Card icon={<Scope className={styles.cardIcon} />}>
                        <BasicCard
                            title="Сегменты на основе активности"
                            subtitle="Аудитория, которая может интересоваться определёнными сайтами и номерами"
                        />
                    </Card>
                </li>
                <li className={styles.card}>
                    <Card icon={<DataBase className={styles.cardIcon} />}>
                        <BasicCard
                            title="Работа с клиентской  базой"
                            subtitle="Исключить клиентов из рассылки или сегментировать их по таргетам"
                        />
                    </Card>
                </li>
                <li className={styles.card}>
                    <Card icon={<Star className={styles.cardIcon} />}>
                        <BasicCard
                            title="Уникальные сегменты по запросу"
                            subtitle="Опишите потенциального покупателя, и мы создадим сегмент по вашему описанию"
                        />
                    </Card>
                </li>
            </ul>
            <div className={styles.footnote}>
                <Lock className={styles.footnoteIcon} />
                <p className={styles.footnoteText}>Настройки созданы на основе анонимных и агрегированных данных</p>
            </div>
        </>
    )
}
