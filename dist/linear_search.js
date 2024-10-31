/*
Tìm kiếm tuyến tính (Linear Search) là một thuật toán cơ bản, trong đó mỗi phần tử của một tập hợp được kiểm tra lần lượt từ đầu đến cuối để tìm kiếm một phần tử thỏa mãn điều kiện nhất định.

Dưới đây là chi tiết về Linear Search qua các khía cạnh:

What: Linear Search là một thuật toán tìm kiếm, trong đó mọi phần tử của tập hợp dữ liệu được kiểm tra tuần tự cho đến khi tìm thấy phần tử cần tìm hoặc hết dữ liệu.

Where: Linear Search có thể được sử dụng trong mảng, danh sách liên kết, hoặc bất kỳ cấu trúc dữ liệu nào có thể duyệt tuần tự qua các phần tử.

Who: Bất kỳ lập trình viên nào khi cần tìm kiếm một phần tử trong dữ liệu nhỏ hoặc khi chưa có yêu cầu tối ưu hóa cao đều có thể sử dụng Linear Search vì tính đơn giản của nó.

How: Linear Search kiểm tra từng phần tử trong mảng từ đầu đến cuối, so sánh phần tử đó với giá trị cần tìm kiếm. Nếu có phần tử nào khớp, trả về chỉ số (index) của phần tử đó; nếu không, trả về kết quả cho thấy phần tử không có trong tập hợp.

When: Linear Search được sử dụng khi dữ liệu cần tìm kiếm không lớn lắm và không cần tối ưu hóa cao. Nó cũng phù hợp khi cấu trúc dữ liệu không được sắp xếp.
*/
function linearSearch(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Trả về chỉ số của phần tử nếu tìm thấy
        }
    }
    return null; // Nếu không tìm thấy, trả về null
}
{
    // Dữ liệu mẫu và giá trị cần tìm
    var numbers = [5, 8, 1, 3, 9, 7];
    var target = 3;
    // Gọi hàm tìm kiếm tuyến tính
    var result = linearSearch(numbers, target);
    // In kết quả ra console
    if (result !== null) {
        console.log("Ph\u1EA7n t\u1EED ".concat(target, " \u0111\u01B0\u1EE3c t\u00ECm th\u1EA5y t\u1EA1i v\u1ECB tr\u00ED ").concat(result, "."));
    }
    else {
        console.log("Ph\u1EA7n t\u1EED ".concat(target, " kh\u00F4ng c\u00F3 trong m\u1EA3ng."));
    }
}
