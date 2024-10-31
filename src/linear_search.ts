/*
Tìm kiếm tuyến tính (Linear Search) là một thuật toán cơ bản, trong đó mỗi phần tử của một tập hợp được kiểm tra lần lượt từ đầu đến cuối để tìm kiếm một phần tử thỏa mãn điều kiện nhất định.

Dưới đây là chi tiết về Linear Search qua các khía cạnh:

What: Linear Search là một thuật toán tìm kiếm, trong đó mọi phần tử của tập hợp dữ liệu được kiểm tra tuần tự cho đến khi tìm thấy phần tử cần tìm hoặc hết dữ liệu.

Where: Linear Search có thể được sử dụng trong mảng, danh sách liên kết, hoặc bất kỳ cấu trúc dữ liệu nào có thể duyệt tuần tự qua các phần tử.

Who: Bất kỳ lập trình viên nào khi cần tìm kiếm một phần tử trong dữ liệu nhỏ hoặc khi chưa có yêu cầu tối ưu hóa cao đều có thể sử dụng Linear Search vì tính đơn giản của nó.

How: Linear Search kiểm tra từng phần tử trong mảng từ đầu đến cuối, so sánh phần tử đó với giá trị cần tìm kiếm. Nếu có phần tử nào khớp, trả về chỉ số (index) của phần tử đó; nếu không, trả về kết quả cho thấy phần tử không có trong tập hợp.

When: Linear Search được sử dụng khi dữ liệu cần tìm kiếm không lớn lắm và không cần tối ưu hóa cao. Nó cũng phù hợp khi cấu trúc dữ liệu không được sắp xếp.
*/

function linearSearch(arr: number[], target: number): number | null {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Trả về chỉ số của phần tử nếu tìm thấy
        }
    }
    return null; // Nếu không tìm thấy, trả về null
}

{
// Dữ liệu mẫu và giá trị cần tìm
const numbers = [5, 8, 1, 3, 9, 7];
const target = 3;

// Gọi hàm tìm kiếm tuyến tính
const result = linearSearch(numbers, target);

// In kết quả ra console
if (result !== null) {
    console.log(`Phần tử ${target} được tìm thấy tại vị trí ${result}.`);
} else {
    console.log(`Phần tử ${target} không có trong mảng.`);
}
}
