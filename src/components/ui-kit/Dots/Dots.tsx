import { useEffect, useState } from 'react';
import styles from './dots.module.scss';

interface Props {
    amount: number;
    value: number;
    onChange: (value: number) => void
}

export function Dots({ amount, value, onChange }: Props) {
  const [dotsList, setDotsList] = useState<number[]>([]);
  useEffect(() => {
    const list: number[] = [];
    let i = 0;

    while (i < amount) {
      list.push(i);
      i += 1;
    }

    setDotsList(list);
  }, [amount]);

  return (
    <ul className={styles.list}>
      {dotsList.map((dotNumber: number) => (
        <li key={dotNumber} className={styles.item}>
          <button
            type="button"
            aria-label={`Кнопка выбора слайда ${dotNumber}`}
            className={styles.dot}
            data-active={dotNumber === value}
            onClick={() => onChange(dotNumber)}
          />
        </li>
      ))}
    </ul>
  );
}
