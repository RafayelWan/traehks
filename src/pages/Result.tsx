import { useLocation } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const { question } = location.state || { question: "" };

  // 假数据
  const analysisResult = {
    surfaceProblem: "示例内容：这是一个关于如何提高团队效率的问题",
    hiddenAssumption: "示例内容：假设团队成员都有相同的工作节奏和能力水平",
    missingInfo: "示例内容：缺少具体的团队规模、当前工作流程和面临的具体挑战等信息",
    cognitiveBlindspot: "示例内容：可能忽略了团队成员的个性化需求和工作风格差异",
    suggestion: "示例内容：建议先进行团队成员访谈，了解具体痛点，然后制定个性化的改进方案"
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">分析结果</h1>
          <p className="text-gray-600 text-lg">问题认知深度分析</p>
        </div>
        
        <div className="glass-card p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">您的问题：</h2>
          <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">{question || "无输入问题"}</p>
        </div>
        
        <div className="space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">表层问题</h3>
            <p className="text-gray-700">{analysisResult.surfaceProblem}</p>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">隐含假设</h3>
            <p className="text-gray-700">{analysisResult.hiddenAssumption}</p>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">信息缺失</h3>
            <p className="text-gray-700">{analysisResult.missingInfo}</p>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">认知盲点</h3>
            <p className="text-gray-700">{analysisResult.cognitiveBlindspot}</p>
          </div>
          
          <div className="glass-card p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-3">建议</h3>
            <p className="text-gray-700">{analysisResult.suggestion}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
