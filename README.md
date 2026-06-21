
# Search Script (JS-edition)



Скрипты в данном репозитории в основном предназначены для поиска в передаваемых источниках с информацией по ключевым параметрам



## Инструкция/search-In-JSON

```javascript
const currentData = await getApi('your-url')
searchOnParams(currentData, 'param1', 'param2')
```
1. Полностью скопируйте скрипт **searchInJSON.js**, откройте *devTools* на пустой странице в браузере *local host* (это обязательно иначе ваш запрос не выполнится) вставьте скрипт в консоль и следуйте следующим шагам
2. В аргументах при вызове функции **getApi()** передайте свой *url* по которому выполнится запрос и будет получен ответ в формате *JSON*
3. При вызове **searchOnParams()** поменяйте *param1* и *param2* на свои параметры, которые вы хотите найти в ответе JSON (которые непосредственно в нем содержутся)
4. По нажатию *enter* если все указанно корректно в консоль, после получения *JSON* от сервера сразу придут значения параметров(параметра) которые вы указали

## Пример запрса
```javascript
const currentData = await getApi('example.com')
searchOnParams(currentData, 'id', 'title')
```
## Пример ответа 
```javascript
id: 1, title: Perfect Title //ответ в текстовом формате в консоль
(2) [1, 'Perfect Title'] //вырезка из оригинального JSON с искомыми параметрами
```

## Authors

- [@vscode-mvp](https://github.com/vscode-mvp)

