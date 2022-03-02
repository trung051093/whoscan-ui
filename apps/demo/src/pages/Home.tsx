import { useSearchUsers } from "@/hooks/useSearchUsers";
import MainLayout from "@/layouts/Main";
import { CustomTable, TableColumn } from "@whoscan/core/components/Table";
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
  const {
    page,
    setPage,
    limit,
    setLimit,
    isLoading,
    isError,
    error,
    data,
    isFetching,
    isPreviousData,
  } = useSearchUsers();
  console.log("🚀 ~ file: Home.tsx ~ line 46 ~ HomePage ~ data", data);

  const onReorderColumn = (columns: any) => setColumns(columns);

  return (
    <MainLayout>
      <CustomTable
        onChangePage={(page) => setPage(page + 1)}
        onChangeRowsPerPage={(rowPerPage) => setLimit(rowPerPage)}
        onReorderColumn={onReorderColumn}
        columns={columns}
        rows={data?.data}
        totalRows={data?.pagination?.Total}
        showPagingnation
      />
    </MainLayout>
  );
};

export default HomePage;
