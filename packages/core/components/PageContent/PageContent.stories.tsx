import PageContent, { PageContentProps } from "./PageContent";
import { Story } from "@storybook/react";
import Layout from "../Layout/Layout";
import Header from "../Header";
import Footer from "../Footer";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "whoscan/PageContent",
  component: PageContent,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<PageContentProps> = (args: PageContentProps) => (
  <Layout
    header={<Header titleHeader="Whoscan" />}
    footer={<Footer titleFooter="Powered by trungdq" />}
  >
    <PageContent {...args}>This is the content page</PageContent>
  </Layout>
);

export const Page1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Page1.args = {
  id: "page-1",
};
