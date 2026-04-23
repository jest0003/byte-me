import Image from "next/image";
import Pay from "../components/buy/payment";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Pay />
      </Suspense>
    </main>
  );
}
