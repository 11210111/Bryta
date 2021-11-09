import React, { useState, useEffect } from "react";
import axios from "axios";

const KakaoLogin = ({ userInfo, setUserInfo }) => {
  const [authorizationCode, setAuthorization] = useState("");
  const serverUrl = "https://api.bryta.shop/auth/kakao/getAccessToken";
  const onClickKakao = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=c139469ef8f15044f5e9ceaed0648aa8&redirect_uri=bryta.shop/login&response_type=code`;
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get("code");
    if (authorizationCode) {
      setAuthorization(authorizationCode);
    }
  }, []);

  if (authorizationCode) {
    axios
      .post(
        serverUrl,
        {
          code: authorizationCode,
        },
        {
          withCredentials: true,
        }
      )
      .then((data) => {
        window.sessionStorage.setItem("accessToken", data.data.accessToken);
        const userInfoUrl = "https://api.bryta.shop/auth/kakao/getUserInfo";
        const authorization = data.data.accessToken;
        axios
          .get(userInfoUrl, {
            headers: {
              accessToken: authorization,
            },
            withCredentials: true,
          })
          .then((data) => {
            setUserInfo(data.data.userInfo.nickname);
          });
      });
  }

  return (
    <div>
      <button className="kakaoOauth" onClick={onClickKakao}></button>
    </div>
  );
};

export default KakaoLogin;
