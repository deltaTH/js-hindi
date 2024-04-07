class User {
    constructor(email, password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        // return this.key.toUpperCase()
        return `${this._password.toUpperCase()}encrypt`

    }

    set password(value){
        // this.key = value;
        this._password = value;
    }
}

const hitesh = new User("h@abhay.ai","samar")
console.log(hitesh.password)
console.log(hitesh.email)