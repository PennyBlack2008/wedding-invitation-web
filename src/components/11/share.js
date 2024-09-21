import styled from "styled-components";
import SectionType2 from "../common/sectionType2";

const ButtonGroupWrapper = styled.div`
  display: flex;
  padding: 0 30px 30px 30px;
`;

const Button = styled.button`
  width: 50%;
  height: 45px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Share() {
  return (
    <SectionType2>
      <ButtonGroupWrapper>
        <Button>
          <img
            src={`${process.env.PUBLIC_URL}/imgs/kakao/logo.png`}
            alt="kakao-logo"
            style={{ width: "25px", height: "25px" }}
          />
          &nbsp;카카오톡
        </Button>
        <Button>
          <img
            src={`${process.env.PUBLIC_URL}/imgs/smile/smile.png`}
            alt="2G-Phone"
            style={{ width: "25px", height: "25px" }}
          />
          &nbsp;2G 휴대폰 전송
        </Button>
      </ButtonGroupWrapper>
    </SectionType2>
  );
}

export default Share;
