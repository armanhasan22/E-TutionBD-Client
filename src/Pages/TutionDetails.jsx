import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import ApplyModal from "../DashBoard/ApplyModal";

const TuitionDetails = ({ tutor }) => {
  const { tuitionId } = useParams();
  const [tuition, setTuition] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Fetch tuition details
  useEffect(() => {
    axios
      .get(`https://e-tution-bd-server-yr7n.vercel.app/tuitions/${tuitionId}`)
      .then(res => setTuition(res.data))
      .catch(err => console.log(err));
  }, [tuitionId]);

  if (!tuition) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{tuition.subject}</h2>
      <p>{tuition.description}</p>

      <button
        onClick={() => setShowModal(true)}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        Apply
      </button>

      {showModal && (
        <ApplyModal
          tutor={tutor}
          tuitionId={tuition._id}
          onClose={() => setShowModal(false)}
          onApplied={() => console.log("Application submitted")}
        />
      )}
    </div>
  );
};

export default TuitionDetails;
