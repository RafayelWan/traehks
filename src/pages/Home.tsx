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
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">问题认知分析器</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <label htmlFor="question" className="block text-gray-700 font-medium mb-2">请输入您的问题：</label>
            <textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="在这里输入您需要分析的问题..."
              className="w-full h-40 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>
          
          <button
            onClick={handleAnalyze}
            disabled={!question.trim()}
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            开始分析
          </button>
        </div>
      </div>
    </div>
  );
}