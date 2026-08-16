// تمرین 1

function Global() {

    let company = "Open AI"

    console.log(company);
}

 Global();

// تمرین 2

let x = 5000;

function salary(x){


   
}

 console.log(salary(x));

 salary(x);

چون بیرون تابع چاپ شده

// تمرین 3

for(var i=1;i<=3;i++){

}

console.log(i);
اگر متغیر let بدیم refrence error میده چون بیرون متغیر چاپ شده اما اگر var بدیم خروجی 4 چاپ می شود

// تمرین 4

  if(true){

    let i0=1;

    var i=1;

  }
اگر با var تعریف کنیم بیرون تابع چاپ می شود

ولی اگر با let تعریف کنیم داخل تابع فقط چاپ می شود

  console.log(i);

  console.log(i0);

// چالش خانه

function calculateArea(width, height) {
  let area = width * height;

  return area;
}

console.log(calculateArea(20, 20));

// پروژه پایان جلسه

let shopName = "Teach Store";

function createOrder(product,quality) {

  let orderld = 1001;

  console.log("shop:", shopName);

  console.log("product:", product);

  console.log("Quantity:", quality);

  console.log("Order ID:", orderld);
}

createOrder("Laptop",2);
