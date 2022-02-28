import { CustomTable } from "./Table";
import { CustomTableProps, TableColumn } from "./Table.model";
import { Story } from "@storybook/react";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Whoscan/CustomTable",
  component: CustomTable,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    icon: { control: "text" },
    name: { control: "text" },
    id: { control: "text" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<CustomTableProps> = (args: CustomTableProps) => (
  <CustomTable {...args} />
);

let columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    render: (value: any) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    render: (value: any) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    render: (value: any) => value.toFixed(2),
  },
] as TableColumn[];

function createData(id: any, name: any, code: any, population: any, size: any) {
  const density = population / size;
  return { id, name, code, population, size, density };
}

const rows = [
  createData(1, "India", "IN", 1324171354, 3287263),
  createData(2, "China", "CN", 1403500365, 9596961),
  createData(3, "Italy", "IT", 60483973, 301340),
  createData(4, "United States", "US", 327167434, 9833520),
  createData(5, "Canada", "CA", 37602103, 9984670),
  createData(6, "Australia", "AU", 25475400, 7692024),
  createData(7, "Germany", "DE", 83019200, 357578),
  createData(8, "Ireland", "IE", 4857000, 70273),
  createData(9, "Mexico", "MX", 126577691, 1972550),
  createData(10, "Japan", "JP", 126317000, 377973),
  createData(11, "France", "FR", 67022000, 640679),
  createData(12, "United Kingdom", "GB", 67545757, 242495),
  createData(13, "Russia", "RU", 146793744, 17098246),
  createData(14, "Nigeria", "NG", 200962417, 923768),
  createData(15, "Brazil", "BR", 210147125, 8515767),
];

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  columns: columns,
  rows: rows,
  showSelection: true,
  showPagingnation: true,
  onReorderColumn: (newColumns) => {
    columns = newColumns;
  },
};
