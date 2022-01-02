import SocialCard, { SocialCardProps } from "./SocialCard";
import { Story } from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Whoscan/SocialCard",
  component: SocialCard,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    icon: { control: "text" },
    name: { control: "text" },
    id: { control: "text" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<SocialCardProps> = (args: SocialCardProps) => (
  <SocialCard {...args} />
);

export const Facebook = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Facebook.args = {
  icon: "045-facebook.svg",
  name: "facebook",
  id: "dotrung051093",
};
