/*
Tìm kiếm nội suy (Interpolation Search) là một thuật toán tìm kiếm, được xem là một biến thể cải tiến của Tìm kiếm nhị phân (Binary Search). Thuật toán này hoạt động tốt trên các tập dữ liệu đã được sắp xếp và phân bố đều, nơi mà có thể dự đoán được vị trí gần đúng của phần tử cần tìm.

Các điểm chính về Tìm kiếm nội suy:
What: Interpolation Search là thuật toán tìm kiếm dùng phép nội suy để dự đoán vị trí của phần tử cần tìm trong dữ liệu, dựa vào giá trị của phần tử đó.

Where: Thuật toán này chỉ hoạt động hiệu quả với các tập dữ liệu được sắp xếp và phân bố đồng đều, như danh sách số điện thoại, mã zip, hoặc các giá trị liên tục.

Who: Các lập trình viên tìm kiếm hiệu quả hơn trong dữ liệu lớn và đã sắp xếp có thể chọn Interpolation Search thay vì Binary Search.

How: Interpolation Search sử dụng một công thức nội suy để tìm ra vị trí gần đúng của phần tử

When: Interpolation Search được sử dụng khi dữ liệu lớn, đã sắp xếp và phân bố đều, giúp tối ưu hóa hiệu suất tìm kiếm. Thuật toán có độ phức tạp trung bình là 
𝑂(loglog𝑛) nhưng có thể đạt tới 𝑂(𝑛) trong trường hợp xấu nhất (dữ liệu không đồng đều).
*/

function interpolationSearch(arr: number[], target: number): number | null {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right && target >= arr[left] && target <= arr[right]) {
    // Dự đoán vị trí của target
    const pos =
      left +
      Math.floor(
        ((target - arr[left]) * (right - left)) / (arr[right] - arr[left])
      );

    // Nếu tìm thấy target, trả về chỉ số của nó
    if (arr[pos] === target) {
      return pos;
    }

    // Nếu target lớn hơn, tìm ở nửa bên phải
    if (arr[pos] < target) {
      left = pos + 1;
    }
    // Nếu target nhỏ hơn, tìm ở nửa bên trái
    else {
      right = pos - 1;
    }
  }

  // Nếu không tìm thấy, trả về null
  return null;
}
{
  // Dữ liệu mẫu đã được sắp xếp và giá trị cần tìm
  let sortedNumbers = [10, 20, 30, 40, 50, 60, 70, 80, 90];
  const target = 50;

  // Gọi hàm tìm kiếm nội suy
  const result = interpolationSearch(sortedNumbers, target);

  // In kết quả ra console
  if (result !== null) {
    console.log(`Phần tử ${target} được tìm thấy tại vị trí ${result}.`);
  } else {
    console.log(`Phần tử ${target} không có trong mảng.`);
  }
}
