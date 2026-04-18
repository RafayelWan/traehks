# 问题认知拆解工具

一个帮助用户结构化分析问题的网页应用，通过AI分析将复杂问题拆解为多个维度。

## 功能特性

- **问题输入**：提供简洁的界面让用户输入需要分析的问题
- **结构化分析**：AI对问题进行五个维度的分析：
  1. 表层问题
  2. 隐含假设
  3. 信息缺失
  4. 认知盲点
  5. 更好的问题表达
- **美观展示**：分析结果以卡片形式展示，简洁直观
- **响应式设计**：支持桌面端和移动端

## 技术栈

- 前端框架：React 18
- 类型系统：TypeScript
- 样式：Tailwind CSS
- 路由：React Router DOM
- 构建工具：Vite

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

应用将在 `http://localhost:5173` 上运行。

### 构建生产版本

```bash
npm run build
```

构建输出将保存在 `dist` 目录中。

### 预览生产版本

```bash
npm run preview
```

## 项目结构

```
/workspace
├── src/
│   ├── pages/
│   │   ├── Home.tsx      # 输入页面
│   │   └── Result.tsx    # 结果页面
│   ├── App.tsx           # 主应用组件（路由配置）
│   ├── main.tsx          # 应用入口
│   └── index.css         # 全局样式
├── public/               # 静态资源
├── dist/                 # 构建输出（生成后）
├── package.json          # 项目依赖
├── tailwind.config.js    # Tailwind CSS配置
├── tsconfig.json         # TypeScript配置
└── vite.config.ts        # Vite配置
```

## 使用说明

1. 在输入页面的文本框中输入您需要分析的问题
2. 点击"提交分析"按钮
3. 等待AI分析完成
4. 在结果页面查看结构化分析结果
5. 如需分析新问题，点击"分析新问题"按钮返回输入页面

## 注意事项

当前版本使用模拟数据演示功能，实际使用时需要：
1. 替换 `Home.tsx` 中的模拟AI分析逻辑
2. 连接真实的AI服务API（如OpenAI、Claude等）
3. 根据需要调整分析维度和展示方式

## 许可证

MIT
