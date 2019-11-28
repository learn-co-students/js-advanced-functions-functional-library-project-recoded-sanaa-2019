      const fi = (function() {
        return {
          libraryMethod: function() {
            return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
          },

          each: function(array, alert) {
            if (Array.isArray(array)) {
              for (const key in array) {
                if (array.hasOwnProperty(key)) {
                  const element = array[key];
                  alert(element, key, array);
                }
              }
            } else {
              for (const key in array) {
                if (array.hasOwnProperty(key)) {
                  const element = array[key];
                  alert(element, key, array);
                }
              }
            }

            return array;
          },

          map: function(array, callback) {
            let arr = [];
            for (const key in array) {
              if (array.hasOwnProperty(key)) {
                const element = array[key];
                arr.push(callback(element, key, array));
              }
            }
            return arr;
          },

          reduce: function(array, callback, acc) {
            if (acc !== undefined) {
              for (const key in array) {
                if (array.hasOwnProperty(key)) {
                  const element = array[key];
                  acc = callback(acc, element, array);
                }
              }
              return acc;
            }

            if (!acc) {
              acc = array[0];
              for (let i = 1; i <= array.length - 1; i++) {
                acc = callback(acc, array[i], array);
                console.log(acc);
              }
              console.log(acc);
              return acc;
            }
          },

          find: function(array, predicate) {
            for (const item of array) {
              if (predicate(item)) {
                return item;
              }
            }

            return undefined;
          },

          filter: function(array, predicate) {
            const arr = [];

            for (const item of array) {
              if (predicate(item)) {
                arr.push(item);
              }
            }

            return arr;
          },

          size: function(array) {
            if (Array.isArray(array)) {
              let num = array.length;
              return num;
            } else {
              let num2 = 0;
              for (const key in array) {
                num2++;
              }
              return num2;
            }
          },

          first: function(array, n) {
            let arr = [];
            if (n === undefined) {
              return array[0];
            } else if (n !== undefined) {
              console.log(n);

              for (const key in array) {
                if (array.hasOwnProperty(key)) {
                  const element = array[key];
                  if (element <= n) {
                    console.log(element);
                    arr.push(element);
                  }
                }
              }
              console.log(arr);
              return arr;
            }
          },

          last: function(array, n) {
            let arr = [];
            if (n === undefined) {
              for (const key in array) {
                return array[array.length - 1];
              }
            }

            if (n !== undefined) {
              return array.slice(Math.max(array.length - n, 1));
            }
          },

          compact: function(array) {
            let arr = array.filter(element => {
              if (
                element !== false &&
                element !== null &&
                element !== 0 &&
                element !== "" &&
                element !== undefined &&
                element !== "and" &&
                element !== "NaN"
              ) {
                return element;
              }
            });

            console.log(arr);
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

          uniq: function(array, isSorted, callback) {
            let unique = [];
            let unique1 = [];
            let superUnique = [];
            let doubleUnique = [];

            if (callback !== undefined) {
              for (const key in array) {
                if (array.hasOwnProperty(key)) {
                  if (callback(array[key]) !== undefined) {
                    // console.log(callback(array[key]))

                    unique1.push(callback(array[key]));
                  }
                }
              }

              console.log(unique1);
              unique = [...new Set(unique1)];
              superUnique = [...new Set(array)];
              for (let i = 0; i < unique.length; i++) {
                for (let j = 0; j < superUnique.length; j++) {
                  if (i === j) {
                    console.log(unique[i], superUnique[j]);
                    doubleUnique.push(superUnique[j]);
                  }
                }
              }

              return doubleUnique;
            }

            if (callback === undefined) {
              unique = [...new Set(array)];
              return unique;
            }
          },

          keys: function(object) {
            let arr = [];
            for (const key in object) {
              if (object.hasOwnProperty(key)) {
                const element = key;
                console.log(element);
                arr.push(element);
              }
            }

            return arr;
          },

          values: function(object) {
            let arr = [];
            for (const key in object) {
              if (object.hasOwnProperty(key)) {
                const element = object[key];
                console.log(element);
                arr.push(element);
              }
            }

            return arr;
          },
          functions: function(object) {
            let arr = [];
            for (const key in object) {
              if (object.hasOwnProperty(key)) {
                const element = object[key];
                if (typeof element === "function") {
                  console.log(element);
                  arr.push(element);
                }
              }
            }
            return arr.sort();
          },

          giveMeMore: function() {}
        };
      })();

      fi.libraryMethod();
      // fi.each(collection , callback)