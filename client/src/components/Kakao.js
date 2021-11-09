import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { kakao } from "../features/API/authAPI";

const KakaoLogin = ({ userInfo, setUserInfo }) => {
  const dispatch = useDispatch();
  const [authorizationCode, setAuthorization] = useState("");
  const serverUrl = "http://localhost:8080/auth/kakao/getAccessToken";
  const onClickKakao = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=c139469ef8f15044f5e9ceaed0648aa8&redirect_uri=http://localhost:3000/login&response_type=code`;
  };

  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get("code");
    if (authorizationCode) {
      Promise.all([
        (setAuthorization(authorizationCode),
        dispatch(kakao({ serverUrl, authorizationCode }))),
      ]);
    }
  }, []);


  return (
    <div>
      <button className="kakaoOauth" onClick={onClickKakao}></button>
    </div>
  );
};

export default KakaoLogin;
