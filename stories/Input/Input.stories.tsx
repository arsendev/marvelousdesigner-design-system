import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Index, { InputStatusType } from "@components/Input";
import AssistiveText from "@components/Input/info/AssistiveText";

export default {
  title: "Example/Input",
  component: Index,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    placeholder: {
      defaultValue: "Placeholder",
      control: { type: "text" },
    },
    type: {
      control: {
        labels: ["text", "password"],
        type: "radio",
      },
    },
  },
} as ComponentMeta<typeof Index>;

const Template: ComponentStory<typeof Index> = (args) => <Index {...args} />;

export const Default = Template.bind({});

export const WithIcon = Template.bind({});
WithIcon.args = {
  viewType: "withIcon",
  type: "password",
};

export const WithIconAndText = Template.bind({});
WithIconAndText.args = {
  viewType: "withIconAndText",
};

const TemplateWithAssistiveText: ComponentStory<typeof Index> = (args) => {
  const { status } = args;
  return (
    <Index {...args}>
      <AssistiveText text="We will email you a confirmation." status={status} />
    </Index>
  );
};
export const WithAssistiveText = TemplateWithAssistiveText.bind({});
WithAssistiveText.args = {
  viewType: "withAssistiveText",
};

export const Combination = TemplateWithAssistiveText.bind({});
Combination.args = { viewType: "combination" };

export const WithLabel = TemplateWithAssistiveText.bind({
  viewType: "withLabel",
});
WithLabel.args = {
  label: "Label",
  viewType: "withIconAndText",
  type: "password",
  placeholder: "Password",
};

const TemplateWithValidation: ComponentStory<typeof Index> = ({
  status,
  ...others
}) => {
  //#region 실제 홈페이지 코드에서 Password CustomHooks로 변경될 예정

  const [inputStatus, setInputStatus] = useState<InputStatusType>();
  const [lengthValidation, setLengthValidation] =
    useState<InputStatusType>("initial");
  const [unicodeValidation, setUnicodeValidation] =
    useState<InputStatusType>("initial");

  const loadingStatus = async (data: string) => {
    const mockValidationFunction = (mockValidations: Promise<unknown>[]) => {
      return Promise.all([...mockValidations]);
    };

    const mockValidation =
      (
        validationFunc: (s: string) => boolean,
        callback: (b: boolean) => void,
      ) =>
      (s: string) =>
        new Promise((res) => {
          setTimeout(() => {
            const result = validationFunc(s);
            callback(result);
            res(result);
          }, 500);
        });

    setInputStatus("loading");
    setLengthValidation("loading");
    setUnicodeValidation("loading");
    const promise1 = mockValidation(
      (v: string) => v.length > 7 && v.length < 21,
      (result: boolean) => {
        setLengthValidation(result ? "success" : "fail");
      },
    );
    const promise2 = mockValidation(
      (v: string) =>
        v
          .split("")
          .every((d) => !!d && d.charCodeAt(0) < 127 && d.charCodeAt(0) > 1),
      (result: boolean) => {
        setUnicodeValidation(result ? "success" : "fail");
      },
    );
    mockValidationFunction([promise1(data), promise2(data)]).then((res) => {
      if (res.every((v) => v)) {
        setInputStatus("success");
        return;
      }
      setInputStatus("fail");
    });
  };
  //#endregion

  return (
    <Index
      {...others}
      validationFunc={loadingStatus}
      status={inputStatus || status}
    >
      <AssistiveText text="password length" status={lengthValidation} />
      <AssistiveText text="is unicode" status={unicodeValidation} />
    </Index>
  );
};

export const UsageExamplePassword = TemplateWithValidation.bind({});
UsageExamplePassword.args = {
  status: "initial",
  label: "Password",
  viewType: "combination",
  type: "password",
  placeholder: "Password",
  required: true,
  maxLength: 50,
};
