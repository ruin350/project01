class User{
    username;
    password;
    name;
    email;
}

class UserMain{
    main() {
        let user = new User();

        user.username = "kkr";
        user.password = "1234";
        user.name = "구기룡";
        user.email = "kkr583@naver.com";

        console.log(user);
    }
}
// 문서가 읽어졌을때 실행된다.
window.onload = () =>{
    let userMain = new UserMain();

    userMain.main();
}