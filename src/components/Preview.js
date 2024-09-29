import React from 'react';
import jsPDF from 'jspdf';

function Preview({ prevStep, formData }) {
  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;
    const margin = 20;
    let yPos = margin;

    // Helper function to add text with wrapping
    const addText = (text, size, style = "normal", addYPos = true) => {
      doc.setFontSize(size);
      doc.setFont("times", style);
      const textLines = doc.splitTextToSize(text, pageWidth - margin * 2);
      textLines.forEach(line => {
        if (yPos > pageHeight - margin) {
          doc.addPage(); // Add new page when yPos exceeds page height
          yPos = margin + 20; // Reset yPos with margin on the new page
          addHeader(); // Add header on the new page
        }
        doc.text(line, margin, yPos);
        if (addYPos) yPos += size * 0.75;
      });
    };

    // Helper function to add a line
    const addLine = () => {
      doc.setLineWidth(0.5);
      yPos += 1;  // Small space before the line
      doc.line(margin, yPos, pageWidth - margin, yPos);
      yPos += 5; // Space after the line
    };

    // Add header for each page
    const addHeader = (firstPage = false) => {
      // Ash gray background
      doc.setFillColor(178, 190, 181); // Ash Gray
      doc.rect(0, 0, pageWidth, 30, 'F'); // Filled rectangle as header background

      doc.setFont("times", "bold");
      doc.setFontSize(16);
      doc.setTextColor(0, 0, 0); // Black text color
      doc.text(formData.name, margin, 15);

      doc.setFontSize(10);
      doc.text(`${formData.mobile} | ${formData.email}`, margin, 25);

      doc.text(`${formData.linkedin || ''} | ${formData.location || ''}`, pageWidth - margin, 25, { align: 'right' });
      
      yPos = 45; // Set yPos after the header
    };

    // Add footer on every page
    const addFooter = () => {
      const totalPages = doc.internal.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        
        // Footer background color
        doc.setFillColor(178, 190, 181); // Ash Gray
        doc.rect(0, pageHeight - 20, pageWidth, 20, 'F'); // Filled rectangle as footer background

        // Footer text
        doc.setTextColor(0, 0, 0); // Black text color for footer
        doc.setFontSize(10);
        doc.text(`Page ${i} of ${totalPages}`, pageWidth / 2, pageHeight - 10, { align: "center" });
      }
    };

    // Start generating PDF content
    addHeader(true);

    // Add Profile Summary Section
    addText("Profile Summary", 14, "bold");
    addLine();
    addText(formData.profileSummary, 12);

    // Skills Section
    yPos += 5;
    addText("Skills", 14, "bold");
    addLine();

    if (Array.isArray(formData.skills) && formData.skills.length > 0) {
      formData.skills.forEach(skill => {
        addText(`• ${skill}`, 12, "normal");
        yPos += 3;  // Ensure space after each skill to prevent overlapping
      });
    }

    yPos += 2;

    // Experience Section
    addText("Experience", 14, "bold");
    addLine();

    if (Array.isArray(formData.experience) && formData.experience.length > 0) {
      formData.experience.forEach(exp => {
        addText(`${exp.company} - ${exp.designation}`, 12, "bold");
        addText(`${exp.joiningDate} to ${exp.endDate}`, 12);
        addText(exp.role, 12);
        yPos += 2;
      });
    }

    // Add footer to all pages
    addFooter();

    // Save the generated PDF
    const pdfName = `${formData.name.replace(/\s+/g, '_')}_Resume.pdf`;
    doc.save(pdfName);
  };

  return (
    <div className="form-container">
      <h2>Preview</h2>
      <div className="resume-preview">
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Mobile:</strong> {formData.mobile}</p>
        <p><strong>LinkedIn:</strong> {formData.linkedin || 'N/A'}</p>
        <p><strong>Location:</strong> {formData.location || ''}</p>

        <h3>Profile Summary</h3>
        <p>{formData.profileSummary}</p>

        <h3>Skills</h3>
        <ul>
          {formData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <h3>Experience</h3>
        {formData.experience.map((exp, index) => (
          <div key={index}>
            <p><strong>{exp.company} - {exp.designation}</strong></p>
            <p>{exp.joiningDate} to {exp.endDate}</p>
            <p>{exp.role}</p>
          </div>
        ))}
      </div>
      <div className="form-buttons">
        <button onClick={prevStep}>Previous</button>
        <button onClick={generatePDF}>Download PDF</button>
      </div>
    </div>
  );
}

export default Preview;
