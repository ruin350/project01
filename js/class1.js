class User{
    username;
    password;
    name;
    email;

    // 생성자(변수){실행문}
    constructor(username, password, name, email){
        this.username = username;
        this.password = password;
        this.name = name;
        this.email = email;
    }

    prinName(){
        console.log(this.name + "님의 정보");
    }
}


class UserMain{
    // 싱글턴패턴
    // static #instance = null;
    // static getInstance(){
    //     if(this.#instance == null){
    //         this.#instance = new UserMain();
    //     }
    //     return this.#instance;
    // }

    main() {
        let user = new User("kkr", "1234", "구기룡", "kkr583@naver.com");

        // user.username = "kkr";
        // user.password = "1234";
        // user.name = "구기룡";
        // user.email = "kkr583@naver.com";

        console.log(user);

        // 블로그
        localStorage.username = user.username;

        console.log("username: " + localStorage.username)

        user.prinName();
    }
}
// 문서가 읽어졌을때 실행된다.
window.onload = () =>{
    let userMain = new UserMain();
    // let userMain = new UserMain.getInstance();

    userMain.main();
}