import Singleview from "../components/singleview/Singleview";
import Reviews from "../components/singleview/Reviews";

export default function Page() {
  return (
    <main className="bg-[#E8F0F2] min-h-screen">
      <Singleview />
      <Reviews />
    </main>
  );
}
