import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { question } = location.state || { question: "" };
  const [results, setResults] = useState({
    surfaceProblem: null,
    hiddenAssumption: null,
    missingInfo: null,
    cognitiveBlindspot: null,
    suggestion: null
  });

  // 创建每个结果卡片的 ref
  const surfaceProblemRef = useRef<HTMLDivElement>(null);
  const hiddenAssumptionRef = useRef<HTMLDivElement>(null);
  const missingInfoRef = useRef<HTMLDivElement>(null);
  const cognitiveBlindspotRef = useRef<HTMLDivElement>(null);
  const suggestionRef = useRef<HTMLDivElement>(null);

  // 模拟渐进式生成结果
  useEffect(() => {
    // 表层问题（先出现）
    setTimeout(() => {
      setResults(prev => ({
        ...prev,
        surfaceProblem: "示例内容：这是一个关于如何提高团队效率的问题"
      }));
    }, 300);

    // 隐含假设（延迟出现）
    setTimeout(() => {
      setResults(prev => ({
        ...prev,
        hiddenAssumption: "示例内容：假设团队成员都有相同的工作节奏和能力水平"
      }));
    }, 1300);

    // 信息缺失
    setTimeout(() => {
      setResults(prev => ({
        ...prev,
        missingInfo: "示例内容：缺少具体的团队规模、当前工作流程和面临的具体挑战等信息"
      }));
    }, 2300);

    // 认知盲点
    setTimeout(() => {
      setResults(prev => ({
        ...prev,
        cognitiveBlindspot: "示例内容：可能忽略了团队成员的个性化需求和工作风格差异"
      }));
    }, 3300);

    // 建议（最后出现）
    setTimeout(() => {
      setResults(prev => ({
        ...prev,
        suggestion: "示例内容：建议先进行团队成员访谈，了解具体痛点，然后制定个性化的改进方案"
      }));
    }, 4300);
  }, []);

  // 监听结果变化，自动滚动到最新内容
  useEffect(() => {
    if (results.surfaceProblem) {
      setTimeout(() => {
        surfaceProblemRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [results.surfaceProblem]);

  useEffect(() => {
    if (results.hiddenAssumption) {
      setTimeout(() => {
        hiddenAssumptionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [results.hiddenAssumption]);

  useEffect(() => {
    if (results.missingInfo) {
      setTimeout(() => {
        missingInfoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [results.missingInfo]);

  useEffect(() => {
    if (results.cognitiveBlindspot) {
      setTimeout(() => {
        cognitiveBlindspotRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [results.cognitiveBlindspot]);

  useEffect(() => {
    if (results.suggestion) {
      setTimeout(() => {
        suggestionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [results.suggestion]);

  // 模拟历史分析记录
  const [history, setHistory] = useState([
    { id: 1, question: "如何提高团队的工作效率？", timestamp: new Date(Date.now() - 3600000).toLocaleString() },
    { id: 2, question: "如何平衡工作和生活？", timestamp: new Date(Date.now() - 7200000).toLocaleString() }
  ]);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-normal text-gray-800">Mind Lens</h1>
          <button
            onClick={handleBack}
            className="px-6 py-2 text-gray-700 hover:text-gray-900 transition-colors"
          >
            ← 新问题
          </button>
        </div>
        
        <div className="flex gap-8 h-[calc(100vh-120px)]">
          {/* 左侧固定区 */}
          <div className="w-[35%] min-w-[300px] glass-card flex flex-col">
            <h2 className="text-xl font-medium text-gray-800 mb-4">你的问题：</h2>
            <p className="text-gray-800 p-5 rounded-lg bg-white bg-opacity-60 flex-grow">{question || "无输入问题"}</p>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-800 mb-4">最近分析</h3>
              <div className="space-y-4">
                {history.map((item) => (
                  <div key={item.id} className="p-4 rounded-lg bg-white bg-opacity-40 hover:bg-opacity-60 transition-colors cursor-pointer">
                    <p className="text-gray-700 text-sm line-clamp-2">{item.question}</p>
                    <p className="text-gray-500 text-xs mt-2">{item.timestamp}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* 右侧主内容区 */}
          <div className="w-[65%] overflow-y-auto pr-4">
            <div className="space-y-6">
              {results.surfaceProblem && (
                <div ref={surfaceProblemRef} className="glass-card animate-fade-in">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">表层问题</h3>
                  <p className="text-gray-700">{results.surfaceProblem}</p>
                </div>
              )}
              
              {results.hiddenAssumption && (
                <div ref={hiddenAssumptionRef} className="glass-card animate-fade-in">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">隐含假设</h3>
                  <p className="text-gray-700">{results.hiddenAssumption}</p>
                </div>
              )}
              
              {results.missingInfo && (
                <div ref={missingInfoRef} className="glass-card animate-fade-in">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">信息缺失</h3>
                  <p className="text-gray-700">{results.missingInfo}</p>
                </div>
              )}
              
              {results.cognitiveBlindspot && (
                <div ref={cognitiveBlindspotRef} className="glass-card animate-fade-in">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">认知盲点</h3>
                  <p className="text-gray-700">{results.cognitiveBlindspot}</p>
                </div>
              )}
              
              {results.suggestion && (
                <div ref={suggestionRef} className="glass-card animate-fade-in">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">建议</h3>
                  <p className="text-gray-700">{results.suggestion}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
