//1. object literals 

const user = {

    name : "tom",
    age : 29,
    country : "new zealand",
    occupation : 'crickter'
};

console.log(user.occupation);
console.log(user.country);

// constructor function 
function car (brand, model, price){
this.brand = brand;
this.model = model ;
this.price = price ;

}

const cc = new car ("BMW" , "520d", 10000);
console.log(cc.brand);

// class style 

class customer{

    constructor (naame , product){

        this.name = naame;
        this.product = product;

    }

    addTocart (){
        console.log('${this.product} added to cart ');

    }
}
const c1 = new customer ( "tom ", "apple mackbook pro ");
const c2 = new customer ( "neil ", "apple mackbook pro ");
console.log(c1.name);
console.log(c2.product);
console.log(c1.addTocart());










