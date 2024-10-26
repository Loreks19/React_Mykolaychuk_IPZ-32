// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;
function getPrices(taxBollean){
    for(const item of dishData){
        let finalPrice;
        if(taxBollean === true){
            finalPrice = item.price * tax;
        }
        else if(taxBollean === false){
            finalPrice = item.price;
        }
        else{
            console.log("Ви повинні передати булеве значення у виклик getPrices")
            return;
        }
        console.log("Dish: "+ item.name + "Price: $" + finalPrice);
    }
}
function getDiscount(taxBollean, guests){
    getPrices(taxBollean);

    if(typeof guests === 'number' && guests>0 && guests <30) {
        console.log("Кількість гостей: " + guests);
        let discount = 0;

        if (guests <5){
            discount =5;
        }
        else if(guests >= 5){
            discount = 10;
        }

        console.log("Знижка становить: $" + discount);
    }
    else{
        console.log("Кількість гостей повинна бути між 0 та 30");
    }
}

getDiscount(true, 2);
getDiscount(false, 10);
getDiscount(true, 35);
getDiscount(true, "test");
