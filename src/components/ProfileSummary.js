import React, { useState } from 'react';

function ProfileSummary({ nextStep, prevStep, handleFormData, formData }) {
  const [profileSummary, setProfileSummary] = useState(formData.profileSummary || '');

  const handleNext = () => {
    handleFormData({ profileSummary });
    nextStep();
  };

  return (
    <div className="form-container">
      <h2>Profile Summary</h2>
      <div className="form-group">
        <textarea
          placeholder="Write a brief profile summary"
          value={profileSummary}
          onChange={(e) => setProfileSummary(e.target.value)}
        />
      </div>
      <div className="form-buttons">
        <button onClick={prevStep}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default ProfileSummary;
