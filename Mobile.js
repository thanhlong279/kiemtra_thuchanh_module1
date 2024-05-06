class Mobile {
    constructor(code, fullName, producer, price) {
        this.code = code;
        this.fullName = fullName;
        this.producer = producer;
        this.price = price;
    }
    getCode(){
        return this.code;
    }
    getFullName(){
        return this.fullName
    }
    getProducer(){
        return this.producer;
    }
    getPrice(){
        return this.price;
    }
    setCode(code){
        this.code = code;
    }
    setFullName(fullName){
        this.fullName = fullName;
    }
    setProduct(product){
        this.producer = product;
    }
    setPrice(price){
        this.price = price;
    }
    toString(){
        return `Mobile [Code: ${this.code}, Full Name: ${this.fullName}, Producer: ${this.producer}, Price: ${this.price}]`;
    }
}