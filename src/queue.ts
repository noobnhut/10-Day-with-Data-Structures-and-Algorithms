/**
  Vô trước ra trước - FIFO
  Hoạt động enqueue(): thêm (hay lưu trữ) một phần tử vào trong hàng đợi.
  Hoạt động dequeue(): xóa một phần tử từ hàng đợi.
 */

class Queue<T>{
    private items: T[] = []
    private maxSize: number = 0
    private front:number = 0
    private rear:number = 0

    constructor(maxSize:number){
        this.maxSize = maxSize;
      }

    isFull():boolean{
        if(this.rear === this.maxSize)
            return true
        return false
    }

    isEmpty():boolean{
        if(this.front > this.rear)
            return true
        return false
    }

    // ham them
    enqueue(element: T): string {
       if(this.isFull())
       {
         return "Đã dầy"
       }
       this.rear++
       this.items[this.rear] = element 
       return "Thêm thành công"
    }

    // hàm xóa
    dequeue(): T | string {
        if (this.isEmpty()) {
            return "Hàng đợi trống";
        }
        const item = this.items[this.front];
        this.front++;
        return item;
    }
}

const demo = new Queue<Number>(5);
console.log(demo.enqueue(1)); // In ra "Thêm thành công"
console.log(demo.enqueue(2)); // In ra "Thêm thành công"
console.log(demo.isFull()); // In ra false
console.log(demo.isEmpty()); // In ra false
console.log(demo.dequeue()); // Xóa và in ra phần tử đầu tiên (1)
console.log(demo.isEmpty()); // In ra false sau khi dequeue

