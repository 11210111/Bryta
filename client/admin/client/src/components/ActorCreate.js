import React from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

const ActorCreate = (props) => {
  return (
    <Create title="Create a Post" {...props}>
      <SimpleForm>
        <TextInput source="actor" />
        <TextInput multiline source="movie" />
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Create>
  );
};

export default ActorCreate;
