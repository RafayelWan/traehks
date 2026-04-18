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
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-medium text-gray-700 mb-4">问题认知分析器</h1>
          <p className="text-gray-500 text-lg">深入分析问题，发现认知盲点</p>
        </div>
        
        <div className="glass-card">
          <div className="mb-8">
            <label htmlFor="question" className="block text-gray-600 font-medium mb-3">请输入您的问题：</label>
            <textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="在这里输入您需要分析的问题..."
              className="h-72 text-gray-700 placeholder-gray-400"
            />
          </div>
          
          <button
            onClick={handleAnalyze}
            disabled={!question.trim()}
            className="w-full btn-primary text-lg"
          >
            开始分析
          </button>
        </div>
      </div>
    </div>
  );
}