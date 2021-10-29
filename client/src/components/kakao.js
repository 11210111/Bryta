import React, { useState, useEffect } from "react";
import axios from "axios";

const KakaoLogin = () => {
  const [authorization, setAuthorization] = useState("");
  const serverUrl = "http://localhost:8080/auth/kakao/getAccessToken";
  const onClickKakao = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=c139469ef8f15044f5e9ceaed0648aa8&redirect_uri=http://localhost:3000/login&response_type=code`;
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get("code");
    if (authorizationCode) {
      setAuthorization(authorizationCode);
    }
  }, []);

  if (authorization) {
    axios
      .post(
        serverUrl,
        {
          code: authorization,
        },
        {
          withCredentials: true,
        }
      )
      .then((data) => {
        console.log(data.data.accessToken);
        const userInfoUrl = "http://localhost:8080/auth/kakao/getUserInfo";
        const accessToken = data.data.accessToken;
        axios
          .get(userInfoUrl, {
            headers: {
              accessToken,
            },
            withCredentials: true,
          })
          .then((data) => {
            console.log(data.data.userInfo);
          });
      });
  }

  return (
    <div>
      <button className="kakaoOauth" onClick={onClickKakao}>
        카카오톡 로그인
      </button>
      ;
    </div>
  );
};

export default KakaoLogin;
