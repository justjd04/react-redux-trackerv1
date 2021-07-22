import React, { useEffect, Fragment, useRef } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  getCandidateAction,
  editCandidateAction,
} from "../actions/candidatesActions";
import {
  validateFormAction,
  validateSuccess,
  validateError,
} from "../actions/validateActions";

const EditCandidate = ({ history, match }) => {
  const nameRef = useRef("");
  const positionRef = useRef("");

  const dispatch = useDispatch();
  const editCandidate = (candidate) => dispatch(editCandidateAction(candidate));

  const validateForm = () => dispatch(validateFormAction());
  const successValidate = () => dispatch(validateSuccess());
  const errorValidate = () => dispatch(validateError());

  const { id } = match.params;

  useEffect(() => {
    dispatch(getCandidateAction(id));
  }, [dispatch, id]);

  const candidate = useSelector((state) => state.candidates.candidate);
  const error = useSelector((state) => state.candidates.error);

  if (!candidate) return "Loading...";

  const submitEditCandidate = (e) => {
    e.preventDefault();

    validateForm();
    if (
      nameRef.current.value.trim() === "" ||
      positionRef.current.value.trim() === ""
    ) {
      errorValidate();
      return;
    }

    successValidate();

    editCandidate({
      id,
      name: nameRef.current.value,
      position: positionRef.current.value,
    });

    history.push("/");
  };

  return (
    <Fragment>
      {error ? (
        <div className="font-weight-bold alert alert-danger text-center mt-4">
          Error
        </div>
      ) : (
        <div className="row justify-content-center mt-5">
          <dic className="col-md-8">
            <div className="card px-4">
              <div className="card-body">
                <h2 className="text-center">Candidate Information</h2>
              </div>

              <form onSubmit={submitEditCandidate}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    defaultValue={candidate.name}
                    ref={nameRef}
                  />
                </div>

                <div className="form-group">
                  <label>Position</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Position"
                    defaultValue={candidate.position}
                    ref={positionRef}
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
                  className="btn btn-info rounded-pill font-weight text-uppercase m-2"
                  style={{ width: "100px" }}
                >
                  Save
                </button>
              </form>
            </div>
          </dic>
        </div>
      )}
    </Fragment>
  );
};

export default EditCandidate;
