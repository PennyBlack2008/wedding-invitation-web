import SectionType1 from "../common/sectionType1";
import styled from "styled-components";
import * as CSTM from "../../custom/custom";
import { useState } from "react";

const GalleryWrapper = styled.div`
  background-color: #f5f5f6;
  text-align: center;
  padding: 80px 0 50px 0;
`;

const GalleryImagesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-gap: 5px;
  background-color: #f5f5f6;
  max-width: 1000px;
  margin: 0 auto;
  overflow: hidden;
  padding: 20px 30px 20px 30px;
`;

const ShowMoreButton = styled.button`
  background-color: white;
  width: 70px;
  text-align: center;
  margin: 7% auto;
  display: block;
  border-radius: 15px;
  font-size: 13px;
  height: 30px;
`;

function Gallery() {
  const [isShowMore, setIsShowMore] = useState(false);

  const initialImageList = CSTM.갤러리사진리스트.filter(
    (img, index) => index < 6
  );

  const moreImageList = CSTM.갤러리사진리스트.filter(
    (img, index) => index >= 6
  );

  const handleShowMoreCtrl = (e) => {
    e.preventDefault();
    setIsShowMore(!isShowMore);
  };

  return (
    <SectionType1>
      <GalleryWrapper>
        <span
          style={{
            color: "#BDBDBD",
            fontSize: "10px",
            minWidth: "3rem",
            display: "inline-block",
          }}
        >
          <b>G A L L E R Y</b>
        </span>
        <br />
        <span
          style={{
            color: "#595959",
            fontSize: "20px",
            minWidth: "3rem",
            display: "inline-block",
          }}
        >
          <b>우리의 순간</b>
        </span>
        <br />
        <br />
        <GalleryImagesWrapper>
          {initialImageList.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={`갤러리 이미지 ${index}`}
              style={{ width: "100%" }}
            ></img>
          ))}
          {isShowMore &&
            moreImageList.map((img, index) => (
              <img
                key={index}
                src={img.src}
                alt={`갤러리 이미지 ${index}`}
                style={{ width: "100%" }}
              ></img>
            ))}
        </GalleryImagesWrapper>
        <ShowMoreButton onClick={(e) => handleShowMoreCtrl(e)}>
          {isShowMore ? "접기" : "더보기"}
        </ShowMoreButton>
      </GalleryWrapper>
    </SectionType1>
  );
}

export default Gallery;
