import { BookOpen, Settings, CheckCircle, Calendar } from "lucide-react";

export const features = [
  {
    icon: BookOpen,
    title: "Smart Resume Builder",
    description:
      "AI-powered resume creation that adapts to any job description. Get keyword optimization and ATS-friendly formatting automatically.",
    color: "bg-blue-500",
  },
  {
    icon: CheckCircle,
    title: "ATS Analyzer",
    description:
      "Get instant feedback on your resume's ATS compatibility. See your score and get specific recommendations for improvement.",
    color: "bg-green-500",
  },
  {
    icon: Calendar,
    title: "Interview Practice",
    description:
      "Practice with job-specific questions tailored to your role and experience level. Build confidence before the real interview.",
    color: "bg-indigo-500",
  },
  {
    icon: Settings,
    title: "AI Mock Interview",
    description:
      "Realistic interview simulation with AI feedback on your answers. Get personalized tips to improve your performance.",
    color: "bg-purple-500",
  },
];

export const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer",
    company: "Google",
    content:
      "JobBoost AI helped me optimize my resume for tech roles. I got 3x more interviews and landed my dream job at Google!",
    avatar: "SC",
  },
  {
    name: "Marcus Rodriguez",
    role: "Product Manager",
    company: "Microsoft",
    content:
      "The interview practice feature was game-changing. I felt so prepared and confident during my actual interviews.",
    avatar: "MR",
  },
  {
    name: "Emily Watson",
    role: "UX Designer",
    company: "Airbnb",
    content:
      "The ATS analyzer showed me exactly what was missing from my resume. My application rate improved dramatically.",
    avatar: "EW",
  },
];
