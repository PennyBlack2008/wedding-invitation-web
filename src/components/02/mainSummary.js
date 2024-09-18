import React, { useEffect, useRef, useState } from "react";
import Wrapper from "../common/wrapper";

function MainSummary() {
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
      <Wrapper
        className={isVisible ? "visible" : ""}
        translateY="20px"
        transition={{ opacity: 0.5, transform: 0.5 }}
      >
        <img
          src={`${process.env.PUBLIC_URL}/imgs/02/main-summary.png`}
          alt="메인 커버"
          style={{ width: "100%" }}
        />
      </Wrapper>
    </section>
  );
}

export default MainSummary;
