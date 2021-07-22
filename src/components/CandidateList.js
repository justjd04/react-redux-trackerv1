import React, { useEffect } from "react";
import Spinner from "./spinner/Spinner";
import Candidate from "./Candidate";
import Button from "./Button";

import { useDispatch, useSelector } from "react-redux";
import { getCandidatesAction } from "../actions/candidatesActions";

const CandidateList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadCandidates = () => dispatch(getCandidatesAction());
    loadCandidates();
  }, []);

  const loading = useSelector((state) => state.candidates.loading);
  const error = useSelector((state) => state.candidates.error);
  const candidates = useSelector((state) => state.candidates.candidates);

  return (
    <React.Fragment>
      {error ? (
        <div className="font-wight-bold alert alert-danger text-center mt-5">
          Error...
        </div>
      ) : null}

      {loading ? <Spinner /> : null}

      <div className="d-md-flex justify-content-md-end m-1">
        <Button
          description="Add New"
          link="/candidates/new"
          className="btn btn-primary new-post d-block "
        />
      </div>

      <table className="table table-striped .table-hover shadow text-center">
        <thead className="bg-info table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Position</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate) => (
            <Candidate key={candidate.id} candidate={candidate} />
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default CandidateList;
