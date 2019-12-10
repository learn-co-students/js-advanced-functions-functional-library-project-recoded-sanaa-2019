const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback){
      for(index in collection){
        callback( collection[index], index, collection)
      } 
    },

    map: function() {
      let myArr=[]
      for(index in collection){
        let element = collection[index]
        myArr.push(callback(element, index, collection))}
    },

    reduce: function() {
   
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
