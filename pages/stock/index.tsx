import React from "react";
import Header from "../../componrnts/header";
import Layout from "../../componrnts/layout";
import Menu from "../../componrnts/menu";
import MaterialTable, { Action, MTableToolbar } from "material-table";
import { products } from "../api/dummy";
import { Button, Chip, Typography } from "@material-ui/core";
import { Edit, DeleteOutline } from "@material-ui/icons";
import Router from "next/router";

import Moment from "react-moment";
import Numberformat from "react-number-format";

interface Props {}

const Stock = (props: Props) => {
  const columns = [
    {
      title: "ID",
      render: (item) => <Typography variant="body1">{item.id}</Typography>,
    },
    {
      title: "IMAGE",
      cellStyle: { padding: 3 },
      render: (item) => (
        <img
          src="/static/img/next5.png"
          style={{ width: 70, height: 40, borderRadius: "5%" }}
        />
      ),
    },
    {
      title: "NAME",
      cellStyle: { minWidth: 400 },
      render: (item) => <Typography variant="body1">{item.name}</Typography>,
    },
    {
      title: "PRICE",
      render: (item) => (
        <Typography variant="body1">
          <Numberformat
            value={item.price}
            displayType={"text"}
            thousandSeparator={true}
            decimalScale={2}
            fixedDecimalScale={true}
            prefix={"฿"}
          />
        </Typography>
      ),
    },
    {
      title: "STOCK",
      render: (item) => (
        <Typography variant="body1">
          <Numberformat
            value={item.stock}
            displayType={"text"}
            thousandSeparator={true}
            decimalScale={0}
            fixedDecimalScale={true}
            suffix={" pcs"}
          />
        </Typography>
      ),
    },
    {
      title: "CREATED",
      render: (item) => (
        <Typography>
          <Moment format="DD/MM/YYYY">{item.updatedAt}</Moment>
        </Typography>
      ),
    },
  ];

  const actions: Action<any>[] = [
    {
      icon: () => <Edit color="secondary" style={{ color: "#91979c" }} />,
      tooltip: "Edit",
      onClick: (event, rowData) => {
        // Router.push(`/stock/edit?id=${rowData.id}`);
      },
    },
    {
      icon: () => <DeleteOutline color="secondary" />,
      iconProps: { color: "action" },
      tooltip: "Delete",
      onClick: (event, rowData) => {
        // handleClickOpen(rowData);
      },
    },
  ];

  return (
    <div>
      <Layout>
        <MaterialTable
          columns={columns}
          data={products}
          title="Courses"
          actions={actions}
          components={{
            Toolbar: (props) => (
              <div>
                <MTableToolbar {...props} />
                <div style={{ padding: "0px 10px" }}>
                  <Button fullWidth variant="contained" color="primary">
                    Create
                  </Button>
                </div>
              </div>
            ),
          }}
        />
      </Layout>
    </div>
  );
};

export default Stock;
