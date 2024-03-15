import { useState } from "react";
import "./orders.scss";
import DataTable from "../../components/dataTable/DataTable";
import Add from "../../components/add/Add";
import { GridColDef } from "@mui/x-data-grid";
import { order } from "../../data";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "img",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.img || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "title",
    type: "string",
    headerName: "Title",
    width: 250,
  },
  {
    field: "color",
    type: "string",
    headerName: "Color",
    width: 150,
  },
  {
    field: "price",
    type: "string",
    headerName: "Price",
    width: 200,
  },
  {
    field: "producer",
    headerName: "Producer",
    type: "string",
    width: 150,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 150,
    type: "string",
  },
  {
    field: "DeliveryStatus",
    headerName: "Status",
    width: 150,
    type: "String",
  },
];

const Orders = () => {
  const [open, setOpen] = useState(false);


  return (
    <div className="Orders">
      <div className="info">
        <h1>Orders</h1>
        <button onClick={() => setOpen(true)}>New Orders Update</button>
      </div>
      <DataTable slug="order" columns={columns} rows={order} />
      
      {open && <Add slug="product" columns={columns} setOpen={setOpen} />}
    </div>
  );
};

export default Orders;