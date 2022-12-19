import React, { useState } from "react";
import styled from "styled-components";

import Info from "../../assets/icon/info.svg";
import LoaderSpin from "../Spinner/Spinner";
import Success from "../../assets/icon/ok.svg";
import Fail from "../../assets/icon/cancel.svg";
import { InputStatusType } from "./Input";

interface AssistiveTextProps {
  text: string;
  status?: InputStatusType;
}

function AssistiveText({ text, status = "initial" }: AssistiveTextProps) {
  const [assistiveText, setAssistiveText] = useState(<p>{text}</p>);
  const AssistiveIcon: { [key in InputStatusType]: JSX.Element } = {
    initial: <S.Info />,
    loading: <S.LoaderSpin />,
    success: <S.Success />,
    fail: <S.Fail />,
  };
  return (
    <S.AssistiveWrapper data-status={status}>
      {AssistiveIcon[status]}
      {assistiveText}
    </S.AssistiveWrapper>
  );
}

const S = {
  AssistiveWrapper: styled.div`
    display: flex;
    align-items: baseline;
    position: relative;
    padding-left: 18px;
    color: var(--color-g-600);
    margin-bottom: var(--spacing-2xs);
    &[data-status="success"] {
      color: var(--color-success-300);
    }
    &[data-status="fail"] {
      color: var(--color-warning);
    }
    ${({ theme }) => theme.typo.EN.BODY.BODY4}
  `,
  Info: styled(Info)`
    bottom: 0;
    position: absolute;
    left: 0;
    transform: scale(0.77);
    & > path {
      fill: var(--color-g-400);
    }
  `,
  Success: styled(Success)`
    bottom: 0;
    position: absolute;
    left: 0;
    transform: scale(0.77);
    & > path {
      fill: var(--color-success);
    }
  `,
  Fail: styled(Fail)`
    bottom: 0;
    position: absolute;
    left: 0;
    transform: scale(0.77);
    & > path {
      fill: var(--color-warning);
    }
  `,
  LoaderSpin: styled(LoaderSpin)`
    left: 0;
    width: 14px;
    height: 14px;
  `,
};

export default AssistiveText;
