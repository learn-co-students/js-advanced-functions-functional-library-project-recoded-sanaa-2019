const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback){
      for(let i=0;i<collection.length;i++){
        callback( collection[i], i, collection)
      } 
    },

    map:  function(collection,callback) {
      let myArr=[]
      for(index in collection){
        let element = collection[index]
        myArr.push(callback(element, index, collection))}
    },

    reduce:function(collection, callback, acc) {
   
      if(acc != null){
         return  collection.reduce(callback,acc);
      }else{
         return collection.reduce(callback);
      }
    
    },
    size: function(collection){
      let myarr = [];
      for(let i=0;i< myArr.length;i++){
        myarr.push(collection[i])
      }
      return myarr.length;
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
