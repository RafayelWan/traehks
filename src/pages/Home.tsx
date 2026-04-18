import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface HistoryItem {
  id: string;
  question: string;
  timestamp: number;
}

export default function Home() {
  const [question, setQuestion] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const navigate = useNavigate();

  // 从 localStorage 加载历史记录
  useEffect(() => {
    const savedHistory = localStorage.getItem('mindLensHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  // 保存历史记录到 localStorage
  useEffect(() => {
    localStorage.setItem('mindLensHistory', JSON.stringify(history));
  }, [history]);

  const handleAnalyze = () => {
    if (question.trim()) {
      // 添加到历史记录
      const newHistoryItem: HistoryItem = {
        id: Date.now().toString(),
        question: question.trim(),
        timestamp: Date.now()
      };
      setHistory(prev => [newHistoryItem, ...prev]);

      setIsAnalyzing(true);
      // 模拟分析过程，然后跳转到结果页
      setTimeout(() => {
        navigate("/result", { state: { question } });
      }, 500);
    }
  };

  const handleHistoryItemClick = (item: HistoryItem) => {
    setQuestion(item.question);
    setIsDrawerOpen(false);
  };

  return (
    <div className="min-h-screen flex relative p-6">
      {/* 历史记录抽屉 */}
      <div className={`fixed left-0 top-0 h-full bg-white bg-opacity-90 backdrop-blur-sm shadow-lg z-20 transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="w-80 h-full flex flex-col border-r border-gray-200">
          <div className="p-6 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-700">历史记录</h3>
            <button 
              onClick={() => setIsDrawerOpen(false)}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              ✕
            </button>
          </div>
          <div className="flex-grow overflow-y-auto p-4">
            {history.length === 0 ? (
              <p className="text-gray-400 text-center py-8">暂无历史记录</p>
            ) : (
              <div className="space-y-3">
                {history.map((item) => (
                  <div 
                    key={item.id}
                    onClick={() => handleHistoryItemClick(item)}
                    className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors border border-gray-100"
                  >
                    <p className="text-gray-700 text-sm line-clamp-1">{item.question}</p>
                    <p className="text-gray-400 text-xs mt-2">
                      {new Date(item.timestamp).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 抽屉收起状态的按钮 */}
      <button 
        onClick={() => setIsDrawerOpen(true)}
        className="fixed left-6 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-90 backdrop-blur-sm shadow-md rounded-full p-3 z-10"
      >
        ⟵
      </button>

      {/* 主输入区域 */}
      <div className="flex-1 flex flex-col items-center justify-center">
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
              {isAnalyzing ? "分析中..." : "分析问题"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}