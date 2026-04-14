"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Camera } from "lucide-react";
import Image from "next/image";

const essentialCouplePhotos = [
  "Couple with Officiating Ministers",
  "Bride Alone",
  "Groom Alone",
  "Couple Alone"

];

const weddingPartyPhotos = [
  "Couple with Best Man & Chief Bridesmaid",
  "Bride with chief bridesmaid",
  "Groom with best man",
  "Couple with best man & chief bridesmaid"
];

const familyPhotos = [
  "Couple with Bride's Parents",
  "Couple with Groom's Parents",
  "Couple with Both Sets of Parents",
  "Group picture with bride's siblings",
  "Group picture with groom's siblings",
  "Group picture with bride's extended family",
  "Group picture with groom's extended family"
];

const friendsandOtherPhotos = [
  "Group picture with friends",
  "Couple with chairman",
  "Group picture with LEFC members",
  "Group picture with special guests",
  "Group pictue with DNL members",
  "Group picture with He Lives Academy members",
  "Couple with neighbors",
  "Couple with Well wishers",
];



export default function Details() {
  const total = essentialCouplePhotos.length + weddingPartyPhotos.length + familyPhotos.length + friendsandOtherPhotos.length;
  return (
<div className="relative min-h-screen text-white">

  {/* FIXED BACKGROUND */}
  <div className="fixed inset-0 -z-10">
    <Image
      width={250}
      height={250}
      src="/image7.jpeg"
      className="w-full h-full object-cover"
      alt=""
    />
    
    {/* optional dark overlay */}
    <div className="absolute inset-0 bg-black/60" />
  </div>

  {/* CONTENT */}
  <div className="">
    
    {/* HEADER */}
    <div className="text-center mb-10 pt-6 pb-6 h-55 backdrop-blur-sm items-center justify-center gap-2 flex flex-col">
      <Camera size={48} />
      <div className="text-3xl font-semibold">Photography Schedule</div>
      <p className="text-gray-400 text-sm">
        Capture every beautiful moment
      </p>

      <div className="flex gap-2 border border-white/60 rounded-full p-2">
           <Camera /> {total} Total Photos
      </div>
    </div>

    {/* CARDS */}
    <div className="space-y-6 max-w-xl mx-auto px-4 py-16">
      {/* your cards here */}
          {/* Card */}
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/10 backdrop-blur-sm">
      
      {/* Label */}
      <div className="bg-[#D4AF37]/20 text-[#D4AF37] px-4 py-2 text-sm">
        Essential Couple Photos
      </div>

      {/* Preview Area */}
      <div className="h-64 p-10 ">
        {essentialCouplePhotos.map((photo) => (
          <div key={photo} className="flex items-center mb-4">
            <Checkbox className="rounded-full" />
            <span className="ml-2">{photo}</span>
          </div>
        ))

        }
      </div>
      
    </div>

        {/* Card */}
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/10 backdrop-blur-sm">
      
      {/* Label */}
      <div className="bg-[#D4AF37]/20 text-[#D4AF37] px-4 py-2 text-sm">
        Family Photos
      </div>

      {/* Preview Area */}
      <div className="p-10 ">
        {familyPhotos.map((photo) => (
          <div key={photo} className="flex items-center mb-4">
            <Checkbox className="rounded-full" />
            <span className="ml-2">{photo}</span>
          </div>
        ))

        }
      </div>
      
    </div>

        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/10 backdrop-blur-sm">
      
      {/* Label */}
      <div className="bg-[#D4AF37]/20 text-[#D4AF37] px-4 py-2 text-sm">
        Wedding Party Photos
      </div>

      {/* Preview Area */}
      <div className="h-64 p-10 ">
        {weddingPartyPhotos.map((photo) => (
          <div key={photo} className="flex items-center mb-4">
            <Checkbox className="rounded-full" />
            <span className="ml-2">{photo}</span>
          </div>
        ))

        }
      </div>
      
    </div>

        <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/10 backdrop-blur-sm">
      
      {/* Label */}
      <div className="bg-[#D4AF37]/20 text-[#D4AF37] px-4 py-2 text-sm">
        Friends and Other Photos
      </div>

      {/* Preview Area */}
      <div className="p-10 ">
        {friendsandOtherPhotos.map((photo) => (
          <div key={photo} className="flex items-center mb-4">
            <Checkbox className="rounded-full" />
            <span className="ml-2">{photo}</span>
          </div>
        ))

        }
      </div>
      
    </div>
    </div>

  </div>

</div>
  );
}