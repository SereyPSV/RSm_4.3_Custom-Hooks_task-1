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

1. Опрделился что в хук будет принимать в качестве аргументов - url для загрузки данных, и что хук будет выдавать - загруженные данные, состояние загрузки, ошибку и функцию для повторных запросов.
2. Создаем функцию для загузки данных, определяемся с состояниями.
3. Создаем функцию для повторной загузки данных, с ограничением количества загрузок и при успешной загрузке break из цикла загрузок
