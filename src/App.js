import React, { useState } from 'react';
import BasicDetails from './components/BasicDetails';
import ProfileSummary from './components/ProfileSummary';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Preview from './components/Preview';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    experience: [],
    skills: [],
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleFormData = (data) => setFormData({ ...formData, ...data });

  switch (step) {
    case 1:
      return <BasicDetails nextStep={nextStep} handleFormData={handleFormData} formData={formData} />;
    case 2:
      return <ProfileSummary nextStep={nextStep} handleFormData={handleFormData} formData={formData} />;
    case 3:
      return <Experience nextStep={nextStep} prevStep={prevStep} handleFormData={handleFormData} formData={formData} />;
    case 4:
      return <Skills nextStep={nextStep} prevStep={prevStep} handleFormData={handleFormData} formData={formData} />;
    case 5:
      return <Preview prevStep={prevStep} formData={formData} />;
    default:
      return <BasicDetails nextStep={nextStep} handleFormData={handleFormData} formData={formData} />;
  }
}

export default App;