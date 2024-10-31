/**
  Vô trước ra trước - FIFO
  Hoạt động enqueue(): thêm (hay lưu trữ) một phần tử vào trong hàng đợi.
  Hoạt động dequeue(): xóa một phần tử từ hàng đợi.
 */
var Queue = /** @class */ (function () {
    function Queue(maxSize) {
        this.items = [];
        this.maxSize = 0;
        this.front = 0;
        this.rear = 0;
        this.maxSize = maxSize;
    }
    Queue.prototype.isFull = function () {
        if (this.rear === this.maxSize)
            return true;
        return false;
    };
    Queue.prototype.isEmpty = function () {
        if (this.front > this.rear)
            return true;
        return false;
    };
    // ham them
    Queue.prototype.enqueue = function (element) {
        if (this.isFull()) {
            return "Đã dầy";
        }
        this.rear++;
        this.items[this.rear] = element;
        return "Thêm thành công";
    };
    // hàm xóa
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return "Hàng đợi trống";
        }
        var item = this.items[this.front];
        this.front++;
        return item;
    };
    return Queue;
}());
var demo = new Queue(5);
console.log(demo.enqueue(1)); // In ra "Thêm thành công"
console.log(demo.enqueue(2)); // In ra "Thêm thành công"
console.log(demo.isFull()); // In ra false
console.log(demo.isEmpty()); // In ra false
console.log(demo.dequeue()); // Xóa và in ra phần tử đầu tiên (1)
console.log(demo.isEmpty()); // In ra false sau khi dequeue
