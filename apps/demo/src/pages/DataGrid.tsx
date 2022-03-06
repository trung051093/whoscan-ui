import { useSearchUsers } from "@/hooks/useSearchUsers";
import MainLayout from "@/layouts/Main";
import { DataGrid, GridColDef } from "@whoscan/core/components/DataGrid";
import React from "react";

const DataGridDemoPage = () => {
  const [columns, setColumns] = React.useState<GridColDef[]>([
    {
      field: "id",
      headerName: "Id",
    },
    {
      field: "firstName",
      headerName: "First Name",
    },
    {
      field: "lastName",
      headerName: "Last Name",
    },
    {
      field: "gender",
      headerName: "Gender",
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
    },
  ]);
  const { page, limit, setPage, setLimit, data, isLoading } = useSearchUsers();
  console.log({ page, limit, data, isLoading });
  return (
    <MainLayout>
      <div style={{ height: "80vh", width: "100%" }}>
        <DataGrid
          checkboxSelection
          disableSelectionOnClick
          loading={isLoading}
          columns={columns}
          rows={data?.data || []}
          rowCount={data?.pagination.total}
          rowsPerPageOptions={[20, 40, 60, 80, 100]}
          pagination
          page={page}
          pageSize={limit}
          onPageChange={(page) => setPage(page)}
          onPageSizeChange={(pageSize) => setLimit(pageSize)}
        />
      </div>
    </MainLayout>
  );
};

export default DataGridDemoPage;
