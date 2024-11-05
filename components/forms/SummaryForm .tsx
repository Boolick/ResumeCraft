// components/forms/SummaryForm.tsx
"use client";

import React, { useState } from "react";
import { Textarea } from "@/components/ui/index";

interface SummaryFormProps {
  onSaveSummary: (summary: string) => void;
}

export default function SummaryForm({ onSaveSummary }: SummaryFormProps) {
  const [summary, setSummary] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSummary(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveSummary(summary);
    setSummary(""); // Очищаем поле после сохранения
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Textarea
        label="О себе"
        name="summary"
        placeholder="Кратко опишите себя и свои достижения"
        value={summary}
        onChange={handleChange}
      />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded">
        Сохранить описание
      </button>
    </form>
  );
}
