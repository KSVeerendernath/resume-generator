import React, { useState } from 'react';

function Skills({ nextStep, prevStep, handleFormData, formData }) {
  const [skills, setSkills] = useState(formData.skills || ["Java", "Spring Boot"]);
  const [currentSkill, setCurrentSkill] = useState("");

  // Add a new skill to the list
  const addSkill = () => {
    if (currentSkill.trim() !== "") {
      setSkills([...skills, currentSkill]);
      setCurrentSkill("");
    }
  };

  // Remove a skill from the list
  const removeSkill = (indexToRemove) => {
    setSkills(skills.filter((_, index) => index !== indexToRemove));
  };

  // Move to the next step and pass the updated skills list to formData
  const handleNext = () => {
    handleFormData({ skills: skills });
    nextStep();
  };

  return (
    <div className="form-container">
      <h2>Skills</h2>
      <div className="form-group">
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>
              {skill}
              <button 
              onClick={() => removeSkill(index)} 
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
            </li>
          ))}
        </ul>
      </div>
      <div className="form-group">
        <input
          type="text"
          placeholder="Add a new skill"
          value={currentSkill}
          onChange={(e) => setCurrentSkill(e.target.value)}
        />
        <button onClick={addSkill}>Add Skill</button>
      </div>
      <div className="form-buttons">
        <button onClick={prevStep}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default Skills;
