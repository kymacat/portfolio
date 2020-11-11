
function random(min, max) {
    return min + Math.random() * (max - min)
}


var arr = []
var from = -1000
var to = 1000

for (var i = 0, t = 1000; i < t; i++) {
    arr.push(random(from, to))
}

var max = from
var min = to

var med = parseInt(arr.length / 2, 10) 

arr.forEach(function(item) {
    if (item > max) {
        max = item
    }
    if (item < min) {
        min = item
    }
});

var forMed = arr.slice()
forMed.sort(function(a, b) {
    return a - b;
})

med = forMed[med]

console.log(max)
console.log(med)
console.log(min)


function swap(items, firstIndex, secondIndex){
    var temp = items[firstIndex]
    items[firstIndex] = items[secondIndex]
    items[secondIndex] = temp
}

function partition(items, left, right) {
    var pivot = items[parseInt((right + left) / 2)]
    var i = left
    var j = right

    while (i <= j) {

        while (items[i] < pivot) {
            i++
        }

        while (items[j] > pivot) {
            j--
        }

        if (i <= j) {
            swap(items, i, j)
            i++
            j--
        }

    }
    return i
}

function quickSort(items, left, right) {
    var index
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1)
        }
        if (index < right) {
            quickSort(items, index, right)
        }
    }
    return items;
}

var result = quickSort(arr, 0, arr.length - 1)

console.log(result)


console.log("div count", document.getElementsByTagName("div").length)
console.log("a count", document.getElementsByTagName("a").length)