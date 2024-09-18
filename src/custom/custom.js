import moment from "moment";

/**
 * 폴더 이름
 * 꼭 package.json에 "homepage": "https://pennyblack2008.github.io/여기에폴더이름으로바꿔주세요",
 * 에 폴더이름을 넣어주세요.
 */
// folder 이름
export const 폴더이름 = "wedding-invitation-web";
export const WEDDING_HOMEPAGE = `https://${폴더이름}.luvle.co.kr`;

// 카톡 링크 공유했을 때 나오는 대표이미지
export const OG_IMAGE_URL =
  "https://image.cine21.com/resize/cine21/still/2005/1121/M0020066_focus52804[W578-].jpg";

// 꽃잎 효과
export const 꽃잎효과ONOFF = false; // 꽃잎효과를 키고 싶다면 true, 끄고 싶다면 false로 변경

/**
 * 신랑 신부
 */
// 이름
export const 신랑이름 = "이영석";
export const 신부이름 = "김민정";
// 전화번호
export const 신랑전화번호 = "010-0000-0001";
export const 신부전화번호 = "010-0000-0002";

/**
 * 신랑 가족 관계
 */
export const 신랑아버지 = "이재영";
export const 신랑아버지생존여부 = true; // true: 생존, false: 사망
export const 신랑어머니 = "김영숙";
export const 신랑어머니생존여부 = true; // true: 생존, false: 사망

/**
 * 신부 가족 관계
 */
export const 신부아버지 = "김영근";
export const 신부아버지생존여부 = true; // true: 생존, false: 사망
export const 신부어머니 = "이영숙";
export const 신부어머니생존여부 = false; // true: 생존, false: 사망

/**
 * 결혼식
 */
// 날짜
export const 결혼식날짜 = moment("2025-06-10 12:00", "YYYY-MM-DD HH:mm");
// 장소
export const 결혼식장소 = "충남 천안시 서북구 천안대로 1198-30";
export const 결혼식장소더자세히 = "비렌티웨딩홀 신관 3층 루체오홀";
// 결혼식장 전화
export const 결혼식장전화 = "041-0000-0000";
// 지도
export const 결혼식장위치 = {
  lat: 36.84784786358723,
  lng: 127.15908677087823,
  level: 3, // 지도의 확대 레벨
};
export const 마커위치 = {
  lat: 36.84784786358723,
  lng: 127.15908677087823,
};

/**
 * 계좌
 */
// 신랑 측
export const 신랑계좌번호 = {
  이름: 신랑이름, // <-- 자동으로 들어가니 수정하지 마세요. 만약 건드렸다면 "신랑이름"으로 수정해주세요.
  은행: "하나은행",
  계좌번호: "000-0000-0000-01",
};

export const 신랑혼주계좌번호리스트 = [
  {
    이름: "차은우",
    은행: "국민은행",
    계좌번호: "000-0000-0000-02",
  },
  {
    이름: "이민정",
    은행: "한국은행",
    계좌번호: "000-0000-0000-03",
  },
];

// 신부 측
export const 신부계좌번호 = {
  이름: 신부이름, // <-- 자동으로 들어가니 수정하지 마세요. 만약 건드렸다면 "신부이름"으로 수정해주세요.
  은행: "카카오뱅크",
  계좌번호: "000-0000-0000-04",
};

export const 신부혼주계좌번호리스트 = [
  {
    이름: "박서준",
    은행: "신한은행",
    계좌번호: "000-0000-0000-05",
  },
  {
    이름: "장원영",
    은행: "농협은행",
    계좌번호: "000-0000-0000-06",
  },
];

/**
 * SNS SHARE
 */
export const KAKAO_SHARE_CONFIG = {
  title: `${신랑이름} ♥ ${신부이름}의 모바일 청첩장`, // <-- 신랑이름과 신부이름만 안건드리면 됩니다.
  description: "결혼식에 초대합니다♡",
  imageUrl:
    "https://image.cine21.com/resize/cine21/still/2005/1121/M0020066_focus52804[W578-].jpg",
  imageWidth: 1200, // 이미지 가로
  imageHeight: 630, // 이미지 세로
  link: {
    mobileWebUrl: "https://pennyblack2008.github.io/wedding-invitation-web",
    webUrl: "https://pennyblack2008.github.io/wedding-invitation-web",
  },
};

/**
 * 꼭 잊지말고 사진 넣기!!
 * publc/imgs/01 부터 끝까지 넣어주세용
 */
