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


export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      <main className="">
        <Map />

        {/* ここにメインコンテンツを配置 */}
        {/* その他のコンテンツ */}
      </main>
    </div>
  );
}
