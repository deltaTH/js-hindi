class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const abhay = new User("abhay")
// console.log(abhay.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone","iphone@apple.com")

iphone.logMe();