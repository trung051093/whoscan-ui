import PhotoUpload, { PhotoUploadProps } from "./PhotoUpload";
import { Story } from "@storybook/react";
import { PhotoUploadType } from "./constants";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Whoscan/PhotoUpload",
  component: PhotoUpload,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    id: { control: "text" },
    title: { control: "text" },
    showIcon: { control: "boolean" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<PhotoUploadProps> = (args: PhotoUploadProps) => (
  <PhotoUpload {...args} />
);

export const Avatar = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Avatar.args = {
  id: "Avatar",
  type: PhotoUploadType.Circle,
  width: 100,
  height: 100,
  cropBeforeUpload: true,
};

export const Cover = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Cover.args = {
  id: "Cover",
  type: PhotoUploadType.Rectangle,
  width: 640,
  height: 300,
  cropBeforeUpload: true,
};
