import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import { useDispatch } from "react-redux";
import { deleteCandidateAction } from "../actions/candidatesActions";

const Candidate = ({ candidate }) => {
  const dispatch = useDispatch();

  const confirmCandidateDelete = (id) => {
    Swal.fire({
      title: "Delete?",
      text: "The deleted item cannot be recovered!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#271ea8",
      confirmButtonText: "Yes, Delete",
    }).then((result) => {
      if (result.value) {
        Swal.fire("Deleted", "The item was successfully deleted.", "success");
        console.log(id);
        dispatch(deleteCandidateAction(id));
      }
    });
  };

  return (
    <tr className="pl-2">
      <td>{candidate.name}</td>
      <td>
        <span className="font-weight position">{candidate.position}</span>
      </td>
      <td className="actions ">
        <Link
          to={`/candidates/edit/${candidate.id}`}
          className="btn btn-outline-info px-4 mx-1"
        >
          Edit
        </Link>

        <button
          className="btn btn-outline-danger"
          onClick={() => confirmCandidateDelete(candidate.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Candidate;
