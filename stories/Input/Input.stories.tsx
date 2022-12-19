import React, { useState } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input, InputStatusType } from "./Input";
import AssistiveText from "./AssistiveText";

export default {
  title: "Example/Input",
  component: Input,
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
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

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

const TemplateWithAssistiveText: ComponentStory<typeof Input> = (args) => {
  const { status } = args;
  return (
    <Input {...args}>
      <AssistiveText text="We will email you a confirmation." status={status} />
    </Input>
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

const TemplateWithValidation: ComponentStory<typeof Input> = (args) => {
  const { status, ...others } = args;
  const [inputStatus, setInputStatus] = useState<InputStatusType>(status);

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

  return (
    <Input {...others} validationFunc={loadingStatus} status={inputStatus}>
      <AssistiveText text="password length" status={lengthValidation} />
      <AssistiveText text="is unicode" status={unicodeValidation} />
    </Input>
  );
};

export const Password = TemplateWithValidation.bind({});
Password.args = {
  label: "Password",
  viewType: "withIconAndText",
  type: "password",
  placeholder: "Password",
  required: true,
};
