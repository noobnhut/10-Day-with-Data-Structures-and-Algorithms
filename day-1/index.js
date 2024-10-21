/*
Trong JavaScript, biến có thể là toàn cục nếu không khai báo.
Nên khai báo biến trước khi sử dụng để giữ chúng cục bộ.
Sử dụng từ khóa var để khai báo biến.
*/
// các ví dụ khi khai báo biến
var number;
var name;
var rate = 1.2;
var greeting = "Hello, world!";
var flag = false;

/*
Các phép toán trong javascript
*/

var x = 3;
var y = 1.1;
console.log(x + y);
console.log(x * y);
console.log((x + y) * (x - y));
var z = 9;
console.log(Math.sqrt(z));
console.log(Math.abs(y / x));

/*
• Câu lệnh if đơn giản
• Câu lệnh if-else
• Câu lệnh if-else if
*/
if (condition) {
    // Thực hiện nếu điều kiện là true
}

if (condition) {
    // Thực hiện nếu điều kiện là true
} else {
    // Thực hiện nếu điều kiện là false
}

if (condition1) {
    // Thực hiện nếu condition1 là true
} else if (condition2) {
    // Thực hiện nếu condition1 là false và condition2 là true
} else {
    // Thực hiện nếu tất cả các điều kiện đều false
}


// switch case
switch (expression) {
    case value1:
        // Thực hiện nếu expression === value1
        break; // Kết thúc kiểm tra
    case value2:
        // Thực hiện nếu expression === value2
        break;
    default:
    // Thực hiện nếu không có case nào khớp
}

// vòng lặp white
var number = 1;
var sum = 0;
while (number < 11) {
    sum += number;
    ++number;
}
console.log(sum); // Hiển thị 55

// vòng lặp for
var sum = 0;
for (var number = 1; number < 11; number++) {
    sum += number;
}
console.log(sum); // Hiển thị 55

//Hàm trả về giá trị:
function factorial(number) {
    var product = 1;
    for (var i = number; i >= 1; --i) {
        product *= i;
    }
    return product;
}
console.log(factorial(5)); // Hiển thị 120

//Hàm không trả về giá trị:
function curve(arr, amount) {
    for (var i = 0; i < arr.length; ++i) {
        arr[i] += amount;
    }
}
var grades = [77, 73, 74, 81, 90];
curve(grades, 5);
console.log(grades);

// ví dụ về phạm vi biến
var scope = "global";
function showScope() {
    var scope = "local";
    return scope;
}
console.log(scope); // Hiển thị "global"
console.log(showScope()); // Hiển thị "local"

// đệ quy
function factorial(number) {
    if (number == 1) {
      return number;
    } else {
      return number * factorial(number - 1);
    }
  }
  console.log(factorial(5)); // Hiển thị 120
// hướng đối tượng

function Checking(amount) {
    this.balance = amount;
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.toString = toString;
  }
  
  function deposit(amount) {
    this.balance += amount;
  }
  
  function withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log("Insufficient funds");
    }
  }
  
  function toString() {
    return "Balance: " + this.balance;
  }
  
  var account = new Checking(500);
  account.deposit(1000);
  console.log(account.toString()); // Hiển thị Balance: 1500
  account.withdraw(750);
  console.log(account.toString()); // Hiển thị Balance: 750
  account.withdraw(800); // Hiển thị "Insufficient funds"
  console.log(account.toString()); // Hiển thị Balance: 750
  