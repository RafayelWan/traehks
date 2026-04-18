import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

// AI 调用函数
const callAI = async (question: string): Promise<{
  surfaceProblem: string;
  hiddenAssumption: string;
  missingInfo: string;
  cognitiveBlindspot: string;
  suggestion: string;
}> => {
  // 分析指令
  const prompt = `你是 Mind Lens，请分析以下问题：
${question}

并按结构输出：
1. 表层问题
2. 隐含假设
3. 信息缺失
4. 认知盲点
5. 建议`;

  // 模拟 AI 调用（实际项目中可以替换为真实的 AI API 调用）
  return new Promise((resolve) => {
    setTimeout(() => {
      // 根据问题内容生成相关的模拟结果
      let surfaceProblem, hiddenAssumption, missingInfo, cognitiveBlindspot, suggestion;
      
      if (question.includes("团队")) {
        surfaceProblem = "你希望找到有效的方法来提升团队的工作表现和产出，解决团队效率问题。";
        hiddenAssumption = "假设团队成员都有相同的工作节奏和能力水平，忽略了个体差异。同时假设所有团队效率问题都可以通过单一方法解决。";
        missingInfo = "缺少具体的团队规模、当前工作流程和面临的具体挑战等信息。没有提及团队的行业背景、现有工具使用情况以及团队成员的技能水平。";
        cognitiveBlindspot = "可能忽略了团队成员的个性化需求和工作风格差异，以及团队文化对效率的影响。";
        suggestion = "建议先进行团队成员访谈，了解具体痛点，然后制定个性化的改进方案。可以引入项目管理工具，建立清晰的目标和任务分配机制，并定期进行团队建设活动。";
      } else if (question.includes("工作")) {
        surfaceProblem = "你在工作中遇到了挑战，希望找到解决方案来改善工作状态或解决具体问题。";
        hiddenAssumption = "假设问题的根源在于外部因素，而可能忽略了自身的工作方式和态度对结果的影响。";
        missingInfo = "缺少具体的工作内容、行业背景、团队环境以及当前采取的应对措施等信息。";
        cognitiveBlindspot = "可能忽略了工作与生活的平衡对工作表现的影响，以及个人职业发展与当前工作的匹配度。";
        suggestion = "建议先梳理工作目标和优先级，制定合理的工作计划。同时关注工作方法的改进，必要时寻求同事或上级的支持。";
      } else if (question.includes("生活")) {
        surfaceProblem = "你在生活中遇到了困扰，希望找到方法来改善生活质量或解决具体问题。";
        hiddenAssumption = "假设问题的解决需要外部条件的改变，而可能忽略了自身心态和行为模式对生活的影响。";
        missingInfo = "缺少具体的生活场景、个人背景、当前的应对方式以及期望的生活状态等信息。";
        cognitiveBlindspot = "可能忽略了生活的多样性和阶段性，以及不同生活领域之间的相互影响。";
        suggestion = "建议先明确生活目标和价值观，然后制定具体的行动计划。同时保持开放的心态，灵活调整应对策略。";
      } else {
        surfaceProblem = `你提出了关于"${question.substring(0, 50)}${question.length > 50 ? '...' : ''}"的问题，希望获得深入的分析和建议。`;
        hiddenAssumption = "假设这个问题有明确的解决方案，而可能忽略了问题的复杂性和多面性。";
        missingInfo = "缺少具体的背景信息、相关情境以及你已经尝试过的解决方法等信息。";
        cognitiveBlindspot = "可能忽略了问题的不同角度和潜在的影响因素，以及自身在问题中的角色和责任。";
        suggestion = "建议先收集更多相关信息，从多个角度分析问题。然后制定具体的行动计划，并在实施过程中根据反馈进行调整。";
      }
      
      // 模拟 AI 返回结果
      resolve({
        surfaceProblem,
        hiddenAssumption,
        missingInfo,
        cognitiveBlindspot,
        suggestion
      });
    }, 1500);
  });
};

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
  const [isLoading, setIsLoading] = useState(true);

  // 创建每个结果卡片的 ref
  const surfaceProblemRef = useRef<HTMLDivElement>(null);
  const hiddenAssumptionRef = useRef<HTMLDivElement>(null);
  const missingInfoRef = useRef<HTMLDivElement>(null);
  const cognitiveBlindspotRef = useRef<HTMLDivElement>(null);
  const suggestionRef = useRef<HTMLDivElement>(null);

  // 调用 AI 生成分析结果
  useEffect(() => {
    const generateResults = async () => {
      try {
        setIsLoading(true);
        const aiResults = await callAI(question);
        
        // 渐进式显示结果
        setTimeout(() => {
          setResults(prev => ({
            ...prev,
            surfaceProblem: aiResults.surfaceProblem
          }));
        }, 300);

        setTimeout(() => {
          setResults(prev => ({
            ...prev,
            hiddenAssumption: aiResults.hiddenAssumption
          }));
        }, 1300);

        setTimeout(() => {
          setResults(prev => ({
            ...prev,
            missingInfo: aiResults.missingInfo
          }));
        }, 2300);

        setTimeout(() => {
          setResults(prev => ({
            ...prev,
            cognitiveBlindspot: aiResults.cognitiveBlindspot
          }));
        }, 3300);

        setTimeout(() => {
          setResults(prev => ({
            ...prev,
            suggestion: aiResults.suggestion
          }));
          setIsLoading(false);
        }, 4300);
      } catch (error) {
        console.error("AI 调用失败:", error);
        setIsLoading(false);
      }
    };

    if (question) {
      generateResults();
    } else {
      setIsLoading(false);
    }
  }, [question]);

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

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-normal text-gray-700">分析结果</h1>
          <button
            onClick={handleBack}
            className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            ← 返回
          </button>
        </div>
        
        <div className="flex gap-8 h-[calc(100vh-120px)]">
          {/* 左侧固定区 */}
          <div className="w-[35%] min-w-[300px] glass-card flex flex-col">
            <h2 className="text-xl font-medium text-gray-600 mb-4">你的问题：</h2>
            <p className="text-gray-600 p-5 rounded-lg bg-white bg-opacity-60 flex-grow">{question || "无输入问题"}</p>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-600 mb-4">问题上下文</h3>
              <p className="text-gray-500 text-sm">此问题由用户于 {new Date().toLocaleString()} 提交，正在进行AI分析。</p>
            </div>
          </div>
          
          {/* 右侧主内容区 */}
          <div className="w-[65%] overflow-y-auto pr-4">
            {isLoading && !results.surfaceProblem && (
              <div className="glass-card p-8 text-center">
                <p className="text-gray-600">AI 正在分析你的问题...</p>
              </div>
            )}
            
            <div className="space-y-6">
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
