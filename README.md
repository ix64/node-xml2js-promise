# node-xml2js-promise
A promise wrapper for xml2js.
### Installation

```
npm install node-xml2js-promise
```

### Usage

```javascript
const xml2js_promise = require('node-xml2js-promise');

xml2js_promise(xml, options).then(function(result) {
  console.log(result);
});

// or use ES7 async/await

(async ()=>{
    let result=await xml2js_promise(xml,options);
    console.log(result)
})();
```