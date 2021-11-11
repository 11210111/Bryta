import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "../css/Request.css";

export default function Request() {
  const isLogin = useSelector((state) => state.auth);
  const [requestValue, setRequestValue] = useState("");
  const postRequest = async () => {
    await axios
      .post(
        "https://localhost:8080/noticeBoard",
        {
          content: requestValue,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${isLogin.accessToken}`,
          },
          withCredentials: true,
        }
      )
      .then((res) => console.log(res));
  };
  const requestHandler = (e) => {
    setRequestValue(e.target.value);
  };
  return (
    <div className="request-container">
      <form className="request-form" onSubmit={postRequest}>
        <h3 className="request-font">배우 추가 건의</h3>
        <input
          className="request-form-actor"
          placeholder="배우 이름을 적어주세요."
          onChange={requestHandler}
          value={requestValue}
        />
        <button type="submit" className="request-form-btn">
          요청
        </button>
      </form>
    </div>
  );
}
