const fi = (function() {
  return {
    libraryMethod: function() {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function(collection, callback) {
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

    map: function(collection, callback) {
      if (Array.isArray(collection)) {
        let newCollection = [];
        for (let index = 0; index < collection.length; index++) {
          newCollection.push(callback(collection[index], index, collection));
        }
        return newCollection;
      }
      if (!Array.isArray(collection)) {
        let newCollection = [];
        const keysOfObject = Object.keys(collection);
        for (const key of keysOfObject) {
          newCollection.push(callback(collection[key], key, collection));
        }
        return newCollection;
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
    size: function(collection) {
      if (Array.isArray(collection)) return collection.length;
      if (!Array.isArray(collection)) return Object.keys(collection).length;
    },
    first: function(collection, n) {
      if (Array.isArray(collection)) {
        if (typeof n === "undefined") {
          return collection[0];
        }
        const newArry = [];
        for (let index = 0; index < n; index++) {
          newArry.push(collection[index]);
        }
        return newArry;
      }
    },
    last: function(collection, n) {
      if (Array.isArray(collection)) {
        if (typeof n === "undefined") {
          return collection[collection.length - 1];
        }
        const newArry = [];
        console.log();
        for (
          let index = collection.length - n;
          index < collection.length;
          index++
        ) {
          newArry.push(collection[index]);
        }
        return newArry;
      }
    },
    compact: function(collection) {
      if (Array.isArray(collection)) {
        const newArry = fi.filter(collection, function(value) {
          if (value) return value;
        });
        return newArry;
      }
    },
    sortBy: function(collection, callback) {
      if (true) {
        if (typeof callback === "undefined") {
          const newArry = [...collection];
          newArry.sort((a, b) => {
            if (typeof b === "number" || typeof a == "number") {
              return a - b;
            }
            if (typeof a === "string" || typeof b === "string") {
              if (
                a.charAt(0).toLocaleLowerCase() >
                b.charAt(0).toLocaleLowerCase()
              ) {
                return 1;
              } else {
                return -1;
              }
            }
          });
          return newArry;
        }
        const newArry = [...collection];
        newArry.sort((a, b) => {
          if (typeof b === "number" || typeof a == "number") {
            return callback(a) - callback(b);
          } else {
            if (
              callback(a)
                .charAt(0)
                .toLocaleLowerCase() >
              callback(b)
                .charAt(0)
                .toLocaleLowerCase()
            ) {
              return 1;
            } else {
              return -1;
            }
          }
        });
        return newArry;
      }
    },
    flatten: function(collection, shallow) {
      if (Array.isArray(collection)) {
        if (typeof shallow === "undefined") {
          function flattenedAll(arr) {
            return arr.reduce(
              (acc, val) =>
                Array.isArray(val)
                  ? acc.concat(flattenedAll(val))
                  : acc.concat(val),
              []
            );
          }
          const flattened = flattenedAll(collection);
          return flattened;
        }
        if (shallow) {
          const res = collection.reduce((acc, val) => acc.concat(val), []);
          return res;
        }
      }
    },
    uniq: function(collection, isSorted, callback) {
      if (Array.isArray(collection)) {
        let uniqArr = [];
        if (typeof callback === "undefined") {
          uniqArr = collection.filter(
            (currValue, index, collection) =>
              !collection.includes(currValue, index + 1)
          );
        } else {
          const mapedArr = fi.map(collection, callback);
          const uniq = fi.uniq(mapedArr);
          const indexs = uniq.map(value => mapedArr.indexOf(value));
          for (let index = 0; index < indexs.length; index++) {
            uniqArr.push(collection[indexs[index]]);
          }
        }
        if (isSorted) return uniqArr;
        else return fi.sortBy(uniqArr);
      }
    },
    keys: function(object) {
      const keysArr = [];
      for (const key in object) {
        keysArr.push(key);
      }
      return keysArr;
    },

    values: function(object) {
      const keysArr = [];
      for (const key in object) {
        keysArr.push(object[key]);
      }
      return keysArr;
    },
    giveMeMore: function() {
      return true;
    },

    functions: function(obj) {
      let functions = [];
      for (const key in obj) {
        if (typeof obj[key] === "function") {
          functions.push(key);
        }
      }
      functions = fi.sortBy(functions);
      return functions;
    }
  };
})();
fi.libraryMethod();
console.log(fi.uniq([1, 2, 2, 3, 4, 6, 9], false, val => val % 3));
