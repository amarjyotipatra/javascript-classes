class Product{
    //Declaring name,price,desc is optional
    name;
    price;
    desc;
    constructor(n,p,d){
        this.name=n;
        this.price=p;
        this.desc=d;
        return {overprice:0}
    }
}

const prod=new Product("Tuf F15",150000,"Dream Laptop")
// console.log(prod);

//function constructor
function check(n,p,d){
    this.name=n;
    this.price=p;
    this.desc=d;
    return 10
}
const newValue=new check("Tuf F15",150000,"Dream Laptop")
console.log(newValue);

//private clasees
class Private{
    #name;
    price;
    desc;
    constructor(n,p,d){
        this.#name=n;
        this.price=p;
        this.desc=d;
        // return {overprice:0}
    }
    display(){
        console.log(this.#name,this.price,this.desc);
    }

    //Getter and Setter
    get name(){
        console.log(this.#name);
    }
    set name(n){
        this.#name=n
    }
}
const privateVal=new Private("HP Omen",160000,"Build quality isn't good")
privateVal.name=-1
console.log(privateVal);
privateVal.display()