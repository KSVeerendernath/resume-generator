import React, { useState } from 'react';

function BasicDetails({ nextStep, handleFormData, formData }) {
  const [error, setError] = useState('');
  const [countryCode, setCountryCode] = useState('+1'); // Default to US
  const [customCountryCode, setCustomCountryCode] = useState('');

  const handleNext = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!formData.name.trim()) {
      setError('Please enter your full name');
    } else if (!emailRegex.test(formData.email)) {
      setError('Invalid email address');
    } else if (!mobileRegex.test(formData.mobile)) {
      setError('Invalid mobile number (should be 10 digits)');
    } else {
      setError('');
      const finalCountryCode = countryCode === 'other' ? customCountryCode : countryCode;
      handleFormData({ mobile: `${finalCountryCode} ${formData.mobile}` });
      nextStep();
    }
  };

  const countryCodes = [
    { code: '+1', country: 'US' },
    { code: '+44', country: 'UK' },
    { code: '+91', country: 'IN' },
    { code: 'other', country: 'Other' },
  ];

  return (
    <div className="form-container">
      <h2>Basic Details</h2>
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={(e) => handleFormData({ name: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={(e) => handleFormData({ email: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="mobile">Mobile Number</label>
        <div className="mobile-input">
          <select 
            value={countryCode} 
            onChange={(e) => setCountryCode(e.target.value)}
            className="country-code"
          >
            {countryCodes.map((country) => (
              <option key={country.code} value={country.code}>
                {country.code === 'other' ? 'Other' : `${country.code} (${country.country})`}
              </option>
            ))}
          </select>
          {countryCode === 'other' && (
            <input
              type="text"
              placeholder="Enter country code"
              value={customCountryCode}
              onChange={(e) => setCustomCountryCode(e.target.value)}
              className="custom-country-code"
            />
          )}
          <input
            id="mobile"
            type="tel"
            placeholder="Enter your 10-digit mobile number"
            value={formData.mobile}
            onChange={(e) => handleFormData({ mobile: e.target.value })}
            className="mobile-number"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="linkedin">LinkedIn URL (Optional)</label>
        <input
          id="linkedin"
          type="url"
          placeholder="Enter your LinkedIn URL"
          value={formData.linkedin || ''}
          onChange={(e) => handleFormData({ linkedin: e.target.value })}
        />
      </div>
      {error && <p className="error-message">{error}</p>}
      <div className="form-buttons">
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default BasicDetails;
