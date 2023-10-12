import "./data.scss";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../Soursecc";

const Data = () => {
  return (
    <div className="datatabel">
      <DataGrid
        rows={userRows}
        columns={userColumns}
        paginationModel={{ page: 0, pageSize: 5 }}
        checkboxSelection
      />
    </div>
  );
};

export default Data;
