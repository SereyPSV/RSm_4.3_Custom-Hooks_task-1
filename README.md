# Задание #2

### Реализуйте хук _`useLocalStorage()`_ , который можно будет использовать следующим образом:

```JavaScript
import { useLocalStorage } from './useLocalStorage';

function Demo() {
  const [token, { setItem, removeItem }] = useLocalStorage('token');

  return (
    <div>
      <p>
        Твой токен: { token }
      </p>
      <div>
        <button onClick={() => setItem('new-token')}>
          Задать токен
        </button>
        <button onClick={() => removeItem()}>
          Удалить токен
        </button>
      </div>
    </div>
  );
}
```

---

---

<br>
### Сигнатура хука:

```JavaScript
type ReturnValue = [
  value: string | null,
  {
    setItem: (value: string) => void,
    removeItem: () => void,
  }
];

type UseLocalStorage = (key: string) => ReturnValue;
```

---

---

1. Задал основные функции хука: getTokenStorage, setItem, removeItem.
2. Добавил логики чтобы исключить лишние рендеры и парсинги.
3. Думал useEffect использовать, но зачем.
