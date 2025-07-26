'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import { Plus, Trash2, FileText } from 'lucide-react'

export default function ResumeGenerator() {
  const [resumeData, setResumeData] = useState({
    personalDetails: { name: '', email: '', phone: '', linkedin: '', github: '' },
    jobDescription: '',
    projects: [],
  })

  const [generatedResume, setGeneratedResume] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // Add a new empty project
  const addProject = () => {
    const newProject = { id: Date.now().toString(), title: '', description: '' }
    setResumeData((prev) => ({
      ...prev,
      projects: [...prev.projects, newProject],
    }))
  }

  // Remove project by id
  const removeProject = (id) =>
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== id),
    }))

  // Update specific field in a project
  const updateProject = (id, field, value) =>
    setResumeData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => (p.id === id ? { ...p, [field]: value } : p)),
    }))

  // Update personal details fields
  const updatePersonalDetails = (field, value) =>
    setResumeData((prev) => ({
      ...prev,
      personalDetails: { ...prev.personalDetails, [field]: value },
    }))

  // Handle form submit and call your API route
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setGeneratedResume('')

    try {
      const res = await fetch('/api/genai/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(resumeData),
      })

      const data = await res.json()

      if (!res.ok) throw new Error(data.error || 'Failed to generate resume')

      setGeneratedResume(data.result)
    } catch (err) {
      setError(err.message)
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex bg-blue-600 items-center justify-center w-20 h-20 rounded-full mb-6 shadow-elegant">
            <FileText className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-foreground mb-4">Professional Resume Generator</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create a stunning, tailored resume that gets you noticed by employers
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 gap-12">
          {/* Left Column: Personal Details + Job Description */}
          <div className="space-y-8">
            <Card className="p-8 shadow-soft border-0 bg-card">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 bg-blue-600 h-8 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Personal Details</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={resumeData.personalDetails.name}
                      onChange={(e) => updatePersonalDetails('name', e.target.value)}
                      placeholder="Your Name"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={resumeData.personalDetails.email}
                      onChange={(e) => updatePersonalDetails('email', e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      value={resumeData.personalDetails.phone}
                      onChange={(e) => updatePersonalDetails('phone', e.target.value)}
                      placeholder="+977 9800000000"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="linkedin">LinkedIn Profile</Label>
                    <Input
                      id="linkedin"
                      value={resumeData.personalDetails.linkedin}
                      onChange={(e) => updatePersonalDetails('linkedin', e.target.value)}
                      placeholder="linkedin.com/in/yourprofile"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="github">GitHub Profile</Label>
                  <Input
                    id="github"
                    value={resumeData.personalDetails.github}
                    onChange={(e) => updatePersonalDetails('github', e.target.value)}
                    placeholder="github.com/yourusername"
                    className="mt-2"
                  />
                </div>
              </div>

              {/* Job Description */}
              <div className="space-y-6 mt-10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <h2 className="text-2xl font-semibold text-foreground">Target Job Description</h2>
                </div>
                <div>
                  <Label htmlFor="jobDescription">Job Role & Requirements</Label>
                  <Textarea
                    id="jobDescription"
                    value={resumeData.jobDescription}
                    onChange={(e) => setResumeData((prev) => ({ ...prev, jobDescription: e.target.value }))}
                    placeholder="Paste the job description here..."
                    className="mt-2 min-h-32"
                    rows={6}
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column: Projects */}
          <div className="space-y-8">
            <Card className="p-8 shadow-soft border-0 bg-card">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <h2 className="text-2xl font-semibold text-foreground">Projects</h2>
                  </div>
                  <Button
                    type="button"
                    onClick={addProject}
                    variant="outline"
                    size="sm"
                    className="flex items-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Project</span>
                  </Button>
                </div>

                {resumeData.projects.length === 0 ? (
                  <div className="text-center py-12 text-muted-foreground">
                    <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                      <Plus className="w-8 h-8" />
                    </div>
                    <p>No projects added yet. Click "Add Project" to get started.</p>
                  </div>
                ) : (
                  resumeData.projects.map((project, idx) => (
                    <Card key={project.id} className="p-6 border border-border mb-4">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-medium text-foreground">Project {idx + 1}</h3>
                        <Button
                          type="button"
                          onClick={() => removeProject(project.id)}
                          variant="ghost"
                          size="sm"
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor={`title-${project.id}`}>Project Title</Label>
                          <Input
                            id={`title-${project.id}`}
                            value={project.title}
                            onChange={(e) => updateProject(project.id, 'title', e.target.value)}
                            placeholder="E-commerce Website"
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor={`desc-${project.id}`}>Project Description</Label>
                          <Textarea
                            id={`desc-${project.id}`}
                            value={project.description}
                            onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                            placeholder="Describe your project..."
                            className="mt-2"
                            rows={4}
                          />
                        </div>
                      </div>
                    </Card>
                  ))
                )}
              </div>

              <Button
                type="submit"
                variant="gradient"
                className="w-full mt-6 bg-blue-600 text-white font-semibold py-6 text-lg"
                disabled={loading}
              >
                {loading ? 'Generating...' : 'Generate Professional Resume'}
              </Button>
            </Card>
          </div>
        </form>

        {error && <p className="mt-6 text-red-600">{error}</p>}

        {generatedResume && (
          <Card className="mt-8 p-6 bg-white shadow-lg max-w-4xl mx-auto whitespace-pre-wrap">
            <h2 className="text-3xl font-bold mb-4">Generated Resume Template</h2>
            <pre>{generatedResume}</pre>
          </Card>
        )}
      </div>
    </div>
  )
}
