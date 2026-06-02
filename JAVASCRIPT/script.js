const names = ["alice", "bob", "charlie"];

const upperNames = names.map(name => name.toUpperCase());

console.log(upperNames);


const users1 = [
  { name: "John", age: 25 },
  { name: "Jane", age: 17 },
  { name: "Alex", age: 32 },
  { name: "Mia", age: 15 }
];

const adultNames = users1
  .filter(user => user.age > 18)
  .map(user => user.name);

console.log(adultNames);


const cart1 = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 },
  { name: "Keyboard", price: 80 }
];

const totalPrice = cart1.reduce((sum, item) => sum + item.price, 0);

console.log(totalPrice);


const people = [
  { first: "John", last: "Doe" },
  { first: "Anna", last: "Smith" }
];

const fullNames = people.map(person => `${person.first} ${person.last}`);

console.log(fullNames);


const products1 = [
  { name: "iPhone 14", price: 1200, inStock: true },
  { name: "MacBook", price: 1800, inStock: false },
  { name: "AirPods", price: 250, inStock: true },
  { name: "iPad Pro", price: 1100, inStock: true }
];

const expensiveProducts = products1
  .filter(product => product.price > 1000 && product.inStock)
  .map(product => product.name);

console.log(expensiveProducts);


const students = [
  { name: "Riya", score: 92 },
  { name: "Aman", score: 78 },
  { name: "Sneha", score: 88 },
  { name: "Karan", score: 65 },
  { name: "Priya", score: 95 }
];

const topStudents = students.filter(student => student.score > 80);

const topStudentNames = topStudents.map(student => student.name);

const averageScore = (
  topStudents.reduce((sum, student) => sum + student.score, 0) / topStudents.length
).toFixed(2);

console.log(topStudentNames);
console.log(averageScore);


const items = [
  { name: "Smartphone", price: 32000 },
  { name: "Charger", price: 1200 },
  { name: "Headphones", price: 4500 },
  { name: "Power Bank", price: 1800 }
];

const totalAfterDiscount1 = items.reduce((sum, item) => {
  const finalPrice = item.price > 1500 ? item.price * 0.8 : item.price;
  return sum + finalPrice;
}, 0);

console.log(totalAfterDiscount1);


const products2 = [
  { brand: "Samsung", model: "S23", price: 72000, quantity: 5 },
  { brand: "Apple", model: "iPhone 14", price: 89000, quantity: 2 },
  { brand: "OnePlus", model: "Nord 3", price: 32000, quantity: 8 }
];

const productNames = products2.map(
  product => `${product.brand} ${product.model}`
);

const totalValue = products2.reduce(
  (sum, product) => sum + product.price * product.quantity,
  0
);

console.log(productNames);
console.log(totalValue);


const employees = [
  { name: "Vikram", department: "Engineering", salary: 1800000 },
  { name: "Neha", department: "Marketing", salary: 950000 },
  { name: "Arjun", department: "Engineering", salary: 1350000 },
  { name: "Pooja", department: "Engineering", salary: 980000 }
];

const engineeringEmployees = employees.filter(
  employee =>
    employee.department === "Engineering" &&
    employee.salary > 1200000
);

const employeeNames = engineeringEmployees.map(
  employee => employee.name
);

const totalSalary = engineeringEmployees.reduce(
  (sum, employee) => sum + employee.salary,
  0
);

console.log(employeeNames);
console.log(totalSalary);


const tasks = [
  { title: "Database Migration", priority: "high", completed: true },
  { title: "UI Redesign", priority: "medium", completed: true },
  { title: "API Testing", priority: "high", completed: false },
  { title: "Security Audit", priority: "high", completed: true }
];

const completedHighPriorityTasks = tasks
  .filter(task => task.priority === "high" && task.completed)
  .map(task => task.title)
  .join(", ");

console.log(completedHighPriorityTasks);


const cart2 = [
  { name: "Monitor", price: 14500, inStock: true },
  { name: "Keyboard", price: 3200, inStock: false },
  { name: "Mouse", price: 1800, inStock: true },
  { name: "Webcam", price: 4200, inStock: true }
];

const totalAfterDiscount2 = cart2
  .filter(item => item.inStock)
  .reduce((sum, item) => sum + item.price * 0.85, 0);

console.log(totalAfterDiscount2);


const users2 = [
  { name: "rahul", age: 19, active: true },
  { name: "simran", age: 24, active: true },
  { name: "aditya", age: 32, active: false },
  { name: "kavya", age: 22, active: true }
];

const activeUsers = users2.filter(
  user => user.active && user.age > 21
);

const activeUserNames = activeUsers.map(
  user => user.name.toUpperCase()
);

const userCount = activeUserNames.length;

console.log(activeUserNames);
console.log(userCount);


const players = [
  { name: "Rohit", score: 168 },
  { name: "Virat", score: 142 },
  { name: "Shubman", score: 185 },
  { name: "Ishan", score: 134 }
];

const winningPlayers = players.filter(
  player => player.score > 150
);

const winningPlayerNames = winningPlayers.map(
  player => `${player.name} (${player.score})`
);

const totalWinningScore = winningPlayers.reduce(
  (sum, player) => sum + player.score,
  0
);

console.log(winningPlayerNames);
console.log(totalWinningScore);