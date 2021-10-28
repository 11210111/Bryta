import React from "react";
import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

const ActorEdit = (props) => {
  return (
    <Edit title="Edit Actor" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="actor" />
        <TextInput source="movie" />
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Edit>
  );
};

export default ActorEdit;
