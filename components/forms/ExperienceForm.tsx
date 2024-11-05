// components/ExperienceForm.tsx
import React, { useState } from "react";
import { Textarea, TextInput } from "@/components/ui/index";

interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface ExperienceFormProps {
  onAddExperience: (experience: Experience) => void;
}

export default function ExperienceForm({
  onAddExperience,
}: ExperienceFormProps) {
  const [experience, setExperience] = useState<Experience>({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setExperience({ ...experience, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddExperience(experience);
    setExperience({
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <TextInput
        label="Company"
        type="text"
        name="company"
        placeholder="Компания"
        value={experience.company}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <TextInput
        label="Position"
        type="text"
        name="position"
        placeholder="Должность"
        value={experience.position}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <TextInput
        label="Start date"
        type="date"
        name="startDate"
        placeholder="Дата начала"
        value={experience.startDate}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <TextInput
        label="End date"
        type="date"
        name="endDate"
        placeholder="Дата окончания"
        value={experience.endDate}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <Textarea
        label="Description"
        name="description"
        placeholder="Описание"
        value={experience.description}
        onChange={handleChange}
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded">
        Добавить опыт
      </button>
    </form>
  );
}
