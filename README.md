# Задание #4

### Реализуйте хук _`useViewportSize()`_ , который можно будет использовать следующим образом:образом:

```JavaScript
import { useViewportSize } from '@mantine/hooks';

function Demo() {
  const { height, width } = useViewportSize();

  return (
    <>
      Width: {width}, height: {height}
    </>
  );
}
```

### При изменении размеров viewport значения `height` и `width` автоматически обновляются.

### Примечание: для реализации можете использовать вспомогательный хук для добавления слушателей событий на `window`:

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
