import React from 'react';
import {Fragment} from "react";
import '../styles/App.css';
import Form, {otherForm} from "./Form";

function App() {
  return (
      <Fragment>
          <Form/>
          {otherForm()}
      </Fragment>
  )
}

export default App;
