import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  opacity: 0;
  transform: translateY(-50%);
  transition: opacity 1s ease, transform 1s ease;
  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

function MainCover() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // 뷰포트에 요소가 보이면 isVisible을 true로 설정
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1, // 요소가 10% 이상 보일 때 트리거
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current); // section 요소 관찰
    }

    // 컴포넌트 언마운트 시 옵저버 해제
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef}>
      <Wrapper className={isVisible ? "visible" : ""}>
        <img
          src={`${process.env.PUBLIC_URL}/imgs/01/main-cover.png`}
          alt="메인 커버"
          style={{ width: "100%" }}
        />
      </Wrapper>
    </section>
  );
}

export default MainCover;
