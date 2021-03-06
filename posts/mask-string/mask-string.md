## 字符串遮罩的问题

对于 `substr` 与 `substring`，`slice` 与 `splice` 这种名字相近，功能也相近的函数，着实容易搞混，不太方便记住其区别。这还不算，参数如果是负数的情况，表现又不一样。这里也不是要提供一种牢靠可记的方法，只是通过一个面试题目来顺便讨论和区分一下这些函数。

### 问题

将给定的字符串除最后四位外，转成以 `#` 代替的掩码。

示例：

```
mask("123456789") // "#####6789"
```

### 方案

#### 方案一:

方案一也是比较直观的做法，将输入的字符串分成两部分，将需要转换的前一部分替换后与最后四位拼接。

所以第一步是从原始字符串中取出这两部分。一如文章开头所说，可通过 `substr/substring` 来截取字符串的部分，也可通过 `slice/splice` 来选取字符串的部分。

先分别看看他们的功能及语法。

- `substr`

语法：`str.substr(start[, length])` 
返回 `start` 开始的 `length` 个字符，如果指定的起始索引为负，则从字符串末尾开始。
其结果通过集合可表示为 `[start, start + length)`

示例：
```js
'1234'.substr(1,1) // '2'
'1234'.substr(-1,1) // '4'
```

对于负数的情况，先用字符串总长度与之做加法运算，上面第二个示例中，字符串总长 4，与 -1 想加后得 3，最终相当于

```js
'1234'.substr(3,1) // '4'
    ^
 0123
```

从第三个开始选一个，第三个字符是 4，所以最终结果是 4。

- `substring` 

语法：`str.substring(indexStart[, indexEnd])`
返回 `indexEnd` 开始到 `indexEnd` 的这部分字符串。
其结果通过集合可表示为 `[indexStart, indexEnd)`。

特别地，如果起始索引大于结束索引，效果相当于交换他们的值。与 `substr` 不同，**它不支持索引为负时从末尾开始计算**。

- 字符串的 `slice` 方法

语法：`str.slice(beginIndex[, endIndex])`

从方法签名上来看，其与 `substring` 是很类似的。返回的结果也一样。
他们的区分在于：
    - 起始索引大于结束索引时， `slice` 不会调换参数
    - 对于负数的索引，`substring` 当0处理，而 `slice` 从末尾开始处理


数组的 `slice/splice` 两个方法也是类似功能，只不过操作的是数组，选取的是数组中部分元素。因为字符串是类数组的（array-like），所以可以考虑这两个方法来获取部分字符串。

- `slice`

语法：`arr.slice([begin[, end]])`
从原数组中选取 `begin` 开始到 `end` 之间的元素，用集合可表示为 [begin, end)。
其中 `begin` `end` 都可为负数。

示例：

```js
[1,2,3,4].slice(-2) // [3,4]
```

类似 `substr`，起始索引为负数表示从末尾开始，理解上可将其与数组长度想加得 `4-2=2`，最后相当于 

```js
[1,2,3,4].slice(-2) // [3,4]
     ^
 0 1 2 3
```

**与 `substring` 不同，当起始索引大于结束索引时返回空，而不是交换这两个参数。**

- `splice`

语法：`array.splice(start[, deleteCount[, item1[, item2[, ...]]]])`
它操作的是原数组，在原数组中进行元素的增删。

了解了上面这些方法后，就可以完成方案一的实现了（简便起见，不考虑字符串总长小于4的情况）。

```js
function mask(str) {
    return str.substring(0, str.length - 4).split('').map((v) => '#').join('') + str.substr(-4)
}
```


#### 方案二： `str.repeat`

如果用上 string 的 repeat 方法，则省去了替换的步骤，直接生成需要个数的符号再加上原字符串的最后四位字符。

```js
function mask(str) {
    return '#'.repeat(str.length - 4) + str.substr(-4)
}
```

缺点是 IE 不支持 string 的这个 `repeat` 方法。


#### 方案三

上面 `repeat` 不支持的情况下，可快速生成有指定空元素的数组来达到目的。

```js
function mask(str) {
    return Array(str.length - 3).join('#') + str.substr(-4)
}
```

### 总结

因为最新的 Chrome Canary 中已经能自动提示 JavaScript 内置方法的参数了，如果记不住这些相似方法的签名也不用每次都查 MDN 了。

![Chrome DevTools 中自动提示方法参数](https://raw.githubusercontent.com/wayou/wayou.github.io/master/posts/mask-string/assets/auto-tip-for-native-method.png)


### 相关资料

- [30 seconds of interviews](https://30secondsofinterviews.org/)
- [MDN substr doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr)
- [MDN substring doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
- [MDN string slice doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
- [What is the difference between String.slice and String.substring?](https://stackoverflow.com/a/2243835/1553656)
- [MDN splice doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- [MDN slice doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [What’s the difference between “Array()” and “[]” while declaring a JavaScript array?](https://stackoverflow.com/a/932392/1553656)
