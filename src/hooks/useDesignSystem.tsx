import React, { useContext } from "react";
import {
  createGlobalStyle,
  css,
  ThemeContext,
  ThemeProvider,
} from "styled-components";

interface DesignSystemProviderProps {
  children: React.ReactNode;
  typo?: typeof TYPOGRAPHY;
}
const useDesignSystem = () => useContext(ThemeContext);

function DesignSystemProvider({
  children,
  typo = TYPOGRAPHY,
}: DesignSystemProviderProps) {
  const { GlobalStyle } = typo;
  return (
    <ThemeProvider theme={{ typo }}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

/**
 *   @TODO 폰트 적용시 GlobalStyle에 추가 예쩡
 *
 * */
//@font-face {
//    font-family: 'Avenir Next LT Pro';
//    src: url('https://s3.amazonaws.com/s3.md.web.upload/newmdweb/font/AvenirNextLTPro-Bold.otf') format('opentype');
//    font-weight: 800;
//}
//@font-face {
//    font-family: 'Avenir Next LT Pro';
//    src: url('https://s3.amazonaws.com/s3.md.web.upload/newmdweb/font/AvenirNextLTPro-Demi.otf') format('opentype');
//    font-weight: 700;
//}
//@font-face {
//    font-family: 'Avenir Next LT Pro';
//    src: url('https://s3.amazonaws.com/s3.md.web.upload/newmdweb/font/AvenirNextLTPro-Medium.otf') format('opentype');
//    font-weight: 600;
//}
//@font-face {
//    font-family:   'Avenir Next LT Pro';
//    src: url('https://s3.amazonaws.com/s3.md.web.upload/newmdweb/font/AvenirNextLTPro-Regular.otf') format('opentype');
//    font-weight: 400;
//}
//* {
//  font-family: Avenir Next LT Pro, sans-serif !important;
//}
/**
 *   @TODO 디자인 시스템으로 이동시 해당 주석 제거예정
 *   추후 디자인 시스템 프로젝트 리파짓토리 또는 monorepo 내부 package로 들어갈 예정에 있어,
 *       적용될 color token과 space token 값들이
 *       Global 부득이 하게 scss와 중복으로 들어가 있습니다.
 * */
const TYPOGRAPHY = {
  GlobalStyle: createGlobalStyle`
        :root {
          --spacing-4xs: 2px;
          --spacing-3xs: 4px;
          --spacing-2xs: 8px;
          --spacing-xs: 12px;
          --spacing-s: 16px;
          --spacing-m: 20px;
          --spacing-l: 24px;
          --spacing-xl: 32px;
          --spacing-2xl: 40px;
          --spacing-3xl: 64px;
          --spacing-4xl: 80px;
          --spacing-5xl: 120px;
            
        --color-g-0: #FFFFFF;
        --color-g-100: #F5F5F7;
        --color-g-200: #E5E6EB;
        --color-g-300: #C3C3CD;
        --color-g-400: #AAACAF;
        --color-g-500: #898B8E;
        --color-g-600: #6A6A6F;
        --color-g-700: #56565B;
        --color-g-800: #38383C;
        --color-g-900: #18181C;
        --color-primary: #FBC400;
        --color-primary-100: #FFEBAF;
        --color-primary-200: #FF8A00;
        --color-primary-300: #E06E14;
        --color-primary-400: #B55000;
        --color-info: #FBC400;
        --color-info-100: #FFF1C9;
        --color-info-200: #FF9900;
        --color-info-300: #FF6B00;
        --color-info-400: #DB4212;
        --color-success: #3ACB3C;
        --color-success-100: #ECFCEB;
        --color-success-200: #89E988;
        --color-success-300: #00B63D;
        --color-success-400: #007527;
        --color-new: #F25454;
        --color-warning: #F24147;
        --color-warning-100: #FFEAED;
        --color-warning-200: #F29395;
        --color-warning-300: #E8182A;
        --color-warning-400: #96000D;
          
          --z-index-top-menu: 11;
          --z-index-top-menu-sub: 12;
          --z-index-left-menu: 13;
          --z-index-left-menu-items: 14;
          --z-index-left-menu-logo: 15;
          
        }
    `,
  EN: {
    HEADLINE: {
      HEADLINE1: css`
        font-weight: 800;
        text-transform: uppercase;
        font-size: 70px;
        line-height: 84px;
        letter-spacing: 10px;
        @media screen and (max-width: 1440px) {
          font-size: 60px;
          letter-spacing: 8px;
        }
        @media screen and (max-width: 1024px) {
          font-size: 50px;
          line-height: 60px;
          letter-spacing: 8px;
        }
        @media screen and (max-width: 768px) {
          font-size: 36px;
          line-height: 43px;
          letter-spacing: 5px;
        }
        @media screen and (max-width: 375px) {
          font-size: 30px;
          line-height: 36px;
          letter-spacing: 4px;
        }
      `,
      HEADLINE2: css`
        font-weight: 800;
        text-transform: uppercase;
        font-size: 50px;
        line-height: 60px;
        letter-spacing: 8px;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 40px;
          line-height: 48px;
          letter-spacing: 6px;
        }
        @media screen and (max-width: 768px) {
          font-size: 30px;
          line-height: 36px;
          letter-spacing: 4px;
        }
        @media screen and (max-width: 375px) {
          font-size: 24px;
          line-height: 29px;
          letter-spacing: 3px;
        }
      `,
      HEADLINE3: css`
        font-weight: 800;
        text-transform: uppercase;
        font-size: 40px;
        line-height: 48px;
        display: flex;
        align-items: center;
        letter-spacing: 6px;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 30px;
          line-height: 36px;
          letter-spacing: 4px;
        }
        @media screen and (max-width: 768px) {
          font-size: 24px;
          line-height: 29px;
          display: unset;
          align-items: unset;
          letter-spacing: 3px;
        }
        @media screen and (max-width: 375px) {
          font-size: 20px;
          line-height: 24px;
          letter-spacing: 2px;
        }
      `,
      HEADLINE4: css`
        font-weight: 800;
        text-transform: uppercase;
        font-size: 30px;
        line-height: 36px;
        letter-spacing: 4px;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 25px;
          letter-spacing: 2px;
        }
        @media screen and (max-width: 768px) {
          font-size: 20px;
          line-height: 24px;
          letter-spacing: 2px;
        }
        //@media screen and (max-width: 375px) {
        //    font-size: 14px;
        //    line-height: 17px;
        //    letter-spacing: 1px;
        //}
      `,
    },
    TITLE: {
      TITLE1: css`
        font-weight: 800;
        font-size: 40px;
        line-height: 52px;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 36px;
          line-height: 46px;
        }
        @media screen and (max-width: 768px) {
          font-size: 30px;
          line-height: 40px;
        }
        @media screen and (max-width: 375px) {
          font-size: 24px;
          line-height: 34px;
        }
      `,
      TITLE2: css`
        font-weight: 800;
        font-size: 36px;
        line-height: 46px;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 32px;
          line-height: 42px;
        }
        @media screen and (max-width: 768px) {
          font-size: 26px;
          line-height: 36px;
        }
        @media screen and (max-width: 375px) {
          font-size: 20px;
          line-height: 30px;
        }
      `,
      TITLE3: css`
        font-weight: 800;
        font-size: 32px;
        line-height: 42px;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 28px;
          line-height: 38px;
        }
        @media screen and (max-width: 768px) {
          font-size: 22px;
          line-height: 32px;
        }
        @media screen and (max-width: 375px) {
          font-size: 18px;
          line-height: 28px;
        }
      `,
      TITLE4: css`
        font-weight: 800;
        font-size: 28px;
        line-height: 38px;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 24px;
          line-height: 34px;
        }
        @media screen and (max-width: 768px) {
          font-size: 18px;
          line-height: 28px;
        }
        @media screen and (max-width: 375px) {
          font-size: 16px;
          line-height: 26px;
        }
      `,
      TITLE5: css`
        font-weight: 800;
        font-size: 24px;
        line-height: 34px;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 20px;
          line-height: 30px;
        }
        @media screen and (max-width: 768px) {
          font-size: 14px;
          line-height: 24px;
        }
        @media screen and (max-width: 375px) {
        }
      `,
    },
    SUBTITLE: {
      SUBTITLE1: css`
        font-weight: 600; //font-weight: 700;
        font-size: 28px;
        line-height: 34px;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 24px;
          line-height: 30px;
        }
        @media screen and (max-width: 768px) {
          font-size: 20px;
          line-height: 26px;
        }
        @media screen and (max-width: 375px) {
          font-size: 18px;
          line-height: 24px;
        }
      `,
      SUBTITLE2: css`
        font-weight: 600; //font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 20px;
          line-height: 16px;
        }
        @media screen and (max-width: 768px) {
          font-size: 18px;
          line-height: 24px;
        }
        @media screen and (max-width: 375px) {
          font-size: 16px;
          line-height: 22px;
        }
      `,
      SUBTITLE3: css`
        font-weight: 600; //font-weight: 700;
        font-size: 20px;
        line-height: 26px;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 18px;
          line-height: 24px;
        }
        @media screen and (max-width: 768px) {
          font-size: 16px;
          line-height: 22px;
        }
        @media screen and (max-width: 375px) {
          font-size: 14px;
          line-height: 20px;
        }
      `,
      SUBTITLE4: css`
        font-weight: 600; //font-weight: 700;
        font-size: 18px;
        line-height: 24px;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 16px;
          line-height: 22px;
        }
        @media screen and (max-width: 768px) {
          font-size: 14px;
          line-height: 20px;
        }
        @media screen and (max-width: 375px) {
          font-size: 12px;
          line-height: 18px;
        }
      `,
      SUBTITLE5: css`
        font-weight: 600; //font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 14px;
          line-height: 20px;
        }
        @media screen and (max-width: 768px) {
          font-size: 12px;
          line-height: 18px;
        }
        @media screen and (max-width: 375px) {
          font-size: 12px;
          line-height: 16px;
        }
      `,
      SUBTITLE6: css`
        font-weight: 600; //font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 12px;
          line-height: 18px;
        }
        @media screen and (max-width: 768px) {
          font-size: 11px;
          line-height: 16px;
        }
        @media screen and (max-width: 375px) {
        }
      `,
    },
    BODY: {
      BODY1: css`
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 16px;
          line-height: 22px;
        }
        @media screen and (max-width: 768px) {
          font-size: 14px;
          line-height: 20px;
        }
        @media screen and (max-width: 375px) {
          font-size: 12px;
          line-height: 18px;
        }
      `,
      BODY2: css`
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 14px;
          line-height: 20px;
        }
        @media screen and (max-width: 768px) {
          font-size: 12px;
          line-height: 18px;
        }
        @media screen and (max-width: 375px) {
          font-size: 11px;
          line-height: 16px;
        }
      `,
      BODY3: css`
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 12px;
          line-height: 18px;
        }
        @media screen and (max-width: 768px) {
          font-size: 11px;
          line-height: 16px;
        }
        @media screen and (max-width: 375px) {
          font-size: 10px;
          line-height: 14px;
        }
      `,
      BODY4: css`
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 10px;
          line-height: 16px;
        }
        @media screen and (max-width: 768px) {
          font-size: 10px;
          line-height: 14px;
        }
        @media screen and (max-width: 375px) {
        }
      `,
    },
    CAPTION: {
      CAPTION1: css`
        font-weight: 600; //font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 1.4px;
        text-transform: uppercase;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 1.2px;
        }
        @media screen and (max-width: 768px) {
          font-size: 14px;
          line-height: 17px;
          letter-spacing: 1px;
        }
        @media screen and (max-width: 375px) {
          font-size: 12px;
          line-height: 14px;
          letter-spacing: 0.8px;
        }
      `,
      CAPTION2: css`
        font-weight: 600; //font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 1.2px;
        text-transform: uppercase;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 14px;
          line-height: 17px;
          letter-spacing: 1px;
        }
        @media screen and (max-width: 768px) {
          font-size: 12px;
          line-height: 14px;
          letter-spacing: 0.8px;
        }
        @media screen and (max-width: 375px) {
          font-size: 11px;
          line-height: 13px;
          letter-spacing: 0.6px;
        }
      `,
      CAPTION3: css`
        font-weight: 600; //font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 1px;
        text-transform: uppercase;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 12px;
          line-height: 14px;
          letter-spacing: 0.8px;
        }
        @media screen and (max-width: 768px) {
          font-size: 11px;
          line-height: 13px;
          letter-spacing: 0.6px;
        }
        @media screen and (max-width: 375px) {
          font-size: 10px;
          line-height: 12px;
          letter-spacing: 0.4px;
        }
      `,
      CAPTION4: css`
        font-weight: 600; //font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 0.8px;
        text-transform: uppercase;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 10px;
          line-height: 12px;
          letter-spacing: 0.6px;
        }
        @media screen and (max-width: 768px) {
          letter-spacing: 0.4px;
        }
        @media screen and (max-width: 375px) {
        }
      `,
    },
    BUTTON: {
      BUTTON1: css`
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 6px;
        text-transform: uppercase;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 16px;
          line-height: 19px;
          letter-spacing: 4px;
        }
        @media screen and (max-width: 768px) {
          font-size: 14px;
          line-height: 17px;
          letter-spacing: 3px;
        }
        @media screen and (max-width: 375px) {
          font-size: 12px;
          line-height: 14px;
          letter-spacing: 2px;
        }
      `,
      BUTTON2: css`
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 4px;
        text-transform: uppercase;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 14px;
          line-height: 17px;
          letter-spacing: 3px;
        }
        @media screen and (max-width: 768px) {
          font-size: 12px;
          line-height: 14px;
          letter-spacing: 2px;
        }
        @media screen and (max-width: 375px) {
          font-size: 11px;
          line-height: 13px;
          letter-spacing: 1.4px;
        }
      `,
      BUTTON3: css`
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 3px;
        text-transform: uppercase;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 12px;
          line-height: 14px;
          letter-spacing: 2px;
        }
        @media screen and (max-width: 768px) {
          font-size: 11px;
          line-height: 13px;
          letter-spacing: 1.4px;
        }
        @media screen and (max-width: 375px) {
          font-size: 10px;
          line-height: 12px;
          letter-spacing: 1px;
        }
      `,
      BUTTON4: css`
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        letter-spacing: 2px;
        text-transform: uppercase;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 10px;
          line-height: 12px;
          letter-spacing: 1px;
        }
        @media screen and (max-width: 768px) {
        }
        @media screen and (max-width: 375px) {
        }
      `,
    },
    FOOTNOTE: {
      FOOTNOTE1: css`
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        letter-spacing: -0.1px;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 12px;
          line-height: 16px;
        }
        @media screen and (max-width: 768px) {
          font-size: 11px;
        }
        @media screen and (max-width: 375px) {
          font-size: 10px;
          line-height: 14px;
        }
      `,
      FOOTNOTE2: css`
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        letter-spacing: -0.1px;
        @media screen and (max-width: 1440px) {
        }
        @media screen and (max-width: 1024px) {
          font-size: 10px;
          line-height: 14px;
        }
        @media screen and (max-width: 768px) {
        }
        @media screen and (max-width: 375px) {
        }
      `,
    },
  },
};

export { TYPOGRAPHY };
export { useDesignSystem, DesignSystemProvider };
