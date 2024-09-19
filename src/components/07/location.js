import SectionType1 from "../common/sectionType1";
import styled from "styled-components";

const BackgroundDiv = styled.div`
  background-color: #f5f5f6;
  height: 256px;
  text-align: center;
  padding: 50px 0 50px 0;
`;

function Location() {
  return (
    <SectionType1>
      <BackgroundDiv>
        <span
          style={{
            color: "#AAAAAA",
            fontSize: "9px",
            textAlign: "center",
          }}
        >
          L O C A T I O N
        </span>
        <p
          style={{
            fontSize: "20px",
            fontWeight: 600,
            color: "#545454",
            padding: "10px 0 15px 0",
          }}
        >
          오시는 길
        </p>
        <div
          style={{
            textAlign: "center",
            lineHeight: "1.5rem",
          }}
        >
          <p>충남 천안시 서북구 천안대로 1198-30</p>
          <p style={{ fontWeight: 600, color: "#000000" }}>
            비렌티웨딩홀 신관 3층 루체오홀
          </p>
        </div>
      </BackgroundDiv>
    </SectionType1>
  );
}

export default Location;
