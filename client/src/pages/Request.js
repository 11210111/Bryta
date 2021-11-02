import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "../css/Request.css";

export default function Request() {
  const user = useSelector((state) => state.user);
  const [requestValue, setRequestValue] = useState("");
  const postRequest = async () => {
    await axios
      .post(
        "http://localhost:8080/noticeBoard/requestActor",
        {
          content: requestValue,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.accessToken}`,
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
        <h3>배우 추가 건의</h3>
        <label>내용</label>
        <textarea
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
