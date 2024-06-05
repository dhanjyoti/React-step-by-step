import { ComponentStory, CompoonentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
  title: "Component/Button",
  component: Button,
} as CompoonentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.storyName = "Primary Button";

Primary.args = {
  primary: true,
  size: "medium",
  label: "Primary Button",
};

export const Secondary = Template.bind({});

Secondary.storyName = "Secondary Button";

Secondary.args = {
  // ...Primary.args,
  secondary: false,
  size: "medium",
  label: "Secondary Button",
};

export const NewButton = Template.bind({});

NewButton.args = {
  // primary: false,
  size: "medium",
  label: "New Button",
};
