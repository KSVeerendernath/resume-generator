import React, { useState } from 'react';

function Experience({ nextStep, prevStep, handleFormData, formData }) {
  const [experiences, setExperiences] = useState(formData.experience || []);
  const [currentExperience, setCurrentExperience] = useState({
    company: '',
    location: '',
    joiningDate: '',
    endDate: '',
    designation: '',
    role: ''
  });
  const [dateError, setDateError] = useState('');

  // Validate the dates to ensure joining date is earlier than the end date
  const validateDates = (joining, end) => {
    if (new Date(joining) >= new Date(end)) {
      setDateError('Joining date must be earlier than the end date');
      return false;
    }
    setDateError('');
    return true;
  };

  // Add the current experience to the list
  const addExperience = () => {
    if (currentExperience.company && currentExperience.joiningDate && currentExperience.endDate && currentExperience.designation && currentExperience.role) {
      if (validateDates(currentExperience.joiningDate, currentExperience.endDate)) {
        setExperiences([...experiences, currentExperience]);
        // Reset the current experience fields
        setCurrentExperience({
          company: '',
          location: '',
          joiningDate: '',
          endDate: '',
          designation: '',
          role: ''
        });
      }
    }
  };

  // Remove an experience from the list
  const removeExperience = (indexToRemove) => {
    setExperiences(experiences.filter((_, index) => index !== indexToRemove));
  };

  // Move to the next step and pass the updated experiences list to formData
  const handleNext = () => {
    handleFormData({ experience: experiences });
    nextStep();
  };

  return (
    <div className="form-container">
      <h2>Experience</h2>
      
      {/* Display list of companies with a remove button */}
      <div className="company-list">
        <h3>Previous Experiences</h3>
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item" style={{ display: 'flex', alignItems: 'center' }}>
            <p style={{ margin: '0' }}>{exp.company} - {exp.location}</p>
            <button 
              onClick={() => removeExperience(index)} 
              style={{ 
                marginLeft: '10px', 
                color: 'red', 
                cursor: 'pointer',
                background: 'none',
                border: 'none',
                fontSize: '14px',
                fontWeight: 'bold'
              }}
              title="Remove Experience"
            >
              x
            </button>
          </div>
        ))}
      </div>

      <div className="form-group">
        <input
          type="text"
          placeholder="Company Name"
          value={currentExperience.company}
          onChange={(e) => setCurrentExperience({ ...currentExperience, company: e.target.value })}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Location (from Google)"
          value={currentExperience.location}
          onChange={(e) => setCurrentExperience({ ...currentExperience, location: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label>Joining Date</label>
        <input
          type="date"
          value={currentExperience.joiningDate}
          onChange={(e) => {
            setCurrentExperience({ ...currentExperience, joiningDate: e.target.value });
            if (currentExperience.endDate) {
              validateDates(e.target.value, currentExperience.endDate);
            }
          }}
        />
      </div>
      <div className="form-group">
        <label>End Date</label>
        <input
          type="date"
          value={currentExperience.endDate}
          onChange={(e) => {
            setCurrentExperience({ ...currentExperience, endDate: e.target.value });
            if (currentExperience.joiningDate) {
              validateDates(currentExperience.joiningDate, e.target.value);
            }
          }}
        />
      </div>
      {dateError && <p className="error-message">{dateError}</p>}
      <div className="form-group">
        <input
          type="text"
          placeholder="Designation"
          value={currentExperience.designation}
          onChange={(e) => setCurrentExperience({ ...currentExperience, designation: e.target.value })}
        />
      </div>
      <div className="form-group">
        <textarea
          placeholder="Roles and Responsibilities"
          value={currentExperience.role}
          onChange={(e) => setCurrentExperience({ ...currentExperience, role: e.target.value })}
        />
      </div>
      <button onClick={addExperience}>Add Experience</button>
      
      <div className="form-buttons">
        <button onClick={prevStep}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Experience;
