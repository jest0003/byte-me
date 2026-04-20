import Singleview from "../components/singleview/Singleview";
import Reviews from "../components/singleview/Reviews";

export default function Page() {
  return (
    <div className="bg-[#E8F0F2]">
      <Singleview />
      <Reviews />
    </div>

    // <div style={{ background: "var(--background)" }}>
    //   <Singleview />
    // </div>
  );
}
