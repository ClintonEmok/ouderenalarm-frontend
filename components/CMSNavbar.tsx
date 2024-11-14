import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const CMSNavbar = () => {
  return (
    <div className="flex justify-between items-center py-1 px-6 ">
      <Link href="/admin" className="text-white text-xl">
        <ChevronLeft />
      </Link>
      <span className="text-white text-xl">OUDERENALARM</span>
    </div>
  );
};

export default CMSNavbar;
