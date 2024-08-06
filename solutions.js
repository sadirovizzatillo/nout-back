// var debounce = function(fn, t) {
//     let result;
//     return function(...args) {
//         if(result){
//             clearTimeout(result);
//         }
//         result = setTimeout(() => {
//             fn(...args)
//         }, t)
//     }
// };

// const log = debounce(console.log, 100);
// log('Hello'); // cancelled
// log('pello'); // cancelled
// log('sello'); // Logged at t=100ms




// function join(arr1, arr2) {
//     let arr = [];
//     let ids = [];
//     arr1.forEach((item) => {
//         arr.push(item);
//         ids.push(item.id)
//     });

//     arr2.forEach((arr2Item) => {
//         arr.forEach((defaultItem, index) => {
//             if(defaultItem.id === arr2Item.id){
//                 const arr1L = [];
//                 const arr2L = [];
//                 for(let key in defaultItem){
//                     arr1L.push(key)
//                 }

//                 for(let key in arr2Item){
//                     arr2L.push(key)
//                 }

//                 // console.log(arr1L.length, arr2L.length);
//                 if(arr2L.length >= arr1L.length){
//                     // console.log(arr);
//                     arr[index] = { ...arr[index], ...arr2Item };
//                     ids.push(arr2Item.id)
//                     // console.log(arr);
//                 }
//             }else{
//                 if(![...ids].includes(arr2Item.id)){
//                     arr.push(arr2Item)
//                 }
//                 console.log('asfasf', arr);
//             }
//         })
//     });

//     return arr
// };

// join([{ id: 1, x: 2,y: 3 }, { id: 2,x: 3,y: 6 }], [{ id: 2, x: 10, y: 20 }, { id: 3,x: 0,y: 0 }])



// function join(arr1, arr2) {
//     let arr = [];
//     let ids = [];

//     arr1.forEach((item) => {
//         arr.push(item);
//         ids.push(item.id);
//     });

//     arr2.forEach((arr2Item) => {
//         const index = ids.indexOf(arr2Item.id);

//         if (index !== -1) {
//             // If the item with the same id exists in arr1, replace it
//             arr[index] = { ...arr[index], ...arr2Item };
//         } else {
//             // If the item does not exist in arr1, add it
//             arr.push(arr2Item);
//             ids.push(arr2Item.id);
//         }
//     });

//     return arr;
// }

// const result = join(
//     [{ id: 1, x: 2, y: 3 }, { id: 2, x: 3, y: 6 }],
//     [{ id: 2, x: 10, y: 20 }, { id: 3, x: 0, y: 0 }]
// );

// console.log(result);




// var TimeLimitedCache = function() {
//     this.all = {}
// };

// TimeLimitedCache.prototype.set = function(key, value, duration) {
//     let found = !!this.all[key];
//     if (found) clearTimeout(this.all[key].ref);  // Cancel previous timeout
//     this.all[key] = {
//         value: value,  
//         ref: setTimeout(() => delete this.all[key], duration)
//     }
//     return found;
// };

// TimeLimitedCache.prototype.get = function(key) {
//     return this.all[key]?.value ?? -1
// };

// TimeLimitedCache.prototype.count = function() {
//     let num = 0;
//     for(let i in this.all){
//         num++
//     }
//     return num
// };


// const timeLimitedCache = new TimeLimitedCache();
// timeLimitedCache.set(1, 42, 1000);
// timeLimitedCache.set(1, 50, 1000);
// timeLimitedCache.get(1);
// timeLimitedCache.count();











// var promiseAll = async function(functions) {
//     let results = [];
//     for(let el of functions){
//         try{
//             const data = await el();
//             console.log(data);
//             results.push(data)
//         }catch(error){
//             throw new Error(error)
//         }
//     }
//     return results
// };

// const promise = promiseAll([
//     () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
//     () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
//     () => new Promise(resolve => setTimeout(() => resolve(16), 100))
// ]);

// promise.then((data) => {
//     console.log(data);
// })
// console.log(promise);

// var compactObject = function(obj) {
//     if (typeof obj === 'object') {
//         if (Array.isArray(obj)) {
//             const tempArray = [];
//             for (let index = 0; index < obj.length; index++) {
//                 if (Boolean(obj[index])) {
//                     tempArray.push(compactObject(obj[index]));
//                 }
//             }
//             return tempArray;
//         } else {
//             const tempObject = {};
//             for (const key in obj) {
//                 if (Boolean(obj[key])) {
//                     tempObject[key] = compactObject(obj[key]);
//                 }
//             }
//             return tempObject;
//         }
//     }
//     return obj;
// };


// compactObject({"r":{"p":82,"i":8,"l":39},"k":34,"d":{"s":31,"m":46,"b":74,"t":45,"a":{"u":9,"c":94,"q":{"m":true,"j":88,"w":true,"z":58},"b":15,"k":true,"e":84},"c":{"0":95,"1":{"0":19,"1":{"0":{"g":2,"s":{"0":65,"1":29,"2":3,"3":true,"5":{"2":30,"3":29,"4":true,"5":66,"6":91,"8":93},"6":{"3":43,"5":43,"6":true,"7":53,"8":50,"9":38},"8":4},"w":52,"o":8},"1":3,"2":59,"5":true,"6":74,"7":{"u":31,"y":50,"o":44,"z":true,"i":{"m":84,"t":36,"p":76,"y":34,"d":69,"q":52,"f":true},"f":{"y":{"r":40,"z":{"0":93,"1":91,"3":8,"4":88,"5":52,"6":{"0":1,"1":27,"2":99,"4":20,"5":26,"6":24,"7":{"1":68,"2":40,"3":93,"4":76,"7":0},"8":25,"9":80},"7":{"0":{"r":36,"z":13,"s":true,"o":58,"l":15},"1":{"0":true,"1":74,"3":23,"4":true,"5":71,"6":82,"7":true,"8":79,"9":98},"2":62,"4":27,"5":30,"6":{"1":8,"2":11,"3":89,"4":39,"5":true,"6":16,"7":88,"8":15,"9":91},"8":54,"9":26},"8":{"m":72,"c":40,"u":{"0":91,"1":98,"2":71,"6":5,"9":19},"a":15,"i":39,"k":true,"x":41},"9":79},"a":{"0":15,"1":52,"2":{"1":{"1":12,"3":99,"5":2,"6":41,"7":true,"9":48},"2":{"0":50,"3":39,"6":72,"8":42,"9":95},"3":23,"4":17,"6":93,"7":30,"9":4},"3":57,"4":18,"5":69,"9":49},"n":7,"d":{"w":{"0":{"1":true,"2":44,"4":16,"5":76,"6":77,"7":70,"8":24},"1":{"0":31,"2":6,"3":32,"5":45,"6":28,"7":67,"9":true},"2":true,"3":28,"4":61,"6":{"0":93,"1":23,"3":20,"4":74,"6":10,"7":13,"9":82},"8":31,"9":81},"y":59,"s":36,"o":95,"n":46}},"m":82,"b":48,"j":75}},"8":70,"9":82},"3":11,"5":true,"7":{"0":12,"2":27,"3":40,"5":42,"6":15,"7":20,"8":true,"9":{"1":true,"2":10,"3":true,"4":28,"5":37,"6":92}},"8":75,"9":8},"5":46,"6":{"0":3,"3":64,"6":92,"7":9,"8":53},"7":77,"8":43},"h":true},"o":2,"y":{"g":{"x":99,"d":{"2":94,"3":84,"4":28,"6":2,"7":66},"s":15,"y":true,"l":80,"u":33},"n":31,"u":99,"i":50,"e":12},"l":[18,58,[71,64,62,[35,true,88,99,38],{"e":0,"i":54,"d":9,"z":48,"u":44,"o":"","j":16,"l":65,"n":86,"b":0}],[true,true,85,52,{"i":true,"x":58,"d":false,"s":35,"o":20,"f":73,"j":97,"b":99,"l":85},56,[true,98,40,38,10,true],98],63,21,54,true]})




// const arrs = [[64, null, 0], [[8, 22, false], 5], [[23, null], [null, 11], [9]]];







// GROUP BY LEETCODE

// Array.prototype.groupBy = function(fn) {
//     let object = {};
//     const array = this;

//     array.forEach((item, index) => {

//         if(fn(array[index]) in object){
//             object[fn(array[index])].push(item);
//         }else{
//             object[fn(array[index])] = [ item ]
//         }
//     })
//     return object
// };


// [ { id: '1' }, { id: '1' }, { id: '2' } ].groupBy(function (item) { 
//     return item.id; 
// })




// var flat = function (arr, n) {
//     const result = [];

//     const recursive = (array, depth) => {
//         array.forEach((item) => {
//             if (Array.isArray(item) && depth > 0) {
//                 recursive(item, depth - 1);
//             } else {
//                 result.push(item);
//             }
//         });
//     };

//     recursive(arr, n);
//     return result;
// };

// const flattenedArray = flat([1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]], 2);
// console.log(flattenedArray);





// var strStr = function(haystack, needle) {
//     const firstString = haystack.split('');
//     const secondString = needle.split('');
//     const results = [];
//     const indexes = [];
//     let realResult = [];

//     for (let i = 0; i < firstString.length; i++){
//         if(firstString[i] === secondString[0]){
//             indexes.push(i);
//         }
//     }
//     indexes.forEach((item) => {
//         const ok = haystack.split('').splice(item, secondString.length);
//         results.push({ key: ok.join(''), index: item });
//     })



//     results.forEach((item) => {
//         if(item.key === needle){
//             realResult.push(item.index);
//             return
//         }
//     });


//     realResult.sort((a, b) => a - b);

//     return realResult.length ? realResult[0] : -1
// };




// SENIOR SOLUITON

// var strStr = function(haystack, needle) {
//     const hayLength = haystack.length;
//     const needleLength = needle.length;

//     if (needleLength === 0) return 0;

//     for (let i = 0; i <= hayLength - needleLength; i++) {
//         // console.log(i);
//         // console.log(haystack.substr(i, needleLength) === needle);
//       if (haystack.substr(i, needleLength) === needle) {
//         return i;
//       }
//     }

//     return -1;
//   };

// strStr("sadbutsad", "sad")




// MY PERFECT SOLUTION

// var missingNumber = function(nums) {
//     const sortedArr = nums.sort((a, b) => a - b);
//     const newFullArr = [];
//     let resultNum = [];
//     // console.log(sortedArr[sortedArr.length - 1]);
//     for(let i = sortedArr[0]; i <= sortedArr[sortedArr.length - 1]; i++){
//         newFullArr.push(i);
//     }

//     for(let i = 0; i < newFullArr.length; i++){
//         if(!sortedArr.includes(newFullArr[i])){
//             resultNum.push(newFullArr[i])
//         }
//     }

//     const checkEqual = JSON.stringify(newFullArr) === JSON.stringify(sortedArr);
//     return checkEqual ? (newFullArr.includes(0) ? (newFullArr[newFullArr.length - 1] + 1) : 0) : resultNum;
// };

// missingNumber([59,56,54,52,53,55,57,50,51])



// ONLY 0...9 SOLUTION

// var missingNumber = function (nums) {
//     const n = nums.length;
//     const expectedSum = (n * (n + 1)) / 2;
//     let actualSum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         actualSum = actualSum + nums[i]
//         console.log(actualSum);
//     }
//     return expectedSum-actualSum
//   };


// missingNumber([9,6,4,2,3,5,7,0,1])





// 303. Range Sum Query - Immutable


// var NumArray = function(nums) {
//     this.nums = nums;
// };

// NumArray.prototype.sumRange = function(left, right) {
//     const arr = [];
//     for(let i = left; i <= right; i++){
//         arr.push(this.nums[i])
//     }

//     return arr.reduce((acc, currVal) => acc + currVal, 0);
// };


// var obj = new NumArray([-4,-5])
// obj.sumRange(0, 1)





// var findReplaceString = function(s, indices, sources, targets) {
//     let string = s.split("");
//     let arr = [];  
//     const mappings = [];  

//     for (let i = 0; i < indices.length; i++) {
//         mappings.push({ index: indices[i], source: sources[i], target: targets[i] });
//     }

//     mappings.sort((a, b) => a.index - b.index);

//     for(let i = 0; i < indices.length; i++){
//         const { index, source, target } = mappings[i];
//         if(string[index] === source[0]){
//             const length = source.length;
//             const arrString = s.split("");            
//             if(arr.length){
//                 arr.splice(source?.length !== 1 ? (index - (length - 1)) : index, length, target);
//             }else{
//                 arrString.splice(index, length, target);
//                 arr = arrString
//             }
//         }
//     }

//     return arr.join("");
// };


// var findReplaceString = function(s, indices, sources, targets) {
//     let string = s.split("");

//     let mappings = [];

//     for (let i = 0; i < indices.length; i++) {
//         mappings.push({ index: indices[i], source: sources[i], target: targets[i] });
//     }

//     mappings.sort((a, b) => b.index - a.index);

//     for (let i = 0; i < mappings.length; i++) {
//         const { index, source, target } = mappings[i];

//         if (s.slice(index, index + source.length) === source) {
//             string.splice(index, source.length, target);
//         }
//     }

//     return string.join("");
// };


// findReplaceString("vmokgggqzp", [3, 5, 1], ["kg", "ggq", "mo"], ["s", "so", "bfr"])




// var minDeletionSize = function(strs) {
//     let newArr = [];
//     const chunkSize = strs.length;
//     const chunkedArr = [];
//     for(let i = 0; i < strs.length; i++){
//         for(let j = 0; j < strs[i].length; j++){
//             if(strs[j]){
//                 console.log('ok');
//                 newArr.push(strs[j][i]);
//             }else{
//                 console.log('bok');
//                 console.log(strs[j]);
//             }
//         }
//     };

//     console.log(newArr);

//     for (let i = 0; i < newArr.length; i += chunkSize) {
//         const chunk = newArr.slice(i, i + chunkSize);
//         chunkedArr.push(chunk.join(""));
//     };
//     const resultArr = chunkedArr.filter((item) => item !== item.split("").sort().join(""));

//     return resultArr.length
// };

// minDeletionSize(["rrjk","furt","guzm"]);




// var minDeletionSize = function(strs) {
//     let newArr = [];
//     const col = strs[0].length;
//     const chunkSize = strs.length;
//     const chunkedArr = [];

//     for (let i = 0; i < col; i++) {
//         for (let j = 0; j < strs.length; j++) {
//             newArr.push(strs[j][i]);
//         }
//     }

//     for (let i = 0; i < newArr.length; i += chunkSize) {
//         const chunk = newArr.slice(i, i + chunkSize);
//         chunkedArr.push(chunk.join(""));
//     }


//     const resultArr = chunkedArr.filter((item) => item !== item.split("").sort().join(""));

//     return resultArr.length;
// };

// minDeletionSize(["rrjk", "furt", "guzm"]);





// var mostCommonWord = function(paragraph, banned) {
//     if (banned.length === 0) {
//         const pureString = paragraph.replace(/\W+/g, '').toLowerCase();
//         return pureString;
//     }

//     const allArr = createArrayWithSpaces(paragraph);

//     if (!hasEmptySpace(paragraph)) {
//         const pureString = paragraph.replace(/\W+/g, '').toLowerCase();
//         return pureString;
//     }

//     const ok = createNewArray(allArr, banned);

//     const hasDouble = ok.filter((item) => (item.name === 'double' && !banned.includes(item?.value) && item.value !== ''));

//     if (hasDouble.length) {
//         const filtered = ok.filter((item) => (item.name === 'double' && !banned.includes(item?.value) && item.value !== ''));

//         filtered.sort((a, b) => b.count - a.count);

//         return filtered[0]?.value;
//     } else {
//         const filtered = ok.filter((item) => (item.name === 'single' && !banned.includes(item?.value) && item.value !== ''));

//         filtered.sort((a, b) => b.count - a.count);

//         return filtered[0]?.value;
//     }
// };

// const hasEmptySpace = (str) => {
//     return /\s/.test(str);
// }

// const createArrayWithSpaces = (input) => {
//     const regex = /\b\w+\b|\w/g; // Include whole words and single characters
//     const normalizedString = input.replace(regex, (match) => match + ' ');
//     const resultArray = normalizedString.split(/\s+/).filter(Boolean);
//     return resultArray.filter(Boolean);
// };

// const createNewArray = (arr, banned) => {
//     const newArr = [];
//     const obj = {};
//     arr.forEach((item) => {
//         const pureString = item.replace(/\W+/g, '').toLowerCase();

//         if (obj[pureString]) {
//             obj[pureString].count++;
//         } else {
//             obj[pureString] = { value: pureString, name: 'single', count: 1 };
//         }
//     });

//     for (const key in obj) {
//         newArr.push(obj[key]);
//     }

//     return newArr;
// };

// mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]);
// mostCommonWord("a, a, a, a, b,b,b,c, c", ["a"]);
// mostCommonWord("Bob. hIt, baLl", ["bob", "hit"]);
// mostCommonWord("abc abc? abcd the jeff!", ["abc","abcd","jeff"]);



// console.log(["bob", "hit"].sort());





// var uniqueMorseRepresentations = function(words) {
//     const all = [
//         { name: 'a', sign: ".-" },
//         { name: 'b', sign: "-..." },
//         { name: 'c', sign: "-.-." },
//         { name: 'd', sign: "-.." },
//         { name: 'e', sign: "." },
//         { name: 'f', sign: "..-." },
//         { name: 'g', sign: "--." },
//         { name: 'h', sign: "...." },
//         { name: 'i', sign: ".." },
//         { name: 'j', sign: ".---" },
//         { name: 'k', sign: "-.-" },
//         { name: 'l', sign: ".-.." },
//         { name: 'm', sign: "--" },
//         { name: 'n', sign: "-." },
//         { name: 'o', sign: "---" },
//         { name: 'p', sign: ".--." },
//         { name: 'q', sign: "--.-" },
//         { name: 'r', sign: ".-." },
//         { name: 's', sign: "..." },
//         { name: 't', sign: "-" },
//         { name: 'u', sign: "..-" },
//         { name: 'v', sign: "...-" },
//         { name: 'w', sign: ".--" },
//         { name: 'x', sign: "-..-" },
//         { name: 'y', sign: "-.--" },
//         { name: 'z', sign: "--.." }
//     ];

//     const signArray = [];

//     for(let i = 0; i < words.length; i++){
//         signArray[i] = '';
//         for(let j = 0; j < words[i].length; j++){
//             const item = all.find((item) => item?.name === words[i][j]);
//             signArray[i] += item?.sign
//         }
//     }

//     return [...new Set(signArray)].length
// };


// uniqueMorseRepresentations(["gin","zen","gig","msg"]);







// var truncateSentence = function(s, k) {
//     const sArray = s.split(" ");

//     if(sArray.length < k){
//         return sArray.join(" ")
//     }

//     const newArr = sArray.splice(0, k);

//     return newArr.join(" ")
// };


// truncateSentence("Hello how are you Contestant", 4)






// var restoreString = function(s, indices) {
//     const allArr = [];
//     let result = '';
//     for(let i = 0; i < s.length; i++){
//         allArr.push({
//             name: s[i],
//             value: indices[i]
//         })
//     }

//     allArr.sort((a, b) => a.value - b.value);

//     allArr.forEach((item) => {
//         result += item.name
//     })

//     return result
// };



// var restoreString = function(s, indices) {
//     const string = [];
//     for(let i = 0; i < indices.length; i++){
//         string[indices[i]] = s[i]
//     }
//     return string.join('')
// };



// restoreString('codeleet', [4,5,6,7,0,2,1,3])





// var mostWordsFound = function(sentences) {
//     let result = 0;
//     for(let i = 0; i < sentences.length; i++){
//         const arrLength = sentences[i].split(" ").length;
//         if(result < arrLength){
//             result = arrLength
//         }
//     }

//     return result
// }


// mostWordsFound(["alice and bob love leetcode","i think so too","this is great thanks very much"])






// var countConsistentStrings = function(allowed, words) {
//     let result = 0;
//     const allArr = allowed.split("");
//     for(let i = 0; i < words.length; i++){
//         const splittedWord = words[i].split("");
//         if(splittedWord.every((item) => allArr.includes(item))){
//             result += 1
//         }
//     }
//     return result
// };



// // console.log(['a', 'b'].some((item) => item === ['a', 'b']));

// countConsistentStrings('cad', ["cc","acd","b","ba","bac","bad","ac","d"])




// var sortPeople = function(names, heights) {
//     const resultArr = names.map((item, index) => {
//         return {
//             name: item,
//             height: heights[index]
//         }
//     }).sort((a, b) => b.height - a.height);


//     const sortedArr = resultArr.map((item) => {
//         return  item.name
//     });

//     return sortedArr;
// };


// sortPeople(["Mary","John","Emma"], [180,165,170])





// class EventEmitter {
//     constructor(){
//         this.callbacks = [];
//         this.id = 1;
//     }
//     subscribe(eventName, callback) {
//         this.callbacks.push({
//             id: this.id++,
//             name: eventName,
//             callbackFun: callback 
//         });
//         return {
//             unsubscribe: () => {
//                 const index = this.callbacks.findIndex((callbacks) => callbacks.callback !== callback);
//                 this.callbacks.splice(index, 1)

//                 return undefined
//             }
//         };
//     }

//     emit(eventName, args = []) {
//         const result = [];

//         const resultArr = this.callbacks.filter((item) => item.name === eventName);
//         resultArr.forEach((item) => {
//             result.push(item.callbackFun(...args));
//         });
//         return result
//     }
// }


// const emitter = new EventEmitter();
// const sub1 = emitter.subscribe("firstEvent", x => x + 1);
// const sub2 = emitter.subscribe("firstEvent", x => x + 2);
// const sub3 = emitter.subscribe("firstEvent", x => x + 3);
// sub1.unsubscribe(); // undefined
// sub2.unsubscribe(); // undefined
// // sub1.unsubscribe(); // undefined
// emitter.emit("firstEvent", [5]); // [7]

// const emitter = new EventEmitter();

// emitter.emit("firstEvent"); // [], no callback are subscribed yet
// emitter.subscribe("firstEvent", function cb1() { return 5; });
// emitter.subscribe("firstEvent", function cb2() { return 6; });
// emitter.emit("firstEvent"); // [5, 6], returns the output of cb1 and cb2


// const emitter = new EventEmitter();
// emitter.subscribe("firstEvent", function cb1(...args) { return args.join(','); });
// emitter.emit("firstEvent", [1, 2, 3]); // ["1,2,3"]
// emitter.emit("firstEvent", [3, 4, 6]); // ["3,4,6"]



// const emitter = new EventEmitter();
// const sub = emitter.subscribe("firstEvent", (...args) => args.join(','));
// emitter.emit("firstEvent", [1, 2, 3]); // ["1,2,3"]
// sub.unsubscribe(); // undefined
// emitter.emit("firstEvent", [4, 5, 6]); // [], there are no subscriptions




// var numUniqueEmails = function(emails) {
//     for(let i = 0; i < emails.length; i++){
//         const ing = emails[i].split("");
//         if(ing.includes("+")){
//             console.log(emails[i]);
//         }
//     }
// };


// numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"])




// var finalValueAfterOperations = function(operations) {
//     let result = 0;

//     operations.forEach((item) => {
//         let realOperation = item.split("").filter(oper => oper !== 'X').join("");
//         if(realOperation[0] === '-'){
//             result = result - 1;
//         }else{
//             result = result + 1;
//         }
//     });

//     return result
// };  



// finalValueAfterOperations(["X++","++X","--X","X--"])





// var countWords = function(words1, words2) {
//     const arr = [];
//     const obj = {};
//     const resArr = [];
//     for(let i = 0; i < words1.length; i++){
//         const wordIndex = arr.findIndex((item) => (item.name === words1[i] && item.group === 'firstWord'));
//         if(wordIndex !== -1){
//             arr[wordIndex].count += 1
//         }else{
//             arr.push({
//                 group: 'firstWord',
//                 count: 1,
//                 name: words1[i]
//             });
//         }
//     }

//     for(let i = 0; i < words2.length; i++){
//         const wordIndex = arr.findIndex((item) => (item.name === words2[i] && item.group === 'secondWord'));
//         if(wordIndex !== -1){
//             arr[wordIndex].count += 1
//         }else{
//             arr.push({
//                 group: 'secondWord',
//                 count: 1,
//                 name: words2[i]
//             });
//         }
//     }

//     const firstFilteredArr = arr.filter((item) => item.count === 1);


//     for(let i = 0; i < firstFilteredArr.length; i++){
//         if(obj[firstFilteredArr[i].name]){
//             resArr.push(firstFilteredArr[i].name);
//         }else{
//             obj[firstFilteredArr[i].name] = firstFilteredArr[i].name
//         }
//     }

//     return resArr.length
// };

// countWords(["a","ab"], ["a","a","a","ab"]);




// var replaceWords = function(dictionary, sentence) {
//     let sentenceArr = sentence.split(" ");
//     for(let i = 0; i < dictionary.length; i++){
//         const lengthOfDictionary = dictionary[i].length;
//         for(let j = 0; j < sentenceArr.length; j++){
//             const suggestWord = sentenceArr[j].split("").splice(0, lengthOfDictionary).join("");
//             if(suggestWord === dictionary[i]){
//                 sentenceArr.splice(j, 1, dictionary[i]);
//             }
//         }
//     }

//     return sentenceArr.join(" ");
// };

// replaceWords(["a", "aa", "aaa", "aaaa"], "a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa")




// var isPrefixString = function(s, words) {
//     const legnths = s.split("");
//     let result = [];
//     for(let i = 0; i < words.length; i++){
//         const islength = words[i].length;
//         if(legnths.length !== 0 && legnths.slice(0, islength).join("") === words[i] && words[i].length === legnths.slice(0, islength).join("").length){
//             legnths.splice(0, islength);
//             result.push(true);
//         }else if(legnths.length === 0){
//             result.push(true);
//         }else{
//             result.push(false);
//         }
//     }
//     return !result.includes(false);
// };

// isPrefixString("iloveleetcode", ["i","love","leetcode"]);




// var countSeniors = function(details) {
//     const arr = [];
//     for(let i = 0; i < details.length; i++){
//         const age = details[i].split("").splice(11, 2).join("");
//         if(age > '60'){
//             arr.push(age);
//         }
//     }
//     return arr.length
// };


// countSeniors(["7868190130M7522","5303914400F9211","9273338290F4010"]);





// var findWords = function(words) {
//     const result = new Set([]);
//     // const arr = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
//     const firstRow = "qwertyuiop".split("");
//     const secondRow = "asdfghjkl".split("");
//     const thirdRow = "zxcvbnm".split("");
//     const ok = [];
//     for(let i = 0; i < words.length; i++){
//         ok.push({
//             name: firstRow.join(""),
//             subname: words[i],
//             include: []
//         })
//         for(let j = 0; j < words[i].toLowerCase().length; j++){
//             const fin = ok.find((item) => (item.subname === words[i] && item.name === firstRow.join("")));
//             if(firstRow.includes(words[i][j].toLowerCase())){
//                 fin.include.push(true);
//             }else{
//                 fin.include.push(false);
//             }
//         }
//     }

//     for(let i = 0; i < words.length; i++){
//         ok.push({
//             name: secondRow.join(""),
//             subname: words[i],
//             include: []
//         })
//         for(let j = 0; j < words[i].toLowerCase().length; j++){
//             const fin = ok.find((item) => (item.subname === words[i] && item.name === secondRow.join("")));
//             if(secondRow.includes(words[i][j].toLowerCase())){
//                 fin.include.push(true);
//             }else{
//                 fin.include.push(false);
//             }
//         }
//     }

//     for(let i = 0; i < words.length; i++){
//         ok.push({
//             name: thirdRow.join(""),
//             subname: words[i],
//             include: []
//         })
//         for(let j = 0; j < words[i].toLowerCase().length; j++){
//             const fin = ok.find((item) => (item.subname === words[i] && item.name === thirdRow.join("")));
//             if(thirdRow.includes(words[i][j].toLowerCase())){
//                 fin.include.push(true);
//             }else{
//                 fin.include.push(false);
//             }
//         }
//     }

//     const good = ok.filter((item) => !item.include.includes(false));

//     good.forEach((item) => {
//         result.add(item.subname)
//     });

//     return [...result]
// };

// findWords(["Hello","Alaska","Dad","Peace"]);



// var splitWordsBySeparator = function(words, separator) {
//     const resultArr = [];
//     for(let i = 0; i < words.length; i++){
//         const splittedString = words[i].split(separator);
//         for(let j = 0; j < splittedString.length; j++){
//             resultArr.push(splittedString[j])
//         }
//     }

//     return resultArr.filter((item) => item === "");
// };

// splitWordsBySeparator(["one.two.three","four.five","six"], ".")




// var addSpaces = function(s, spaces) {
//     const arr = s.split("");
//     let index = 0;
//     const realArr = [];
//     for(let i = 0; i <= spaces.length; i++){
//         realArr.push(arr.slice(index, spaces[i]).join(""));
//         index = spaces[i];
//     }

//     return realArr.join(" ")
// };


// addSpaces("spacing", [0,1,2,3,4,5,6]);



// var canSortArray = function(nums) {
//     const arr = [];


//     for(let i = 0; i < nums.length; i++){
//         arr.push();
//     }
// };

// const best = 10;
// function ok(best){
//     if(best / 10)
//     console.log(5 % 2);
// }


// canSortArray([8,4,2,30,15]);




// var vowelStrings = function(words, left, right) {
//     const vowels = ["a", "e", "i", "o", "u"];
//     let count = 0;
//     for(let i = left; i <= right; i++){
//         const lastInd = words[i].split("").length;
//         if(vowels.includes(words[i][0]) && vowels.includes(words[i][lastInd - 1])){
//             count += 1
//         }
//     }

//     return count
// };

// vowelStrings(["m","qi","ae"], 1, 1);
// vowelStrings(["are","amy","u"], 0, 2);




// var findRestaurant = function(list1, list2) {
//     const arr = [];
//     const realArr = [];
//     for(let i = 0; i < list1.length; i++){
//         for(let j = 0; j <  list2.length; j++){
//             if(list1[i] === list2[j]){
//                 arr.push({
//                     name: list1[i],
//                     count: i + j
//                 })
//             }
//         }
//     }

//     const resultArr = arr.sort((a, b) => a.count - b.count);

//     resultArr.forEach((item) => {
//         if(item.count === resultArr[0].count){
//             realArr.push(item.name)
//         }
//     })

//     return realArr
// };

// findRestaurant(["Shogun","Tapioca Express","Burger King","KFC"], ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"])




// var rob = function(nums) {
//     // let evenCount = 0;
//     // let oddCount = 0;
//     // for(let i = 0; i < nums.length; i++){
//     //     if(i % 2 !== 1){
//     //         evenCount += nums[i];
//     //     }else{
//     //         oddCount += nums[i];
//     //     }
//     // }

//     const arr = [];

//     for(let i = 0; i < nums.length; i++){
//         arr.push({
//             num: nums[i],
//             ind: i
//         })
//     }

//     for(let j = 0; j < arr.length; j++){
//         for(k = j; k < arr.length - 1; k++){
//             if((arr[j].ind + 1) !== arr[k].ind){
//                 console.log(arr[j], arr[k]);
//             }
//         }
//     }

//     // console.log(arr);


//     // return evenCount > oddCount ? evenCount : oddCount;
// };


// rob([2,7,9,3,1]); //12
// rob([2,1,1,2]); //4




// var calPoints = function(operations) {
//     const arr = [];
//     for(let i = 0; i < operations.length; i++){
//         if(operations[i] === "C"){
//             arr.pop();
//         }else if(operations[i] === "D"){
//             arr.push(Number(arr[arr.length - 1] * 2));
//         }else if(operations[i] === "+"){
//             arr.push(Number(arr[arr.length - 1] + arr[arr.length - 2]));
//         }else{
//             arr.push(Number(operations[i]));
//         }
//     }


//     const sum = arr.reduce((acc, current) => acc += current, 0);

//     return sum
// };

// calPoints(["1","C"])



// var countMatches = function(items, ruleKey, ruleValue) {
//     const type = { type: 0, color: 1, name: 2 };
//     let count = 0;
//     for(let i = 0; i < items.length; i++){
//         if(items[i][type[ruleKey]] === ruleValue){
//             count += 1;
//         }
//     }

//     return count
// };


// countMatches([["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], 'color', "silver")


// console.log(['dinner', 'breakfast', 'launch'].sort());

// var longestWord = function(words) {
//     const sortedArr = words.sort(); // Sorting the array of words alphabetically
//     let longest = '';

//     const isPrefix = (word, candidate) => {
//         return candidate.startsWith(word);
//     };

//     for (let word of sortedArr) {
//         let isLongest = true;
//         for (let j = 1; j < word.length; j++) {
//             if (!isPrefix(word.slice(0, j), word)) {
//                 isLongest = false;
//                 break;
//             }
//         }
//         if (isLongest && word.length > longest.length) {
//             longest = word;
//         }
//     }
//     return longest
// };

// longestWord(["m", "mo", "moc", "moch", "mocha", "l", "la", "lat", "latt", "latte", "c", "ca", "cat"]);


// var longestWord = function(words) {
//     let word = [];
//     let wordw = '';
//     for(let i = 0; i < words.length; i++){
//         if(word.length){
//             for(let j = 0; j < word.length; j++){
//                 console.log(words[i].split(""), words[i][j]);
//                 // if(words[i].split("").includes(word[j])){
//                 //     word = [];
//                 //     word.push(words[i]);
//                 //     // console.log(word);
//                 // }else{
//                 //     wordw = words[i];
//                 //     console.log(wordw);
//                 // }
//             }
//         }else{
//             word.push(words[i]);
//         }
//     }
//     // console.log(wordw);
//     return wordw;
// };

// longestWord(["a","banana","app", 'kanas', "appl","ap","apply","apple"]);
// longestWord(["b","br","bre","brea","break","breakf","breakfa","breakfas","breakfast","l","lu","lun","lunc","lunch","d","di","din","dinn","dinne","dinner"]);





// var maximumNumberOfStringPairs = function(words) {
//     let words1 = [...words];
//     const arrs = new Set([]);
//     let count = 0;
//     for(let i = 0; i < words1.length; i++) {
//         const reversedStr = words1[i].split("").reverse().join("");
//         if(words1.includes(reversedStr)) {
//             arrs.add([words1[i], reversedStr]);
//             words1.splice(i, 1);
//             i--;
//         }
//     }
//     arrs.forEach((item) => {
//         if(item[0] !== item[1]) {
//             count += 1;
//         }
//     });
//     return count;
// };

// maximumNumberOfStringPairs(["cd","ac","dc","ca","zz"]);
// maximumNumberOfStringPairs(["ab","ba","cc"]);
// maximumNumberOfStringPairs(["xu","kc","zc","vi","sx","tq","uw","ti","ta","xf","gf","xz","ew","bb","lo","xs","lj","kr","du","za","fs","ux","ck","cz","iv","ol","qt","wu","it","at","fx","fg"])







// var findAndReplacePattern = function(words, pattern) {
//     if(pattern.length === 1){
//         return words
//     }    
//     const realPattern = findRealPattern(pattern);

//     const results = words.filter((item) => findRealPattern(item) === realPattern);

//     return results
// };

// const findRealPattern = (pattern) => {
//     let saveToCheck = [];
//     let formatPattern = '';
//     for(let i = 0; i < pattern.length; i++){
//         const findEqualIndex = saveToCheck.find((item) => item.name === pattern[i]);

//         if(findEqualIndex){
//             saveToCheck.push({
//                 name: pattern[i],
//                 index: findEqualIndex.index
//             })
//         }else{
//             saveToCheck.push({
//                 name: pattern[i],
//                 index: i
//             })
//         }
//     }

//     saveToCheck.forEach((item) => {
//         formatPattern += item.index;
//     });

//     return formatPattern;
// }

// findAndReplacePattern(["abc","deq","mee","aqq","dkd","ccc"], 'abb')

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // Inserts at index 1
// console.log(months);


// var expressiveWords = function(s, words) {
//     const ok = returnArr(s);
//     for(let i = 0; i < words.length; i++){
//         let wordArray = words[i].split("");
//         wordArray = wordArray.concat(Array(s.length - wordArray.length).fill(''));

//         for(let j = ok.length - 1; j >= 0; j--){
//             const { beginIndex, count, name } = ok[j];
//             wordArray.splice(beginIndex, count, ...Array(count).fill(name));
//         }

//         console.log(wordArray.join(""));
//     }
// };



// const returnArr = (s) => {
//     const arr = [];
//     for(let i = 0; i < s.length; i++){
//         const findd = arr.find((item) => item.name === s[i]);

//         if(findd){
//             findd.count += 1;
//         }else{
//             arr.push({
//                 name: s[i],
//                 count: 1,
//                 beginIndex: i
//             })
//         }
//     }
//     // console.log(arr);
//     return arr.filter((item) => item.count > 2);
// }

// const filterArr = (arr) => {
//     let tt = ''
//     arr.forEach((item) => {
//         if(item.count === 2){
//             tt += item.name + item.name;
//         }else{
//             tt += item.name;
//         }
//     })
//     return tt;
// }

// // expressiveWords("zzzzzyyyyy", ["zzyy","zy","zyy"]);
// expressiveWords("heeellooo", ["hello", "hi", "helo"]);


// function expressiveWords(s, words) {
//     const sGroups = groupCharacters(s);
//     // console.log(sGroups);
//     let count = 0;

//     for (const word of words) {
//         if (isStretchy(word, sGroups)) {
//             // console.log(word, sGroups);
//             count++;
//         }
//     }

//     return count;
// }

// function groupCharacters(s) {
//     const groups = [];
//     let start = 0;

//     for (let i = 1; i < s.length; i++) {
//         if (s[i] !== s[i - 1]) {
//             groups.push({ char: s[i - 1], count: i - start });
//             start = i;
//         }
//     }

//     groups.push({ char: s[s.length - 1], count: s.length - start });

//     return groups;
// }

// function isStretchy(word, sGroups) {
//     const wordGroups = groupCharacters(word);
//     if (sGroups.length !== wordGroups.length) {
//         return false;
//     }
//     // console.log(wordGroups, sGroups);

//     for (let i = 0; i < sGroups.length; i++) {
//         const sGroup = sGroups[i];
//         const wordGroup = wordGroups[i];
//         if (sGroup.char !== wordGroup.char) {
//             return false;
//         }

//         if (sGroup.count < 3 && sGroup.count !== wordGroup.count) {
//             return false;
//         }
//         console.log(sGroup, wordGroup);

//         if (sGroup.count < sGroup.count) {
//             return false;
//         }
//     }

//     return true;
// }

// console.log(expressiveWords("heeellooo", ["hello", "hi", "helo"])); // Output: 1




// var stringMatching = function(words) {
//     const set = new Set();

//     for(let i = 0; i < words.length; i++){
//         for(let j = i + 1; j < words.length; j++){
//             const word1 = words[i];
//             const word2 = words[j];

//             if(word2.includes(word1)){
//                 set.add(word1); 
//             } else if(word1.includes(word2)){
//                 set.add(word2); 
//             }
//         }
//     }

//     return Array.from(set);
// };

// stringMatching(["mass","as","hero","superhero"]);





// console.log("mass".includes('ma'));




// var maximumValue = function(strs) {
//     let count = 0;
//     for(let i = 0; i < strs.length; i++){
//         if(isNaN(Number(strs[i]))){
//             const num = strs[i].length;
//             if(count < num){
//                 count = num;
//             }
//         }else{
//             const num = Number(strs[i]);
//             if(count < num){
//                 count = num;
//             }
//         }
//     }

//     return count;
// };

// maximumValue(["alic3","bob","3","4","00000"]);



// var shortestCompletingWord = function(licensePlate, words) {
//     const arr = [];
//     const sortStr = licensePlate.split("").sort().filter((item) => isNaN(Number(item))).join("").toLowerCase().split("");
//     const sortArr = words.sort((a, b) => a.length - b.length);
//     for(let i = 0; i < sortArr.length; i++){
//         let str = sortArr[i].split("").sort();


//         for(let j = 0; j < sortStr.length; j++){
//             if(str.includes(sortStr[j])){
//                 const exist = arr.find((item) => item.index === i);
//                 if(exist){
//                     exist.count += 1;
//                 }else{
//                     arr.push({
//                         index: i,
//                         count: 1
//                     });
//                 }
//                 const findd = str.findIndex((item) => item === sortStr[j]);
//                 str = str.filter((item, index) => index !== findd);
//             }
//         }
//     }


//     const resultArr = arr.sort((a,b) => b.count - a.count);


//     return words[resultArr[0].index];
// };

// shortestCompletingWord("1s3 PSt", ["step","steps","stripe","stepple"]);
// shortestCompletingWord("1s3 456", ["looks","pest","stew","show"]);
// shortestCompletingWord("Ah71752", ["suggest","letter","of","husband","easy","education","drug","prevent","writer","old"]);


// var longestNiceSubstring = function(s) {
//     if(s.length === 1){
//         return ""
//     }

//     const arr = [];

//     for(let i = 0; i < s.length; i++){
//         if(s.includes(s[i].toUpperCase())){
//             arr.push(s[i]);
//         }
//     }

//     console.log(arr);

// };

// longestNiceSubstring("YazaAay");
// longestNiceSubstring("Bb");




// var destCity = function(paths) {
//     const arr = []
//     for(let i = 0; i < paths.length; i++) {
//         for(let j = 0; j < paths[i].length; j++){
//             const item = arr.find((item) => item.destination === paths[i][j]);
//             if(item){
//                 item.isExist = true;
//             }else{
//                 arr.push({
//                     destination: paths[i][j],
//                     index: j,
//                     isExist: false
//                 });
//             }
//         }
//     }

//     const filteredArr = arr.filter((item) => item.isExist === false && item.index === 1);


//     return filteredArr[0].destination;
// };

// destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]);
// destCity([["B","C"],["D","B"],["C","A"]]);
// destCity([["A","Z"]]);




// var similarPairs = function(words) {
//     const sortedWords = [];
//     let count = 0;
//     for(let i = 0; i < words.length; i++){
//         const sorted = words[i].split("").sort().join("");
//         sortedWords[i] = ''
//         for(let j = 0; j < sorted.length; j++){
//             if(!sortedWords[i].includes(sorted[j])){
//                 sortedWords[i] += sorted[j]
//             }
//         }
//     }


//     for(let i = 0; i < sortedWords.length - 1; i++){
//         for(let j = i + 1; j < sortedWords.length; j++){
//             if(sortedWords[i] === sortedWords[j]){
//                 count += 1;
//             }
//         }
//     }

//     return count;
// };

// similarPairs(["aba","aabb","abcd","bac","aabc"]);
// similarPairs(["aabb","ab","ba"]);
// similarPairs(["nba","cba","dba"]);



// var commonChars = function(words) {
//     const word = words[0].split("");
//     let arr = [];
//     const allWords = words;
//     for(let i = 0; i < word.length; i++){

//         for(let j = 1; j < allWords.length; j++){
//             let shit = allWords[j].split("");
//             if(shit[j].includes(word[i])){
//                 arr.push({
//                     letter: word[i],
//                     isOk: true,
//                     pp: i + 'one',
//                     oo: j
//                 });
//                 const fin = shit[j].split("").findIndex((item) => item === word[i]);
//                 console.log(shit[fin], fin, word);
//                 shit[j].slice(fin, 1);
//                 // console.log(shit[j]);
//             }else{
//                 arr = arr.filter((item) => item.pp !== j);
//             }
//         }
//     }

//     console.log(arr);
// };

// commonChars(["bella","label","roller"]); //ell
// commonChars(["cool","lock","cook"]); //co



// var numUniqueEmails = function(emails) {
//     const set = new Set([]);
//     const result = removeIndexes(emails);
//     for(let i = 0; i < result.length; i++){
//         set.add(result[i]);
//     }
//     return set.size
// };

// const removeIndexes = (arrays) => {
//     const result = [];
//     for(let i = 0; i < arrays.length; i++){
//         let word = arrays[i].split("");
//         const first = word.findIndex((item) => item === "+");
//         const second = word.findIndex((item) => item === "@");
//         const indexes = [];
//         for(let j = first; j < second; j++){
//             indexes.push(j);
//         }
//         if(word.includes("+")){
//             word = word.filter((item, index) => !indexes.includes(index));
//         }
//         const secondAg = word.findIndex((item) => item === "@");
//         const real = word.slice(0, secondAg).join("").split(".");
//         word.splice(0, secondAg, real.join(""));
//         result.push(word.join(""));
//     }

//     return result;
// }

// + bilan boshlangan so'zlarni slice qilish @ gacha
//  . bilan boshlangan so'zlarni slice qilish @ gacha
// console.log("test.email+alex@leetcode.com".split("@"));
// numUniqueEmails(["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]);
// numUniqueEmails(["a@leetcode.com","b@leetcode.com","c@leetcode.com"]);
// numUniqueEmails(["test.email+alex@leetcode.com", "test.email@leetcode.com"]);




// var camelMatch = function(queries, pattern) {
//     const isUppercase = (str) => /[A-Z]/g.test(str);
//     const isCamelMatch = (query) => {
//         let a = b = 0;

//         while (a < query.length && b < pattern.length) {
//             const target = query[a];
//             const value = pattern[b];

//             if (isUppercase(target) && target !== value) return false;
//             if (target === value) b += 1;
//             a += 1;
//         }
//         return b === pattern.length && !isUppercase(query.slice(a));
//     };

//     console.log(queries.map(query => isCamelMatch(query)));
//     return queries.map(query => isCamelMatch(query));
// };


// camelMatch(["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], "FB");
// camelMatch(["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], "FoBaT");
// camelMatch(["CompetitiveProgramming","CounterPick","ControlPanel"], "CooP");
// camelMatch(["aksvbjLiknuTzqon","ksvjLimflkpnTzqn","mmkasvjLiknTxzqn","ksvjLiurknTzzqbn","ksvsjLctikgnTzqn","knzsvzjLiknTszqn"], "ksvjLiknTzqn");
// camelMatch(["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], "FoBa");
// camelMatch(["mifeqvzphnrv","mieqxvrvhnrv","mhieqovhnryv","mieqekvhnrpv","miueqrvfhnrv","mieqpvhzntrv","gmimeqvphnrv","mieqvhqyunrv"], "mieqvhnrv");





// var shortestToChar = function(s, c) {
//     const indexes = [];
//     const results = [];
//     for(let i = 0; i < s.length; i++){
//         if(s[i] === c){
//             indexes.push(i);
//         };
//     };


//     for(let i = 0; i < s.length; i++){
//         const number = toPositive(i - findClosest(i, indexes));
//         results.push(number);
//     };

//     return results
// };

// function toPositive(n){
//     if(n < 0){
//         n = n * -1;
//     }
//     return n;
// }

// const findClosest = (s, arr) => {
//     const result = [];

//     for(let i = 0; i < arr.length; i++){
//         result.push({
//             name: arr[i],
//             calc: arr[i] - s
//         })
//     }

//     result.sort((a, b) => toPositive(a.calc) - toPositive(b.calc));


//     return toPositive(result[0].name);
// }

// shortestToChar("loveleetcode", "e")



// var minOperations = function(logs) {
//     let count = 0;
//     for(let i = 0; i < logs.length; i++){
//         if(logs[i] === "../"){
//             count = count !== 0 ? count - 1 : 0;
//         }else if(logs[i] === "./"){
//             count += 0;
//         }else{
//             count += 1;
//         }
//     };
//     return count;
// };

// minOperations(["d1/","d2/","../","d21/","./"]);
// minOperations(["d1/","d2/","./","d3/","../","d31/"]);
// minOperations(["d1/","../","../","../"]);




// var isGood = function(nums) {
//     const sorted = nums.sort((a, b) => a - b);
//     const base = sorted[sorted.length - 1];
//     const result = [];
//     const arr = [];
//     for(let i = base - (base - 1); i <= base; i++){
//         result.push(i);
//     }
//     result.push(base);



//     if(result.length === nums.length){
//         for(let i = 0; i <= nums.length; i++){
//             if(nums[i] === result[i]){
//                 arr.push(true);
//             }else{
//                 arr.push(false);
//             }
//         }
//     }else{
//         arr.push(false);
//     }
//     return arr.includes(false) ? false : true;
// };

// isGood([3, 4, 4, 1, 2, 1]);
// isGood([2, 1, 3]);
// isGood([1, 3, 3, 2]);
// isGood([1, 1]);
// isGood([5, 7, 3, 1, 5, 2, 6, 4]);
// isGood([2,2,2]);



// var prefixCount = function(words, pref) {
//     const prefixes = [];

//     for(let i = 0; i < words.length; i++){
//         prefixes.push(words[i].slice(0, pref.length));
//     }

//     return prefixes.filter((item) => item === pref).length;
// };

// prefixCount(["pay","attention","practice","attend"], "at");



// var oddString = function(words) {
//     let result = [];
//     let map = {};
//     for(let i = 0; i < words.length; i++){
//         result[i] = []
//         for(let j = 0; j < words[i].length - 1; j++){
//             result[i].push(words[i].charCodeAt([j]) - words[i].charCodeAt([j + 1]));
//         }

//         if(!map[result[i]]){
//             map[result[i]] = [];
//         }
//         map[result[i]].push(words[i]);
//     }

//     for(let key in map){
//         if(map[key].length === 1){
//             return map[key];
//         }
//     }
// };

// oddString(["adc","wzy","abc"]);
// oddString(["aaa","bob","ccc","ddd"]);
// oddString(["mll","edd","jii","tss","fee","dcc","nmm","abb","utt","zyy","xww","tss","wvv","xww","utt"]);



// var lastVisitedIntegers = function(nums) {
//     const seen = [];
//     const ans = [];
//     let k = 0;
//     let tail;
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i - 1] !== undefined){
//             tail = nums[i - 1]
//         }
//         if(nums[i] === -1){
//             if(tail !== -1){
//                 k = 1;
//             }else{
//                 k += 1;
//             }

//             if(k <= seen.length){
//                 ans.push(seen[k - 1]);
//             }else{
//                 ans.push(-1)
//             }
//         }else{
//             seen.unshift(nums[i]);
//         }
//     }
//     console.log(ans);
//     return ans
// };

// lastVisitedIntegers([1,2,-1,-1,-1]);
// lastVisitedIntegers([1,-1,2,-1,-1]);




// var invalidTransactions = function(transactions) {
//     let result = [];
//     let transaction = transactions;
//     let names = '';
//     let citys = '';
//     let times;

//     result = transactions.filter((item) => item.split(",")[2] > 1000);
//     transaction = transaction.filter((item) => item.split(",")[2] < 1000);
// for(let i = 0; i < transactions.length; i++){
//     const { name, city, time, amount } = parse(transactions[i]); 
//     if(transactions[i - 1] !== undefined){
//         const { name:name1, city: city1, time: time1, amount: amount1 } = parse(transactions[i - 1]);
//         citys = city1;
//         names = name1;
//         times = time1;
//     }       


//     if(Number(amount) > 1000){
//         result.push(transactions[i]);
//     }

//     if(names !== '' && name === names){
//         if(citys !== '' && city !== citys){
//             result.push(transactions[i], transactions[i - 1]);
//         }else if(times !== undefined && (Number(times) + Number(time)) > 60){
//             result.push(transactions[i]);
//         }
//     }
// }

//     console.log(transaction, result);
//     return result;
// };


// const parse = (arr) => {
//     const str = arr.split(",");
//     const name = str[0];
//     const time = str[1];
//     const amount = str[2];
//     const city = str[3];

//     return {
//         name,
//         time,
//         amount,
//         city
//     }
// }

// invalidTransactions(["alice,20,800,mtv","alice,50,100,beijing"]);
// invalidTransactions(["alice,20,800,mtv","alice,50,1200,mtv", "alice,50,1900,mtv", "alice,50,1200,mtv"]);
// invalidTransactions(["alice,20,800,mtv","bob,50,1200,mtv"]);
// invalidTransactions(["alice,20,800,mtv","alice,50,100,mtv","alice,51,100,frankfurt"]);






// var findRelativeRanks = function(score) {
//     const obj = {
//         1: "Gold Medal",
//         2: "Silver Medal",
//         3: "Bronze Medal"
//     };

//     const obj1 = {};
//     const result = [];
//     const scores = [...score];
//     const sorted = scores.sort((a, b) => b - a);

//     for(let i = 0; i < score.length; i++){
//         obj1[sorted[i]] = i + 1;
//     }


//     for(let i = 0; i < score.length; i++){
//         if(obj[obj1[score[i]]]){
//             result.push(obj[obj1[score[i]]]);
//         }else{
//             result.push(obj1[score[i]].toString());
//         }
//     }

//     return result;
// };

// findRelativeRanks([5,4,3,2,1]);
// findRelativeRanks([10,3,8,9,4]);


// var smallerNumbersThanCurrent = function(nums) {
//     const result = [];
//     for(let i = 0; i < nums.length; i++){
//         const filteredArray = nums.filter((item) => nums[i] > item);
//         result.push(filteredArray.length);
//     }

//     return result
// };

// smallerNumbersThanCurrent([8,1,2,2,3]);
// smallerNumbersThanCurrent([6,5,4,8]);



// var deleteGreatestValue = function(grid) {
//     const ok = {};
//     let count = 0;
//     for(let i = 0; i < grid.length; i++){
//         const sortedArr = grid[i].sort((a,b) => a - b);
//         for(let j = 0; j < sortedArr.length; j++){
//             if(ok[j]){
//                 if(ok[j] < sortedArr[j]){
//                     ok[j] = sortedArr[j];
//                 }
//             }else{
//                 ok[j] = sortedArr[j];
//             }
//         }
//     }


//     for(let key in ok){
//         count += ok[key];
//     }


//     return count;
// };

// deleteGreatestValue([[1,2,4],[3,3,1]]);
// deleteGreatestValue([[10]]);




// var heightChecker = function(heights) {
//     let count = 0;
//     const height = [...heights];
//     const sorted = height.sort((a, b) => a - b);

//     for(let i = 0; i < heights.length; i++){
//         if(heights[i] !== sorted[i]){
//             count += 1;
//         }
//     }

//     return count;
// };

// heightChecker([1,1,4,2,1,3]);
// heightChecker([1,2,3,4,5]);



// var frequencySort = function(nums) {
//     const arr = {};
//     for(let i = 0; i < nums.length; i++){
//         if(arr[nums[i]]){
//             arr[nums[i]] += 1;
//         }else{
//             arr[nums[i]] = 1;
//         }
//     }

//     const ok = Object.entries(arr).sort((a,b)=> a[1]-b[1]) 
//     console.log(arr, ok);
// };

// frequencySort([1,1,2,2,2,3]);



// var intersection = function(nums1, nums2) {
//     const obj = {};
//     const result = [];
//     for(let i = 0; i < nums1.length; i++){
//         if(nums2.includes(nums1[i])){
//             obj[nums1[i]] = nums1[i];
//         }
//     }

//     for(let key in obj){
//         result.push(obj[key])
//     }

//     return result
// };

// intersection([1,2,2,1], [2,2]);
// intersection([4,9,5], [9,4,9,8,4]);



// var isPossibleToSplit = function(nums) {
//     let result = {};
//     let isDistinct = true;
//     for(let i = 0; i < nums.length; i++){
//         if(result[nums[i]]){
//             result[nums[i]] += 1;
//             if(result[nums[i]] > 2 && result[nums[i]] % 2 !== 0){
//                 isDistinct = false;
//             }
//         }else{
//             result[nums[i]] = 1;
//         }
//     }

//     return isDistinct;
// };

// isPossibleToSplit([1,1,2,2,3,4]);
// isPossibleToSplit([1,1,1,1]);




// var arrayPairSum = function(nums) {
//     let count = 0;
//     const sortedArr = nums.sort((a, b) => a - b);
//     for(let i = 0; i < sortedArr.length; i += 2){
//         count += Math.min(sortedArr[i], sortedArr[i + 1]);
//     }

//     return count;
// };

// arrayPairSum([1,4,3,2]);
// arrayPairSum([6,2,6,5,1,2]);



// var countKeyChanges = function(s) {
//     const obj = {};
//     let count = 0;
//     for(let i = 0; i < s.length; i++){
//         if(obj[s[i].toLowerCase()] === s[i].toLowerCase()){
//             obj[s[i].toLowerCase()] = s[i].toLowerCase();
//         }else{
//             if(Object.keys(obj).length === 0){
//                 obj[s[i].toLowerCase()] = s[i].toLowerCase();
//             }else{
//                 obj[s[i].toLowerCase()] = s[i].toLowerCase();
//                 count += 1;
//             }
//         }
//     }

//     console.log(count);
//     return count;
// };

// // countKeyChanges("aAbBcC");
// // countKeyChanges("AaAaAaaA");
// countKeyChanges("mDVD");



// var maxProfit = function(prices) {
//     let left = 0; 
//     let right = 1;

//     let result = 0;

//     for(let i = left; i < prices.length; i++){
//         if(prices[left] < prices[right]){
//             const maxProf = prices[right] - prices[left];

//             if(result < maxProf){
//                 result = maxProf;
//             }
//         }else{
//             left = right;
//         }
//         right++
//     }


//     return result;
// };

// maxProfit([7,1,5,3,6,4]);
// maxProfit([7,6,4,3,1]);



// var missingInteger = function(nums) {
//     let left = 0;
//     let right = 1;
//     let count = 0;

//     for(let i = left; i < nums.length; i++){
//         if(nums[right] - nums[left] === 1){
//             if(left !== 0){
//                 count += nums[right];
//             }else{
//                 count += (nums[left] + nums[right])
//             }
//             right++
//             left++
//         }
//     }

//     if(nums.includes(count)){
//         count = recursive(count, nums);
//     }

//     if(count === 0){
//         count = recursive(nums[0], nums);
//     }

//     return count;
// };


// const recursive = (num, arr) => {
//     if(arr.includes(num)){
//         return recursive(num + 1, arr)
//     }else{
//         return num
//     }
// }

// missingInteger([29,30,31,32,33,34,35,36,37]);
// missingInteger([1,2,3,2,5]);
// missingInteger([38]);
// missingInteger([3,4,5,1,12,14,13]);
// missingInteger([1,4,3]);
// missingInteger([3,4,30,9,29,27,6,2,4,7,25,3]);



// var longestCommonPrefix = function(strs) {
//     let common = 0;
//     let letter = '';
//     for(let i = 0; i < strs.length; i++){
//         let com = strs[i][common];

//         for(let j = 0; j < strs.length - 1; j++){
//             if(strs[i][j] === com){
//                 letter += com;
//                 common += 1;
//             }
//         }
//     }

//     console.log(letter);
// };

// longestCommonPrefix(["flower","flow","flight"]);
// longestCommonPrefix(["dog","racecar","car"]);



// var threeSum = function(nums) {
//     nums.sort((a, b) => a - b); // Sort the input array
//     const resultArr = [];
//     const n = nums.length;

//     for (let i = 0; i < n - 2; i++) {
//         if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) { // Avoid duplicates
//             let left = i + 1;
//             let right = n - 1;

//             while (left < right) {
//                 let sum = nums[i] + nums[left] + nums[right];

//                 if (sum === 0) {
//                     resultArr.push([nums[i], nums[left], nums[right]]);

//                     // Skip duplicates
//                     while (left < right && nums[left] === nums[left + 1]) left++;
//                     while (left < right && nums[right] === nums[right - 1]) right--;

//                     left++;
//                     right--;
//                 } else if (sum < 0) {
//                     left++;
//                 } else {
//                     right--;
//                 }
//             }
//         }
//     }

//     console.log(resultArr);
//     return resultArr;
// };

// threeSum([-1,0,1,2,-1,-4]);
// threeSum([0,1,1]);
// threeSum([0,0,0]);
// threeSum([1,2,-2,-1]);
// threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]);




// var findMinimumOperations = function(s1, s2, s3) {
//     let count = 0;
//         if(s1[0] === s2[0] && s2[0] === s3[0]){
//             count += 1;
//             for(let i = 1; i < Math.min(s1.length, s2.length, s3.length); i++){
//                 if(s1[i] === s2[i] && s2[i] === s3[i]){
//                     count += 1;
//                 }else{
//                     break
//                 }
//             }
//         }else{
//             return  -1
//         }
//     return (s1.length - count) + (s2.length - count) + (s3.length - count);
// };


// findMinimumOperations("abc", "abb", "ab");
// findMinimumOperations("dac", "bac", "cac");
// findMinimumOperations("a", "aabc", "a");



// var moveZeroes = function(nums) {
//     let count = 0;
//     const recursive = (arr) => {
//         for(let i = 0; i < arr.length; i++){
//             if(arr[i] === 0){
//                 count++
//                 return recursive(arr.filter((item, index) => i !== index));
//             }else{
//                 count += 0;
//             }
//         }
//     }

//     recursive(nums);

//     nums = nums.filter((item) => item !== 0);

//     for(let i = 0; i < count; i++){
//         nums.push(0);
//     }


//     return nums;
// };

// moveZeroes([0,1,0,3,12]);
// moveZeroes([0]);
// moveZeroes([0,0,1]);

// console.log(26^2);
// var convertToTitle = function(columnNumber) {
//     const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     let result = '';

//     while (columnNumber > 0) {
//         let remainder = (columnNumber - 1) % 26;
//         result = alphabet[remainder] + result;
//         columnNumber = Math.floor((columnNumber - 1) / 26);
//     }

//     return result;
// };

// function convertToTitle(columnNumber) {
//     let title = '';

//     // while (columnNumber > 0) {
//         let remainder = (columnNumber - 1) % 26; // Adjusted remainder to map 1-26 to 0-25
//         // console.log(remainder, String.fromCharCode(remainder + 65));
//     //     title = String.fromCharCode(remainder + 65) + title; // Convert to character ('A' to 'Z') and append to title
//     //     columnNumber = Math.floor((columnNumber - 1) / 26); // Update columnNumber
//     // }

//     return title;
// }

// convertToTitle(28);
// convertToTitle(1200);
// convertToTitle(730);



// var findPeaks = function(mountain) {
//     const result = [];
//     for(let  i = 0; i < mountain.length; i++){
//         if(mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]){
//             result.push(i);
//         }
//     }

//     return result;
// };

// findPeaks([1,4,3,8,5]);
// findPeaks([2,4,4]);




// var minimumLength = function(s) {
//     let start = 0, end = s.length - 1;
//     while (start < end && s[start] === s[end]) {
//         let curr = s[start];
//         while (start <= end && s[start] === curr) {
//             console.log(start, 'statr');
//             start++;
//         }
//         while (start <= end && s[end] === curr) {
//             console.log(end);
//             end--;
//         }
//     }

//     // console.log(end, start);
//     return end - start + 1;
// };

// minimumLength("bbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbccbcbcbccbbabbb");
// minimumLength("cabaabac");
// minimumLength("aabccabba");




// var isPalindrome = function(x) {
//     const reversed = x.toString().split("").reverse();
//     const realArr = x.toString().split("");
//     let isPal = false;
//     for(let i = 0; i < reversed.length; i++){
//         if(reversed[i] === realArr[i]){
//             isPal = true;
//         }else{
//             return false
//         }
//     }
//     return isPal;
// };  

// // isPalindrome(-121);
// isPalindrome(1000021);





// var longestCommonPrefix = function(strs) {
//     console.log(strs);
// };


// longestCommonPrefix(["flower","flow","flight"]);






// var findTheDifference = function(s, t) {
//     const firstObj = returnArr(s);
//     const secondtObj = returnArr(t);
//     let letter = "";

//     if(Object.keys(firstObj).length > Object.keys(secondtObj).length){
//         for(let key in firstObj){
//             console.log(firstObj[key], secondtObj[key]);
//             if(firstObj[key] !== secondtObj[key]){
//                 letter += key;
//             }
//         }
//     }else{
//         for(let key in secondtObj){
//             if(firstObj[key] !== secondtObj[key]){
//                 letter += key;
//             }
//         }
//     }

//     return letter;
// };

// const returnArr = (string) => {
//     const newObj = {};

//     for(let i = 0; i < string.length; i++){
//         if(newObj[string[i]]){
//             newObj[string[i]] += 1;
//         }else{
//             newObj[string[i]] = 1;
//         }
//     }

//     return newObj;
// }

// findTheDifference("abcd", "abcde");
// findTheDifference("", "y");
// findTheDifference("ymbgaraibkfmvocpizdydugvalagaivdbfsfbepeyccqfepzvtpyxtbadkhmwmoswrcxnargtlswqemafandgkmydtimuzvjwxvlfwlhvkrgcsithaqlcvrihrwqkpjdhgfgreqoxzfvhjzojhghfwbvpfzectwwhexthbsndovxejsntmjihchaotbgcysfdaojkjldprwyrnischrgmtvjcorypvopfmegizfkvudubnejzfqffvgdoxohuinkyygbdzmshvyqyhsozwvlhevfepdvafgkqpkmcsikfyxczcovrmwqxxbnhfzcjjcpgzjjfateajnnvlbwhyppdleahgaypxidkpwmfqwqyofwdqgxhjaxvyrzupfwesmxbjszolgwqvfiozofncbohduqgiswuiyddmwlwubetyaummenkdfptjczxemryuotrrymrfdxtrebpbjtpnuhsbnovhectpjhfhahbqrfbyxggobsweefcwxpqsspyssrmdhuelkkvyjxswjwofngpwfxvknkjviiavorwyfzlnktmfwxkvwkrwdcxjfzikdyswsuxegmhtnxjraqrdchaauazfhtklxsksbhwgjphgbasfnlwqwukprgvihntsyymdrfovaszjywuqygpvjtvlsvvqbvzsmgweiayhlubnbsitvfxawhfmfiatxvqrcwjshvovxknnxnyyfexqycrlyksderlqarqhkxyaqwlwoqcribumrqjtelhwdvaiysgjlvksrfvjlcaiwrirtkkxbwgicyhvakxgdjwnwmubkiazdjkfmotglclqndqjxethoutvjchjbkoasnnfbgrnycucfpeovruguzumgmgddqwjgdvaujhyqsqtoexmnfuluaqbxoofvotvfoiexbnprrxptchmlctzgqtkivsilwgwgvpidpvasurraqfkcmxhdapjrlrnkbklwkrvoaziznlpor", "qhxepbshlrhoecdaodgpousbzfcqjxulatciapuftffahhlmxbufgjuxstfjvljybfxnenlacmjqoymvamphpxnolwijwcecgwbcjhgdybfffwoygikvoecdggplfohemfypxfsvdrseyhmvkoovxhdvoavsqqbrsqrkqhbtmgwaurgisloqjixfwfvwtszcxwktkwesaxsmhsvlitegrlzkvfqoiiwxbzskzoewbkxtphapavbyvhzvgrrfriddnsrftfowhdanvhjvurhljmpxvpddxmzfgwwpkjrfgqptrmumoemhfpojnxzwlrxkcafvbhlwrapubhveattfifsmiounhqusvhywnxhwrgamgnesxmzliyzisqrwvkiyderyotxhwspqrrkeczjysfujvovsfcfouykcqyjoobfdgnlswfzjmyucaxuaslzwfnetekymrwbvponiaojdqnbmboldvvitamntwnyaeppjaohwkrisrlrgwcjqqgxeqerjrbapfzurcwxhcwzugcgnirkkrxdthtbmdqgvqxilllrsbwjhwqszrjtzyetwubdrlyakzxcveufvhqugyawvkivwonvmrgnchkzdysngqdibhkyboyftxcvvjoggecjsajbuqkjjxfvynrjsnvtfvgpgveycxidhhfauvjovmnbqgoxsafknluyimkczykwdgvqwlvvgdmufxdypwnajkncoynqticfetcdafvtqszuwfmrdggifokwmkgzuxnhncmnsstffqpqbplypapctctfhqpihavligbrutxmmygiyaklqtakdidvnvrjfteazeqmbgklrgrorudayokxptswwkcircwuhcavhdparjfkjypkyxhbgwxbkvpvrtzjaetahmxevmkhdfyidhrdeejapfbafwmdqjqszwnwzgclitdhlnkaiyldwkwwzvhyorgbysyjbxsspnjdewjxbhpsvj");



// var minimumPushes = function(word) {
//     let counts = 0;

//     if(word.length <= 8){
//         counts =  word.length;
//     }else if(word.length <= 16 && word.length > 8){
//         counts = 8 + (2 * Math.abs(8 - word.length));
//     }else if(word.length <= 24 && word.length > 16){
//         counts = 24 + (3 * Math.abs(16 - word.length));
//     }else if(word.length <= 26 && word.length > 24){
//         counts = 48 + (4 * Math.abs(24 - word.length));
//     }

//     return counts;
// };

// minimumPushes("abcde");
// minimumPushes("amrvxnhsewkoipjyuclgtdbf");

// let ok = "leetcode".split("");
// ok.splice(7, 1, 'e');
// ok.splice(5, 1, 'e');
// ok.splice(2, 1, 'o');
// ok.splice(1, 1, 'e');
// // console.log();
// console.log(ok);

// var reverseVowels = function(s) {
//     let word = s.split("");
//     let vowels = 'aeiouAEIOU';
//     let indexes = [];
//     for(let i = 0; i < s.length; i++){
//         if(vowels.includes(s[i])){
//             indexes.push(i);
//         }
//     }

//     indexes = indexes.reverse();

//     for(let i = 0; i < s.length; i++){
//         if(vowels.includes(s[i])){
//             word.splice(i, 1, s[indexes[0]]);
//             indexes.shift();
//         }
//     }

//     return word.join("");
// };

// reverseVowels('hello');
// reverseVowels('leetcode');
// reverseVowels('aA');



// DFS ALGORITM

// var restoreIpAddresses = function(s) {
//     const arr = [];
//     let num = "";

//     if(s.length > 12){
//         return [];
//     }

//     if(s.length < 4){
//         return [];
//     }

//     for(let i = 0; i < s.length; i++){
//         if(num !== "" && Number(num) <= 255){
//             console.log(num);
//         }else{
//             num += s[i];
//             console.log(s[i]);
//         }
//     }
// };


// restoreIpAddresses("25525511135");
// restoreIpAddresses("0000");
// restoreIpAddresses("101023");



// var countAndSay = function(n) {
//     let resultStr = "1"; // Initialize with the base case for n = 1

//     for (let i = 1; i < n; i++) {
//         resultStr = pairArray(resultStr);
//     }

//     return resultStr;
// };

// const pairArray = (str) => {
//     const arr = [];
//     let num = "";

//     for(let i = 0; i < str.length; i++){
//         if(num === "" || num.includes(str[i])){
//             num += str[i];
//         }else{
//             arr.push(num.length.toString(), num[0]);
//             num = "";
//             num += str[i];
//         }

//         if(str[i + 1] === undefined){
//             arr.push(num.length.toString(), num[0]);
//         }
//     }

//     return arr.join(""); // Join the array into a string
// }

// console.log(countAndSay(1009)); // Output: "1211"





// var majorityElement = function(nums) {
//     let major = 0;
//     let current = 0;

//     for(let i = 0; i < nums.length; i++){
//         if(major !== nums[i] && current !== 0){
//             current -= 1;
//         }else if(current === 0){
//             major = nums[i];
//             current += 1;
//         }else if(major === nums[i]){
//             current += 1;
//         }
//     }

//     return major;
// };

// majorityElement([3,2,3]);



// var nextGreaterElement = function(nums1, nums2) {
//     const result = [];
//     for(let i = 0; i < nums1.length; i++){
//         const findInd = nums2.findIndex((item) => item === nums1[i]);
//         let found = false;
//         for(let j = findInd + 1; j < nums2.length; j++){
//             if(nums2[j] > nums1[i]){
//                 result.push(nums2[j]);
//                 found = true;
//                 break;
//             }
//         }
//         if (!found) {
//             result.push(-1);
//         }
//     }
//     return result;
// };


// nextGreaterElement([1,3,5,2,4], [6,5,4,3,2,1,7]);
// nextGreaterElement([4,1,2], [1,3,4,2]);



// var summaryRanges = function(nums) {
//     let result = [];
//     let oldVal = null;
//     let current = null;
//     let ind = 0;
//     for(let i = ind; i < nums.length; i++){
//         if(oldVal ){
//             console.log('afas');
//         }
//     }
//     // console.log(oldVal, current, result);
// };

// // summaryRanges([0,1,2,4,5,7]);
// summaryRanges([0,2,3,4,6,8,9]);


// var detectCapitalUse = function(word) {
//     let result = [];
//     let bool = word[1].toUpperCase() === word[1] ? true : false;
//     let bool1 = word[0].toUpperCase() === word[0] ? true : false

//     if(word.length === 1){
//         return true;
//     }

//     if(bool1 === false && bool === true){
//         return false;
//     }
//     let realResult = true;

//     for(let i = 1; i < word.length; i++){
//         if(word[i] === word[i].toUpperCase()){
//             result.push(true);
//         }else{
//             result.push(false);
//         }
//     }


//     for(let i = 0; i < result.length; i++){
//         if(bool !== result[i]){
//             realResult = false;
//         }
//     }

//     return realResult;
// };

// detectCapitalUse("FFFFFFFFFFFFFFFFFFFFf");
// detectCapitalUse("USA");
// detectCapitalUse("FlaG");



// var judgeCircle = function(moves) {
//     let result = 0;
//     for(let i = 0; i < moves.length; i++){
//         if(moves[i] === "L"){
//             result = result - 1;
//         }else if(moves[i] === "R"){
//             result += 1;
//         }else if(moves[i] === "U"){
//             result += 5;
//         }else if(moves[i] === "D"){
//             result = result - 5;
//         }
//     }
//     return result === 0 ? true : false;
// };

// judgeCircle("UD");
// judgeCircle("LL");



// var sortArrayByParity = function(nums) {
//     const result = [];

//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] % 2 !== 1){
//             result.unshift(nums[i]);
//         }else{
//             result.push(nums[i]);
//         }
//     }

//     return result;
// };

// sortArrayByParity([0]);



// var sortColors = function(nums) {
//     let num = 1;
//     const result = [];

//     for(let i = 0; i < nums.length; i++){
//         if(num >= nums[i]){
//             result.push(nums[i]);
//         }else{

//         }
//         console.log(nums);
//     }
// };

// sortColors([2,0,2,1,1,0]);





// var convert = function(s, numRows) {
//     const arr = new Array(numRows).fill("");
//     const result = [];
//     for(let i = 0; i < s.length; i++) {
//         for (let num = 0; num < numRows; num++) {
//             result.push(num);
//         }
//         for (let num = numRows - 2; num > 0; num--) {
//             result.push(num);
//         }
//     }


//     for(let i = 0; i < s.length; i++){
//         arr[result[i]] += s[i];
//     }

//     return arr.join("");
// }

// convert("PAYPALISHIRING", 3);
// 01210121012101



// var getHint = function(secret, guess) {
//     const obj = {
//         "A": {
//             name: 0,
//             value: 0,
//             ok: 0
//         },
//         "B": {
//             name: 0,
//             value: 0,
//             ok: 0
//         },
//     }

//     for(let i = 0; i < secret.length; i++){
//         if(secret[i] === guess[i]){
//             obj["A"].name += 1;
//         }else{
//             obj["B"].name += 1;
//             if(obj["B"].value !== 0){
//                 if(obj["B"].value === Number(guess[i])){
//                     obj["B"].ok += 1; 
//                 }
//             }else{
//                 obj["B"].value = Number(guess[i]);
//             }
//         }
//     }



//     console.log(obj);
// };

// getHint("1807", "7810");
// getHint("1123", "0111");
// getHint("1234", "0111");
// getHint("1122", "2211");/



// const isZero = (element) => element === '0';

// const minimumSteps = function(s) {
//     const arrs = [];
//     const arr = s.split("");
//     let lastZeroIndex = -1;
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (isZero(arr[i])) {
//             lastZeroIndex = i;
//             break;
//         }
//     }

//     for(let i = 0; i <= lastZeroIndex; i++){
//         arrs.push(s[i]);
//     };

//     const { modifiedArray, actions } = recursive(arrs);


//     return actions;
// };

// const recursive = (massive) => {
//     const copyMassive = massive;
//     let action = 0;
//     for(let i = 0; i < copyMassive.length; i++){
//         if(copyMassive[i] === '1'){
//             for(let j = i; j < copyMassive.length; j++){
//                 if(copyMassive[j] === '0'){
//                     copyMassive[j] = '1'; 
//                     copyMassive[i] = '0';
//                     action += j - i;
//                     break;
//                 }
//             }
//         }
//     }

//     if (action > 0) {
//         return { modifiedArray: recursive(copyMassive).modifiedArray, actions: action };
//     } else {
//         return { modifiedArray: copyMassive, actions: action };
//     }
// }

// minimumSteps("101");
// minimumSteps("0000111100001111");


// minimumSteps("100");
// minimumSteps("11111111111110");


// const minimumSteps = function(s) {
//     let copy = s.split("");
//     let actions = 0;
//     for(let i = 0; i < copy.length; i++){
//         if(s[i] === '1'){
//             const lastIndex = copy.lastIndexOf('0');
//             if(lastIndex > i){
//                 actions += lastIndex - i;
//                 copy.splice(lastIndex, 1);
//             }
//         }
//     }

//     return actions;
// }

// const minimumSteps = (s) => {
//     let prev = 0;
//     let count = 0;

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === '0') {
//             count += (i - prev);
//             prev++;
//         }
//     }

//     return count;
// }

// minimumSteps("0000111100001111");
// minimumSteps("100");
// minimumSteps("0111");
// minimumSteps("101");

// const distributeCandies = function(candyType) {
//     const uniqueCandies = new Set(candyType);
//     const maxCandies = candyType.length / 2;
//
//     return Math.min(uniqueCandies.size, maxCandies);
// };
//
// distributeCandies([1,1,2,2,3,3,3,3]);
// distributeCandies([0,0,14,0,10,0,0,0]);
// distributeCandies([6,6,6,6]);





// var firstUniqChar = function(s) {
//     const obj = {};
//     const result = [];
//     for(let i = 0; i < s.length; i++){
//         if(obj[s[i]] !== undefined){
//             if(obj[s[i]].name === s[i]){
//                 obj[s[i]].count += 1;
//             }
//         }else {
//             obj[s[i]] = {
//                 name: s[i],
//                 count: 1,
//                 index: i
//             }
//         }
//     }
//
//     for(let key in obj){
//         if(obj[key].count === 1){
//             result.push(obj[key].index);
//         }
//     }
//
//     return result.length ? result[0] : -1;
// };
//
// firstUniqChar("leetcode");
// firstUniqChar("loveleetcode");
// firstUniqChar("aabb");




// var numberOfLines = function(widths, s) {
//     const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
//     const alphaObject = {};
//     let line = 1;
//     let lastLinePixel = 0;
//     for(let i = 0; i < alphabets.length; i++){
//         alphaObject[alphabets[i]] = widths[i];
//     }
//
//
//     for(let i = 0; i < s.length; i++) {
//         if(100 >= lastLinePixel + alphaObject[s[i]]){
//             lastLinePixel += alphaObject[s[i]];
//         }else {
//             line += 1;
//             lastLinePixel = alphaObject[s[i]];
//         }
//     }
//
//     return [line, lastLinePixel];
// };

// numberOfLines([10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "abcdefghijklmnopqrstuvwxyz");
// numberOfLines([4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], "bbbcccdddaaa");



// var summaryRanges = function(nums) {
//     const halfResultArr = [];
//     const resultArr = []
//     let current;
//     let temp;
//     for(let i = 0; i <= nums.length; i++){
//         if(nums[i] - 1 === temp){
//             temp = nums[i]
//         }else if(current === undefined || temp === undefined) {
//             current = nums[i];
//             temp = nums[i];
//         }else if(nums[i] - 1 !== temp){
//             halfResultArr.push([current, temp]);
//             current = nums[i];
//             temp = nums[i];
//         }
//     }
//
//
//     for(let i = 0; i < halfResultArr.length; i++){
//         if(halfResultArr[i][0] === halfResultArr[i][1]){
//             resultArr.push(`${halfResultArr[i][0]}`)
//         }else {
//             resultArr.push(`${halfResultArr[i][0]}->${halfResultArr[i][1]}`)
//         }
//     }
//     return resultArr;
// };
//
// summaryRanges([0,1,2,4,5,7]);



// var findErrorNums = function(nums) {
//     const result = {};
//     const arr = [];
//     for(let i = 0; i < nums.length; i++){
//         if(result[nums[i]] === 1){
//             if(nums.includes(nums[i] - 1) || nums[i] - 1 === 0){
//                 arr.push(nums[i], nums[i] + 1);
//             }else {
//                 arr.push(nums[i], nums[i] - 1);
//             }
//         }else {
//             result[nums[i]] = 1;
//         }
//     }
//
//     return arr;
// };
//
// findErrorNums([1,2,2,4]);
// findErrorNums([1,1]);
// findErrorNums([2,2]);
// findErrorNums([3,2,2]);
// findErrorNums([2,3,2]);


// var myObject = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     ok: function() {
//         return this
//     },
//     address: {
//         street: "123 Main Street",
//         zip: "10001",
//         country: "USA",
//         coordinates: {
//             latitude: 40.7128,
//             longitude: -74.0060,
//         }
//     }
// };

// console.log(myObject.address.coordinates.greet());







// var findPoisonedDuration = function(timeSeries, duration) {
//     if (timeSeries.length === 0) return 0;
//     let totalDuration = 0;
//     let end = timeSeries[0] + duration - 1;
//     for (let i = 1; i < timeSeries.length; i++) {
//         if (timeSeries[i] <= end) {
//             totalDuration += timeSeries[i] + duration - 1 - end;
//         } else {
//             totalDuration += duration;
//         }
//         end = timeSeries[i] + duration - 1;
//     }
//     console.log(totalDuration)
//     return totalDuration + duration;
// };
//
// findPoisonedDuration([7, 8, 33, 34], 2);




// var canPlaceFlowers = function(flowerbed, n) {
//     let count = 0;
//     for(let i = 0; i < flowerbed.length; i++){
//         if(flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)){
//             flowerbed[i] = 1;
//             count += 1;
//
//         }
//     }
//
//     return count >= n;
// };
//
// canPlaceFlowers([1,0,0,0,1], 1);
// canPlaceFlowers([1,0,0,0,1], 2);
// canPlaceFlowers([1,0,0,0,0,1], 2);
// canPlaceFlowers([0,0,1,0,1], 1);
// canPlaceFlowers([0,0,1,0,0], 1);
// canPlaceFlowers([0,1,0], 1);



// var exist = function(board, word) {
//         let letter = '';
//         let ind = 0;
//         let wordArr = word.split("");
//         let kIndex = 0;
//         for(let j = 0; j < board.length; j++){
//             let row = j;
//             for(let k = kIndex; k < board[j].length; k++){
//                 let col = k;
//                 if(wordArr[ind] === board[row][col]){
//                     letter += wordArr[ind];
//                     wordArr[ind] = wordArr[ind] + '2';
//                     ind++
//                     board[row][col] = board[row][col] + '1';
//                 }else {
//                     // console.log(board[row][col], wordArr[ind])
//                     const f = board[row].find((item) => item === wordArr[ind]);
//                     console.log(f, 'ss')
//                     if(f){
//                         letter += wordArr[ind];
//                         wordArr[ind] = wordArr[ind] + '2';
//                         ind++
//                         board[row][col] = board[row][col] + '1';
//                         board[row].slice(col, 1);
//                         board[row].unshift(board[row][col] + '2');
//                     }
//                 }
//             }
//         }
//
//     console.log(letter, wordArr.join("").split("2").join(""))
//         return letter === wordArr.join("").split("2").join("");
// };

// exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED");
// exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB");
// exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE");
// exist([["a","a"]], "aaa");
// exist([["a","b"]], "ba");





// var checkRecord = function(s) {
//     const checkObj = [];
//     let isFalse;
//     for(let i = 0; i < s.length; i++){
//         const hasLetter = checkObj.find((item) => item.letter === s[i]);
//         if(hasLetter){
//             if(hasLetter.ind + 1 === i && hasLetter.letter === "L"){
//                 hasLetter.ind = i;
//                 hasLetter.count += 1;
//                 if(hasLetter.count >= 3){
//                     hasLetter.count = 3;
//                 }
//             }else if(hasLetter.count < 3 && hasLetter.letter === "L"){
//                 hasLetter.ind = i;
//                 hasLetter.count = 1;
//             }
//
//             if(hasLetter.letter === "A"){
//                 isFalse = true;
//             }
//         }else {
//             checkObj.push({
//                 ind: i,
//                 letter: s[i],
//                 count: 1
//             });
//         }
//     }
//
//     const isLThree = checkObj.find((item) => item.letter === "L" && item.count >= 3);
//     return !(isFalse || !!isLThree);
// };
//
// checkRecord("PPALLP");
// checkRecord("PPALLL");
// checkRecord("PPAALLL");
// checkRecord("PLLPLLLLPP");
// checkRecord("LLLALL");




// var licenseKeyFormatting = function(s, k) {
//     let resultText = "";
//     let subLeftNum = 0;
//     let splittedArr = s.split("-").join("").toUpperCase();
//     const dash = Math.ceil(splittedArr.length / k);
//     let leftNum = recursive(splittedArr.length, k);
//
//     if(s.length < k){
//         return s;
//     }
//
//     for(let  i = 0; i < dash; i++){
//         if(leftNum){
//             resultText += splittedArr.slice(0, leftNum) + "-";
//             subLeftNum = leftNum;
//             leftNum = 0;
//         }else {
//             resultText += splittedArr.slice(subLeftNum, k + subLeftNum) + (k + subLeftNum === splittedArr.length ? "" : "-");
//             subLeftNum += k;
//         }
//     }
//
//     return resultText === "-" ? s : resultText;
// };
//
// const recursive = (len, num) => {
//     if(len - num > num){
//         return recursive(len - num, num);
//     }else {
//         return len - num;
//     }
// }
//
// licenseKeyFormatting("5F3Z-2e-9-w", 4);
// licenseKeyFormatting("2-5g-3-J", 2);




// var sumOfUnique = function(nums) {
//     const obj = {};
//     let count = 0;
//     for(let i = 0; i < nums.length; i++){
//         if(obj[nums[i]]){
//             obj[nums[i]] = true;
//         }else {
//             obj[nums[i]] = nums[i];
//         }
//     }
//
//
//     for(let key in obj){
//         if(typeof obj[key] === 'number'){
//             count += obj[key];
//         }
//     }
//     return count;
// };
//
//
// sumOfUnique([1,2,3,2]);
// sumOfUnique([10,4,10,9,5]);
// sumOfUnique([1,1,1,1,1]);
// sumOfUnique([1,2,3,4,5]);
// sumOfUnique([10]);


// var threeConsecutiveOdds = function(arr) {
//     let count = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 1){
//             if(arr[i + 1] % 2 === 1){
//                 count += 1;
//             }else if(count === 2) {
//                 count += 1;
//             }
//         }else {
//             count = 0;
//         }
//     }
//
//     return count >= 3;
// };
//
// threeConsecutiveOdds([2,6,4,1]);
// threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]);



// O'zim uchun zo'r yechildi masala lekin TIME LIMITED
// var platesBetweenCandles = function(s, queries) {
//     let result = [];
//     const newQueries = [];
//     for(let i = 0; i < queries.length; i++){
//         const newArr = s.slice(queries[i][0], (queries[i][1] + 1));
//         newQueries.push(newArr);
//     }
//
//     for(let i = 0; i < newQueries.length; i++) {
//         result.push(handleFindCandles(newQueries[i]));
//     }
//
//     return result;
// };
//
// const handleFindCandles = (str) => {
//     let leftCandle = 0;
//     let rightCandle = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === "|" && str[i + 1] !== "|"){
//             rightCandle = i;
//         }
//     }
//
//     for(let i = str.length - 1; i >= 0; i--){
//         if(str[i] === "|" && str[i - 1] !== "|"){
//             leftCandle = i;
//         }
//     }
//
//     if(rightCandle === leftCandle || rightCandle - leftCandle === 1){
//         return 0;
//     }else {
//        return  handleCountCandles(str.slice(leftCandle, rightCandle))
//     }
// }
//
// const handleCountCandles = (slicedArr) => {
//     let candleCount = 0;
//     for(let i = 0; i < slicedArr.length; i++){
//         if(slicedArr[i] === "*"){
//             candleCount += 1;
//         }
//     }
//
//     return candleCount;
// }
//
// platesBetweenCandles("**|**|***|", [[2,5],[5,9]]);
// platesBetweenCandles("***|**|*****|**||**|*", [[1,17],[4,5],[14,17],[5,11],[15,16]]);




// var platesBetweenCandles = function(s, queries) {
//     let result = [];
//     const cols = [];
//     const newQueries = [];
//
//     for(let i = 0; i < s.length; i++){
//         if(s[i] === "|"){
//             cols.push(i);
//         }
//     }
//
//     for(let i = 0; i < queries.length; i++){
//         const newArr = s.slice(queries[i][0], (queries[i][1] + 1));
//         newQueries.push(newArr);
//     }
//
//     for(let i = 0; i < newQueries.length; i++) {
//         result.push(handleFindCandles(newQueries[i]));
//     }
//     console.log(cols)
//     return result;
// };
//
// const handleFindCandles = (str) => {
//     let leftCandle = 0;
//     let rightCandle = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === "|" && str[i + 1] !== "|"){
//             rightCandle = i;
//         }
//     }
//
//     for(let i = str.length - 1; i >= 0; i--){
//         if(str[i] === "|" && str[i - 1] !== "|"){
//             leftCandle = i;
//         }
//     }
//
//     if(rightCandle === leftCandle || rightCandle - leftCandle === 1){
//         return 0;
//     }else {
//        return  handleCountCandles(str.slice(leftCandle, rightCandle))
//     }
// }
//
// const handleCountCandles = (slicedArr) => {
//     let candleCount = 0;
//     for(let i = 0; i < slicedArr.length; i++){
//         if(slicedArr[i] === "*"){
//             candleCount += 1;
//         }
//     }
//
//     return candleCount;
// }
//
// platesBetweenCandles("**|**|***|", [[2,5],[5,9]]);
// platesBetweenCandles("***|**|*****|**||**|*", [[1,17],[4,5],[14,17],[5,11],[15,16]]);



// var finalString = function(s) {
//     let newString = "";
//     for(let i = 0; i < s.length; i++){
//         if(s[i] !== "i"){
//             newString += s[i];
//         }else {
//             newString = newString.split("").reverse().join("");
//         }
//     }
//
//     return newString;
// };
//
// finalString("string");
// finalString("poiinter");

// var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
//     let dateCount = 0;
//     const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
//     const maximumDate = Math.max(dateToMilliseconds(arriveAlice), dateToMilliseconds(arriveBob));
//     const minimumDate = Math.min(dateToMilliseconds(leaveAlice), dateToMilliseconds(leaveBob));
//     const maximumMonth = new Date(maximumDate * 1000).getMonth();
//     const minimumMonth = new Date(minimumDate * 1000).getMonth();
//     const maximumMeetingDate = new Date(maximumDate * 1000).getDate();
//     const minimumMeetingDate = new Date(minimumDate * 1000).getDate();
//     if(minimumMonth !== maximumMonth){
//         let allDate = 0;
//         for(let i = maximumMonth; i <= minimumMonth; i++){
//             allDate += months[i];
//         }
//
//         for(let i = maximumMeetingDate; i <= (allDate - (months[minimumMonth] - minimumMeetingDate)); i++){
//             dateCount += 1;
//         }
//     }else {
//         for(let i = maximumMeetingDate; i <= minimumMeetingDate; i++){
//             dateCount += 1;
//         }
//     }
//
//     return dateCount;
// };
//
// const dateToMilliseconds = (str) => {
//     var year = new Date().getFullYear();
//     var date = new Date(year + "-" + str);
//
//     var milliseconds = date.getTime();
//
//     return milliseconds / 1000;
// }
//
// // countDaysTogether("08-15", "09-18", "08-16", "09-19");
// countDaysTogether("03-09", "09-16", "08-27", "09-14");


// var numJewelsInStones = function(jewels, stones) {
//     let jewelStones = 0;
//
//
//     for(let i = 0; i < stones.length; i++){
//         for(let j = 0; j < jewels.length; j++){
//             if(stones[i] === jewels[j]){
//                 jewelStones += 1;
//             }
//         }
//     }
//
//     return jewelStones;
// };
//
// numJewelsInStones("aA", "aAAbbbb");
// numJewelsInStones("z", "ZZ");


// var countAsterisks = function(s) {
//     let count = 0;
//     let slashCount = 0;
//
//     for(let i = 0; i < s.length; i++){
//         if(slashCount === 0 && s[i] === "*"){
//             count += 1;
//         }else if(s[i] === '|'){
//             if(slashCount + 1 === 2){
//                 slashCount = 0;
//             }else {
//                 slashCount += 1;
//             }
//         }
//     }
//
//     return count;
// };
//
// countAsterisks("l|*e*et|c**o|*de|");
// countAsterisks("iamprogrammer");
// countAsterisks("yo|uar|e**|b|e***au|tifu|l");



// var isCircularSentence = function(sentence) {
//     const splittedString = sentence.split(" ");
//     if(splittedString.length === 1){
//         return sentence[0][0] === sentence[sentence.length];
//     }else {
//         let isCorrectSentence = [];
//         for(let i = 0; i < splittedString.length; i++){
//             if(splittedString[i][splittedString[i].length - 1] === (splittedString[i + 1] ? splittedString[i + 1][0] : splittedString[0][0])){
//                isCorrectSentence.push(true);
//             }else {
//                 isCorrectSentence.push(false);
//             }
//         }
//
//         return !isCorrectSentence.includes(false);
//     }
// };
//
// isCircularSentence("leetcode exercises sound delightful");
// isCircularSentence("eetcode");
// isCircularSentence("leetcode");
// isCircularSentence("Leetcode is cool");





// var sortString = function(s) {
//     let result = '';
//     const obj = [];
//     const str = s.split("").sort();
//
//     for(let i = 0; i < str.length; i++){
//         const finder = obj.find((item) => item.name === str[i]);
//         if(!finder){
//             obj.push({
//                 name: str[i],
//                 count: 1
//             })
//         }else {
//             finder.count += 1;
//         }
//     }
//
//     while (obj.length > 0){
//         for(let i = 0; i < obj.length; i++){
//             result += obj[i].name;
//             obj[i].count -= 1;
//             if(obj[i].count === 0){
//                 obj.splice(i, 1);
//                 i--;
//             }
//         }
//
//         for(let i = obj.length - 1; i >= 0; i--){
//             result += obj[i].name;
//             obj[i].count -= 1;
//             if(obj[i].count === 0){
//                 obj.splice(i, 1);
//             }
//         }
//     }
//
//     return result;
// };
//
// sortString("aaaabvvbbbccccdeebb");

// sortString("rat");



// Not solved

// var buddyStrings = function(s, goal) {
//     const arr = [];
//     let result = [];
//     for(let i = 0; i < s.length; i++){
//         for(let j = 0; j < goal.length; j++){
//             if(s[i] === goal[j] && i !== j){
//                 let realString = s.split("");
//                 let firstStr = realString[i];
//                 realString[i] = realString[j];
//                 realString[j] = firstStr;
//                 result.push(realString.join("") === goal);
//             }
//         }
//     }
//
//     return result.includes(true);
// };
//
// buddyStrings("abdc", "cbda");
// buddyStrings("ab", "ba");
// buddyStrings("ab", "ab");
// buddyStrings("abcd", "badc");
// buddyStrings("aaaaaaabc", "aaaaaaacb");




// let ok = "salom".split("");
// let p = ok[0];
// ok[0] = ok[3];
// ok[3] = p;
//
// console.log(ok)




// var twoOutOfThree = function(nums1, nums2, nums3) {
//     let obj = {};
//     let result = new Set([]);
//     const arrs = [nums1, nums2, nums3];
//     for(let i = 0; i < arrs.length; i++){
//
//         for(let j = 0; j < arrs[i].length; j++){
//             if(obj[arrs[i][j]] && obj[arrs[i][j]].name === arrs[i][j]){
//                 if(obj[arrs[i][j]].ind !== i){
//                     result.add(obj[arrs[i][j]].name);
//                 }
//             }else {
//                 obj[arrs[i][j]] = {
//                     name: arrs[i][j],
//                     ind: i
//                 }
//             }
//         }
//     }
//
//     return [...result];
// };
//
// twoOutOfThree([1,1,3,2],[2,3],[3]);
// twoOutOfThree([3,1],[2,3],[1,2]);
// twoOutOfThree([1,2,2],[4,4,3],[5]);




// var leftRightDifference = function(nums) {
//     if(nums.length === 2){
//         return nums.reverse();
//     }else if(nums.length === 1){
//         return [0];
//     }
//     let leftSum = 0;
//     let resultArr = [];
//     for(let i = 0; i < nums.length; i++){
//         leftSum += nums[i];
//         let rightSum = 0;
//         for(let j = i; j < nums.length; j++){
//             rightSum += nums[j];
//         }
//
//         resultArr.push(Math.max(rightSum, leftSum) - Math.min(rightSum, leftSum));
//     }
//
//     return  resultArr;
// };
//
// leftRightDifference([10,4,8,3]);
// leftRightDifference([1,6]);


// console.log([2,4,5,3])







// var maximumWealth = function(accounts) {
//     let result = [];
//     for(let i = 0; i < accounts.length; i++){
//         let oneBankWealth = 0;
//         for(let j = 0; j < accounts[i].length; j++){
//             oneBankWealth += accounts[i][j];
//         }
//         result.push(oneBankWealth);
//     }
//
//     return Math.max(...result);
// };
//
// maximumWealth([[1,2,3],[3,2,1]]);
// maximumWealth([[1,5],[7,3],[3,5]]);


// var finalPrices = function(prices) {
//     let result = [];
//     for(let i = 0; i < prices.length; i++){
//         let currentPrice = prices[i];
//
//         if(currentPrice < Math.min(...prices.slice(i + 1, prices.length))){
//             result.push(currentPrice);
//         }
//
//         for(let j = i + 1; j < prices.length; j++){
//             if(currentPrice >= prices[j]){
//                 result.push(currentPrice - prices[j]);
//                 break;
//             }
//         }
//     }
//
//     return result;
// };


// finalPrices([8,4,6,2,3]);
// finalPrices([10,1,1,6]);




// var busyStudent = function(startTime, endTime, queryTime) {
//     let result = 0;
//     for(let i = 0; i < startTime.length; i++){
//
//         for(let j = startTime[i]; j <= endTime[i]; j++){
//
//             if(j === queryTime){
//                 result += 1;
//             }
//         }
//     }
//
//     return result;
// };
//
// busyStudent([1,2,3], [3,2,7], 4);
// busyStudent([4], [4], 4);



// var findMiddleIndex = function(nums) {
//     let result = -1;
//     let countAll = nums.reduce((acc, count) => acc + count, 0);
//     let count = 0;
//     for(let i = 0; i < nums.length; i++){
//         count += nums[i];
//
//         if(count === countAll - count){
//             result = i;
//             break;
//         }
//     }
//
//     return result;
// };
//
// findMiddleIndex([1,-1,4]);
// findMiddleIndex([2,3,-1,8,4]);


// var numberOfPoints = function(nums) {
//     const sets = new Set([]);
//
//     for(let i = 0; i < nums.length; i++){
//         for(let j = nums[i][0]; j <= nums[i][1]; j++){
//             sets.add(j)
//         }
//     }
//
//     return sets.size;
// };
//
// numberOfPoints([[3,6],[1,5],[4,7]]);
// numberOfPoints([[1,3],[5,8]]);


class ListNode {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
    }
}

// [6,8,6,4,5,6,5,4,3,4,5,3]
let node1 = new ListNode(6)
let node2 = new ListNode(8)
let node3 = new ListNode(6)
let node4 = new ListNode(4)
let node5 = new ListNode(5)
let node6 = new ListNode(6)
let node7 = new ListNode(5)
let node8 = new ListNode(4)
let node9 = new ListNode(3)
let node10 = new ListNode(4)
let node11 = new ListNode(5)
let node12 = new ListNode(3)

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;
node4.next = node5;
node5.next = node6;
node6.next = node7;
node7.next = node8;
node8.next = node9;
node9.next = node10;
node10.next = node11;
node11.next = node12;

// let nodes1 = new ListNode(9)
// let nodes2 = new ListNode(9)
// let nodes3 = new ListNode(9)
// let nodes4 = new ListNode(9)
//
// nodes1.next = nodes2;
// nodes2.next = nodes3;
// nodes3.next = nodes4;
//
let list1 = new LinkedList(node1);
// let list2 = new LinkedList(nodes1);


// var hasCycle = function(head) {
//     let slow = head;
//     let fast = head;
//     let result = false;
//     while (fast !== null && fast.next !== null){
//         fast = fast.next.next;
//         slow = slow.next;
//         if(slow === fast){
//             result = true;
//             break;
//         }
//     }
//
//     return result;
// };
//
// hasCycle(list1.head)

// var deleteDuplicates = function(head) {
//     const obj = {};
//     let newList = new ListNode(999999);
//     let currentNode = newList;
//     let current = head;
//     let resultArr = [];
//     while (current !== null){
//         if(obj[current.data]){
//             obj[current.data] += 1;
//         }else {
//             obj[current.data] = 1;
//         }
//         current = current.next
//     }
//
//     for(let key in obj){
//         if(Number(obj[key]) === 1){
//             resultArr.push(Number(key));
//         }
//     }
//
//     resultArr.sort((a, b) => a - b);
//
//     resultArr.forEach((item) => {
//         const newNode = new ListNode(item);
//         currentNode.next = newNode;
//         currentNode = currentNode.next;
//     })
//
//     return newList.next;
// };
//
// deleteDuplicates(list1.head);

// var sortList = function(head) {
//     const arr = [];
//     let current = head;
//     let newList = new ListNode(999999);
//     let copiedLewList = newList;
//     while(current !== null) {
//         arr.push(current.data);
//         current = current.next;
//     }
//
//     arr.sort((a,b) => a - b);
//
//     for (let i = 0; i < arr.length; i++){
//         const newNode = new ListNode(arr[i]);
//         copiedLewList.next = newNode;
//         copiedLewList = copiedLewList.next;
//     }
//
//     return newList.next;
// };
//
// sortList(list1.head);


// var oddEvenList = function(head) {
//     let current = head;
//     let newList = new ListNode(999999);
//     let newList1 = new ListNode(555555);
//     let newNode = newList;
//     let newNode1 = newList1;
//     let count = 0;
//     while (current !== null){
//         count += 1;
//         if(count % 2 === 0){
//             newNode.next = current;
//             newNode = newNode.next;
//         }else {
//             newNode1.next = current;
//             newNode1 = newNode1.next;
//         }
//         current = current.next;
//         newNode.next = null;
//     }
//
//     newNode1.next = newList.next;
//     return newList1.next;
// };

// oddEvenList(list1.head)


// var mergeTwoLists = function(list1, list2) {
//     let current1 = list1.head;
//     let current2 = list2.head;
//     let newList = new ListNode(9999999);
//     let current = newList;
//
//     while (current1 !== null && current2 !== null){
//         if(current1.data < current2.data){
//             current.next = current1;
//             current1 = current1.next;
//         } else {
//             current.next = current2;
//             current2 = current2.next;
//         }
//          current = current.next;
//     }
//
//     if(current1 === null){
//         current.next = current2;
//     }else {
//         current.next = current1;
//     }
//
//     return newList.next;
// };
//
// mergeTwoLists(list1, list2);

//
// var isPalindrome = function(head) {
//     let slow = head;
//     let fast = head;
//     while (fast !== null && fast.next !== null){
//         fast = fast.next.next;
//         slow = slow.next;
//     }
//
//     const { prev, count} = reversedHalf(slow);
//
//     console.log(firstHal(head, prev, count));
//     return firstHal(head, prev, count);
// };
//
// const reversedHalf =  (list) => {
//     let current = list;
//     let prev = null;
//     let next = list.next;
//     let count = 0;
//     while (current !== null){
//         next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//         count += 1;
//     }
//
//     return {
//         prev: prev,
//         count: count
//     };
// }
//
// const firstHal = (head, prev, count) => {
//     let current = head;
//     let currentPrev = prev;
//     while (currentPrev !== null){
//         if(currentPrev.data === current.data){
//             currentPrev = currentPrev.next;
//             current = current.next;
//         }else {
//             return false;
//         }
//     }
//
//     return true;
// }
//
// isPalindrome(list.head);


// let current = list.head;
// let prev = null;
// let next = list.head.next;
// while (current !== null){
//     next = current.next;
//     current.next = prev;
//     prev = current;
//     current = next;
// }
//
// console.log(prev)
// let count = 6;
// let prev = null;
// while (current !== null){
//
//     while (list.head !== null && list.head.data === count){
//         list.head = list.head.next;
//     }
//
//     if(current.next && current.next.data === count){
//         current.next = current.next.next;
//     }else {
//         current = current.next;
//     }
// }
//
// console.log(list.head)

// let current = list.head;
// let slow = list.head;
// let fast = list.head;
//
// while (fast !== null && fast.next !== null){
//     fast = fast.next.next;
//     slow = slow.next;
// }
//
//
// console.log(slow, fast);

// while (current !== null){
//     console.log('ss')
//     if(current.next && current.data === current.next.data){
//         if(current.next.next !== null){
//             current.next = current.next.next;
//             current = current.next.next;
//         }else {
//             current.next = null;
//         }
//     }else {
//         current = current.next
//     }
// }
//
//
// console.log(list)



// var separateDigits = function(nums) {
//     return nums.join("").split("").map(Number);
// };
//
// separateDigits([13,25,83,77]);


// var findErrorNums = function(nums) {
//     const sortedArr = nums.sort((a,b) => a - b);
//     let leftNum = 0;
//     let obj = {};
//     let equal = 0;
//     for(let i = 0; i < sortedArr.length; i++){
//         if(!sortedArr.includes(i + 1)){
//             leftNum = i + 1;
//         }
//
//         if(obj[sortedArr[i]]){
//             equal = sortedArr[i];
//         }else {
//             obj[sortedArr[i]] = sortedArr[i]
//         }
//     }
//
//     return [equal, leftNum];
// };

// findErrorNums([1,2,2,4]);
// findErrorNums([2,2]);
// findErrorNums([1,1]);
// findErrorNums([3,2,3,4,6,5]);




// var pivotIndex = function(nums) {
//     let sum = nums.reduce((acc, num) => acc += num, 0);
//     let leftSum = 0;
//
//     for(let i = 0; i < nums.length; i++){
//         if(sum - nums[i] - leftSum === leftSum){
//             return i;
//         }else {
//             leftSum += nums[i];
//         }
//     }
//
//     return -1;
// };
//
// pivotIndex([1,7,3,6,5,6]);



// var kthSmallestPrimeFraction = function(arr, k) {
//     let resultArr = [];
//     for(let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             const partNum = (100 / arr[j]) * arr[i];
//             resultArr.push({
//                 num: partNum,
//                 ind: [arr[i], arr[j]]
//             });
//         }
//     }
//
//     resultArr.sort((a,b) => a.num - b.num);
//     return resultArr[k - 1];
// };

// kthSmallestPrimeFraction([1,2,3,5], 3);
// kthSmallestPrimeFraction([1,7], 1);
// kthSmallestPrimeFraction([1,3,5,7,11,29,37,53,79,97], 38);





// var MyHashSet = function() {
//     this.datas = new Set([]);
// };
//
// MyHashSet.prototype.add = function(key) {
//     this.datas.add(key);
// };
//
// MyHashSet.prototype.remove = function(key) {
//     const finder = this.datas.has(key);
//
//     if(finder){
//         this.datas.delete(key);
//     }
// };
//
// MyHashSet.prototype.contains = function(key) {
//     return this.datas.has(key);
// };
//
//
//
// var obj = new MyHashSet();
// obj.add(1);
// obj.add(2);
// obj.contains(1);
// obj.contains(3);
// obj.add(2);
// obj.contains(2);
// obj.remove(2);
// obj.contains(2);




// var isValidSudoku = function(board) {
//     const rows = new Set([]);
//     const cols = new Set([]);
//     // const
//
//     for(let i = 0; i < 9; i++){
//         for(let j = 0; j < 9; j++){
//             if(board[i][j] !== "."){
//                 rows[i].add(board[i][j]);
//                 cols[j].add(board[i][j]);
//             }
//         }
//     }
//
//     console.log(rows)
// };
//
// isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]])




// var commonChars = function(words) {
//     const hashTable = {};
//     const result = [];
//     const newArr = words;
//
//     for(let i = 0; i < newArr[0].length; i++){
//         hashTable[i] = {
//             name: null,
//             validArr: []
//         };
//         for(let j = 1; j < newArr.length; j++){
//             if(newArr[j].includes(newArr[0][i])){
//                 const finder = newArr[j].split("").findIndex((item) => item === newArr[0][i]);
//                 hashTable[i].name = newArr[0][i];
//                 hashTable[i].validArr.push(true);
//                 newArr[j] = newArr[j].slice(0, finder) + newArr[j].slice(finder + 1)
//             }else {
//                 hashTable[i].name = newArr[0][i];
//                 hashTable[i].validArr.push(false);
//             }
//         }
//     }
//
//
//     for(let key in hashTable){
//         if(!hashTable[key].validArr.includes(false)){
//             result.push(hashTable[key].name);
//         }
//     }
//
//     return result;
// };
//
// commonChars(["acabcddd","bcbdbcbd","baddbadb","cbdddcac","aacbcccd","ccccddda","cababaab","addcaccdddddd"]);
// commonChars(["bella","label","roller"]);
// commonChars(["cool","lock","cook"]);


// var haveConflict = function(event1, event2) {
//     if((event1[1] > event2[0] && event1[0] > event2[0]) && event1[0] > event2[1]){
//         return false;
//     }else return event1[1] >= event2[0];
// };
//
// haveConflict(["01:15","02:00"],["02:00","03:00"])
// haveConflict(["01:00","02:00"], ["01:20","03:00"])
// haveConflict(["10:00","11:00"],["14:00","15:00"])
// haveConflict(["14:13","22:08"],["02:40","08:08"])
// haveConflict(["10:00","11:00"],["14:00","15:00"])



// var checkDistances = function(s, distance) {
//     const hashTable = {};
//     const arr = ['abcdefghijklmnopqrstuvwxyz'].join("").split("");
//
//     for(let i = 0; i < s.length; i++){
//         if(hashTable[s[i]] !== undefined){
//             hashTable[s[i]] = i - (hashTable[s[i]] + 1);
//         }else {
//             hashTable[s[i]] = i
//         }
//     }
//
//
//     for(let key in hashTable){
//         const finder = arr.findIndex((item) => item === key);
//         if(hashTable[key] !== distance[finder]){
//             return false
//         }
//     }
//
//     return true;
// };
//
// checkDistances("abaccb", [1,3,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
// checkDistances("aa", [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
// checkDistances("zz", [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]);



// var isAlienSorted = function(words, order) {
//     const hashTable = {};
//     for(let i = 0; i < order.length; i++){
//         hashTable[order[i]] = i
//     }
//
//     let filteredArr = words.sort((a,b) => hashTable[a[0]] > hashTable[b[0]]);
//
//     if(JSON.stringify(filteredArr) !== JSON.stringify(words)){
//         console.log(false)
//         return false;
//     }
//
//     if(words[0][0] < words[1][0]){
//         console.log(true)
//         return true;
//     }
//
//     let count = 0;
//     for(let i = 0; i < words[0].length; i++){
//         count = hashTable[words[0][i]];
//         for(let j = 1; j < words.length; j++){
//             if(hashTable[words[j][i]] === undefined){
//                 console.log(false)
//                 return false;
//             }
//             if(count > hashTable[words[j][i]]){
//                 console.log(false)
//                 return false;
//             }else {
//                 count = hashTable[words[j][i]];
//             }
//         }
//     }
//     console.log(true)
//     return true;
// };
//
// isAlienSorted(["hcccc","leetcode"], "hlabcdefgijkmnopqrstuvwxyz");
// isAlienSorted(["world","rora","world"], "worldabcefghijkmnpqstuvxyz");
// isAlienSorted(["apple","app"], "abcdefghijklmnopqrstuvwxyz");
// isAlienSorted(["kuvp","q"], "ngxlkthsjuoqcpavbfdermiywz");



// var mergeNodes = function(head) {
//     let dummyNode = new ListNode(99999);
//     let newDummyNode = dummyNode;
//     let zeroCount = 0;
//     let current = head;
//     let sum = 0;
//     while (current !== null){
//         if(zeroCount === 1){
//             sum += current.data;
//         }
//
//         if(current.data === 0){
//             zeroCount += 1;
//         }
//
//         if(zeroCount === 2){
//             newDummyNode.next = new ListNode(sum);
//             newDummyNode = newDummyNode.next;
//             sum = 0;
//             zeroCount = 1;
//         }
//
//         current = current.next;
//     }
//     return dummyNode.next;
// };
//
// mergeNodes(list2.head);





// var MyLinkedList = function() {
//     this.head = null;
// };
//
// MyLinkedList.prototype.get = function(index) {
//     let current = this.head;
//     let count = 0;
//     while (current !== null){
//         count += 1;
//         if((count - 1) === index){
//             return current.data;
//         }
//         current = current.next;
//     }
//
//     return -1;
// };
//
// MyLinkedList.prototype.addAtHead = function(val) {
//     const dummyNode = new ListNode(val);
//     dummyNode.next = this.head;
//     this.head = dummyNode;
// };
//
// MyLinkedList.prototype.addAtTail = function(val) {
//     let current = this.head;
//
//     if(current === null){
//         this.head = new ListNode(val);
//         return;
//     }
//
//     while (current && current.next !== null){
//         current = current.next;
//     }
//
//     current.next = new ListNode(val);
// };
//
// MyLinkedList.prototype.addAtIndex = function(index, val) {
//     let current = this.head;
//     let dummyNode = new ListNode(val);
//     let newList = dummyNode;
//     let count = 0;
//
//     if (index === 0) {
//         const lastHead = this.head;
//         this.head = new ListNode(val);
//         this.head.next = lastHead;
//         return;
//     }
//
//     while (current !== null){
//         count += 1;
//         if(count === index){
//             newList.next = current.next;
//             current.next = dummyNode;
//             return;
//         }else {
//             current = current.next;
//         }
//     }
// };
//
// MyLinkedList.prototype.deleteAtIndex = function(index) {
//     if (index < 0) return;
//     if (this.head === null) return;
//
//     if (index === 0) {
//         this.head = this.head.next;
//         return;
//     }
//
//     let current = this.head;
//     let count = 0;
//
//     while (current !== null && count < index - 1) {
//         current = current.next;
//         count++;
//     }
//
//     if (current === null || current.next === null) {
//         return;
//     }
//
//     current.next = current.next.next;
// };
//
//
//
//
// var obj = new MyLinkedList()
// obj.addAtHead(2)
// console.log(obj)
// obj.addAtIndex(0,1)
// console.log(obj)
//
// console.log(obj.get(1))
// obj.deleteAtIndex(1)
// console.log(obj)
// obj.get(1)
// console.log(obj)




// var nodesBetweenCriticalPoints = function(head) {
//     let current = head.next;
//     let prev = head;
//     let next = head.next.next;
//     let resultArr = [];
//     let count = 1;
//     let minCount = [];
//     let minCounter = null;
//     if(next === null){
//         return [-1, -1];
//     }
//
//     while (next !== null && current !== null){
//         count += 1;
//         if((current.data > prev.data && current.data > next.data) || (current.data < prev.data && current.data < next.data)){
//             if(minCounter !== null && (count - minCounter) > 0){
//                 minCount.push(count - minCounter);
//                 minCounter = count;
//             }else {
//                 minCounter = count;
//             }
//             resultArr.push(count);
//         }
//         prev = current;
//         current = current.next;
//         next = next.next
//     }
//
//     if(resultArr.length >= 3){
//         return [Math.min(...minCount), resultArr[resultArr.length - 1] - resultArr[0]];
//     }else if(resultArr.length === 2){
//         return [resultArr[1] - resultArr[0], resultArr[1] - resultArr[0]];
//     }
//     return [-1, -1];
// };
//
// nodesBetweenCriticalPoints(list2.head);



// var addTwoNumbers = function(l1, l2) {
//     let current = l1;
//     let current1 = l2;
//     let firstResult = "";
//     let secondResult = "";
//     let sumResult = 0;
//     let dummyNode = new ListNode(9999);
//     while (current !== null){
//         firstResult += current.data;
//         current = current.next;
//     }
//
//     while (current1 !== null){
//         secondResult += current1.data;
//         current1 = current1.next;
//     }
//
//     sumResult = Number(firstResult) + Number(secondResult);
//     let sumResultArr = sumResult.toString().split("").reverse();
//
//     for(let i = 0; i < sumResultArr.length; i++){
//         let newNode = new ListNode(Number(sumResultArr[i]));
//         if(dummyNode.data === 9999){
//             dummyNode = newNode;
//         }else {
//             newNode.next = dummyNode;
//             dummyNode = newNode;
//         }
//     }
//
//     return dummyNode;
// };
//
// addTwoNumbers(list2.head, list1.head)




// var trimMean = function(arr) {
//     arr.sort((a, b) => a - b);
//     let numberToRemove = (5 * arr.length) / 100;
//     arr.splice(0, numberToRemove);
//     for(let i = 0; i < numberToRemove; i++){
//         arr.pop();
//     }
//     let sum = arr.reduce((acc, num) => acc += num, 0);
//
//     return sum / arr.length;
// };
//
// trimMean([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]);
// trimMean([6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4]);


// var findWordsContaining = function(words, x) {
//     const result = [];
//     for(let i = 0; i < words.length; i++){
//         for(let j = 0; j < words[i].length; j++){
//             if(words[i][j] === x){
//                 result.push(i);
//                 break;
//             }
//         }
//     }
//
//     return result;
// };
//
// findWordsContaining(["leet","code"], "e");



// var frequencySort = function(nums) {
//     const hashTable = {};
//     let arr = [];
//     const resultArr = [];
//     for(let i = 0; i < nums.length; i++){
//         if(hashTable[nums[i]]){
//             hashTable[nums[i]].count += 1;
//         }else {
//             hashTable[nums[i]] = {
//                 count: 1,
//                 num: nums[i]
//             }
//         }
//     }
//
//
//     for(let key in hashTable){
//         arr.push(hashTable[key]);
//     }
//
//     arr = arr.sort(customSortFn);
//
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr[i].count; j++){
//             resultArr.push(arr[i].num);
//         }
//     }
//
//     return resultArr;
// };
//
// const customSortFn = (a,b) => {
//     if(a.count === b.count){
//         return a.num > b.num ? -1 : a.num < b.num ? 1 : 0;
//     }
//
//     return a.count > b.count ? 1 : -1;
// }
//
// frequencySort([1,1,2,2,2,3])
// frequencySort([2,3,1,3,2])
// frequencySort([-1,1,-6,4,5,-6,1,4,1])




// var greatestLetter = function(s) {
//     const newArr = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("").reverse();
//     let result = "";
//     for(let i = 0; i < newArr.length; i++){
//         const lowerCaseLetter = newArr[i].toLowerCase();
//         if(s.includes(lowerCaseLetter) && s.includes(newArr[i])){
//             result = newArr[i];
//             break;
//         }
//     }
//
//     return result;
// };
//
// greatestLetter("lEeTcOdE");
// greatestLetter("arRAzFif");
// greatestLetter("AbCdEfGhIjK");
// greatestLetter("nzmguNAEtJHkQaWDVSKxRCUivXpGLBcsjeobYPFwTZqrhlyOIfdM");



// var reorderList = function(head) {
//     let slow = head, fast = head;
//     while (fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }
//
//     console.log(slow.next)
//
//     const reversedSecondHalfList = reverseList(slow);
//
//     let first = head, second = reversedSecondHalfList;
//     while (second) {
//         let tmp1 = first.next;
//         let tmp2 = second.next;
//         first.next = second;
//         second.next = tmp1;
//         first = tmp1;
//         second = tmp2;
//     }
// };
//
// const reverseList = (list) => {
//     let current = list;
//     let prev = null;
//
//     while (current !== null){
//         let nextNode = current.next;
//         current.next = prev;
//         prev = current;
//         current = nextNode;
//     }
//
//     return prev;
// }
//
// reorderList(list1.head)



// var countPoints = function(rings) {
//     const hashTable = {};
//     let result = 0;
//     for(let i = 1; i < rings.length; i+=2){
//         if(hashTable[rings[i]]){
//             hashTable[rings[i]].add(rings[i - 1]);
//         }else {
//             hashTable[rings[i]] = new Set([]);
//             hashTable[rings[i]].add(rings[i - 1]);
//         }
//     }
//
//     for(let key in hashTable){
//         if(hashTable[key].size >= 3){
//             result += 1;
//         }
//     }
//
//     return result;
// };
//
// countPoints("B0B6G0R6R0R6G9");
// countPoints("B0R0G0R9R0B0G0");
// countPoints("G4");



class BinaryNode {
    constructor(val, left, right) {
        this.val = val;
        this.left = left ?? null;
        this.right = right ?? null;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insert(data){
        const newNode = new BinaryNode(data);
        if(this.root === null){
            this.root = newNode;
        }else {
            let current = this.root;
            while (true){
                if(data > current.val){
                    if(current.right === null){
                        current.right = newNode;
                        break;
                    }else {
                        current = current.right;
                    }
                }else {
                    if(current.left === null){
                        current.left = newNode;
                        break;
                    }else {
                        current = current.left;
                    }
                }
            }
        }
    }
}

const newTree = new BinarySearchTree();
// newTree.insert(15);

const arr = [5,3,6,2,4,null,8,1,null,null,null,7,9];

for(let i = 0; i < arr.length; i++){
    newTree.insert(arr[i]);
}
//
//
// var rangeSumBST = function(root, low, high) {
//     let sum = 0;
//     let current = root;
//     while (true) {
//         if(!current) break;
//
//         if(current.val >= low && current.val <= high){
//             sum += current.val;
//         }
//         if(current.val > low){
//             current = current.left;
//         }else if(current.val < high){
//             current = current.right;
//         }
//     }
//     return sum;
// };
//
//
//
//
// rangeSumBST(newTree.root, 18, 24);





// var searchBST = function(root, val) {
//     let current = root;
//     while (true){
//         if(current && current.val === val){
//             return current;
//         }else if(current === null){
//             return null;
//         } else {
//             if(val > current.val){
//                 current = current.right;
//             }else {
//                 current = current.left;
//             }
//         }
//     }
// };
//
// searchBST(newTree.root, 5)



// var relativeSortArray = function(arr1, arr2) {
//     const hashMap = {};
//     const endArr = [];
//     const result = [];
//     for (let i = 0; i < arr2.length; i++){
//         hashMap[`l${arr2[i]}`] = {
//             name: arr2[i],
//             count: 0
//         };
//     }
//
//     for(let i = 0; i < arr1.length; i++){
//         if(hashMap[`l${arr1[i]}`]){
//             hashMap[`l${arr1[i]}`].count += 1;
//         }else {
//             endArr.push(arr1[i]);
//         }
//     }
//
//
//     for(let key in hashMap){
//         if(hashMap[key].count > 1){
//             for(let i = 0; i < hashMap[key].count; i++){
//                 result.push(hashMap[key].name);
//             }
//         }else {
//             result.push(hashMap[key].name);
//         }
//     }
//
//     return [...result, ...endArr.sort((a,b) => a - b)];
// };

// [2,2,2,1,4,3,3,9,6,7,19]
// [22,22,28,8,6,17,44]
// relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]);
// relativeSortArray([28,6,22,8,44,17,22], [22,28,8,6]);


// var findLengthOfLCIS = function(nums) {
//     let lengths= [];
//     let num = 0;
//     let oneLength = 0;
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] > num){
//             oneLength += 1;
//             if(i === (nums.length - 1)){
//                 lengths.push(oneLength);
//             }
//         }else {
//             lengths.push(oneLength);
//             oneLength = 1;
//         }
//         num = nums[i];
//     }
//
//     return lengths.length ? lengths.sort((a,b) => b - a)[0] : oneLength;
// };
//
// findLengthOfLCIS([1,3,5,4,7]);
// findLengthOfLCIS([2,2,2,2,2]);
// findLengthOfLCIS([1,3,5,7]);
// findLengthOfLCIS([1,3,5,4,2,3,4,5]);



// var findMaxConsecutiveOnes = function(nums) {
//     const arr = [[]];
//     let index = 0;
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] !== 1){
//             index += 1;
//             arr[index] = [];
//         }else {
//             arr[index].push(nums[i])
//         }
//     }
//
//     return arr.sort((a,b) => b.length - a.length)[0].length;
// };
//
// findMaxConsecutiveOnes([1,1,0,1,1,1]);
// findMaxConsecutiveOnes([1,0,1,1,0,1]);


// var equalFrequency = function(word) {
//     const obj = {};
//     const arr = [];
//     const resultArr = [];
//
//     for(let i = 0; i < word.length; i++){
//         if(obj[word[i]]){
//             obj[word[i]] += 1;
//         }else {
//             obj[word[i]] = 1;
//         }
//     }
//
//     for(let key in obj){
//         arr.push(obj[key])
//     }
//
//     arr.sort((a, b) => a - b);
//
//     if(arr.every((item) => item === 1)){
//         console.log(true)
//         return true;
//     }
//
//     for(let i = 0; i < arr.length; i++){
//         resultArr[i] = [];
//         resultArr[i].push(arr[i] - 1);
//         for(let j = 0; j < arr.length; j++){
//             if(j !== i){
//                 resultArr[i].push(arr[j]);
//             }
//         }
//     }
//
//     for(let i = 0; i < resultArr.length; i++){
//         let sorted = resultArr[i].sort((a,b) => a - b);
//         sorted = sorted.filter((item) => item !== 0);
//         if(sorted[0] === sorted[sorted.length - 1]){
//             console.log(true)
//             return true;
//         }
//     }
//
//     console.log(false)
//     return false;
// };
//
// equalFrequency("abcc");
// equalFrequency("aazz");
// equalFrequency("ddaccb");
// equalFrequency("babbdd");
// equalFrequency("bac");
// equalFrequency("abbcc");
// equalFrequency("safasfrrkkkkfkfasfasfasgaspppp2412mmfamsfwrqwrfsafasfsa");



// var replaceElements = function(arr) {
//     let array = [...arr];
//     const resultArr = [];
//     for(let i = 0; i < arr.length; i++){
//         let maxNumber = 0;
//         for(let j = i + 1; j < array.length; j++){
//             if(maxNumber < array[j]){
//                 maxNumber = array[j];
//             }
//         }
//         maxNumber > 0 ? resultArr.push(maxNumber) : resultArr.push(-1)
//     }
//
//     // console.log(resultArr)
//     return resultArr;
// };
//
// replaceElements([17,18,5,4,6,1]);



// var pairSum = function(head) {
//     let slow = head;
//     let fast = head;
//     let highSum = 0;
//     while (fast !== null && fast.next !== null){
//         slow = slow.next;
//         fast = fast.next.next;
//     }
//
//     const result =  reverseLinkedList(slow);
//     let currentResult = result;
//     let currentHead = head;
//     while (currentResult !== null){
//         if((currentResult.data + currentHead.data) > highSum){
//             highSum = (currentResult.data + currentHead.data);
//         }
//         currentResult = currentResult.next;
//         currentHead = currentHead.next
//     }
//
//     return highSum;
// };
//
//
// const reverseLinkedList = (list) => {
//     let current = list;
//     let prev = null;
//
//     while (current !== null){
//         const next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;
//     }
//
//     return prev;
// }
//
// pairSum(list1.head);


// var removeOuterParentheses = function(s) {
//     let result = "";
//     let count = 0;
//     for(let i = 0; i < s.length; i++){
//         if(s[i] === "("){
//             if(count > 0){
//                 result += s[i];
//             }
//             count++
//         }else if(s[i] === ")"){
//             count--
//             if(count > 0){
//                 result += s[i];
//             }
//         }
//     }
//
//     return result;
// };
//
// removeOuterParentheses("(()())(())(()(()))")
// removeOuterParentheses("(()())(())")


// const depFirstValues = (root) => {
//     const stack = [ root ];
//
//     while (stack.length > 0){
//         const current = stack.pop();
//         console.log(current.data);
//
//         if(current.right) stack.push(current.right);
//         if(current.left) stack.push(current.left);
//     }
//
//     console.log(stack)
// }
//
// depFirstValues(newTree.root)


// var countNegatives = function(grid) {
//     let count = 0;
//     for(let i = 0; i < grid.length; i++){
//         const isMinNumber = Math.min(...grid[i]);
//         if(isMinNumber < 0){
//             for(let j = 0; j < grid[i].length; j++){
//                 if(grid[i][j] < 0){
//                     count += 1;
//                 }
//             }
//         }
//     }
//
//     return count;
// };
//
// countNegatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]])



// var diagonalSum = function(mat) {
//     let sum = 0;
//
//     for(let i = 0; i < mat.length; i++){
//         for(let j = 0; j < mat[i].length; j++){
//             if(i === j){
//                 if(i !== (mat.length - i - 1)){
//                     sum += (mat[i][mat.length-i-1] + mat[i][j]);
//                 }else {
//                     sum += mat[i][j];
//                 }
//             }
//         }
//     }
//
//     return sum;
// };
//
// diagonalSum([[1,2,3],[4,5,6],[7,8,9]]);


// var diStringMatch = function(s) {
//     let I = 0;
//     let D = s.length;
//     const result = [];
//
//     for(let i = 0; i < s.length; i++){
//         if(s[i] === 'I'){
//             result.push(I);
//             I++
//         }else {
//             result.push(D);
//             D--
//         }
//     }
//
//     return result.push(D);
// };
//
// diStringMatch("IDID");
// diStringMatch("III");
// diStringMatch("DDI");


// var findTheDistanceValue = function(arr1, arr2, d) {
//     let resultCount = 0;
//     for(let i = 0; i < arr1.length; i++){
//         let count = 0;
//         for(let j = 0; j < arr2.length; j++){
//             if(Math.abs(arr1[i] - arr2[j]) > d){
//                 count += 1;
//             }
//         }
//
//         if(count === arr2.length){
//             resultCount += 1;
//         }
//     }
//
//     console.log(resultCount)
//
//     return resultCount;
// };

// findTheDistanceValue([4,5,8],[10,9,1,8], 2);
// findTheDistanceValue([1,4,2,3],[-4,-3,6,10,20,30], 3);


// var flipAndInvertImage = function(image) {
//     let result = [];
//     for(let i = 0; i < image.length; i++){
//         result[i] = []
//         for(let j = image[i].length; j >= 0; j--){
//             if(image[i][j] === 1){
//                 result[i].push(0);
//             }else if(image[i][j] === 0) {
//                 result[i].push(1);
//             }
//         }
//     }
//     return result;
// };
//
// flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]]);


// var countKDifference = function(nums, k) {
//     let count = 0;
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j < nums.length; j++){
//             if(Math.abs(nums[i] - nums[j]) === k){
//                 count += 1;
//             }
//         }
//     }
//
//     return count;
// };
// countKDifference([3,2,1,5,4], 2);




// var numIdenticalPairs = function(nums) {
//     let result = 0;
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i+1; j < nums.length; j++){
//             if(nums[i] == nums[j]){
//                 result += 1;
//             }
//         }
//     }

//     return result;
// };

// numIdenticalPairs([1,2,3,1,1,3]);
// numIdenticalPairs([1,1,1,1]);



// var luckyNumbers  = function(matrix) {
//     const hashSet = {};
//     const minArr = [];
//     const result = [];
//     for(let row = 0; row < matrix.length; row++){
//         minArr.push(Math.min(...matrix[row]))
//         for(let col = 0; col < matrix[row].length; col++){
//             if(hashSet[col]){
//                 if(hashSet[col] < matrix[row][col]){
//                     hashSet[col] = matrix[row][col];
//                 }
//             }else {
//                 hashSet[col] = matrix[row][col];
//             }
//         }
//     }
//
//     for(let key in hashSet){
//         if(minArr.includes(hashSet[key])){
//             result.push(hashSet[key])
//         }
//     }
//
//     return result;
// };
//
// luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]);
// luckyNumbers([[1,10,4,2],[9,3,8,7],[15,16,17,12]]);
// luckyNumbers([[3,6],[7,1],[5,2],[4,8]]);

// const minValue = (root) => {
//     if (!root.left && !root.right) return root.val
//     let res = root.val // 16, 3
//     if (root.right) {
//         res = Math.min(res, minValue(root.right))
//     }
//     if (root.left) {
//         const leftMin = minValue(root.left) // 3
//         res = Math.min(res, leftMin)
//     }
//
//     return res
// }
// /*
// *             1
// *           /    \
// *        null      2
// *       /   \    /   \
// *               3
// *
// * */
//
// console.log(minValue(newTree.root))



// function inorderTraversal(root) {
//     const result = [];
//     const stack = [];
//     let current = root;
//
//     while (current !== null || stack.length > 0) {
//         while (current !== null) {
//             stack.push(current);
//             current = current.left;
//         }
//         current = stack.pop();
//         result.push(current.val);
//
//         current = current.right;
//     }
//     console.log(result)
//
//     return result;
// }
//
// inorderTraversal(newTree.root);




// var kthDistinct = function(arr, k) {
//     const hashTable = {};
//     const resultArr = [];
//     for(let i = 0; i < arr.length; i++){
//         if(hashTable[arr[i]]){
//             hashTable[arr[i]] += 1;
//         }else {
//             hashTable[arr[i]] = 1
//         }
//     }
//
//     for(let key in hashTable){
//         if(hashTable[key] === 1){
//             resultArr.push(key);
//         }
//     }
//
//     return resultArr[k - 1] ?? "";
// };

// kthDistinct(["d","b","c","b","c","a"], 2)


// var applyOperations = function(nums) {
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i + 1] && nums[i] === nums[i + 1]){
//             nums[i] = nums[i] * 2;
//             nums[i + 1] = 0
//         }
//     }
//
//     const zeros = [];
//     const numbers = [];
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] === 0){
//             zeros.push(0)
//         }else {
//             numbers.push(nums[i]);
//         }
//     }
//
//     return [...numbers, ...zeros];
// };

// applyOperations([1,2,2,1,1,0]);
// applyOperations([0,1,5,5,6,6,9,3]);
// applyOperations([349,349,514,514,0,0,835,835,835,0]);
// applyOperations([328,0,0,0,93,43,802,802,0,580,0,0,0,973,0,0,774]);


// var sumIndicesWithKSetBits = function(nums, k) {
//     let result = 0;
//     for(let i = 0; i < nums.length; i++){
//         const filtered = i.toString(2).split("").filter((item) => item === '1');
//         if(filtered.length === k){
//             result += nums[i];
//         }
//     }
//
//     return result;
// };
//
// sumIndicesWithKSetBits([5,10,1,5,2], 1);
// sumIndicesWithKSetBits([4,3,2,1], 2);

// var findGCD = function(nums) {
//     const minNumber = Math.min(...nums);
//     const maxNumber = Math.max(...nums);
//
//     if(maxNumber % minNumber === 0){
//         return minNumber;
//     }else {
//         return recursion(minNumber, maxNumber);
//     }
// };
//
// const recursion = (min, max) => {
//     if(max === 0) return min;
//     return recursion(max, min % max);
// }


// findGCD([2,5,6,7,8,9,10]);
// findGCD([7,5,6,8,3]);
// findGCD([6,9,10]);
// findGCD([42,35,37,38,15]);



// var countPairs = function(nums, target) {
//     let result = 0;
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j < nums.length; j++){
//             if(nums[i] + nums[j] < target){
//                 result += 1;
//             }
//         }
//     }
//
//     return result;
// };
//
// countPairs([-6,2,5,-2,-7,-1,3], -2);


// var sumCounts = function(nums) {
//     const set = new  Set([]);
//     for (let i = 0; i < nums.length; i++) {
//         let distinctElements = new Set()
//         for (let j = i; j < nums.length; j++) {
//             distinctElements.add(nums[j]);
//             console.log(i, distinctElements)
//             // const distinctCount = distinctElements.size
//             // totalSum += distinctCount * distinctCount
//         }
//     }
//     // if(!set.has(nums)){
//     //     set.add(nums);
//     // }
//
//     // console.log(set)
// };

// sumCounts([1,2,1]);
// sumCounts([1,1]);



// var fairCandySwap = function(aliceSizes, bobSizes) {
//     const sumOfAlice= aliceSizes.reduce((num, acc) => acc += num, 0);
//     const sumOfBob = bobSizes.reduce((num, acc) => acc += num, 0);
//     const totalMust = (sumOfAlice + sumOfBob) / 2;
//     let bobSet = new Set(bobSizes);
//     let sum = 0;
//     for(let i = 0; i < aliceSizes.length; i++){
//         sum += aliceSizes[i];
//         for(let j = 0; j < bobSizes.length; j++){
//             sum += bobSizes[j];
//         }
//
//         if((sumOfAlice - aliceSizes[i])  + Math.abs((totalMust - sum)) === totalMust && bobSet.has(Math.abs((totalMust - sum)))){
//             return [aliceSizes[i], Math.abs((totalMust - sum))];
//         }
//         sum = 0;
//     }
// };

// fairCandySwap([1,1], [2,2])
// fairCandySwap([1,2], [2,3])
// fairCandySwap([1,2,5,6,7,8,9], [2,2,6,6,6,6,7,7])
// fairCandySwap([88283,54861,70577,31977,3928,2576,53999,74596,15486,391,47985,80271,45388,88863,91970,50507,43362,99331,31993,68523,72692,44112,28680,56959,89288,87847,71017,6259,27339,88987,8969,31194,89967,86967,27975,18883,38403,98637,76163,36704,94230,3975,26427,58348,52514,87330,5744,46774,60775,59528,79349,6558,13941,64018,79124,88317,36218,72419,76560,35602,79110,22117,42942,95818,48095,82856,11200,21903,84890,83360,16621,13361,51042,58337,97634,31686,48830,21503,54571,62125,5734,34459,91485,18166,9363,12521,19685,35732,81554,4879,98287,78491,63529,26086,75693,2122,37987,75450,2555,31605,52494,11497,83279,60371,43276,82170,67459,80382,42503,75081,26599,96662,11763,77937,5330,3993,1826,29416,64835,97925,1402,35688,36907,98014,99617,35508,75400,2303,55113,92869,12934,79060,86074,25912,79275,28886,55402,24089,80798,31837,55991,74800,52065,90897,3298,4033,62178,97925,97278,60353,67842,89701,35283,50287,44499,56809,37832,15378,40665,39253,94512,23345,3495,94980,84811,9996,97631,43439,75961,77118,14334,56318,57684,86514,47720,31101,5912,21960,80991,2321,51037,7373,35688,85291,39515,4753,58053,38255,23716,44799,44106,46237,99714,98808,30744,90589,33910,48859,77394,94210,30487,71072,17897,33984,21173,6077,60222,86249,27658,63748,87094,34705,85560,54885,90919,19047,11077,51495,43732,3552,98973,62277,27469,36833,12654,32716,98928,96282,55074,32917,252,27172,36946,31409,77049,68139,91997,72889,55968,56830,66273,72915,17800,49365,45542,63305,53780,17709,11690,75290,58337,44970,40653,3139,393,40113,65212,54041,60223,71720,13006,9457,43168,98069,9734,74796,20391,60317,75597,94458,56790,23378,99824,62408,23775,33740,41052,94355,33845,35112,48594,48301,12837,7424,38430,22103,29138,21734,64817,55542,76813,55737,46774,67568,94180,74979,93683,15403,22264,20577,76906,22751,57540,45091,24378,40228,24731,37606,53506,24720,99306,66734,23736,99152,54584,74904,67442,49463,93418,72957,9280,87298,23243,85307,83813,1549,48706,13949,90104,88424,65041,73308,59902,39789,78659,97857,70716,50441,76438,80778,49874,86647,16355,54233,16956,46313,28261,3424,40884,26441,94477,70149,24338,9797,41574,89195,23542,24705,79139,57630,4249,87898,10111,95038,3136,21591,72238,52265,89067,87530,56524,54333,96504,68075,17456,84709,6005,96756,37217,76489,78072,56493,46880,42288,4785,17271,11900,29162,75392,26582,72215,81062,562,11231,1848,50822,31954,52041,61858,32466,78213,56462,66783,31213,22273,20869,43086,9507,78247,81500,98816,11702,52534,1587,41234,51791,37626,77565,93550,24531,65915,65526,30103,1848,33319,6757,21134,52761,75985,72323,14127,18736,53395,65452,42407,87097,4549,5459,95031,51658,1787,48641,54797,51638,50252,99475,10832,51434,29344,76171,52073,22360,37449,99850,25013,30749,2642,53365,17193,93484,598,94014,6012,41848,91113,48784,69496,56743,46939,25358,85126,12016,34470,76518,77870,50602,31995,21958,94828,21701,56151,32620,22091,82624,90596,94975,97150,15615,65112,19770,26191,79692,7475,40382,274,34848,56054,37826,7512,28824,36698,21551,33615,98885,45248,54425,5531,73483,28074,87811,35876,77555,55290,70402,40780,72735,62886,49035,82588,17306,95405,25477,96854,11503,50889,35685,30072,66383,30924,36385,87165,64362,82408,58537,26700,45417,40788,1419,65889,6596,20030,92091,75844,62500,31013,32203,67497,34661,40579,48562,55296,59936,77768,60763,59389,92566,6297,16049,92134,5894,40672,11385,61711,6102,89283,49440,15147,45405,65725,47615,77640,86230,10433,85670,9860,73404,36786,46981,58763,76165,21814,67936,27325,11366,8958,66652,60269,28803,92656,67947,11910,11831,10474,57979,16731,36538,47833,22380,27491,80326,12395,16210,78394,83496,978,40153,41583,26015,29667,73278,97962,30705,97386,6186,18045,67252,17218,47609,61352,24266,28220,68411,58552,69269,6671,25238,54550,52101,35886,77838,73422,82827,32342,95238,85920,66340,7465,90461,46684,33256,88025,74078,93997,87341,77885,25450,47182,63415,85925,20765,86099,19942,14772,63801,34367,38082,22680,31496,31529,35024,16087,49173,15098,82542,56182,27007,20351,72171,17304,10843,76615,72557,33053,19437,70825,91529,75214,39420,46759,37237,87309,85205,24640,78548,66997,42409,71856,68083,17668,23801,23030,6795,68707,43271,98833,65119,53498,7471,69361,9117,24073,87281,6468,24017,45763,51947,30623,49460,73684,851,86457,40246,53418,99727,74659,9446,73606,81655,1605,31215,43006,24633,10534,80739,18329,54106,45548,70744,64083,44432,21710,55602,81465,61044,68786,43166,40160,17033,29862,58231,28137,66107,47076,9971,28427,2026,74790,78215,99579,90979,87287,4776,71574,79699,95367,7654,51067,52377,62499,77127,42415,79364,26868,41123,73048,26113,10366,52397,98990,38641,17203,18962,39244,78157,56388,79234,75260,18545,9771,56902,90918,40818,62170,18344,54888,64558,79398,81227,97126,80570,36548,77223,24261,47969,78687,95651,43994,67338,46313,29236,4557,11,20736,47135,62786,42701,19366,55798,44518,41265,39000,64339,26337,84859,45349,24124,382,81550,62108,62157,19379,29472,45723,38839,61377,5080,77867,27187,31053,52856,17159,58602,71676,90399,87378,41696,77654,86316,26752,87968,9327,7988,28393,22338,33887,99390,64405,82352,2858,92500,45822,16716,58582,276,39171,38189,63253,99457,58395,34441,4012,87043,40484,24155,61609,49714,61590,5888,18208,51044,56298,17773,86513,23217,62698,66605,74313,4061,53869,64609,39686,52911,68189,82053,94161,76974,57979,16656,97733,28768,51044,63875,73882,63949,67124,45765,65991,97319,95287,55652,89242,9509,78517,60458,77080,83948,32733,86133,1556,55885,83036,40533,42213,58789,66568,93725,31101,69473,18608,49101,11647,99497,13094,72457,56782,56543,63819,42506,92176,29802,46236,73769,15852,3949,12220,48329,52045,63343,62527,34076,84467,3260,76968,76903,72833,5748,49915,89948,52191,2671,20261,52949,5561,72348,75944,52997,21950,22923,2624,59173,13506,70397,98499,90331,88781,89285,77924,27700,96610,11432,1364,93774,21698,52176,17390,37856,74916,20400,20011,74635,68696,68245,13279,13993,94845,96967,73959,52644,42902,85843,14014,28270,68003,69815,28640,23965,61838,45369,19441,6297], [65873,46366,98676,44298,92562,90384,72578,70279,44720,78868,11158,47473,97537,5065,839,47220,49380,79710,6117,65598,85499,68558,16961,84495,75576,65527,47830,84657,53519,54137,14932,76601,88932,84563,25109,99475,64493,3941,74773,66457,74832,53369,2998,83316,42309,10056,86570,17585,31516,9441,80896,25441,48286,53851,77454,96837,67006,82394,19115,90226,9253,76781,50209,3838,80283,58398,10599,95131,66636,74822,44524,74033,46874,29041,59189,39725,76670,50494,39919,43368,10315,95049,36735,92914,89385,36984,83852,57181,54493,87278,11806,51346,88261,79553,65966,30412,48267,75670,45219,32926,81903,17500,45772,56304,50676,86035,22598,28563,36509,54208,21377,10358,26942,58303,66675,92710,1527,89664,54244,83051,97594,50261,75782,89441,54289,96844,9114,42227,87187,87689,31045,44917,11396,5126,657,98557,38227,39653,34316,2967,75587,61674,62514,33474,64698,79568,81653,10000,7592,77612,57797,42298,12133,4681,82449,66497,51365,95156,73389,6079,21700,22313,69748,21958,2858,8183,17930,32182,16455,71628,20894,85599,66175,37542,84863,90880,29071,28669,81439,94876,30444,12936,16984,80427,60906,16612,6726,18397,65538,61999,94192,29217,94489,49866,55613,7464,78119,67257,10911,73626,7831,34489,93208,32977,11268,43181,21501,19795,65645,79170,10169,93671,15079,66894,70526,85054,28587,60188,5499,37940,8263,8025,80713,21678,16031,33228,39980,79500,66586,32663,12493,72704,73487,30795,9748,76147,41557,97514,37707,34080,56590,13243,45724,82953,5018,11640,623,60117,16673,54555,66996,6640,4552,7063,9795,48848,36881,76884,72996,25358,28571,36690,35862,20082,72915,12865,83934,59748,6708,97120,50770,91861,50182,49110,13481,61987,305,45313,47421,65129,84791,71587,91487,88351,19559,87,29799,93096,78642,79300,56974,62281,2717,38611,50715,63052,80157,38730,96833,57407,31981,86390,55770,56698,77753,21793,40609,86698,50496,4911,68124,90799,26681,36927,94243,75900,27204,42927,56034,6771,80382,71267,12907,95248,90175,16596,47520,71522,24828,86372,65876,63837,49259,28793,27286,1829,84187,62610,98746,58228,36696,30280,81454,39537,6525,11408,60113,13963,86309,75419,60280,11483,11974,67414,68727,22900,73155,34630,82244,60547,89736,43739,24383,10808,9440,67752,70631,55,60403,2820,77820,53639,79753,50494,12865,82804,85145,65155,43376,44957,89848,45145,3502,36084,20498,99534,52155,670,85685,81361,24637,2401,73718,86652,38656,81347,1002,15226,5541,46027,8559,58454,24127,88498,75509,70250,40729,55680,21195,95758,5728,84403,72041,99095,52595,5873,30338,70871,42079,70877,16150,13942,71272,53533,64920,73758,37278,25873,40155,13895,21648,60658,95236,65330,8481,77178,88075,52063,35233,42598,33162,97803,13727,10643,68387,32261,43240,82684,19650,7395,25724,59924,43998,13484,49775,88035,13404,35004,10602,23439,46143,94395,19462,48602,69423,13790,35577,47964,61481,20988,41762,57083,29336,71245,58259,36877,91994,51223,37755,59302,46697,12761,17823,91669,6631,43517,6155,84386,95268,33881,39515,6643,75643,70143,77861,52897,24707,54919,25790,33649,50883,19112,68295,44662,45382,19503,99966,9736,42519,19210,11234,37187,82257,43334,39244,5293,39915,12137,45601,65145,90250,33614,45023,69677,85352,59412,12592,49629,69185,40790,91583,25605,79371,43565,24222,73218,7299,53592,46383,94927,36912,45210,22192,99406,22641,51445,80792,81425,47525,59369,32332,58808,52263,27743,41189,62488,68253,57603,81328,3950,52864,28801,88725,30221,37557,92875,56033,79999,99178,57909,50269,59109,95475,2512,42637,69208,87095,13339,95451,19883,94120,5642,62797,64554,6406,25822,25855,96437,67726,44557,43321,41895,82684,28147,426,9196,35645,27749,22873,69504,55098,69871,6313,17157,65635,58374,39521,67149,53984,17989,29671,99507,81384,43846,8967,26847,94528,91874,54694,40145,85694,42134,96879,59241,12451,15252,27990,22140,42345,33259,76786,70402,31974,59685,90240,88755,65583,26788,84359,70321,73848,90995,89757,1074,73607,8592,5391,97701,94015,84654,38472,35848,29825,65762,26554,537,73552,49508,60144,26201,31495,42469,94062,12349,20618,21012,6491,85313,69877,51243,13847,87960,79067,32289,56398,79612,4616,82743,24250,39341,52843,62601,66002,83253,16237,65230,45159,69826,13383,27534,92995,67186,33232,87266,66495,27550,40412,4702,89355,87088,68247,92404,54776,27879,52532,94840,71418,4364,35638,82552,22132,6915,77733,62733,14941,82853,21877,29702,9614,3326,88505,33028,59663,21115,67162,52667,18307,46788,38777,75910,83052,84345,44745,5156,90082,38890,44932,24157,89039,16863,32686,28148,8478,59625,9511,45884,57074,41546,9679,56196,20329,60674,35807,10858,82188,98499,20397,64955,22286,70498,69489,48397,24048,90194,58908,94544,94596,56975,67160,22091,260,74602,36434,7335,11855,71334,70688,74448,44620,77150,3635,82714,92667,5430,99594,20660,81445,78779,42760,15419,73714,79169,37103,77290,79300,43542,57578,71606,64181,87284,14122,25526,91413,67171,48256,29827,35334,78767,30726,12342,87167,51066,76255,50249,82622,17753,54041,24731,96781,46144,3789,64695,53383,17843,16208,68648,21401,77863,31354,80341,82734,90770,12352,87046,82344,43284,86908,58788,37507,58297,10698,43224,81595,45504,62393,20894,46865,82818,62565,39796,53555,20925,82673,52888,68583,40091,77887,47532,86626,8303,42915,31962,41507,10777,12256,20368,16105,13700,25211,14992,25387,22540,43703,64949,61909,26683,61711,54655,73955,40706,42772,19749,61633,40470,28448,39115,35977,72893,14140,80169,52249,78035,85271,97664,61715,53402,51703,58568,33106,61877,1052,21661,15056,54243,98040,60127,95328,61776,65541,13822,19667,29584,91424,31075,3703,37804,4441,22604,81972,15120,20232,86090,6258,88956,21989,32467,30115,35624,10819,29614,41413,49341,87610,8367,66634,98970,60368,5662,72190,43323,10474,47658,55278,84485,96607,19283,64019,51423,48065,59546,54895,18819,27036,8735,56165,46380,49829,44314,60347,60340,83244,63934,90663,11813,63243,7854,14278,31647,29070,8055,64608,70575,26166,77686,95563,5580,58578,67533,40646,5455,41945,80647,33881,82292,36732,76434,41326,11621,24948,67115,55899,93956,83158,91679,74579,32270,91712,31109,22061,68236])



// var clearDigits = function(s) {
//     const result = [];
//     for(let i = 0; i < s.length; i++){
//         if(!isNaN(Number(s[i]))){
//            result.pop();
//         }else {
//             result.push(s[i]);
//         }
//     }
//
//     return result.join("")
// };
//
// clearDigits("cb34")
// clearDigits("abc")


// var hasGroupsSizeX = function(deck) {
//     const hashTable = {};
//     for(let i = 0; i < deck.length; i++){
//         if(hashTable[deck[i]]){
//             hashTable[deck[i]] += 1;
//         }else {
//             hashTable[deck[i]] = 1;
//         }
//     }
//
//     const hasOneValue = Object.values(hashTable).some((num) => num === 1);
//
//     if(hasOneValue){
//         return false;
//     }
//
//     const data = Object.values(hashTable).sort((a, b) => a - b).filter(((item) => item === item));
//     console.log(data)
//     if(data.length === 1){
//         return true;
//     }
//     let firstNum = data[0];
//     let realNumber = 0;
//     for(let i = 1; i < data.length; i++){
//         if(firstNum !== data[i]){
//             realNumber = recursion(data[0], data[i]);
//             break;
//         }
//     }
//     for(let i = 1; i < data.length; i++){
//         // console.log(data[i], recursion(firstNum, data[i]) % realNumber)
//         // if(!recursion(firstNum, data[i]) % realNumber === 0){
//         //     return false;
//         // }
//     }
//
//     return true;
// };
//
//
//
// const recursion = (min, max) => {
//     if(max === 0) return min;
//     return recursion(max, min % max);
// }

// console.log(recursion(24, 126) % 3);

// hasGroupsSizeX([1,2,3,4,4,3,2,1]);
// hasGroupsSizeX([1,1,1,2,2,2,3,3]);
// hasGroupsSizeX([1,1,2,2,2,2]);
// hasGroupsSizeX([1,1]);
// hasGroupsSizeX([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18,18]);
// hasGroupsSizeX([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,14,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,15,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17]);


// console.log(138 % (138 - 24))


// var findContentChildren = function(g, s) {
//     let sortedG = g.sort((a,b) => a - b);
//     let sortedS = s.sort((a,b) => a - b);
//
//     // console.log(sortedG, sortedS)
//     let sum = 0;
//     for(let i = 0; i < sortedG.length; i++){
//         for(let j = 0; j < sortedS.length; j++){
//             if(sortedS[j] >= sortedG[i]){
//                 sum += 1;
//                 sortedS = sortedS.filter((item, index) => index !== j);
//                 break;
//             }
//         }
//         // console.log(sortedS)
//     }
//
//     console.log(sum)
//     return sum;
// };

// findContentChildren([10,9,8,7], [5,6,7,8]);
// findContentChildren([1,2,3], []);
// findContentChildren([1,2], [1,2,3]);
// findContentChildren([1,2,3], [1,1]);
// findContentChildren([1,2,3], [3]);
// findContentChildren([1,2,3], [1,1]);



// var increasingBST = function(root) {
//     if(root === null) return;
//     let data = [];
//     const stack = [];
//     let current = root;
//
//     while(stack.length > 0 || current !== null){
//         while (current !== null){
//             stack.push(current);
//             current = current.left;
//         }
//
//         current = stack.pop();
//         data.push(current.val);
//         current = current.right;
//     }
//
//     const newBSTree = new BinaryNode(data[0]);
//     let newNode = newBSTree;
//     for(let i = 1; i < data.length; i++){
//         const newRightTree = new TreeNode(data[i]);
//         newNode.right = newRightTree;
//     }
//
//     return newBSTree;
// };

// increasingBST(newTree.root)




// var minProcessingTime = function(processorTime, tasks) {
//     tasks.sort((a,b) => b - a);
//     console.log(tasks)
//     let core = 4;
//     let result = 0;
//     for(let i = 0; i < processorTime.length; i++){
//         const coreMax =  Math.max(processorTime[i] + tasks[core - 1], processorTime[i] + tasks[core - 2], processorTime[i] + tasks[core - 3], processorTime[i] + tasks[core - 4]);
//             if(coreMax > result){
//                 result = coreMax;
//             }
//             core += 4;
//     }
//
//     return result;
// };
//
// minProcessingTime([8,10], [2,2,3,1,8,7,4,5]);
// minProcessingTime([10,20], [2,3,1,2,5,8,4,3]);



// var permute = function(nums) {
//     console.log(Math.floor(Math.random() * 3));
// };
//
// permute([1,2,3]);



// var generate = function(numRows) {
//     const result = [];
//     while(result.length !== numRows + 1){
//         if(result.length === 0){
//             result.push([1]);
//         }else{
//             const lastItem = result[result.length - 1];
//             const newArr = [];
//             for(let i = 0; i < lastItem.length; i++){
//                 if(lastItem[i + 1]){
//                     newArr.push(lastItem[i] + lastItem[i + 1]);
//                 }else{
//                     result.push([1, ...newArr, 1]);
//                     break;
//                 }
//             }
//         }
//     }
//     return result[result.length - 1];
// };
//
//
// generate(3);


// var intersect = function(nums1, nums2) {
//     const hashTable = {};
//     const result = [];
//
//     for(let i = 0; i < nums1.length; i++){
//         if(hashTable[nums1[i]]){
//             hashTable[nums1[i]] += 1;
//         }else {
//             hashTable[nums1[i]] = 1;
//         }
//     }
//
//     for(let i = 0; i < nums2.length; i++){
//         if(hashTable[nums2[i]]){
//             hashTable[nums2[i]] -= 1;
//             result.push(nums2[i]);
//         }
//     }
//
//     return result;
// };
//
// intersect([1,2,2,1], [2,2]);
// intersect([4,9,5], [9,4,9,8,4]);



// var hardestWorker = function(n, logs) {
//     let count = 0;
//     const hashTable = {};
//     for(let i = 0; i < logs.length; i++){
//         if(hashTable[logs[i][0]]){
//             hashTable[logs[i][0]] = Math.max(hashTable[logs[i][0]], (logs[i][1] - count));
//         }else {
//             hashTable[logs[i][0]] = (logs[i][1] - count);
//         }
//         count = logs[i][1];
//     }
//
//
//     const resultArr = Object.entries(hashTable).sort((a,b) => {
//         if(a[1] === b[1]){
//             return b[0] - a[0];
//         }else {
//             return  a[1] - b[1];
//         }
//     });
//
//     return resultArr[resultArr.length - 1][0];
// };

// hardestWorker(10, [[0,3],[2,5],[0,9],[1,15]]);
// hardestWorker(10, [[1,1],[3,7],[2,12],[7,17]]);
// hardestWorker(10, [[0,10],[1,20]]);
// hardestWorker(10, [[110,5],[360,7],[48,8],[286,10],[167,12],[110,13],[221,18]]);


// var canBeIncreasing = function(nums) {
//     for(let i = 0; i < nums.length; i++){
//         const arr = nums.filter((item, index) => i !== index);
//         // console.log(arr)
//         if(JSON.stringify(arr) === JSON.stringify(arr.sort((a,b) => a - b))){
//             console.log(true)
//             return true;
//         }
//     }
//
//     console.log(false)
//     return false;
// };
//
// canBeIncreasing([1,2, 10, 5,7])
// canBeIncreasing([2,3,1,2])
// canBeIncreasing([1,1,1])
// canBeIncreasing([1,1])



// var average = function(salary) {
//     let total = 0;
//     for(let i = 0; i < salary.length; i++){
//         total += salary[i];
//     }
//
//     const realTotal = total - (Math.max(...salary) + Math.min(...salary));
//
//     return realTotal / (salary.length - 2);
// };
//
// average([4000,3000,1000,2000]);
// average([1000,2000,3000]);



// var minPathSum = function(grid) {
//     let realCol = 0;
//     let realRow = 0;
//     for(let row = realRow; row < grid.length; row++) {
//         let colSum = 0;
//         let rowSum = 0;
//         for (let col = realCol; col < grid[realRow].length; col++) {
//             colSum += grid[col][row];
//             rowSum += grid[col][col];
//             console.log(grid[realRow], grid[col], grid[col][realRow], row);
//         }
//     }
// };
//
// minPathSum([[6,8,4,2],[9,12,16,1],[1,19,20,3],[3,2,2,7]]);
// minPathSum([[1,3,1],[1,5,1],[4,2,1]]);
// minPathSum([[1,2,3],[4,5,6]]);



// var findFinalValue = function(nums, original) {
//     let originalNum = original;
//     const set = new Set([...nums]);
//
//     while (set.has(originalNum)){
//         originalNum = originalNum * 2;
//     }
//
//     return originalNum;
// };
//
// findFinalValue([5,3,6,1,12], 3)
// findFinalValue([2,7,9], 4)




// var sumOfEncryptedInt = function(nums) {
//     let result = 0;
//     for(let i = 0; i < nums.length; i++){
//          result += Number(encryptInt(nums[i]));
//     }
//
//     return result;
// };
//
// const encryptInt = (num) => {
//     let sum = '';
//     const max = num.toString().split("");
//     for(let i = 0; i < max.length; i++){
//         sum += Math.max(...max);
//     }
//     return sum;
// }
//
// sumOfEncryptedInt([10,21,31]);


// var findTheArrayConcVal = function(nums) {
//     let result = 0;
//     while (nums.length !== 0){
//         let sum = '';
//         if(nums.length >= 2){
//             sum += nums.shift();
//             sum += nums.pop();
//         }else {
//             sum += nums.pop();
//         }
//         result += Number(sum);
//     }
//
//     return result;
// };
//
// findTheArrayConcVal([7,52,2,4]);
// findTheArrayConcVal([5,14,13,8,12]);



// var createTargetArray = function(nums, index) {
//     let result = [];
//
//     for(let i = 0; i < index.length; i++){
//         result.splice(index[i], 0, nums[i])
//     }
//
//     return result;
// };
//
// createTargetArray([0,1,2,3,4], [0,1,2,2,1]);
// createTargetArray([0,1,2,3,4]);


// var numberToWords = function(num) {
//     const arr = num.toString().split("");
//     console.log(arr)
// };
//
// numberToWords(123)
// numberToWords(12345)


// var minOperations = function(nums, k) {
//     let result = 0;
//     let count = 0;
//     const hashTable = {};
//     for(let i = nums.length - 1; i >= 0; i--){
//         if(result === k){
//             break;
//         }
//         if(!hashTable[nums[i]] && nums[i] <= k){
//             result += 1;
//             hashTable[nums[i]] = 1;
//         }
//         count += 1;
//     }
//
//     return result;
// };
//
// minOperations([3,1,5,4,2], 2);
// minOperations([3,1,5,4,2], 5);
// minOperations([3,2,5,3,1], 3);
// minOperations([1,2,2], 2);



// var isAcronym = function(words, s) {
//     const sArray = s.split("");
//     if(words.length !== s.length){
//         return false;
//     }
//     for(let i = 0; i < words.length; i++){
//         if(words[i][0] !== sArray[i]){
//             return false;
//         }
//     }
//
//     return true;
// };
//
// isAcronym(["alice","bob","charlie"], 'abc');


// var displayTable = function(orders) {
//     const result = [];
//     const hashTable = {};
//     const headers = new Set(orders.map((item) => {
//         return item[2];
//     }).sort());
//     for(let i = 0; i < orders.length; i++){
//         if(hashTable[orders[i][1]]){
//             if(hashTable[orders[i][1]][orders[i][2]]){
//                 hashTable[orders[i][1]][orders[i][2]] += 1;
//             }else {
//                 hashTable[orders[i][1]][orders[i][2]] = 1;
//             }
//         }else {
//             hashTable[orders[i][1]] = {
//                 [orders[i][2]]: 1
//             }
//         }
//     }
//
//     for(let [index, [key, value]] of Object.entries(Object.entries(hashTable))){
//         result[index] = [key];
//         headers.forEach((title) => {
//             if(hashTable[key][title]){
//                 result[index].push(hashTable[key][title].toString());
//             }else {
//                 result[index].push('0');
//             }
//         })
//     }
//
//     return [['Table', ...headers], ...result];
// };

// displayTable([["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]]);
// displayTable([["James","12","Fried Chicken"],["Ratesh","12","Fried Chicken"],["Amadeus","12","Fried Chicken"],["Adam","1","Canadian Waffles"],["Brianna","1","Canadian Waffles"]]);
// displayTable([["Laura","2","Bean Burrito"],["Jhon","2","Beef Burrito"],["Melissa","2","Soda"]]);





// var maximumTime = function(time) {
//     const arr = time.split("");
//     if(arr[0] === '?'){
//         if(Number(arr[1]) >= 4){
//             arr[0] = '1';
//         }else {
//             arr[0] = '2';
//         }
//     }
//     if(arr[1] === '?'){
//         if(arr[0] === '2'){
//             arr[1] = '3';
//         }else {
//             arr[1] = '9';
//         }
//     } if(arr[3] === '?'){
//         arr[3] = '5'
//     } if(arr[4] === '?'){
//         arr[4] = '9'
//     }
//     // console.log(arr[4])
//     console.log(arr.join(""));
//     return arr.join("")
// };
//
// maximumTime("2?:?0");
// maximumTime("0?:3?");
// maximumTime("1?:22");
// maximumTime("??:3?");
// maximumTime("?4:03");


// var minimumPushes = function(word) {
//     const hashTable = {};
//     for(let i = 0; i < word.length; i++){
//         if(hashTable[word[i]]){
//             hashTable[word[i]] += 1;
//         }else {
//             hashTable[word[i]] = 1;
//         }
//     }
//     const sorted = Object.entries(hashTable).sort(([,a],[,b]) => b - a);
//
//     let count = 0;
//     let result = 0;
//     for(let i = 0; i < sorted.length; i++){
//         if(count < 8){
//             result += (sorted[i][1] * 1)
//         }else if(count >= 8 && count < 16){
//             result += (sorted[i][1] * 2)
//         }else if(count >= 16 && count < 24){
//             result += (sorted[i][1] * 3)
//         }else if(count >= 24 && count < 32){
//             result += (sorted[i][1] * 4)
//         }
//         count += 1;
//     }
//     return result;
// };
//
// minimumPushes("aabbccddeeffgghhiiiiii");
// minimumPushes("xyzxyzxyzxyz");
// minimumPushes("abcde");


// var isHappy = function(n) {
//     const hashTable = {};
//     const helper = (number) => {
//         const numbers = number.toString().split("");
//         if(hashTable[number]) {
//             return false;
//         }
//
//         hashTable[number] = true;
//
//         if(number === 1 || number === 7){
//             return true;
//         }
//
//         return helper(numbers.reduce((sum, digit) => sum + Math.pow(Number(digit), 2), 0));
//     }
//
//     return helper(n)
// };
//
// isHappy(19);
// isHappy(22);
// isHappy(7);

// var beautifulIndices = function(s, a, b, k) {
//     const hashTable = {
//         'a': [],
//         'b': []
//     };
//
//     // Collect indices of occurrences of a
//     for (let i = 0; i <= s.length - a.length; i++) {
//         if (s.slice(i, i + a.length) === a) {
//             hashTable['a'].push(i);
//         }
//     }
//
//     // Collect indices of occurrences of b
//     for (let j = 0; j <= s.length - b.length; j++) {
//         if (s.slice(j, j + b.length) === b) {
//             hashTable['b'].push(j);
//         }
//     }
//
//     // If no occurrences of b, return an empty array
//     if (hashTable['b'].length === 0) {
//         return [];
//     }
//
//     const result = [];
//
//     for (let i = 0; i < hashTable['a'].length; i++) {
//         for (let j = 0; j < hashTable['b'].length; j++) {
//             console.log(Math.abs(hashTable['a'][i] - hashTable['b'][j]), k, hashTable['a'][i], hashTable['b'][j], hashTable['b']);
//             if (Math.abs(hashTable['a'][i] - hashTable['b'][j]) <= k) {
//                 result.push(hashTable['a'][i]);
//                 break;
//             }
//         }
//     }
//
//     // console.log(result)
//
//     return result;
// };

// beautifulIndices("frkxslnnn", "rkxsl", "n", 2);
// beautifulIndices("lahhnlwx", "hhnlw", "ty", 6);
// beautifulIndices("abaa", "a", "b", 4);
// beautifulIndices("isawsquirrelnearmysquirrelhouseohmy", "my", "squirrel", 15);
// beautifulIndices("pvognvogdegwmfamvogsmvogvogldegwmfamvogvogjdegwmfamdegwmfamadegwmfamjzxivogfvogzxl", "vog", "degwmfam", 58);


// var getHint = function(secret, guess) {
//     const hashTable = {};
//     const hashTable1 = {};
//     let equals = 0;
//     for(let i = 0; i < secret.length; i++){
//         if(secret[i] === guess[i]){
//             equals += 1;
//         }else{
//             if(hashTable[secret[i]]){
//                 hashTable[secret[i]] += 1;
//             }else {
//                 hashTable[secret[i]] = 1;
//             }
//
//             if(hashTable1[guess[i]]){
//                 hashTable1[guess[i]] += 1;
//             }else {
//                 hashTable1[guess[i]] = 1;
//             }
//         }
//     }
//
//
//     let notEquals = 0;
//     for(let key in hashTable1){
//         for(let i = 0; i < hashTable1[key]; i++){
//             if(hashTable[key]){
//                 notEquals += 1;
//                 hashTable[key] -= 1;
//             }
//         }
//     }
//
//     return `${equals}A${notEquals}B`
// };
//
// getHint("1807", "7810");
// getHint("17556104017908538866216012733562391312370364164753414913099831164577140108378143415376650728444659024878626036827668639994464707182631830178609103014897359209028887381064675156821635355831893967952907338745767322325798116382683509798903437033410293566003780312736165662615106227593457208686194604627517389211700667532015020887634217276619270115660625523450595634639344408561537725929726350375899679273522114374663660280959315338095222404629117922755113821970129005136384076264837579099762208763846744", "07748673844341392912632836731867633214455549725460733060664059885610952387341558665365698113864718504316283529520035129205876687680317811202356924968240314796692330033898560796484937510903644964305613261300188599892908431777611958641457941879064075349399240053023510882695828192479684677396463258994710749877319250148120228914112452137479839822015532295957418917801692714357523787342986086703132050124914770205742214045873846013116608825660200462833288493449631485108536861247630182414800487188388505");
// getHint("1123", "0111");
// getHint("0000", "0000");
// getHint("1221", "1112");


// var removeOccurrences = function(s, part) {
//     for(let i = 0; i < s.length; i++){
//         let subString = '';
//         let subIndex = [];
//         for(let j = i; j < i + part.length; j++){
//             subString += s[j];
//             subIndex.push(j);
//         }
//         if(subString === part){
//             return removeOccurrences([...s.slice(0, i), ...s.slice(subIndex[subIndex.length - 1] + 1, s.length)].join(""), part);
//         }
//     }
//
//     return s;
// };
//
//
// console.log(removeOccurrences("daabcbaabcbc", "abc"));
// console.log(removeOccurrences("axxxxyyyyb", "xy"));


// var minSteps = function(s, t) {
//     return helper(s,t) + helper(t,s);
// };

// const helper = (s,t) => {
//     let count = 0;
//     const hashTable = {};
//     for(let i = 0; i < s.length; i++) {
//         if(hashTable[s[i]]){
//             hashTable[s[i]] += 1;
//         }else {
//             hashTable[s[i]] = 1;
//         }
//     }
//
//     for(let i = 0; i < t.length; i++){
//         if(hashTable[t[i]] >= 1){
//             hashTable[t[i]] -= 1;
//         }else if(hashTable[t[i]] === 0 || !hashTable[t[i]]){
//             count += 1;
//         }
//     }
//
//     return count;
// }

// var minSteps = function(s, t) {
//     let f = new Array(26).fill(0);
//     var i = s.length;
//     while (i--) {
//         f[s.charCodeAt(i) - 97]++
//     }
//     i = t.length;
//     while (i--) {
//         f[t.charCodeAt(i) - 97]--
//     }
//     return f.reduce((p,c) => c > 0 ? p + c : p - c, 0)
// };

// minSteps("leetcode", "coats");
// minSteps("night", "thing");
// minSteps("cotxazilut", "nahrrmcchxwrieqqdwdpneitkxgnt");



// var sortColors = function(nums) {
//     let zero = 0;
//     let one = 0;
//     let two = 0;
//
//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] === 0){
//             zero += 1;
//         }else if(nums[i] === 1){
//             one += 1;
//         }else if(nums[i] === 2){
//             two += 1;
//         }
//     }
//
//     let index = 0;
//     console.log(zero !== 0, one !== 0, two !== 0)
//     while (zero !== 0 || one !== 0 || two !== 0){
//             while(zero !== 0){
//                 nums[index] = 0;
//                 index += 1;
//                 console.log('ss');
//                 zero -= 1;
//             }
//             while(one !== 0){
//                 nums[index] = 1;
//                 index += 1;
//                 one -= 1;
//             }
//             while(two !== 0){
//                 nums[index] = 2;
//                 index += 1;
//                 two -= 1;
//             }
//     }
//     console.log(nums)
//     return nums;
// };
// //
// sortColors([2,0,2,1,1,0]);
// sortColors([2,0,1]);
// sortColors([1,0]);
// console.log(sortColors([2,0,2,1,1,0]));


var permute = function(nums) {
    let result = [];

    const backtrack = (current, remaining) => {
        if (remaining.length === 0) {
            result.push([...current]);
            return;
        }

        for (let i = 0; i < remaining.length; i++) {
            current.push(remaining[i]);
            backtrack(current, remaining.slice(0, i).concat(remaining.slice(i + 1)));
            current.pop();
        }
    };

    backtrack([], nums);
    return result;
};

permute([1,2,3,4]);





// var permute = function(nums) {
//     const visited = new Set()
//     const ans = []
//     for (let i = 0; i < nums.length; i++) {
//         const visited = new Set()
//         visited.add(i)
//         const permutations = visit(visited, i, nums)
//         permutations.forEach((permutation) => {
//             permutation.push(nums[i])
//             ans.push(permutation)
//         })
//     }
//     return ans
// };
//
// function visit(visited, index, nums) {
//     if (visited.size + 1 === nums.length) {
//         return [[nums[index]]]
//     }
//     const ans = []
//     for (let i = 0; i < nums.length; i++) {
//         if (visited.has(i)) continue
//         visited.add(i)
//         const permutations = visit(visited, i, nums) // [[3, 2]]
//         permutations.forEach((permutation) => {
//             permutation.push(nums[i])
//             ans.push(permutation)
//             visited.delete(i)
//         })
//     }
//     console.log(ans)
//     return ans
// }


// const ans = []
// var permute = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         const visited = new Set()
//         visited.add(i)
//         visit(visited, i, nums, [])
//     }
//     return ans
// };
//
// function visit(visited, index, nums, arr) {
//     if (arr.length === nums.length) {
//         arr.push(nums[index])
//         ans.push(arr)
//         return
//     }
//     arr.push(nums[index])
//     for (let i = 0; i < nums.length; i++) {
//         if (visited.has(i)) continue
//         visited.add(i)
//         const newArr = [...arr]
//         visit(visited, i, nums, newArr)
//     }
// }



// var isPowerOfThree = function(n) {
//     const helper = (num) => {
//         if(num === 3){
//             return true;
//         }else if(num % 3 !== 0){
//             return false;
//         }
//         return helper(num / 3);
//     }
//     if(n >= 3 && n % 3 === 0){
//         return helper(n / 3);
//     }else {
//         return false;
//     }
// };
// //
//
// console.log(3 % 3)
// isPowerOfThree(27)
// isPowerOfThree(0)
// isPowerOfThree(-1)
// isPowerOfThree(45)


// var lastRemaining = function(n) {
//     let result = [];
//     for(let i = 1; i <= n; i++){
//         result.push(i);
//     }
//
//     return helper(result);
// };
//
// const helper = (list) => {
//     if(list.length === 1) return list[0];
//     console.log(list)
//     const newList = [];
//     for(let i = 0; i < list.length; i++){
//         if(i % 2 !== 0){
//             newList.push(list[i]);
//         }
//     }
//     return helper(newList.reverse());
// }
//
// console.log(lastRemaining(9));


// var countPrefixes = function(words, s) {
//     let count = 0;
//     for(let i = 0; i < words.length; i++){
//         if(s.slice(0, words[i].length) === words[i]){
//             count += 1;
//         }
//     }
//
//     return count;
// };
//
// countPrefixes(["a","b","c","ab","bc","abc"], "abc");


// var buildArray = function(nums) {
//     const result = [];
//     for(let i = 0; i < nums.length; i++){
//         result.push(nums[nums[i]]);
//     }
//     return result;
// };
//
// buildArray([0,2,1,5,3,4]);


// var StockSpanner = function() {
//     this.stack = [];
//     this.result = [];
// };

// StockSpanner.prototype.next = function(price) {
//     const newStack = [...this.stack];
//     let count = 1;
//     if(newStack.length > 0){
//         count = recursion(newStack, price, 1);
//     }
//     this.result.push(count);
//     this.stack.push(price);
//     console.log(this.stack, this.result[this.result.length - 1]);
//     return this.result[this.result.length - 1];
// };
//
// const recursion = (arr, num, count) => {
//     if (arr.length === 0) return count;
//     const ok = arr.pop();
//     if (num < ok) return count;
//     return recursion(arr, num, count + 1);
// }
//
// stockSpanner = new StockSpanner();
// stockSpanner.next(31); // return 1
// stockSpanner.next(41);  // return 1
// stockSpanner.next(48);  // return 1
// stockSpanner.next(59);  // return 2
// stockSpanner.next(79);  // return 1
// stockSpanner.next(75);  // return 4, because the last 4
// stockSpanner.next(85);  // return 4, because the last 4
// console.log(stockSpanner.result);  // return 4, because the last 4



// var findTheWinner = function(n, k) {
//     const numbers = Array.from({ length: n }, (_, i) => i + 1);
//
//     let currentIndex = 0;
//     while (numbers.length !== 1){
//         let deletedIndex = ((currentIndex + k) - 1) % numbers.length;
//         numbers.splice(deletedIndex, 1);
//         currentIndex = deletedIndex;
//     }
//     return numbers[0];
// };


// var twoSum = function(numbers, target) {
//     let start = 0;
//     let end = numbers.length - 1;
//
//     while (start < end){
//         if(numbers[start] + numbers[end] === target){
//             return [start + 1, end + 1]
//         }else if(numbers[start] + numbers[end] > target) {
//             end--
//         }else {
//             start++
//         }
//     }
// };

// console.log(twoSum([-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1,1], 2));
// console.log(twoSum([2,7,11,31], 9));


// var findHighAccessEmployees = function(access_times) {
//     const hashTable = {};
//     const result = [];
//     const sortedArr = access_times.sort((a,b) => {
//         if(a[0] === b[0]){
//             return timeToMinutes(a[1]) - timeToMinutes(b[1]);
//         }else{
//             return a[0] > b[0] ? 1 : -1;
//         }
//     });
//
//
//     for(let i = 0; i < sortedArr.length; i++){
//         const employee = sortedArr[i][0];
//         const timeInMinutes = timeToMinutes(sortedArr[i][1]);
//
//         if (hashTable[employee]) {
//             hashTable[employee].push(timeInMinutes);
//         } else {
//             hashTable[employee] = [timeInMinutes];
//         }
//     }
//
//     for(let key in hashTable) {
//         if(hashTable[key].length >= 3){
//             for(let i = 0; i <= hashTable[key].length - 3; i++){
//                 if(hashTable[key][i + 2] - hashTable[key][i] < 60){
//                     result.push(key);
//                     break;
//                 }
//             }
//         }
//     }
//
//     console.log(result, hashTable)
//     return result;
// };
//
// function timeToMinutes(time) {
//     const hours = parseInt(time.substring(0, 2));
//     const minutes = parseInt(time.substring(2, 4));
//     return hours * 60 + minutes;
// }


// findHighAccessEmployees([["a","0549"],["b","0457"],["a","0532"],["a","0621"],["b","0540"]]);
// findHighAccessEmployees([["d","0002"],["c","0808"],["c","0829"],["e","0215"],["d","1508"],["d","1444"],["d","1410"],["c","0809"]]);
// findHighAccessEmployees([["cd","1025"],["ab","1025"],["cd","1046"],["cd","1055"],["ab","1124"],["ab","1120"]]);
// findHighAccessEmployees([["akuhmu","0454"],["aywtqh","0523"],["akuhmu","0518"],["ihhkc","0439"],["ihhkc","0508"],["akuhmu","0529"],["aywtqh","0530"],["aywtqh","0419"]]);
// findHighAccessEmployees([["uixav","0510"],["zbggqxck","0545"],["hyxoa","0619"],["uixav","0517"],["zbggqxck","0609"],["zbggqxck","0527"],["zkjxcrd","0545"],["uixav","0617"],["uixav","0530"]]);
// findHighAccessEmployees([["qzgyyji","1945"],["qzgyyji","1855"],["jsxkxtugi","1859"],["hhjuaxal","1940"],["hhjuaxal","1831"],["jsxkxtugi","1841"],["hhjuaxal","1918"],["jsxkxtugi","1941"],["hhjuaxal","1852"]]);
