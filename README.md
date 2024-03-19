# Задание #3

### Реализуйте хук _`useHover()`_ , который можно будет использовать следующим образом:

```JavaScript
import { useHover } from './useHover';

function Demo() {
  const { hovered, ref } = useHover();

  return (
    <div ref={ref}>
      {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
    </div>
  );
}
```

---

---
