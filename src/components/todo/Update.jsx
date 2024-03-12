import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


const Update = ({ display, toUpdateArray }) => {
  const update = toUpdateArray
  // console.log(update)

  useEffect(() => {
    setInputs({
      title: update.title,
      body: update.body,
    });
  }, [update]);

  // console.log(update._id)

  const [Inputs, setInputs] = useState({
    title: "",
    body: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };
  const submit = async () => {
    await axios
      .put(`https://todo-main-backend.vercel.app/api/task/updateTask/${update._id}`, Inputs)
      .then((response) => {
        toast.success(response.data.message);
      });

    display("none");
  };

  return (
    <div className="p-5  d-flex justify-content-center align-items-start flex-column update  ">
      <h3>Update Your Task</h3>
      <input
        type="text"
        className="todo-inputs my-4 w-100 p-3"
        value={Inputs.title}
        name="title"
        onChange={change}
      />
      <textarea
        type="text"
        className="todo-inputs w-100 p-3"
        value={Inputs.body}
        name="body"
        onChange={change}
      />
      <div>
        <button className="btn btn-dark my-4" onClick={submit}>
          UPDATE
        </button>
        <button
          className="btn btn-danger my-4 mx-3"
          onClick={() => {
            display("none");
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Update;
