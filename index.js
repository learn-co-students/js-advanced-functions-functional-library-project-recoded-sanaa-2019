
const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection,callback) {
   if (Array.isArray(collection)) {
        for (let index = 0; index < collection.length; index++) {
          callback(collection[index], index, collection);
        }
        return collection;
      }
      if (!Array.isArray(collection)) {
        const keysOfObject = Object.keys(collection);
        for (const key of keysOfObject) {
          callback(collection[key], key, collection);
        }
        return collection;
      }
    },

    map: function(collection,callback) {
      if(Array.isArray(collection)){
       let newCollection = [];
        for (let index = 0; index < collection.length; index++) {
          newCollection.push(callback(collection[index], index, collection));
        }
        return newCollection;
}else{
  let newCollection = [];
        const keysOfObject = Object.keys(collection);
        for (const key of keysOfObject) {
          newCollection.push(callback(collection[key], key, collection));
        }
        return newCollection;
      }

    },
   
    reduce: function(collection,callback,acc) {
      let u=0
  if(acc!=null){
  u= collection.reduce(callback,acc)
  }else{
   u=collection.reduce(callback)
  }
  return u
    },


find: function(collection, predicate) {
     
      return collection.find(predicate);
    },
    filter: function(collection,predicate){
      return collection.filter(predicate);
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
      if(n != null){
        return collection.slice(-n);
      }
      return collection[collection.length -1];
    },
    compact: function(collection) {
      return collection.filter(Boolean);
    },	    
    sortBy: function(collection,callback){
      let arr = [...collection];
      return arr.sort((a,b)=>{
          if(typeof a === 'string'){
              return a.localeCompare(b);
          }
          return callback(a) - callback(b)
      });
    },
    flatten: function(collection, shallow) {
      if(shallow == null){
        function flatten(arr) {
          return arr.reduce(function (flat, toFlatten) {
            return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
           }, []);
        }
        return flatten(collection);
      }
      return collection.reduce((acc, val) => acc.concat(val), []);
    },
    uniq:function(col,isSorted, callback){
      if(isSorted != null){
        const newEl = col.map(val=>callback(val)).filter((v,i,col)=>{
            return col.indexOf(v) === i;
        });
        let el = col.map((x,i,col)=>{
            if(newEl.includes(callback(x)) === true){
              newEl[newEl.indexOf(callback(x))] = -1;
                return x
            }
            return false

        });
        return el.filter(Boolean);
    }
      return col.filter((v,i,col)=>{
        return col.indexOf(v) === i;
      });
    },
    keys: function(object) {
      return Object.keys(object);
    },
    values: function(object) {
      return Object.values(object);
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
     giveMeMore: function(obj=false) {
      obj=true
     return obj;
   },


  }	  
})();
fi.libraryMethod()
=======
const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function() {

    },

    map: function(collection,callback) {
      if(Array.isArray(collection)){
       let newCollection = [];
        for (let index = 0; index < collection.length; index++) {
          newCollection.push(callback(collection[index], index, collection));
        }
        return newCollection;
}else{
  let newCollection = {}
        const keysOfObject = Object.keys(collection);
        for (const key of keysOfObject) {
          newCollection.key=callback(collection[key], key, collection);
        }
        return newCollection;
      }
}
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
>>>>>>> bce0747cdf4a0405178dbc384666304001b85158
