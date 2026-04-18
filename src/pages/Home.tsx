import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [question, setQuestion] = useState("");
  const navigate = useNavigate();

  const handleAnalyze = () => {
    if (question.trim()) {
      navigate("/result", { state: { question } });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 py-16">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-18">
          <h1 className="text-5xl font-light text-gray-700 mb-6 leading-tight">思考辅助器</h1>
          <p className="text-gray-600 text-lg font-light leading-relaxed">帮助你更清晰地理解和分析问题</p>
        </div>
        
        <div className="glass-card">
          <div className="mb-10">
            <label htmlFor="question" className="block text-gray-600 font-medium mb-4 text-sm">写下你正在困扰的问题</label>
            <textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="例如：如何提高团队的工作效率？"
              className="h-80 text-gray-700 placeholder-gray-400"
            />
          </div>
          
          <button
            onClick={handleAnalyze}
            disabled={!question.trim()}
            className="btn-primary text-lg py-6"
          >
            分析问题
          </button>
        </div>
      </div>
    </div>
  );
}