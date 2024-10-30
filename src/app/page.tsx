import Map from "./_components/Map";
// import Header from "@/app/_components/Header";

// export default function Home() {
//   return (
//     <>
//     <main className="">
//       <Header/>

//       <Map />
//     </main>
//     </>
//   );
// }

import Header from "./_components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="fixed top-0  right-0 bg-gray-50 p-4 text-gray-800 z-10">
        Welcome to Dashboard</h1>
      <main className="pt-20 px-6">
        <Map />
      <h2>aaaaaaaaaaa</h2>
      <h2>aaaaaaaaaaa</h2>
      <h2>aaaaaaaaaaa</h2>
      <h2>aaaaaaaaaaa</h2>
      <h2>aaaaaaaaaaa</h2>
      <h2>aaaaaaaaaaa</h2>
        {/* ここにメインコンテンツを配置 */}
        {/* その他のコンテンツ */}
      </main>
    </div>
  );
}
