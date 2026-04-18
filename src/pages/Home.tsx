import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
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
  const resultsContainerRef = useRef<HTMLDivElement>(null);

  // 监听结果变化，自动滚动到最新内容
  useEffect(() => {
    if (results.surfaceProblem) {
      setTimeout(() => {
        surfaceProblemRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [results.surfaceProblem]);

  useEffect(() => {
    if (results.hiddenAssumption) {
      setTimeout(() => {
        hiddenAssumptionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [results.hiddenAssumption]);

  useEffect(() => {
    if (results.missingInfo) {
      setTimeout(() => {
        missingInfoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [results.missingInfo]);

  useEffect(() => {
    if (results.cognitiveBlindspot) {
      setTimeout(() => {
        cognitiveBlindspotRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [results.cognitiveBlindspot]);

  useEffect(() => {
    if (results.suggestion) {
      setTimeout(() => {
        suggestionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [results.suggestion]);

  const handleAnalyze = () => {
    if (question.trim()) {
      setIsAnalyzing(true);
      setResults({
        surfaceProblem: null,
        hiddenAssumption: null,
        missingInfo: null,
        cognitiveBlindspot: null,
        suggestion: null
      });

      // 模拟渐进式生成结果
      setTimeout(() => {
        setResults(prev => ({
          ...prev,
          surfaceProblem: "示例内容：这是一个关于如何提高团队效率的问题"
        }));
      }, 500);

      setTimeout(() => {
        setResults(prev => ({
          ...prev,
          hiddenAssumption: "示例内容：假设团队成员都有相同的工作节奏和能力水平"
        }));
      }, 1500);

      setTimeout(() => {
        setResults(prev => ({
          ...prev,
          missingInfo: "示例内容：缺少具体的团队规模、当前工作流程和面临的具体挑战等信息"
        }));
      }, 2500);

      setTimeout(() => {
        setResults(prev => ({
          ...prev,
          cognitiveBlindspot: "示例内容：可能忽略了团队成员的个性化需求和工作风格差异"
        }));
      }, 3500);

      setTimeout(() => {
        setResults(prev => ({
          ...prev,
          suggestion: "示例内容：建议先进行团队成员访谈，了解具体痛点，然后制定个性化的改进方案"
        }));
        setIsAnalyzing(false);
      }, 4500);
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-normal text-gray-700 mb-6">Mind Lens</h1>
          <p className="text-gray-600 text-lg font-light">帮助你更清晰地理解和分析问题</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 左侧：问题上下文面板 */}
          <div className="lg:col-span-1">
            <div className="glass-card sticky top-8">
              <div className="mb-6">
                <h2 className="text-xl font-medium text-gray-600 mb-4">你的问题</h2>
                <textarea
                  id="question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="例如：如何提高团队的工作效率？"
                  className="h-64 text-gray-700 placeholder-gray-400"
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
          
          {/* 右侧：分析结果区域 */}
          <div className="lg:col-span-2">
            <div ref={resultsContainerRef} className="space-y-6">
              {results.surfaceProblem && (
                <div ref={surfaceProblemRef} className="glass-card animate-fade-in">
                  <h3 className="text-lg font-medium text-gray-600 mb-4">表层问题</h3>
                  <p className="text-gray-600">{results.surfaceProblem}</p>
                </div>
              )}
              
              {results.hiddenAssumption && (
                <div ref={hiddenAssumptionRef} className="glass-card animate-fade-in">
                  <h3 className="text-lg font-medium text-gray-600 mb-4">隐含假设</h3>
                  <p className="text-gray-600">{results.hiddenAssumption}</p>
                </div>
              )}
              
              {results.missingInfo && (
                <div ref={missingInfoRef} className="glass-card animate-fade-in">
                  <h3 className="text-lg font-medium text-gray-600 mb-4">信息缺失</h3>
                  <p className="text-gray-600">{results.missingInfo}</p>
                </div>
              )}
              
              {results.cognitiveBlindspot && (
                <div ref={cognitiveBlindspotRef} className="glass-card animate-fade-in">
                  <h3 className="text-lg font-medium text-gray-600 mb-4">认知盲点</h3>
                  <p className="text-gray-600">{results.cognitiveBlindspot}</p>
                </div>
              )}
              
              {results.suggestion && (
                <div ref={suggestionRef} className="glass-card animate-fade-in">
                  <h3 className="text-lg font-medium text-gray-600 mb-4">建议</h3>
                  <p className="text-gray-600">{results.suggestion}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}