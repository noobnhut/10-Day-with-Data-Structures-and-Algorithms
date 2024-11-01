/*
Sắp xếp nổi bọt - Bubble Sort
Mô tả: Sắp xếp nổi bọt là thuật toán sắp xếp đơn giản, duyệt qua mảng nhiều lần và hoán đổi các cặp phần tử nếu chúng không theo đúng thứ tự.
*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function bubbleSort(arr) {
    var _a;
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                _a = [arr[j + 1], arr[j]], arr[j] = _a[0], arr[j + 1] = _a[1]; // Hoán đổi
            }
        }
    }
    return arr;
}
/*
Sắp xếp chèn - Insertion Sort
Mô tả: Sắp xếp chèn xây dựng một mảng đã sắp xếp bằng cách lấy từng phần tử và chèn nó vào vị trí chính xác của nó trong mảng con đã sắp xếp.
*/
function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var key = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
/*
Sắp xếp chọn - Selection Sort
Mô tả: Sắp xếp chọn tìm phần tử nhỏ nhất và đặt nó vào đầu mảng, lặp lại quá trình cho mảng con còn lại.
*/
function selectionSort(arr) {
    var _a;
    for (var i = 0; i < arr.length - 1; i++) {
        var minIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            _a = [arr[minIndex], arr[i]], arr[i] = _a[0], arr[minIndex] = _a[1]; // Hoán đổi
        }
    }
    return arr;
}
/*
Sắp xếp trộn là thuật toán chia để trị, chia mảng thành các phần nhỏ và sau đó ghép các mảng đã sắp xếp lại với nhau.
*/
function mergeSort(arr) {
    if (arr.length <= 1)
        return arr;
    var mid = Math.floor(arr.length / 2);
    var left = mergeSort(arr.slice(0, mid));
    var right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
function merge(left, right) {
    var sortedArray = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArray.push(left.shift());
        }
        else {
            sortedArray.push(right.shift());
        }
    }
    return sortedArray.concat(left, right);
}
/*
Giải thuật Shell Sort
Mô tả: Shell Sort là phiên bản cải tiến của sắp xếp chèn, sử dụng một khoảng cách (gap) để giảm số lần di chuyển.
*/
function shellSort(arr) {
    var gap = Math.floor(arr.length / 2);
    while (gap > 0) {
        for (var i = gap; i < arr.length; i++) {
            var temp = arr[i];
            var j = i;
            while (j >= gap && arr[j - gap] > temp) {
                arr[j] = arr[j - gap];
                j -= gap;
            }
            arr[j] = temp;
        }
        gap = Math.floor(gap / 2);
    }
    return arr;
}
/*
Sắp xếp nhanh - Quick Sort
Mô tả: Quick Sort là thuật toán chia để trị, chọn một phần tử làm chốt (pivot) và phân chia mảng sao cho các phần tử nhỏ hơn nằm bên trái pivot và các phần tử lớn hơn nằm bên phải.
*/
function quickSort(arr) {
    if (arr.length <= 1)
        return arr;
    var pivot = arr[arr.length - 1];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], quickSort(left), true), [pivot], false), quickSort(right), true);
}
/*
Quay lui - Backtracking
Mô tả: Thuật toán quay lui (backtracking) là phương pháp thử và sai để giải quyết các bài toán bằng cách tìm tất cả các lời giải khả thi.
*/
function findCombinations(arr, target) {
    var result = [];
    function backtrack(start, combination, sum) {
        if (sum === target) {
            result.push(__spreadArray([], combination, true));
            return;
        }
        for (var i = start; i < arr.length; i++) {
            if (sum + arr[i] <= target) {
                combination.push(arr[i]);
                backtrack(i, combination, sum + arr[i]);
                combination.pop();
            }
        }
    }
    backtrack(0, [], 0);
    return result;
}
// Dữ liệu mẫu và giá trị mục tiêu
var numbers = [2, 3, 5];
var targetSum = 8;
// Tìm các tổ hợp có tổng bằng targetSum
var combinations = findCombinations(numbers, targetSum);
console.log(combinations); // Ví dụ: [[3, 5], [2, 3, 3]]
