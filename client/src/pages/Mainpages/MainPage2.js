import "../../css/MainPage.css";

import Background from "../../images/MainPage2.jpg";

function MainPage2() {
  return (
    <>
      <div
        className="background"
        style={{
          backgroundImage: "url(" + { Background } + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div id="main-container">
          <nav className="main-nav">
            <section className="main-bryta">
              <div
                data-aos="fade-down"
                data-aos-delay="1100"
                data-aos-duration="500"
                className="main-bryta-name"
              >
                Bryta란?
              </div>
              <p
                data-aos="fade-down"
                data-aos-delay="1300"
                data-aos-duration="1000"
                data-aos-easing="ease-out"
                className="main-bryta-about"
              >
                스웨덴어로 "부수다, 깨다" 라는 뜻으로
                <br />
                여러분들의 배우 필모 깨기에
                <br />
                도움을 드리겠다는 뜻을 담고 있습니다.
              </p>
            </section>
          </nav>
        </div>
      </div>
    </>
  );
}

export default MainPage2;
