import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from "react-admin";

const ActorList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="actor" />
        <TextField source="movie" />
        <DateField source="publishedAt" />
        <EditButton basePath="/actors" />
        <DeleteButton basePath="/actors" />
      </Datagrid>
    </List>
  );
};

export default ActorList;
