"use client";
import { useState } from "react";

export default function TYTForm({ calculateTYT }: { calculateTYT: (data: any) => Promise<any> }) {
  const [subjects, setSubjects] = useState([
    { name: "Türkçe", totalQuestions: 40, correct: 0, wrong: 0 },
    { name: "Matematik", totalQuestions: 40, correct: 0, wrong: 0 },
    { name: "Sosyal Bilgiler", totalQuestions: 20, correct: 0, wrong: 0 },
    { name: "Fen Bilimleri", totalQuestions: 20, correct: 0, wrong: 0 },
  ]);
  const [obp, setObp] = useState(250);
  const [result, setResult] = useState(null);

  const handleChange = (index: number, field: string, value: string) => {
      const newSubjects = [...subjects];
      // @ts-ignore
    newSubjects[index][field] = Number(value);
    setSubjects(newSubjects);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { subjects, obp };
    const res = await calculateTYT(data);
    setResult(res);
  };

  return (
    <form onSubmit={handleSubmit}>
      {subjects.map((subject, idx) => (
        <div key={subject.name}>
          <label>{subject.name} Doğru:</label>
          <input
            type="number"
            value={subject.correct}
            min={0}
            max={subject.totalQuestions}
            onChange={e => handleChange(idx, "correct", e.target.value)}
          />
          <label>Yanlış:</label>
          <input
            type="number"
            value={subject.wrong}
            min={0}
            max={subject.totalQuestions}
            onChange={e => handleChange(idx, "wrong", e.target.value)}
          />
        </div>
      ))}
      <div>
        <label>OBP:</label>
        <input
          type="number"
          value={obp}
          min={250}
          max={500}
          onChange={e => setObp(Number(e.target.value))}
        />
      </div>
      <button type="submit">Hesapla</button>
      {result && <pre>{JSON.stringify(result, null, 2)}</pre>}
    </form>
  );
} 