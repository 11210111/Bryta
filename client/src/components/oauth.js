import React, { useState, useEffect } from "react";
import axios from "axios";

const KakaoLogin = async () => {
  // const url =
  //   "https://kauth.kakao.com/oauth/authorize?client_id=c139469ef8f15044f5e9ceaed0648aa8&redirect_uri=http://localhost:3000&response_type=code";
  // // axios
  // //   .get(url, {
  // //     params: {
  // //       response_type: "code",
  // //       client_id: "c139469ef8f15044f5e9ceaed0648aa8",
  // //       redirect_uri: "http://localhost:3000/login",
  // //     },
  // //     withCredentials: true,
  // //   })
  // //   .then((res) => {
  // //     console.log(res);
  // //   })
  // //   .catch((err) => {
  // //     console.log(err);
  // //   });
  // await axios
  //   .get(url, {
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  //       withCredentials: true,
  //       // "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
  //       // "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  //       // "Access-Control-Allow-Headers":
  //       //   "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
  //       // "Access-Control-Allow-Credentials": "true",
  //     },
  //   })
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  useEffect(() => {
    const url = new URL(window.location.href);
    const authorizationCode = url.searchParams.get("code");
    console.log(url);
    console.log(authorizationCode);
  });
};

export default KakaoLogin;
