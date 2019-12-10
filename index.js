const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
 

    each: function(col,call) {
      if (Array.isArray(col)) { 
        for(const index in col){
          call(col[index], index, col)
        } 
      }
      else { 
        for(const key in col){
          call( col[key], key, col)
        } 
      }
      return col
    },

    map:  function(col,call) {
      let arr =[]
      if (Array.isArray(col)) { 
        for(const index in col){
          arr.push(call(col[index], index, col))
        } 
      }
      else if(!Array.isArray(col)) {  
        for(const key in col){
          arr.push( call(col[key], key, col))
        } 
      }
      return arr
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

    size: function(col){
      let arr = [];
      for(let i=0;i< myArr.length;i++){
        arr.push(col[i])
      }
      return arr.length;
    },
    find: function(col, pre) {
      if (Array.isArray(col)) {
        for (const value of col) {
          if (pre(value)) {
            return value;
          }
        }
        return undefined;
      }
    },

    filter: function(col, pre) {
      if (Array.isArray(col)) {
        const col2 = [];
        for (const value of col) {
          if (pre(value)) {
            col2.push(value);
          }
        }
        return col2;
      }
    },


    size: function(col){
      let arr = [];
      for(var key in col){
          arr.push(col[key])
      }
      return arr.length;
    },


    first: function(col, n) {
      if(n != null){
        return col.slice(0,n);
      }
      return col[0];
    },


    last:function(col,n){
      if(n===undefined){
        return col[col.length-1];
      }
      let arr=[];
      if(n<col.length){
        let i=col.length-1;
        do{
          arr.push(col[i]);
          i--;
        }while(i>=col.length-n);
        return arr.reverse();
      }
      else if(n>=col.length){
        for(let i=0;i<col.length;i++){
          arr.push(col[i]);
        }
        return arr;
      }
      
    },
    

    compact: function(col){
      let arr=[];
      for(let n=0;n<col.length;n++){
        if(Boolean(col[n])){
          arr.push(col[n])
        }
      }
      return arr;
    },

    sortBy: function(arr, callback) {
    let myArr = [];
    for (const key in arr) {
      if (arr.hasOwnProperty(key)) {
        const element = arr[key];
        myArr.push(element);
        if (!isNaN(element)) {
          myArr.sort((a, b) => {
            return callback(a) - callback(b);
          });
        } else if (isNaN) {
          myArr.sort();
        }
      }
    }
      return myArr;
    },


    flatten: function(array, cond) {
      if (cond === true) {
        const notFlat = [].concat([], ...array);
        return notFlat;
      }
      const flat = [].concat(...array);
      return flat.some(Array.isArray) ? fi.flatten(flat) : flat;
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


    keys: function(obj) {
      return Object.keys(obj);
    },


    values: function(obj) {
      return Object.values(obj);
    },

    functions:function(object){
      let col =  [];
      for(var key in object){
          if(typeof object[key] == 'function'){
            col.push(key)
          }
      }
      return col.sort();
    },

  
    
    giveMeMore: function(el=false) {
      el=true
     return el;
   },

  }
})();

fi.libraryMethod()
