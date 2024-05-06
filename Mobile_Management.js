class Mobile_Management {
    constructor() {
        this.mobile = [];
    }

    addMobile(code, fullName, producer, price) {
        let newMobile = new Mobile(code, fullName, producer, price);
        this.mobile.push(newMobile);
        console.log("thêm mobile mới");
        console.log(newMobile.toString());
    }

    listMobile() {
        this.mobile.fullName.sort();
        console.log("danh sách điện thoại di động sắp xếp theo tên ");
        this.mobile.forEach(mobile => {
            console.log(mobile.toString());
        });
    }
}
let manager = new Mobile_Management();
manager.addMobile("1234", "IPhone 12", "Apple", 999);
manager.addMobile("5678", "Galaxy S21", "Samsung", 899);
manager.addMobile("3456", "OnePlus 9", "OnePlus", 799);
manager.listMobile();

