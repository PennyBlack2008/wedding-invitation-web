import { useEffect } from "react";
import "./App.css";
import * as CSTM from "./custom/custom";
import { Helmet } from "react-helmet";
import { loadScript, asyncLoadScript } from "./utils/scriptLoader";
import MainCover from "./components/01/mainCover";
import MainSummary from "./components/02/mainSummary";
import PhoneCall from "./components/03/phoneCall";

function App() {
  useEffect(() => {
    asyncLoadScript(`${process.env.PUBLIC_URL}/scripts/jquery.js`).then(() => {
      if (CSTM.꽃잎효과ONOFF) {
        setTimeout(() => {
          loadScript(`${process.env.PUBLIC_URL}/scripts/snowfall.js`);
        }, 1000);
      }
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>{`${CSTM.신랑이름} ♥ ${CSTM.신부이름}의 결혼식에 초대합니다.`}</title>
        <meta name="description" content="결혼식에 초대합니다♡" />
        <link rel="canonical" href={CSTM.WEDDING_HOMEPAGE} />
        <meta property="og:url" content="https://mo18.luvle.co.kr" />
        <meta
          property="og:title"
          content={`${CSTM.신랑이름} ♥ ${CSTM.신부이름}의 결혼식에 초대합니다.`}
        />
        <meta property="og:description" content="결혼식에 초대합니다♡" />
        <meta property="og:image" content={CSTM.OG_IMAGE_URL} />
        <meta
          property="og:site_name"
          content={`${CSTM.신랑이름} ♥ ${CSTM.신부이름}의 결혼식에 초대합니다.`}
        />
      </Helmet>
      <div>
        <MainCover></MainCover>
        <MainSummary></MainSummary>
        <PhoneCall></PhoneCall>
      </div>
    </>
  );
}

export default App;
