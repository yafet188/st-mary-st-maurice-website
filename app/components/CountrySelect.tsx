// CountrySelect.tsx
import { useState } from "react";
import Image from "next/image";

const CountrySelect = () => {
  const [selected, setSelected] = useState("+1");
  const [open, setOpen] = useState(false);

  const handleSelect = (code: string) => {
    setSelected(code);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center bg-[#151B2F] text-white p-3 rounded-l-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        <Image
          src="/Images/Countries/Canada.png"
          alt="Canada"
          width={26.67}
          height={20}
        />
        <span className="ml-2">{selected}</span>
      </button>
      {open && (
        <div className="absolute top-full left-0 bg-[#151B2F] border border-gray-600 rounded-md mt-1 z-10">
          <button
            className="flex items-center p-3 hover:bg-gray-700 w-full text-left"
            onClick={() => handleSelect("+1")}
          >
            <Image
              src="/Images/Flags/Canada.png"
              alt="Canada"
              width={24}
              height={16}
            />
            <span className="ml-2">+1</span>
          </button>
          {/* Add additional country options here if needed */}
        </div>
      )}
    </div>
  );
};

export default CountrySelect;
