import { useState } from "react";
import viteLogo from "/vite.svg";
import reactLogo from "@/assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex space-x-4">
              <a href="https://vite.dev" target="_blank" rel="noreferrer">
                <img src={viteLogo} className="h-8 w-auto" alt="Vite logo" />
              </a>
              <a href="https://react.dev" target="_blank" rel="noreferrer">
                <img src={reactLogo} className="h-8 w-auto" alt="React logo" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Vite + React</span>
            <span className="block text-blue-600">モダンな開発環境</span>
          </h1>

          <div className="mt-10">
            <div className="bg-white rounded-lg shadow-md p-6">
              <button
                onClick={() => setCount((count) => count + 1)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                カウント: {count}
              </button>

              <p className="mt-4 text-gray-600">
                <code className="bg-gray-100 px-2 py-1 rounded">
                  src/App.tsx
                </code>{" "}
                を編集して保存すると、HMRをテストできます
              </p>
            </div>
          </div>

          <p className="mt-8 text-gray-500">
            ViteとReactのロゴをクリックして、詳細を確認してください
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
