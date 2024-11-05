"use client";
import { useState } from "react";
import Main from "@/components/Main";
import ExperienceForm from "@/components/forms/ExperienceForm";
import SummaryForm from "@/components/forms/SummaryForm ";

interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

export default function CraftPage() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [summary, setSummary] = useState("");

  const handleAddExperience = (experience: Experience) => {
    setExperiences((prev) => [...prev, experience]);
  };

  const handleSaveSummary = (newSummary: string) => {
    setSummary(newSummary);
  };
  return (
    <Main className={" bg-slate-800"}>
      <h1 className="text-3xl font-semibold mb-6">Создайте свое резюме</h1>
      <SummaryForm onSaveSummary={handleSaveSummary} />
      <ExperienceForm onAddExperience={handleAddExperience} />
      {summary && (
        <div className="mt-8 w-full">
          <h2 className="text-2xl font-semibold">О себе</h2>
          <p className="mt-4 p-4 border rounded">{summary}</p>
        </div>
      )}
      <div className="mt-8 w-full">
        <h2 className="text-2xl font-semibold">Опыт работы</h2>
        <ul className="mt-4 space-y-4">
          {experiences.map((exp, index) => (
            <li key={index} className="p-4 border rounded">
              <h3 className="font-bold">
                {exp.position} at {exp.company}
              </h3>
              <p>
                {exp.startDate} - {exp.endDate}
              </p>
              <p>{exp.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </Main>
  );
}
