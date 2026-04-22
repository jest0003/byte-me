"use client";

import { useRouter, useSearchParams } from "next/navigation";

const SortDropdown = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleChange = (event) => {
    const value = event.target.value;

    const params = new URLSearchParams(searchParams);
    params.set("sort", value);

    router.push(`?${params.toString()}`);
  };

  return (
    <select
      onChange={handleChange}
      defaultValue={searchParams.get("sort") || ""}
      className="border p-2 pl-4 pr-2"
    >
      <option value="">Sort</option>
      <option value="asc">A-Z</option>
      <option value="desc">Z-A</option>

      <option value="price-asc">Low → High</option>
      <option value="price-desc">High → Low</option>
    </select>
  );
};

export default SortDropdown;