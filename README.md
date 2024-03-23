# Задание #4

### Реализуйте хук _`useViewportSize()`_ , который можно будет использовать следующим образом:образом:

```JavaScript
import { useToggle } from './useToggle';

function Demo() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <button onClick={() => toggle()}>
      {value}
    </button>
  );
}

// Еще примеры использования

const [value, toggle] = useToggle(['light', 'dark']);

toggle(); // -> value === 'light'
toggle(); // -> value === 'dark'

// Так же можно передать конкретное значение и тогда
// value станет одним из значений
toggle('dark'); // -> value === 'dark'
```

### Подсказка: для реализации попробуйте использовать хук `useReducer()`.

---

---
