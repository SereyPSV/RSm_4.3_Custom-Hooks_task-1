# Дополнительное задание #1

### Реализуйте хук _`useWindowScroll()`_ , который можно будет использовать следующим образом:

```JavaScript
import { useWindowScroll } from './useWindowScroll';

function Demo() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <div>
      <p>
        Scroll position x: {scroll.x}, y: {scroll.y}
      </p>
      <button onClick={() => scrollTo({ y: 0 })}>Scroll to top</button>
    </div>
  );
}
```

---

---

<br>

### Примечание: для реализации можете использовать вспомогательный хук для добавления слушателей событий на `window`.

```JavaScript
import { useEffect } from 'react';

export function useWindowEvent(type, listener, options) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener(type, listener, options);
      return () => window.removeEventListener(type, listener, options);
    }
  }, [type, listener]);
}
```

---

---
