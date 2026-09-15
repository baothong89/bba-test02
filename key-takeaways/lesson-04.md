# Git & Javascript (continue)
## Object

### 1. Tạo object
    let user {
        name:"xxx",
        age: "playwright",
        marriedStatus: false
    }    
    console.log(user): in ra tất cả giá trị của user
    console.log(user.name) : in ra tên user

### 2. Thêm , sửa, xóa
    - Thêm (sẽ tạo new key trong object): user.birthday="1/01/1990"
    - Sửa : user.name="yyy"
    - xóa ( cả key): delete user.birthday

### 3. nestedObject
    let user {
        name:"xxx",
        age: "playwright",
        marriedStatus: false,
        address: {
            street: "xxx",
            district: "xxx",
            city: "xxx"
        }
    }    

## Array
### 1. Khai báo
    let arr =[value1, value2,...] : tồn tại với giá trị ví trị từ 0->n-1

### 2. truy xuất
    console.log(arr[0]): Lấy giá trị đầu
    console.log(arr.lenght-1) : lấy giá trị cuối 
    console.log(arr.lenght) : đếm số phần tử trong arr

### 3. 1 số câu lênh
    arr.push(newValue) : thêm vào cuối
    arr.unshift(newvalue) : thêm vào đầu
    arr.splice (<vị trí>,<số value cần xóa>, <newValue>): Xóa 1 số phần tử và thêm vào phần tử mới
    arr.pop() : Xóa cuối
    arr.shift() : xóa đầu
    arr.find(num => num >10) : trả về giá trị đầu tiên >10
    arr.filter(num => num >10) : trả về tất cả giá trị >10
    arr.map(num => num*2) : nhân 2 với tất cả phần tử
    arr.sort((a-b) => a-b) : Tăng dần
    arr.sort((a-b) => b-a) : Giảm dần
    
### 4. Lặp với arr
        for( let i =0; i <= arr.lenght-1; i++>){

        };

## Function
### Khai Báo:
    function functionName(){
        console.log("Hello Word")
    };

Gọi: functionName();

### Function với tham số

    function xinChao(name){
        console.log(`Hello ${name}`)
    }
Gọi: xinChao(BaoThong);

## Utils function - array
### Sử dụng hàm map 

    *format: array.map((currentItem, index, array) => ...)*
    
    const arr1=[1,2,3]\
    const arr2 = arr1.map(num => num x2) : tạo mảng arr2 với giá trị từ arr1 lần lượt chạy qua biến num rồi x2 để tạo giá trị cho mảng arr2 ( mảng mới cùng độ dài với mảng cũ)
    
    *ví dụ nâng cao:* 
    const user = [name1,name2]
    const newUser = user.map((name,index)=> ({
        index=index +1,
        name= name,
        code= `user${index+1}`

    }))

### Sử dụng hàm filter 
    arr.filter(num => num >10) : trả về tất cả giá trị >10

### Sử dụng hàm filter 
    arr.find(num => num >10) : trả về giá trị đầu tiên >10 ( nếu ko có trả undefined)

### Hàm reduce: Tính tích lũy qua từng lần lặp ( khá giống vòng lặp)
    const cart = [
        {product:"A", quantity: 1}
         {product:"B", quantity: 2}
    ]

    const totalItem = cart.reduce ((total,item) => total + item.quantity, 0)
    // số 0 ở cuối là giá trị khởi tạo cho lần đầu tiên chạy

### Hàm Some: kiểm tra ít nhất 1 phần tử trong mảng thỏa điều kiện ko. Trả về true/false

    arr.some(num => num >10) : trả về true nếu có giá trị trong mảng > 10 ( dừng lại ngay khi tìm thấy giá trị > 10)


### Hàm every:  kiểm tra tất cả phần tử trong mảng thỏa điều kiện ko. Trả về true/false

    arr.every(num => num >10) 

### Hàm sort
    default: arr.sort() : 

    *Sort number:*
    arr.sort((a-b) => a-b) : Tăng dần
    arr.sort((a-b) => b-a) : Giảm dần