import UploadButton, { UploadButtonProps } from "./UploadButton";
import { Story } from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Whoscan/UploadButton",
  component: UploadButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    id: { control: "text" },
    title: { control: "text" },
    showIcon: { control: "boolean" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<UploadButtonProps> = (args: UploadButtonProps) => (
  <UploadButton {...args} />
);

export const UploadButtonRectangle = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UploadButtonRectangle.args = {
  id: "UploadButtonRectangle",
  showIcon: true,
  headers: {
    "content-type": "multipart/form-data",
  },
  label: "Upload cover",
  width: 180
};

export const UploadButtonRouned = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UploadButtonRouned.args = {
  id: "UploadButtonRouned",
  showIcon: true,
  headers: {
    "content-type": "multipart/form-data",
  },
  rounded: true,
};
