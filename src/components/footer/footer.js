import SectionType2 from "../common/sectionType2";
import styled from "styled-components";

const PaddingWrapper = styled.div`
  padding-top: 30px;
`;

function Footer() {
  return (
    <SectionType2>
      <PaddingWrapper>
        <img
          src={`${process.env.PUBLIC_URL}/imgs/footer/footer.png`}
          alt="footer"
          style={{ width: "100%", height: "100%" }}
        />
      </PaddingWrapper>
    </SectionType2>
  );
}

export default Footer;
