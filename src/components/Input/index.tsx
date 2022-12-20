import React, { useState } from "react";
import styled, { css } from "styled-components";
import LoaderSpin from "@components/Base/Spinner";
import Show from "../../assets/icon/show.svg";
import NotShow from "../../assets/icon/not_show.svg";

type SupportInputType = "password" | "text";
type InputStatusType = "initial" | "loading" | "success" | "fail";
interface CustomInputProps {
  children?: React.ReactNode;
  viewType?:
    | "default"
    | "withIcon"
    | "withIconAndText"
    | "withAssistiveText"
    | "combination"
    | "withLabel";
  label?: string;
  type?: SupportInputType;
  validationFunc?: (v: string) => void;
  status?: InputStatusType;
}

type InputProps = CustomInputProps &
  React.InputHTMLAttributes<HTMLInputElement>;

const isTypeOfPassword =
  <T,>([trueValue, falseValue]: T[]) =>
  (typeOf?: SupportInputType) =>
    typeOf === "password" ? trueValue : falseValue;

function Index({
  children,
  viewType = "default",
  label,
  type = "text",
  validationFunc = () => true,
  status = "initial",
  ...props
}: InputProps) {
  const [isFocus, setIsFocus] = useState(false);

  const [currentType, setCurrentType] = useState(type);

  const onClickShowToggle = () => {
    setCurrentType((prev) =>
      isTypeOfPassword<SupportInputType>(["text", "password"])(prev),
    );
  };

  return (
    <S.Label onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)}>
      {label || ""}
      <S.InputWrapper isFocus={isFocus} data-status={status}>
        <S.Input
          {...props}
          type={currentType}
          onChange={(e) => validationFunc(e.target.value)}
        />

        {status !== "loading" &&
          ["withIcon", "withIconAndText", "combination"].includes(viewType) && (
            <S.ShowToggle onClick={onClickShowToggle}>
              {isTypeOfPassword<JSX.Element>([
                <Show key="show_svg" />,
                <NotShow key="not_show_svg" />,
              ])(currentType)}

              {["withIconAndText", "combination"].includes(viewType) &&
                isTypeOfPassword(["Show", "Not Show"])(currentType)}
            </S.ShowToggle>
          )}
        {status === "loading" && <S.LoaderSpin />}
      </S.InputWrapper>
      {["withAssistiveText", "combination", "withLabel"].includes(viewType) &&
        children}
    </S.Label>
  );
}

const S = {
  Label: styled.label`
    display: inline-flex;
    flex-direction: column;
    user-select: none;
    ${({ theme }) => theme.typo.EN.SUBTITLE.SUBTITLE6}
  `,
  InputWrapper: styled.div<{ isFocus: boolean }>`
    position: relative;
    margin: var(--spacing-2xs) 0 var(--spacing-s);
    border: 1px solid
      var(${({ isFocus }) => (isFocus ? "--color-g-900" : "--color-g-300")});
    border-radius: 3px;
    height: 48px;
    min-width: 200px;
    padding: 14px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    ${({ isFocus }) =>
      !isFocus &&
      css`
        &[data-status="success"] {
          border-color: var(--color-success);
        }
        &[data-status="fail"] {
          border-color: var(--color-warning);
        }
      `}
  `,
  Input: styled.input`
    outline: none;
    border: 0;
    gap: 10px;
    caret-color: var(--color-primary);
    text-overflow: ellipsis;
    width: 100%;
    ::placeholder {
      color: var(--color-g-300);
    }

    ${({ theme }) => theme.typo.EN.BODY.BODY3}
  `,
  ShowToggle: styled.div`
    display: flex;
    align-items: center;
    --icon-section: 22px;
    position: relative;
    margin-left: var(--icon-section);
    word-break: keep-all;
    white-space: pre;
    color: var(--color-g-400);
    & > svg {
      transform: scale(0.75);
      & > path {
        fill: var(--color-g-400);
      }
    }
  `,
  LoaderSpin: styled(LoaderSpin)`
    right: 10px;
  `,
};
export type { InputProps, InputStatusType };
export default Index;
