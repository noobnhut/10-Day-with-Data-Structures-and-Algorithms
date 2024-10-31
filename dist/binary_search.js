/*
Tìm kiếm nhị phân (Binary Search) là một thuật toán tìm kiếm nhanh, hoạt động trên tập dữ liệu đã được sắp xếp. Dưới đây là các khía cạnh chính của Binary Search:

What: Binary Search là thuật toán tìm kiếm dựa trên nguyên tắc chia để trị (Divide and Conquer), giúp giảm số lượng phần tử cần kiểm tra trong quá trình tìm kiếm.

Where: Binary Search chỉ hoạt động hiệu quả trên các tập dữ liệu đã được sắp xếp tăng dần hoặc giảm dần.

Who: Bất kỳ lập trình viên nào muốn tối ưu hóa tìm kiếm trong dữ liệu lớn và đã sắp xếp đều có thể sử dụng Binary Search.

How:
Binary Search chia tập dữ liệu thành hai nửa ở mỗi bước:
So sánh phần tử giữa (middle) với giá trị cần tìm (target).
Nếu target bằng phần tử giữa, trả về chỉ số của phần tử đó.
Nếu target lớn hơn, tìm kiếm tiếp tục ở nửa bên phải.
Nếu target nhỏ hơn, tìm kiếm tiếp tục ở nửa bên trái.
Quá trình này lặp lại cho đến khi tìm thấy target hoặc hết dữ liệu.

When: Binary Search được sử dụng khi cần tìm kiếm nhanh trong tập dữ liệu lớn đã sắp xếp.
Giúp giảm đáng kể thời gian tìm kiếm so với Linear Search.
*/
function binarySearch(arr, target) {
    var left = 0;
    var right = arr.length - 1;
    while (left <= right) {
        // Tìm vị trí phần tử giữa
        var middle = Math.floor((left + right) / 2);
        // Nếu phần tử giữa là giá trị cần tìm, trả về chỉ số
        if (arr[middle] === target) {
            return middle;
        }
        // Nếu giá trị cần tìm lớn hơn phần tử giữa, tìm ở nửa phải
        if (arr[middle] < target) {
            left = middle + 1;
        }
        // Nếu giá trị cần tìm nhỏ hơn phần tử giữa, tìm ở nửa trái
        else {
            right = middle - 1;
        }
    }
    // Nếu không tìm thấy, trả về null
    return null;
}
{
    // Dữ liệu mẫu đã được sắp xếp và giá trị cần tìm
    var sortedNumbers = [1, 3, 5, 7, 8, 9, 10];
    var target = 7;
    // Gọi hàm tìm kiếm nhị phân
    var result = binarySearch(sortedNumbers, target);
    // In kết quả ra console
    if (result !== null) {
        console.log("Ph\u1EA7n t\u1EED ".concat(target, " \u0111\u01B0\u1EE3c t\u00ECm th\u1EA5y t\u1EA1i v\u1ECB tr\u00ED ").concat(result, "."));
    }
    else {
        console.log("Ph\u1EA7n t\u1EED ".concat(target, " kh\u00F4ng c\u00F3 trong m\u1EA3ng."));
    }
}
