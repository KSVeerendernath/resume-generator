# Resume Generator

A **React-based Resume Generator** application that allows users to input their personal details, skills, experience, and generate a **PDF resume** with a clean, professional format. The application is built using **React** and **jsPDF** for PDF generation, and includes form validation, multi-step navigation, and dynamic content handling.

## Features

- **Multi-step form**: Separate pages for basic details, profile summary, experience, and skills.
- **LinkedIn and Location Support**: Optional fields for LinkedIn URL and work location (from Google).
- **Dynamic Experience Section**: Add multiple experiences with validation for date ranges and the ability to remove experiences.
- **PDF Resume Generation**: Automatically generate a well-formatted PDF that includes name, contact details, profile summary, experience, skills, and awards.
- **Date Validation**: Ensures that the joining date is earlier than the end date in the experience section.

## Demo

A live demo of this project can be accessed here:
[**Live Demo**](https://KSVeerendernath.github.io/resume-generator)

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/KSVeerendernath/resume-generator.git
   ```

2. **Navigate to the project directory**:
cd resume-generator

3. **Install dependencies**:
npm install

4. **Start the development server**:
npm start

The application will run locally at http://localhost:3000.

## Usage
- **Basic Details Page**: Input your name, email, mobile number, LinkedIn (optional), and location (optional).
- **Profile Summary**: Enter a brief profile summary about your professional background.
- **Experience**: Add one or more experiences, including company name, location, joining and end dates, designation, and roles/responsibilities. You can also remove an experience.
- **Skills**: Add multiple skills to showcase your expertise.
- **Preview**: Preview your input and download the PDF of the resume.

## PDF Generation
The resume is generated using jsPDF. The PDF includes:
- Header with name, email, mobile number, LinkedIn URL, and location.
- Profile Summary, Skills, and Experience.

## Deployment
**To deploy the app to GitHub Pages, follow these steps**:

- **Install gh-pages as a dev dependency**:
npm install gh-pages --save-dev

- **Add the following scripts to your package.json**:
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build",
  "start": "react-scripts start",
  "build": "react-scripts build"
}

- **Deploy the app**:
npm run deploy

- **The app will be deployed at**: [**Application URL**](https://KSVeerendernath.github.io/resume-generator)


## How to contribute?
- Contribution: [**Contribution**](https://github.com/KSVeerendernath/resume-generator/blob/main/Contibuting.md)

## Technologies Used
- **React**: For building the user interface.
- **jsPDF**: For generating the resume in PDF format.
- **React Icons**: For using icons like calendar icons.
- **HTML5 & CSS3**: For styling the application and handling form inputs.
- **GitHub Pages**: For deployment.

## Future Enhancements
- **Integration with Google Places API**: Automatically fetch and suggest work locations.
- **Customizable PDF templates**: Allow users to choose between different PDF templates for the resume.
- **Award Section**: Add a section to input awards or achievements.

## Code Of Conduct
- Code Of Contuct: [**Code Of Conduct**](https://github.com/KSVeerendernath/resume-generator?tab=coc-ov-file)


## Author
- **Veerendernath Komala**: [**GitHub Profile**](https://github.com/KSVeerendernath) 
- **Manoj**: [**GitHub Profile**](https://github.com/manutopp) 
- **Tejaswini Gurram**: [**GitHub Profile**](https://github.com/gurramtejaswini) 








