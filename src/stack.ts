/*
- Stack: cấu trúc dữ liệu ngăn xếp
+ WHAT: Ngăn xếp là một ADT với cách thức quản lý dữ liệu theo thứ tự LIFO.
+ WHERE: Ngăn xếp có thể được sử dụng trong nhiều bài toán như phân tích cú pháp, điều hướng (backtracking), hoặc lưu trữ trạng thái.
+ WHEN: Dùng ngăn xếp khi cần thao tác dữ liệu theo thứ tự LIFO, như trong các bài toán xử lý cú pháp hoặc lời gọi hàm đệ quy.
+ HOW: Ngăn xếp có thể được triển khai bằng nhiều cách như mảng, struct, con trỏ, và danh sách liên kết.
+ WHY: Ngăn xếp giúp lưu trữ dữ liệu có trật tự và dễ dàng quản lý thao tác thêm hoặc xóa một cách hiệu quả.
*/

/* 
Stack<T> sử dụng generic trong ts  
T xác định là kiểu dữ liệu có thể thay thế khi gọi về.
vd: 
+ Stack<number> 
+ Stack<string>
*/
class Stack<T> {
  private items: T[] = [];
  private maxSize: number = 0;
  private top: number = -1; // khi top về -1 => mảng rỗng

  // khởi tạo có tham số
  constructor(maxSize:number){
    this.maxSize = maxSize;
  }
  
  // kiểm tra đầy
  isFull(): boolean {
    return this.top == this.maxSize - 1;
  }

  // thêm phần tử vào ngăn xếp
  push(element: T): boolean {
    // check xem ngăn xếp full chưa
    if (this.isFull()) {
      console.log("ngăn xếp đầy");
      return false;
    }

    // tăng top
    this.top++;
    // thêm vào đầu mảng
    this.items[this.top] = element;
    return true;
  }

  // đưa phần tử ra khỏi mảng
  pop(): T | undefined {
    // check xem ngăn xếp rỗng chưa
    if (this.top == -1) {
      console.log("ngăn xếp rỗng");
      return undefined;
    }

    // lấy giá trị trong top
    const result = this.items[this.top];
    // giảm top
    this.top--;
    console.log(result);
    return result;
  }

  // in ngăn xếp để quan sát kq
  print(): void {
    console.log(this.items.slice(0, this.top + 1).join(", "));
  }
}

// thực hiện testing cơ bản
const stack = new Stack<number>(5)
stack.push(1) // thêm sô 1
stack.push(2) // thêm số 2
stack.print() // xem giá trị lần 1
stack.pop() // lấy ra 1 giá trị
stack.print() // xem giá trị lần 2