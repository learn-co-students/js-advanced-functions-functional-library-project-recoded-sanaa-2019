const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },
    
    each: function(collection,callback) {
      if(Array.isArray(collection)){
        for(let i=0;i<collection.length;i++){
          callback(collection[i],i,collection);
        }
      }
      else{
        let obfArr=Object.keys(collection);
        for(let i=0;i<obfArr.length;i++){
          callback(collection[obfArr[i]],obfArr[i],collection);
        }
        
      }
      return collection;
    },
    
    map: function(collection,callback) {
      
      if(Array.isArray(collection)){
        let arr=[]
        for(let i=0;i<collection.length;i++){
          arr.push(callback(collection[i],i,collection));
        }
        return arr;
      }
      else{
        let arr=[];
        let obfArr=Object.keys(collection);
        for(let i=0;i<obfArr.length;i++){
          arr.push(callback(collection[obfArr[i]],obfArr[i],collection));
          
        }
        return arr;
        
      }
      
    },
    
    reduce: function(collection,callback,acc) {
      
      if(acc==undefined){
        acc=collection[0];
        if(Array.isArray(collection)){
          for(let i=1;i<collection.length;i++){
            acc=(callback(acc,collection[i],collection));
          }
          return acc;
        }
        else{
          let obfArr=Object.keys(collection);
          for(let i=1;i<obfArr.length;i++){
            acc=(callback(acc,collection[obfArr[i]],collection));
            
          }
          return acc;
          
        }
      }
      if(Array.isArray(collection)){
        for(let i=0;i<collection.length;i++){
          acc=(callback(acc,collection[i],collection));
        }
        return acc;
      }
      else{
        let value=0;
        let obfArr=Object.keys(collection);
        for(let i=0;i<obfArr.length;i++){
          acc=(callback(acc,collection[obfArr[i]],collection));
          
        }
        return acc;
        
      }
    },
    find:function(collection,predicate){
      if(Array.isArray(collection)){
        for(let i=0;i<collection.length;i++){
          if((predicate(collection[i]))===true){
            return collection[i];
          }
        }
        return undefined;
      }
      else{
        let obfArr=Object.keys(collection);
        for(let i=0;i<obfArr.length;i++){
          if((predicate(collection[obfArr[i]]))===true){
            return collection[obfArr[i]];
          }
          
        }
        return undefined;
        
      }
    },
    filter: function(collection,predicate){
      if(Array.isArray(collection)){
        let arr=[];
        for(let i=0;i<collection.length;i++){
          if((predicate(collection[i]))===true){
            arr.push(collection[i]);
          }
        }
        return arr;
      }
      else{
        let arr=[];
        let obfArr=Object.keys(collection);
        for(let i=0;i<obfArr.length;i++){
          if((predicate(collection[obfArr[i]]))===true){
            arr.push(collection[obfArr[i]]);
          }
          
          
        }
        return arr;
        
      }
    },
    size:function(collection){
      if(Array.isArray(collection)){
        let size=collection.length;
        
        return size;
      }
      else{
        let size=Object.keys(collection).length;
        return size;
        
      }
    },
    //first
    first:function(collection,n){
      if(n===undefined){
        return collection[0];
      }
      let arr=[];
      if(n<=collection.length){
        let i=0;
        do{
          arr.push(collection[i]);
          i++;
        }while(i<n);
        return arr;
      }
      else if(n>collection.length){
        for(let i=0;i<collection.length;i++){
          arr.push(collection[i]);
        }
        return arr;
      }
      
    },
    //last
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
    //compact
    compact: function(collection){
      let arr=[];
      for(let i=0;i<collection.length;i++){
        if(Boolean(collection[i])){
          arr.push(collection[i])
        }
      }
      return arr;
    },
    sortBy:function(collection,callback){
      let a=[];
      let ar=collection;
      let narr=[];
      let b;
      let c;
      for(let j=0;j<100;j++){ 
        for(let i=0;i<ar.length;i++){
          b=ar[i];
          let d=true;
          for(let ele of ar){
            if(callback(b)>=callback(ele)){
              c=true;
            }
            else{ d=false;}
          }
          if(c==true&&d==true){
            a.push(b);
          }
          else{
            narr.push(b);
          }
        }
        ar=narr; 
        narr=[];
        if(a.length==arr.length){
          break;
        } 
      }
      
      //console.log(ar)
      return a.reverse();
      //console.log(narr)
    },
    flatten: function(collection,a){
      let arr=[]
      function flat(e){
        for(let ele of e){
          if(Array.isArray(ele)){
            flat1(ele)
          }
          else{arr.push(ele)}
        }
      }
      function flat1(e){
        for(let ele of e){
          if(Array.isArray(ele)){
            flat(ele)
          }
          else{arr.push(ele)}
        }
      }
      if(a==true){
        for(let ele of collection){
          if(Array.isArray(ele)){
            for(let e of ele){
              arr.push(e)
            }
          }
          else arr.push(ele);
        }
        return arr;
      }
      else {
        for(let ele of collection){
          if(Array.isArray(ele)){
            flat(ele);
          }
          else arr.push(ele);
        }
        return arr;
      }
    },
    uniq:function(array,isSorted=true,callback){
    if(isSorted===true){
      let arr=[];
      for(let i=0;i<array.length;i++){
        let a=true;
        for(let j=0;j<array.length;j++){
          if(array[i]===array[j]&&i===j){
            break;
          }
          if(array[i]===array[j]&&i!=j){
            a=false;
            break;
          }
        }
        if(a){
          arr.push(array[i]);
        }
      }
      return arr;
    }
    if(isSorted===false){
      let arr=[];
      for(let i=0;i<array.length;i++){
        let a=true;
        for(let j=0;j<array.length;j++){
          if(callback(array[i])===callback(array[j])&&i===j){
            break;
          }
          if(callback(array[i])===callback(array[j])&&i!=j){
            a=false;
            break;
          }
        }
        if(a){
          arr.push(array[i]);
        }
      }
      return arr;
    }
    },
    keys: function(collection){
      arr=[];
      for(let e in collection){
        arr.push(e);
      }
      return arr;
    },
    values: function(collection){
      arr=[];
      for(let e in collection){
        arr.push(collection[e]);
      }
      return arr;
    },
    functions: function(obj) {
      let arr=[];
      for(let e in obj){
          if(typeof(obj[e])=="function"){
            arr.push(e)
          }
      }
      return this.sortBy(arr,v=>v);
      
      
    },
    giveMeMore:()=>true
    
    
  }
})()

fi.libraryMethod()

let obj={
  name:"Mohoammed",
  Age:25,
  Height:"168cm",
  City:"Sana'a"
}
let obj1={one: 1, two: 2, three: 3, four: 4};
function alr(value,key,collection){
  alert(value);
}
//console.log(fi.each(obj,alr))
function transform(value,key,collection){
  console.log(value*3);
  return value*3;
}
//console.log(fi.map(arr,transform))
//let fun=(acc, val, collection) => (acc * (val * 3));
//console.log(arr.reduce((acc,val)=>(acc * (val * 3))))
//console.log(fi.reduce(arr,fun));
//find
//console.log(arr.filter(search));
function search(num){
  return num>3;
}
//console.log(fi.find(arr,search))
//console.log(fi.filter(obj1,search))
//console.log(fi.size(obj1));
//console.log(fi.first(arr,5));
//console.log(fi.last(arr))
//console.log(fi.compact([1,2,3,4,"s"]))
let arr=[1,2,5,3,7,5,9,3,4];
/* function bigger(arr){
  console.log("object")
  let a=[];
  let b;
  let c;
  
  for(let i=0;i<arr.length;i++){
    b=arr[i];
    let d=true;
    for(let ele of arr){
      if(b>=ele){
        c=true;
      }
      else{ d=false;}
    }
    if(c==true&&d==true){
      a.push(b);
    }
  }
  console.log(a)
} */
//bigger(arr);

//console.log(arr)
console.log(fi.sortBy(arr,v=>v))
let strin = ["maru", "choux", "doge", "coconut"];
//
console.log((fi.sortBy(strin,v=>v)))
console.log(fi.sortBy(arr,v=>Math.sin(v)))
//console.log(fi.flatten([1, [2, 3], [[4, 5], 6, [7, [8, 9,[4,3]]]]],false))
//console.log(fi.uniq([1,2,1,4,1,3,3,3,3,6]))
//const objA = {a: 1, b: 2}
//const objB = objA
//const objC = {c: 3, d: 4}
//console.log(fi.uniq([objA,objB,objC]));
//console.log(fi.uniq([1, 2, 2, 3, 4, 6, 9], false, (x => x % 3)))
//console.log(fi.keys({one: 1, two: 2, three: 3}))
//console.log(fi.values({one: 1, two: 2, three: 3}))
let objt={
  z:function(){

  },
  y:9,
  a:function(){

  },
  b:4,
  c:function(){

  }
}

console.log(fi.functions(objt));