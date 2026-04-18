import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    setLoading(true);
    try {
      // 模拟AI分析过程
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // 模拟分析结果
      const analysisResult = {
        surfaceIssue: "如何提高团队的工作效率",
        implicitAssumptions: [
          "团队当前的工作效率较低",
          "存在可以改进的方法",
          "提高效率是可能的"
        ],
        missingInformation: [
          "团队当前的工作流程",
          "团队成员的技能水平",
          "团队面临的具体挑战"
        ],
        cognitiveBlindSpots: [
          "可能忽略了团队成员的个人需求",
          "可能高估了某些方法的效果",
          "可能低估了实施变革的阻力"
        ],
        betterQuestion: "在当前团队结构和工作流程下，如何通过有针对性的改进措施提高团队的整体工作效率？"
      };

      // 导航到结果页面并传递分析结果
      navigate("/result", { state: { analysisResult } });
    } catch (error) {
      console.error("分析失败:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          问题认知拆解工具
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="question" className="block text-sm font-medium text-gray-700 mb-1">
                输入问题
              </label>
              <textarea
                id="question"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="请输入您需要分析的问题..."
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={6}
                disabled={loading}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 disabled:bg-gray-400"
              disabled={loading || !question.trim()}
            >
              {loading ? "分析中..." : "提交分析"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}