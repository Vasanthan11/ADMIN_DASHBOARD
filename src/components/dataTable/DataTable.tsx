import {
    DataGrid,
    GridColDef,
    GridToolbar,
} from "@mui/x-data-grid";
import "./dataTable.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
    columns: GridColDef[];
    rows: any;

    slug: string;
};

const DataTable = (props: Props) => {

    // TEST THE API

    // const queryClient = useQueryClient();
    // // const mutation = useMutation({
    // //   mutationFn: (id: number) => {
    // //     return fetch(`http://localhost:8800/api/${props.slug}/${id}`, {
    // //       method: "delete",
    // //     });
    // //   },
    // //   onSuccess: ()=>{
    // //     queryClient.invalidateQueries([`all${props.slug}`]);
    // //   }
    // // });

    const [filteredRows, setFilteredRows] = useState(props.rows);

    const handleDelete = (id: any) => {
        // Use the filter method to exclude the row with the specified ID
        const updatedRows = filteredRows.filter((row: { id: any; }) => row.id !== id);
        // Update the state with the filtered rows
        setFilteredRows(updatedRows);
    };

    const actionColumn: GridColDef = {
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="action">
                    <Link to={`/${props.slug}/${params.row.id}`}>
                        <img src="/view.svg" alt="" />
                    </Link>
                    <div className="delete" onClick={() => handleDelete(params.row.id)}>
                        <img src="/delete.svg" alt="Delete" />
                    </div>
                </div>
            );
        },
    };

    return (
        <div className="dataTable">
            <DataGrid
                className="dataGrid"
                rows={filteredRows}
                columns={[...props.columns, actionColumn]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 12,
                        },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 },
                    },
                }}
                pageSizeOptions={[12]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector
            />
        </div>
    );
};

export default DataTable;