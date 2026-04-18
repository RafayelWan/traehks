import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface AnalysisResult {
  surfaceIssue: string;
  implicitAssumptions: string[];
  missingInformation: string[];
  cognitiveBlindSpots: string[];
  betterQuestion: string;
}

export default function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const { analysisResult } = location.state as { analysisResult: AnalysisResult };

  if (!analysisResult) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <div className="max-w-2xl w-full px-4 py-8">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">错误</h2>
            <p className="text-gray-600 mb-4">未找到分析结果，请返回输入页面重新提交。</p>
            <button
              onClick={() => navigate("/")}
              className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              返回输入页面
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">问题认知拆解工具</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => navigate("/")}
                className="text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                返回输入页面
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* 主内容区 */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">分析结果</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 表层问题卡片 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">表层问题</h3>
            <p className="text-gray-600">{analysisResult.surfaceIssue}</p>
          </div>

          {/* 隐含假设卡片 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">隐含假设</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              {analysisResult.implicitAssumptions.map((assumption, index) => (
                <li key={index}>{assumption}</li>
              ))}
            </ul>
          </div>

          {/* 信息缺失卡片 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">信息缺失</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              {analysisResult.missingInformation.map((info, index) => (
                <li key={index}>{info}</li>
              ))}
            </ul>
          </div>

          {/* 认知盲点卡片 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">认知盲点</h3>
            <ul className="list-disc pl-5 text-gray-600 space-y-1">
              {analysisResult.cognitiveBlindSpots.map((blindSpot, index) => (
                <li key={index}>{blindSpot}</li>
              ))}
            </ul>
          </div>

          {/* 更好的问题表达卡片 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow duration-300 md:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">更好的问题表达</h3>
            <p className="text-gray-600">{analysisResult.betterQuestion}</p>
          </div>
        </div>

        {/* 底部操作区 */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            分析新问题
          </button>
        </div>
      </main>
    </div>
  );
}