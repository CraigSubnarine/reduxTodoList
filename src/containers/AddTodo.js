import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import uuid from 'uuid'

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <br />
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value, uuid.v4()));
          input.value = "";
        }}
      >
        <input ref={node => (input = node)} placeholder="e.g. Walk Dog"/>
        <button type="submit" id="themeButton">Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
