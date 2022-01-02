import SocialImage, { SocialImageProps } from "./SocialImage";
import { Story } from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Whoscan/SocialImage",
  component: SocialImage,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<SocialImageProps> = (args: SocialImageProps) => (
  <SocialImage {...args} style={{ width: "50px" }} />
);

export const facebookIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
facebookIcon.args = {
  name: "045-facebook.svg",
};

export const instagramIcon = Template.bind({});
instagramIcon.args = {
  name: "034-instagram.svg",
};

export const zaloIcon = Template.bind({});
zaloIcon.args = {
  name: "056-zalo.svg",
};

export const youtubeIcon = Template.bind({});
youtubeIcon.args = {
  name: "002-youtube.svg",
};

export const twitterIcon = Template.bind({});
twitterIcon.args = {
  name: "014-twitter.svg",
};

export const linkedinIcon = Template.bind({});
linkedinIcon.args = {
  name: "031-linkedin.svg",
};

export const whatsappIcon = Template.bind({});
whatsappIcon.args = {
  name: "007-whatsapp.svg",
};
