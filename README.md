using [nedb](https://github.com/louischatriot/nedb#readme) in your electron app.

Check out the [docs](https://github.com/bajankristof/nedb-promises/blob/master/docs.md).

### Installation
```sh
yarn add https://github.com/abdullah-bl/electron-nedb
```


```js
const Collection = require('electron-nedb')

let options = {} // nedb options https://github.com/louischatriot/nedb#creatingloading-a-database
let data = Collection('users', options)

// #1
data.find({ field: true })
  .then(...)
  .catch(...)
  
// #2
data.find({ field: true })
  .exec(...)
  .then(...)
  .catch(...)

// #1 and #2 are equivalent

data.findOne({ field: true })
  .then(...)
  .catch(...)
  
data.insert({ doc: 'yourdoc' })
  .then(...)
  .catch(...)
  
// or in an async function
async function findSorted(page, perPage = 10) {
	return await data.find(...)
    	.sort(...)
        .limit(perPage)
        .skip(page * perPage)
}
```
