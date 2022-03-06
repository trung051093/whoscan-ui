import { useSearchUsers } from "@/hooks/useSearchUsers";
import MainLayout from "@/layouts/Main";
import { Table, TableColumn } from "@whoscan/core/components/Table";
import React from "react";

const HomePage = () => {
  const [columns, setColumns] = React.useState<TableColumn[]>([
    {
      id: "id",
      label: "Id",
      minWidth: 100,
    },
    {
      id: "firstName",
      label: "First Name",
      minWidth: 100,
    },
    {
      id: "lastName",
      label: "Last Name",
      minWidth: 100,
    },
    {
      id: "gender",
      label: "Gender",
      minWidth: 100,
    },
    {
      id: "phoneNumber",
      label: "Phone Number",
      minWidth: 100,
    },
  ]);
  const { limit, setPage, setLimit, data } = useSearchUsers();

  const onReorderColumn = (columns: any) => setColumns(columns);

  return (
    <MainLayout>
      <Table
        onChangePage={(page) => setPage(page)}
        onChangeRowsPerPage={(rowPerPage) => setLimit(rowPerPage)}
        onReorderColumn={onReorderColumn}
        columns={columns}
        rows={data?.data}
        rowsPerPageDefault={limit}
        totalRows={data?.pagination?.total}
        showSelection
        showPagingnation
      />
    </MainLayout>
  );
};

export default HomePage;
