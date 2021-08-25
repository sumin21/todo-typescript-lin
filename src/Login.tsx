import { useState } from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

interface LoginObj {
  username: string;
  password: string;
}

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //input에 입력하면 자동적으로 account state값 변경
  // const onChange = (e: any = true) => {
  //   //...을 이용하여 account의 복사본을 만들고
  //   //input에 지정한 네임 속성에 해당 value 값을 넣어 오버라이딩!
  //   //console.log(account)를 찍어보고 입력한 값들이 account에 출력되면 성공!!
  //   console.log(e);
  // };

  const [mloginErr, setLoginErr] = useState(false);
  const history = useHistory();

  //동기식으로 로그인정보를 통신하여 출력
  const onSubmit = async () => {
    try {
      // const user = await fetchLogin(account);

      //성공하면 해당 user 아이디 패스워드값 셋팅
      // setUser(user);

      const a: LoginObj = { username: username, password: password };
      const user = await fetchLogin(a);
      console.log(user);
      if (user == "login err") {
        console.log("ss");
        setLoginErr(true);
      } else {
        //성공하면 해당 url로 이동(main페이지로)
        history.replace("/intro");
      }
    } catch (error) {
      //실패하면 throw new Error("") 값 출력
      window.alert(error);
    }
  };

  return (
    <div className="login-container container d-flex justify-content-center align-items-center">
      <div className="login-box flex-fill">
        <div className="login-text">로그인</div>
        <div className="id-password-container">
          <div className="login-id-box mb-4">
            <input
              type="text"
              className="form-control"
              value={username}
              placeholder="ID"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="password">
            <div className="login-password-box mb-4">
              <input
                type="password"
                className="password-text form-control"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div
          className="login-err-text"
          style={{ display: mloginErr ? "block" : "none" }}
        >
          비밀번호가 일치하지 않습니다.
        </div>
        <div className="login-btn d-grid">
          <button className="btn" type="button" onClick={onSubmit}>
            로그인
          </button>
        </div>
        <div className="login-sign-up mt-4 mb-4">
          <div className="mb-2">아직 회원이 아니신가요?</div>
          <div>회원가입</div>
        </div>
      </div>
    </div>
  );
}
// const fetchLogin : any = async
async function fetchLogin(Obj: LoginObj) {
  // const res: any = await fetch("http://localhost:4000/users", {
  //   method: "POST",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     id: Obj.username,
  //     password: Obj.password,
  //   }),
  // });
  // await fetch("http://localhost:4000/users/11", {
  //   method: "DELETE",
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     id: Obj.username,
  //     password: Obj.password,
  //   }),
  // })
  //   .then((response) => response.json())
  //   .then((data) => console.log(data))
  //   .catch((error) => console.log(error));

  const response: any = await fetch("http://localhost:4000/users");
  if (response.ok) {
    //서버통신이 성공적으로 이루어지면 users에 json값 대입
    const users = await response.json();
    console.log(users);
    //users안 객체들을 순회하면서 그 객체들의 id값과 form 컴포넌트에서 받음 account의 id값과 비교
    //서로 일치하는 것만 user에 대입
    const user: any = users.find((user: any) => user.id === Obj.username);
    //일치하는 user가 없거나, 비밀번호가 틀리면 해당 에러 생성
    if (!user || user.password !== Obj.password) {
      return "login err";
    }

    //모든게 일치하면 그 user 정보 return -> 이 return값이 form 컴포넌트 내 fetchLogin 함수 값으로 출력되는것
    //form 컴포넌트에서 setUser값에 넣어야함
    return user;
  }

  //서버 통신이 안이루어졌을떄
  throw new Error("서버 통신이 원할하지 않습니다.");
}
