import React, { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

import { createNewCandidateAction } from "../actions/candidatesActions";
import {
  validateFormAction,
  validateSuccess,
  validateError,
} from "../actions/validateActions";
import { useDispatch, useSelector } from "react-redux";

const NewCandidate = ({ history }) => {
  const [name, getName] = useState("");
  const [position, getposition] = useState("");

  const dispatch = useDispatch();
  const addCandidate = (candidate) =>
    dispatch(createNewCandidateAction(candidate));
  const validateForm = () => dispatch(validateFormAction());
  const successValidate = () => dispatch(validateSuccess());
  const errorValidate = () => dispatch(validateError());

  const error = useSelector((state) => state.error.error);

  const submitNewCandidate = (e) => {
    e.preventDefault();

    validateForm();

    if (name.trim() === "" || position.trim() === "") {
      errorValidate();
      return;
    }
    successValidate();

    addCandidate({
      name,
      position,
      id: uuid(),
    });

    history.push("/");
  };

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold ">
              Candidate Information
            </h2>
            <form onSubmit={submitNewCandidate}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control  "
                  placeholder="Name"
                  valur={name}
                  onChange={(e) => getName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Position</label>
                <input
                  type="text"
                  className="form-control "
                  placeholder="Position"
                  value={position}
                  onChange={(e) => getposition(e.target.value)}
                />
              </div>
              <Link to="/">
                <button
                  type="submit"
                  className="btn btn-warning rounded-pill font-weight-bold text-uppercase m-2"
                  style={{ width: "100px" }}
                >
                  Cancel
                </button>
              </Link>

              <button
                type="submit"
                className="btn btn-info rounded-pill font-weight-bold text-uppercase m-2"
                style={{ width: "100px" }}
              >
                Save
              </button>
            </form>
            {error ? (
              <div className="font-weight-bold alert alert-danger text-center mt-4">
                Missing Field
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCandidate;
