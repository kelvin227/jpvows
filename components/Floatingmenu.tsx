"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  House,
  Heart,
  CalendarDays,
  Images,
  Mail,
  ChevronRight,
  Copy,
  Check,
  Camera,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { Button } from "./ui/button";

const navItems = [
  { href: "/", label: "Home", icon: House },
  { href: "/story", label: "Our Story", icon: Heart },
  { href: "/photograph", label: "Photography Schedule", icon: Camera },
  { href: "/program", label: "Wedding Program", icon: CalendarDays},
  { href: "/gallery", label: "Gallery", icon: Images },
  { href: "/rsvp", label: "RSVP", icon: Mail },
];
const accountDetails = [
  { label: "Bank Name", value: "GTBank", clip: false, icon: Copy, icon2: Check },
  { label: "Account Name", value: "joy & Paul", clip: false, icon: Copy, icon2: Check},
  { label: "Account Number", value: "1234567890", clip: true, icon: Copy, icon2: Check },
];

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed right-5 top-1 z-50 flex h-14 w-14 -translate-y-1 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition hover:scale-105 hover:bg-black/50 mt-2"
      >
        <Menu size={22} />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/30"
            />

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="fixed right-5 top-1 z-50 w-[280px] -translate-y-1 rounded-[2rem] border border-white/15 bg-black/45 p-4 text-white shadow-2xl backdrop-blur-xl"
            >
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <p className="font-serif text-lg tracking-wide">Joy & Paul</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                    Wedding Menu
                  </p>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 25 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 25 }}
                      transition={{ delay: index * 0.06 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="group flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3 transition hover:border-white/15 hover:bg-white/[0.08]"
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                            <Icon size={18} />
                          </div>

                          <div>
                            <p className="text-sm font-medium">{item.label}</p>
                          </div>
                        </div>

                        <ChevronRight
                          size={18}
                          className="text-white/50 transition group-hover:translate-x-1 group-hover:text-white"
                        />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export function FloatingBottomMenu() {
  const [giftOpen, setGiftOpen] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipbaord = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("failed to copy:", err);
    }
  };
  return (
    <>
      <Button
        onClick={() => setGiftOpen(true)}
        className={`fixed right-5 bottom-1 z-50 flex h-14 -translate-y-1 items-center justify-center rounded-full border border-white/20 bg-black/35 text-white backdrop-blur-md transition hover:scale-105 hover:bg-black/50 mt-2 transition-all duration-300 ease-in-out${reveal ? "w-40 px-4" : "w-14 px-4"}`}
        onMouseOver={() => setReveal(true)}
        onMouseLeave={() => setReveal(false)}
      >
        <HelpingHandIcon />
        <AnimatePresence>
          {reveal && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <span>Send a gift</span>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </Button>

      {giftOpen && (
        <>
          <div
            className="fixed top-1 z-50 w-full -translate-y-1 rounded-[2rem] border border-white/15 bg-black/45 p-4 text-white shadow-2xl backdrop-blur-xl"
          >
            <Dialog open={giftOpen} onOpenChange={setGiftOpen}>
              <DialogContent className="bg-black/20 text-white shadow-2xl pulse-border rounded-[2rem] p-6 justify-center items-center flex flex-col gap-4">
              <div></div>
                <DialogTitle className=" justify-center items-center flex flex-col gap-4 text-center">
                  <div className="border border-white/65 rounded-full p-3">
                    <HelpingHandIcon />
                  </div>
                  <div className="text-2xl">Send a Gift</div>
                </DialogTitle>
                <p className="text-base text-white/75 text-center">
                  Your presence at our wedding is the greatest gift of all.
                  However, if you wish to honor us with a gift, here are our
                  account details.
                </p>

                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                    {accountDetails.map((aza, index) => {
                      const Icon = copied ? aza.icon2 : aza.icon;
                      return (
                        <div
                          key={index}
                          className="text-base text-white/75 border border-white/120 rounded-lg p-2"
                        >
                          <div>{aza.label}</div>
                          <div className="font-bold flex gap-1">
                            {aza.value}{" "}
                            {aza.clip && (
                              <Icon
                                size={18}
                                onClick={() => copyToClipbaord(aza.value)}
                              />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  <Button className="w-full border border-white/55 mt-5" size={"icon-lg"}>
                    Close
                  </Button>
                </div>

              </DialogContent>
            </Dialog>
          </div>
        </>
      )}
    </>
  );
}

export const HelpingHandIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="cursor-pointer clamp-[size,5,6]"
    >
      <g
        className="hand"
        style={{
          transform: "none",
          transformOrigin: "50% 50%",
          transformBox: "fill-box",
        }}
      >
        <path d="M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
        <path d="m2 15 6 6" />
        <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91" />
      </g>

      <path
        className="heart"
        d="m14.45 13.39 5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95"
        style={{
          transformOrigin: "50% 50%",
          transform: "none",
          transformBox: "fill-box",
        }}
      />
    </svg>
  );
};
