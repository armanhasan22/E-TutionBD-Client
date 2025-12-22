import { useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ApplyModal = ({ tutor, tuitionId, onClose, onApplied }) => {
  const [qualifications, setQualifications] = useState("");
  const [experience, setExperience] = useState("");
  const [expectedSalary, setExpectedSalary] = useState("");
  const [axiosSecure] = useAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const application = {
      tutorId: tutor._id,
      tutorName: tutor.name,
      tutorEmail: tutor.email,
      profileImage: tutor.profileImage || "",
      tuitionId,
      qualifications,
      experience,
      expectedSalary,
    };

    try {
      const res = await axiosSecure.post("/applications", application);
      if (res.data.insertedId) {
        onApplied(); // notify parent
        onClose();
      }
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Failed to apply");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded w-96">
        <h2 className="text-xl font-bold mb-4">Apply for Tuition</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            value={tutor.name}
            readOnly
            className="border p-2 rounded"
          />
          <input
            type="email"
            value={tutor.email}
            readOnly
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Qualifications"
            value={qualifications}
            onChange={(e) => setQualifications(e.target.value)}
            required
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Experience"
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
            className="border p-2 rounded"
          />
          <input
            type="number"
            placeholder="Expected Salary"
            value={expectedSalary}
            onChange={(e) => setExpectedSalary(e.target.value)}
            required
            className="border p-2 rounded"
          />
          <div className="flex justify-end gap-2 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 border rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-1 bg-blue-600 text-white rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyModal;
