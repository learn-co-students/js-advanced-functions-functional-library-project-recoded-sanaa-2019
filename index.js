const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(testArr,alert) {
      //const objValues = Object.values(testObj)
      if(Array.isArray(testArr)){
        for (let i=0; i<testArr.length; i++){
          alert(testArr[i], i, testArr)
      }
      return testArr;
        
      }
      if (!Array.isArray(testArr)){
        let myKeys= Object.keys(testArr);
        for(const key of myKeys){
          alert(testArr[key], key, testArr)
        }
        return testArr;
      }
    },

    map: function(testArr,alert) {
      if(Array.isArray(testArr)){
        let myArr=[];
        for (let i=0; i<testArr.length; i++){
         myArr.push(alert(testArr[i], i, testArr))
      }
      return myArr;
        
      }
      if (!Array.isArray(testArr)){
        let myArr=[];
        let myKeys= Object.keys(testArr);
        for(const key of myKeys){
         myArr.push(alert(testArr[key], key, testArr))
        }
        return myArr;
      }
    },

    reduce: function(oldCollection, callback, acc) {
      if (Array.isArray(oldCollection)) {
        let index = 0;
        const collection = [...oldCollection];
        if (typeof acc === "undefined") {
          acc = collection[0];
          index = 1;
        }
        for (; index < collection.length; index++) {
          acc = callback(acc, collection[index], collection);
        }

        return acc;
      }
},

    find: function(collection, predicate) {
      if (Array.isArray(collection)) {
        for (const value of collection) {
          if (predicate(value)) {
            return value;
          }
        }
        return undefined;
      }
    },

    filter: function(collection, predicate) {
      if (Array.isArray(collection)) {
        const newCollection = [];
        for (const value of collection) {
          if (predicate(value)) {
            newCollection.push(value);
          }
        }
        return newCollection;
      }
    },


    size: function(collection){
      let arr = [];
      for(var key in collection){
          arr.push(collection[key])
      }
      return arr.length;
    },


    first: function(collection, n) {
      if(n != null){
        return collection.slice(0,n);
      }
      return collection[0];
    },


    last:function(collection,n){
      if(n===undefined){
        return collection[collection.length-1];
      }
      let arr=[];
      if(n<collection.length){
        let i=collection.length-1;
        do{
          arr.push(collection[i]);
          i--;
        }while(i>=collection.length-n);
        return arr.reverse();
      }
      else if(n>=collection.length){
        for(let i=0;i<collection.length;i++){
          arr.push(collection[i]);
        }
        return arr;
      }
      
    },
    

    compact: function(collection){
      let arr=[];
      for(let i=0;i<collection.length;i++){
        if(Boolean(collection[i])){
          arr.push(collection[i])
        }
      }
      return arr;
    },

    sortBy: function(array, callback) {
    let arr = [];
    for (const key in array) {
      if (array.hasOwnProperty(key)) {
        const element = array[key];
        arr.push(element);
        if (!isNaN(element)) {
          arr.sort((a, b) => {
            return callback(a) - callback(b);
          });
        } else if (isNaN) {
          arr.sort();
        }
      }
    }

      console.log(arr);
      return arr;
    },


    flatten: function(array, cond) {
      if (cond === true) {
        const notFlat = [].concat([], ...array);
        return notFlat;
      }
      const flat = [].concat(...array);
      return flat.some(Array.isArray) ? fi.flatten(flat) : flat;
    },


    uniq:function(collection,isSorted, callback){
      if(isSorted != null){
        const cond = collection.map(val=>callback(val)).filter((v,i,col)=>{
            return col.indexOf(v) === i;
        });

        let res = collection.map((x,i,col)=>{
            if(cond.includes(callback(x)) === true){
                cond[cond.indexOf(callback(x))] = -1;
                return x
            }
            return false

        });
        return res.filter(Boolean);
    }
      return collection.filter((v,i,col)=>{
        return col.indexOf(v) === i;
      });
    },


    keys: function(object) {
      return Object.keys(object);
    },


    values: function(object) {
      return Object.values(object);
    },


    giveMeMore: function(){
      return true
    },


    functions:function(obj){
      let final =  [];
      for(var key in obj){
          if(typeof obj[key] == 'function'){
              final.push(key)
          }
      }
      return final.sort();
    },
    };
    })();


    fi.libraryMethod()
