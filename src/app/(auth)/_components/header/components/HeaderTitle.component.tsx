/** 夢のタイトル　コンポーネント */
const HeaderTitle = () => {
  return <h1 className="text-2xl font-bold">アプリケーションを完成させる！</h1>;
};

export default HeaderTitle;

// "use client";

// import Link from "next/link";
// import { useEffect, useState } from "react";

// // 仮：夢データ取得
// const fetchDream = async () => {
//   // 通常は API や Context で管理
//   return null; // ← 夢が未設定の状態
// };

// const HeaderTitle = () => {
//   const [dream, setDream] = useState<any>(null);

//   useEffect(() => {
//     fetchDream().then(setDream);
//   }, []);

//   if (!dream) {
//     return (
//       <div className="text-sm text-gray-600">
//         まだ夢が設定されていません。
//         <Link
//           href="/dreams/new"
//           className="ml-2 text-blue-600 underline hover:text-blue-800"
//         >
//           夢を登録する
//         </Link>
//       </div>
//     );
//   }

//   return <h1 className="text-xl font-bold text-gray-800">{dream.title}</h1>;
// };

// export default HeaderTitle;
