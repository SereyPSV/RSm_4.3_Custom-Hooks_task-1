# Задание #1

### Реализуйте хук _`useFetch()`_, который можно будет использовать следующим образом:

```JavaScript
import { useFetch } from './useFetch';

function Demo() {
  const {
    data,
    isLoading,
    error,
    refetch
  } = useFetch('https://jsonplaceholder.typicode.com/posts');

  return (
    <div>
      <div>
        <button onClick={() => refetch({
          params: {
            _limit: 3
          }
        })}>
          Перезапросить
        </button>
      </div>
      {isLoading && 'Загрузка...'}
      {error && 'Произошла ошибка'}
      {data && !isLoading && data.map(item => <div key={item.id}>{item.title}</div>) }
    </div>
  );
}
```

Примечание: в реализации хука можно использовать как fetch(), так и axios.

---

---
