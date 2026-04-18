import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const navigate = useNavigate();

  const handleAnalyze = () => {
    if (question.trim()) {
      setIsAnalyzing(true);
      // 模拟分析过程，然后跳转到结果页
      setTimeout(() => {
        navigate("/result", { state: { question } });
      }, 500);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-normal text-gray-700 mb-6">Mind Lens</h1>
          <p className="text-gray-600 text-lg font-light">帮助你更清晰地理解和分析问题</p>
        </div>
        
        <div className="glass-card">
          <div className="mb-8">
            <label htmlFor="question" className="block text-gray-600 font-medium mb-4">写下你正在困扰的问题</label>
            <textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="例如：如何提高团队的工作效率？"
              className="h-80 text-gray-700 placeholder-gray-400"
              disabled={isAnalyzing}
            />
          </div>
          
          <button
            onClick={handleAnalyze}
            disabled={!question.trim() || isAnalyzing}
            className="w-full btn-primary text-lg"
          >
            {isAnalyzing ? "正在理解你的问题..." : "开始分析"}
          </button>
        </div>
      </div>
    </div>
  );
}