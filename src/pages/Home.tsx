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
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">问题认知分析器</h1>
          <p className="text-gray-600 text-lg">深入分析问题，发现认知盲点</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="mb-8">
            <label htmlFor="question" className="block text-gray-700 font-medium mb-3">请输入您的问题：</label>
            <textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="在这里输入您需要分析的问题..."
              className="w-full h-52 p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-800"
            />
          </div>
          
          <button
            onClick={handleAnalyze}
            disabled={!question.trim()}
            className="w-full py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-200 disabled:cursor-not-allowed font-medium text-lg"
          >
            开始分析
          </button>
        </div>
      </div>
    </div>
  );
}