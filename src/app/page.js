"use client";

import React, { useState } from "react";

export default function Home() {
  const [resumeText, setResumeText] = useState("");
  const [loading, setLoading] = useState(false);

  // Example resume data, replace or extend with your form data
  const resumeData = {
    personalDetails: {
      name: "Shroyash Shrestha",
      email: "shroyash@example.com",
      github: "https://github.com/shroyash",
      linkedin: "https://linkedin.com/in/shroyash",
      phone: "9876543210",
    },
    skills: {
      languages: "JavaScript, TypeScript",
      libraries: "React, Redux Toolkit",
      tools: "VS Code, Git, Postman",
      platforms: "Windows, Mac",
      softSkills: "Teamwork, Communication, Problem-Solving",
    },
    workExperience: [
      {
        role: "Frontend Developer Intern",
        company: "ABC Tech",
        link: "https://abctech.com",
        period: "Jan 2024 - May 2024",
        responsibilities: [
          "Built reusable components with React",
          "Improved UI/UX responsiveness",
        ],
        description: "Worked in a cross-functional team to develop frontend modules.",
      },
    ],
    projects: [
      {
        title: "E-commerce Website",
        link: "https://myecommerce.com",
        period: "March 2024 - June 2024",
        details: [
          "Implemented cart, checkout, and payment system",
          "Used Redux Toolkit and Tailwind for UI",
        ],
      },
    ],
    certificates: [
      {
        title: "React Developer Certification",
        type: "Online",
        date: "May 2024",
        description: "Completed a 40-hour React course from Coursera",
      },
    ],
    education: {
      institute: "XYZ College",
      location: "Kathmandu, Nepal",
      degree: "+2 Science",
      gpa: "3.8",
      period: "2022 - 2024",
    },
  };

  const handleGenerate = async () => {
    setLoading(true);
    setResumeText("");
    try {
      const res = await fetch("/api/generate-resume-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ resumeData }),
      });

      const data = await res.json();
      if (res.ok) {
        setResumeText(data.resumeText);
      } else {
        alert("Failed to generate resume");
      }
    } catch (error) {
      alert("Error generating resume");
      console.error(error);
    }
    setLoading(false);
  };

  const handleDownload = () => {
    const blob = new Blob([resumeText], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "resume.txt";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">AI Resume Generator</h1>
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="mb-4 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        {loading ? "Generating..." : "Generate Resume"}
      </button>

      {resumeText && (
        <>
          <pre className="bg-gray-100 p-4 rounded whitespace-pre-wrap mb-4">{resumeText}</pre>
          <button
            onClick={handleDownload}
            className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Download Resume (.txt)
          </button>
        </>
      )}
    </main>
  );
}
