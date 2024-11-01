/*
Sắp xếp nổi bọt - Bubble Sort
Mô tả: Sắp xếp nổi bọt là thuật toán sắp xếp đơn giản, duyệt qua mảng nhiều lần và hoán đổi các cặp phần tử nếu chúng không theo đúng thứ tự.
*/

function bubbleSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Hoán đổi
            }
        }
    }
    return arr;
}

/*
Sắp xếp chèn - Insertion Sort
Mô tả: Sắp xếp chèn xây dựng một mảng đã sắp xếp bằng cách lấy từng phần tử và chèn nó vào vị trí chính xác của nó trong mảng con đã sắp xếp.
*/
function insertionSort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

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
function selectionSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Hoán đổi
        }
    }
    return arr;
}
/*
Sắp xếp trộn là thuật toán chia để trị, chia mảng thành các phần nhỏ và sau đó ghép các mảng đã sắp xếp lại với nhau.
*/
function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left: number[], right: number[]): number[] {
    let sortedArray = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArray.push(left.shift()!);
        } else {
            sortedArray.push(right.shift()!);
        }
    }
    return sortedArray.concat(left, right);
}

/*
Giải thuật Shell Sort
Mô tả: Shell Sort là phiên bản cải tiến của sắp xếp chèn, sử dụng một khoảng cách (gap) để giảm số lần di chuyển.
*/
function shellSort(arr: number[]): number[] {
    let gap = Math.floor(arr.length / 2);

    while (gap > 0) {
        for (let i = gap; i < arr.length; i++) {
            let temp = arr[i];
            let j = i;

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
function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

/*
Quay lui - Backtracking
Mô tả: Thuật toán quay lui (backtracking) là phương pháp thử và sai để giải quyết các bài toán bằng cách tìm tất cả các lời giải khả thi.
*/
function findCombinations(arr: number[], target: number): number[][] {
    const result: number[][] = [];

    function backtrack(start: number, combination: number[], sum: number) {
        if (sum === target) {
            result.push([...combination]);
            return;
        }
        
        for (let i = start; i < arr.length; i++) {
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
const numbers = [2, 3, 5];
const targetSum = 8;

// Tìm các tổ hợp có tổng bằng targetSum
const combinations = findCombinations(numbers, targetSum);
console.log(combinations); // Ví dụ: [[3, 5], [2, 3, 3]]
