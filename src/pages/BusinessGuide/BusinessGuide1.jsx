import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import styles from "./BusinessGuide.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import page1 from "../../assets/BusinessGuide/BusinessGuide1/page1.jpg";
import tableImage from "../../assets/BusinessGuide/BusinessGuide1/tableImage.jpg";
import { Helmet } from "react-helmet-async";

const projectData = [
  { label: "사업명", value: "평택 화양 신영지웰" },
  { label: "사업위치", value: "경기도 평택시 현덕면 화양리 785번지 일원" },
  { label: "대지면적", value: "49,525.10㎡" },
  { label: "건축면적", value: "5,856.1192㎡" },
  { label: "연면적", value: "171,568.6769m²" },
  { label: "용적률", value: "229.80%" },
  { label: "건축규모", value: "지하 2층, 지상 최고 29층" },
  { label: "세대수", value: "999세대 (84A·B·C·D)" },
];

const BusinessGuide1 = () => {
  const menuContents = [
    { title: "사업안내", url: "/BusinessGuide/intro" },
    { title: "분양일정", url: "/BusinessGuide/plan" },
    // { title: "선착순계약 서류안내", url: "/BusinessGuide/documents" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" }); // 모바일 여부 확인

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 기본 문자셋 및 모바일 최적화를 위한 meta 태그 */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />

        {/* SEO 최적화를 위한 메타 태그 */}
        <title>신영지웰 평택화양 - 사업안내</title>
        <meta
          name="description"
          content="신영지웰 평택화양은 혁신적인 주거 환경을 제공하는 새로운 아파트 단지입니다. 이 페이지에서는 프로젝트의 전체적인 개요와 개발 계획을 상세히 소개합니다. 사업의 목적, 주요 설계 및 특징, 그리고 주변 환경을 포함한 다양한 정보를 통해 입주자들에게 더 나은 선택을 할 수 있도록 돕습니다."
        />
        <meta
          name="keywords"
          content="신영지웰 평택화양, 평택화양신영지웰, 신영지웰 평택화양모델하우스"
        />
        <link rel="canonical" href="https://www.vaaclubs.com/Brand/intro" />

        {/* Open Graph - 소셜 미디어 공유 최적화 */}
        <meta property="og:title" content="신영지웰 평택화양 - 사업안내" />
        <meta
          property="og:description"
          content="신영지웰 평택화양은 혁신적인 주거 환경을 제공하는 새로운 아파트 단지입니다. 이 페이지에서는 프로젝트의 전체적인 개요와 개발 계획을 상세히 소개합니다. 사업의 목적, 주요 설계 및 특징, 그리고 주변 환경을 포함한 다양한 정보를 통해 입주자들에게 더 나은 선택을 할 수 있도록 돕습니다."
        />
        <meta
          property="og:image"
          content="https://www.vaaclubs.com/Main1.png"
        />
        <meta
          property="og:url"
          content="https://www.vaaclubs.com/Brand/intro"
        />
        <meta property="og:site_name" content="신영지웰 평택화양" />

        {/* Twitter 카드 설정 */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="신영지웰 평택화양 - 사업안내"
        />
        <meta
          name="twitter:description"
          content="신영지웰 평택화양은 혁신적인 주거 환경을 제공하는 새로운 아파트 단지입니다. 이 페이지에서는 프로젝트의 전체적인 개요와 개발 계획을 상세히 소개합니다. 사업의 목적, 주요 설계 및 특징, 그리고 주변 환경을 포함한 다양한 정보를 통해 입주자들에게 더 나은 선택을 할 수 있도록 돕습니다."
        />
        <meta
          name="twitter:image"
          content="https://www.vaaclubs.com/Main1.png"
        />
        <meta
          name="twitter:url"
          content="https://www.vaaclubs.com/Brand/intro"
        />

        {/* 구조화된 데이터 (JSON-LD) - 검색엔진 이해도 향상 */}
        <script type="application/ld+json">
          {`
		{
			"@context": "https://schema.org",
			"@type": "WebPage",
			"name": "신영지웰 평택화양 - 사업안내",
			"description": "신영지웰 평택화양은 혁신적인 주거 환경을 제공하는 새로운 아파트 단지입니다. 이 페이지에서는 프로젝트의 전체적인 개요와 개발 계획을 상세히 소개합니다. 사업의 목적, 주요 설계 및 특징, 그리고 주변 환경을 포함한 다양한 정보를 통해 입주자들에게 더 나은 선택을 할 수 있도록 돕습니다.",
			"url": "https://www.vaaclubs.com/Brand/intro"
		}
		`}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="사업개요" />

      <MenuBar contents={menuContents} />
      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        신영지웰 평택화양 - 사업안내
      </h1>
      <p className={styles.screenReaderOnly}>
        신영지웰 평택화양은 혁신적인 주거 환경을 제공하는 새로운 아파트
        단지입니다. 이 페이지에서는 프로젝트의 전체적인 개요와 개발 계획을
        상세히 소개합니다. 사업의 목적, 주요 설계 및 특징, 그리고 주변 환경을
        포함한 다양한 정보를 통해 입주자들에게 더 나은 선택을 할 수 있도록
        돕습니다.
      </p>

      <div className={styles.textBox}>
        <div>
          서평택에서 누리는 특별한 라이프 컬렉션
        </div>
        <div>신영지웰 평택화양의 새로운 자부심으로 찾아옵니다.</div>
      </div>

      <img
        className={styles.img3}
        src={page1}
        alt="신영지웰 평택화양 조감도 이미지"
      />

      <div className={styles.tableContainer}>
        {!isMobile && <img className={styles.tableImg} src={tableImage} />}
        <table className={styles.projectTable}>
          <tbody>
            {projectData.map((item, index) => (
              <tr key={index}>
                <td className={styles.label}>{item.label}</td>
                <td className={styles.contents}>{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※ 상기 이미지에 표현된 외관 디자인은 개략적인 이해를 돕기 위한 것으로,
          상품특화 및 인허가 협의에 따라 입면 디자인, 경관조명, 출입구, 색채,
          몰딩, 창호, 난간, 옥상 장식물, 줄눈, 각종 시설물의 디자인 및 형태,
          마감사양, 조명 설치 위치 등이 실시공시 변경될 수 있습니다.
        </div>
        <div className={styles.notice}>
          ※ 본 단지의 명칭, 동호수 표기, 외부 색채, 외관 디자인, 옥탑 디자인,
          외부 조명시설, 태양광 발전 설비시설 등은 현장 여건 및 인허가 관청과의
          심의, 협의 과정에서 향후 변경될 수 있습니다.
        </div>
       
      </div>

      <Footer />
    </div>
  );
};

export default BusinessGuide1;
