"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Music2 } from "lucide-react";
import Image from "next/image";

const officaitingministries = [
  "Pastor Tunde Aroyehun",
  "Pastor Mrs. Adenike Aroyehun",
  "Pastor Fredick Vincent",
  "Pastor John Ayodele",
  "Minister Martha Abangma",
  "Minister Mrs. Bukky",
];
const programme = [
  "Arrival of guests",
  "Opening prayer",
  "Acknowledgement of guests on the high table",
  "Introduction of the Parent of the groom",
  "Introduction of the Parent of the bride",
  "Chairman opening speech",
  "Introduction of the couple",
  "Games with congregation",
  "Special Rendition from (Mr Bright)",
  "Couple's First Dance",
  "Special Rendition from.....",
  "Couple second outing",
  "Couple games",
  "First assignment ( Cutting of the cake and feeding each other)",
  "Couples dance with both Parents",
  "Parent's Blessings",
  "Couples dance with guests, family and friends",
  "Presentation of Gifts",
  "Vote of Thanks",
  "Closing Prayer",
];

const songs = [
  {
    id: 1,
    title: "To God Be the Glory",
    type: "Congregation Hymn",
    lyrics: `
    To God be the glory, great things He has done!
    So loved He the world that He gave us His Son,
    Who yielded His life an atonement for sin,
    And opened the life gate that all may go in.

    [Refrain]
    Praise the Lord, praise the Lord,
    Let the earth hear His voice!
    Praise the Lord, praise the Lord,
    Let the people rejoice!
    O come to the Father, through Jesus the Son,
    And give Him the glory, great things He has done!

    O perfect redemption, the purchase of blood,
    To every believer the promise of God;
    The vilest offender who truly believes,
    That moment from Jesus a pardon receives.
    [Refrain]

    Great Things He has taught us, great things He has done,
    And great our rejoicing through Jesus the Son;
    But purer and higher and greater will be
    Our wonder, our rapture, when Jesus we see.
    [Refrain]

    `,
  },
  {
    id: 2,
    title: "Great Is Thy Faithfulness",
    type: "Special Hymn",
    lyrics: `
    Great is Thy faithfulness, O God my Father;
    There is no shadow of turning with Thee;
    Thou changest not, Thy compassions, they fail not;
    As Thou hast been, Thou forever wilt be.
    
    [Refrain]
    
    Great is Thy faithfulness! Great is Thy faithfulness!
    Morning by morning new mercies I see;
    All I have needed Thy hand hath provided—
    Great is Thy faithfulness, Lord, unto me!

    Summer and winter, and springtime and harvest;
    sun, moon, and stars in their courses above
    join with all nature in manifold witness
    to Thy great faithfulness, mercy, and love.
   
    [Refrain]

    Pardon for sin and a peace that endureth,
    Thine own dear presence to cheer and to guide;
    strength for today and bright hope for tomorrow,
    blessings all mine, with ten thousand beside!

    `,
  },
];
export default function Program() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src="/Wedding Program - Emordi Nnadi.mp4" type="video/mp4" />
      </video>

      {/* Optional dark overlay (for readability) */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 -z-10" />

      <div className="mt-10 gap-3 flex flex-col w-full items-center justify-center p-6">
        <Image
          width={50}
          height={50}
          src={"/ring.png"}
          alt="ring"
          className="invert"
        />
        <div className="font-bold text-3xl">Reception Program</div>
        <p className="text-center">
          Join us as we celebrate our love and commitment in the presence of
          God, Family, and Friends.
        </p>
        <Separator className="bg-white" />

        {/* Dropdown separator here */}
      </div>

      {/* body */}
      <div className="p-3">
        <div className=" border border-white rounded-lg p-4 flex flex-col gap-4 mb-4">
          <div className="items-center justify-center w-full flex flex-col gap-3 text-xl font-semibold">
            Officiating Ministers
            <Separator className="max-w-[25dvw] bg-white" />
          </div>

          {/* dropdwon separator here */}
          {officaitingministries.map((minister, index) => (
            <div className="flex flex-col gap-2 " key={index}>
              <div className="flex gap-3">
                <div className="rounded-full w-7 h-7 text-center bg-yellow-500 border">
                  {index + 1}
                </div>
                <div className="">{minister}</div>
              </div>
              {/* Dropdown separator here */}
              <Separator className="bg-white " />
            </div>
          ))}
        </div>

        <div className="border border-white rounded-lg p-4 flex flex-col gap-4 mb-4">
          <div className="items-center justify-center w-full flex flex-col gap-3 text-xl font-semibold">
            Order of Events
            <Separator className="max-w-[25dvw] bg-white" />
          </div>

          {/* dropdwon separator here */}
          {programme.map((items, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <div className="flex gap-3">
                <div className="rounded-full w-7 h-7 text-center bg-yellow-500 border">
                  {index + 1}
                </div>
                <div className="">{items}</div>
              </div>
              {/* Dropdown separator here */}
              <Separator className="bg-white " />
            </div>
          ))}
        </div>

        <div>
          <div className="items-center justify-center w-full flex flex-col gap-3 text-xl font-semibold mb-3">
            Songs
            <Separator className="max-w-[25dvw] bg-white" />
          </div>
        </div>

        <div className="space-y-4">
          {songs.map((song, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <button className="w-full rounded-2xl border border-white/15 bg-white/25 hover:bg-black/35 transition p-4 text-left">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-white/15 p-3">
                      <Music2 className="h-5 w-5" />
                    </div>

                    <div className="flex-1">
                      <div className="text-sm text-white/60">
                        Hymn {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold">{song.title}</h3>
                      <p className="text-sm text-white/75 mt-1">{song.type}</p>
                    </div>

                    <div className="text-sm text-white/70 underline underline-offset-4">
                      View Lyrics
                    </div>
                  </div>
                </button>
              </DialogTrigger>

              <DialogContent className="max-w-2xl rounded-[2rem] border border-white/20 bg-neutral-950/95 text-white">
                <DialogHeader>
                  <DialogTitle className="text-2xl text-center">
                    {song.title}
                  </DialogTitle>
                </DialogHeader>

                <div
                  className="relative max-h-[65vh] overflow-y-auto rounded-2xl bg-white/5 border border-white/10 p-5 no-scrollbar"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
                    maskImage:
                      "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
                  }}
                >
                  <div className="whitespace-pre-wrap font-sans leading-8 text-base text-white/90">
                    {song.lyrics}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}
