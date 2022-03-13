import { DataGrid, DataGridProps } from ".";
import { Story } from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Whoscan/DataGrid",
  component: DataGrid,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    icon: { control: "text" },
    name: { control: "text" },
    id: { control: "text" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<DataGridProps> = (args: DataGridProps) => (
  <DataGrid {...args} />
);

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  rows: [],
  columns: [
    {
      id: "col1",
      label: "col1",
    },
    {
      id: "col2",
      label: "col2",
    },
    {
      id: "col3",
      label: "col3",
    },
    {
      id: "col4",
      label: "col4",
    },
  ],
  componentsProps: {
    Header: { style: { color: "Red" } },
  },
};
