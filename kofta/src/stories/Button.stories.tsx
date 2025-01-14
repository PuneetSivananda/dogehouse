import React from "react";
import { Story } from "@storybook/react";
import { Button, ButtonProps } from "../ui/Button";
import { toEnum } from "./utils/toEnum";
import SmSolidDogenitro from "../icons/SmSolidDogenitro";

export const toBoolean = () => ({
  control: {
    type: "boolean",
  },
});

export default {
  title: "Button",
  argTypes: { onClick: { action: "clicked" } },
};

const TheButton: Story<ButtonProps & { exampleIcon?: boolean }> = ({
  children,
  exampleIcon,
  ...props
}) => {
  return (
    <Button {...props} icon={exampleIcon ? <SmSolidDogenitro /> : undefined}>
      {children || `New room`}
    </Button>
  );
};

export const Main = TheButton.bind({});

Main.argTypes = {
  color: toEnum(["primary", "secondary"]),
  size: toEnum(["big", "small"]),
  disabled: toBoolean(),
  loading: toBoolean(),
  exampleIcon: toBoolean(),
};
