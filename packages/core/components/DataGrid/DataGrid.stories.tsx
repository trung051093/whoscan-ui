import { DataGrid, DataGridProps } from ".";
import { Story } from "@storybook/react";
import { useDemoData } from "@mui/x-data-grid-generator";

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

const { data } = useDemoData({
  dataSet: "Commodity",
  rowLength: 100,
  maxColumns: 6,
});

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = { ...data };
