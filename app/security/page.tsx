"use client";

import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

export default function QrScanner() {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const scannerRef = useRef<Html5Qrcode | null>(null);

  useEffect(() => {
    const startScanner = async () => {
      try {
        const scanner = new Html5Qrcode("qr-reader");
        scannerRef.current = scanner;

        await scannerRef.current.start(
          { facingMode: "user" as any },
          {
            fps: 10,
            qrbox: 220,
          },
          (decodedText) => {
            setResult(decodedText);
            scannerRef.current
              ?.stop()
              .catch((err) => console.error("Failed to stop scanner", err));
          },
          () => {},
        );
      } catch (err) {
        console.error(err);
        setError(
          "Camera could not start. Open this in Safari and allow camera access.",
        );
      }
    };

    startScanner();

    return () => {
      if (scannerRef.current?.isScanning) {
        scannerRef.current.stop().catch(console.error);
      }
    };
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div
        id="qr-reader"
        className="w-full max-w-md overflow-hidden rounded-2xl"
      />

      {result && (
        <div className="rounded-2xl border border-white/15 p-4 text-white">
          {result}
        </div>
      )}

      {error && (
        <div className="rounded-2xl border border-red-500/30 p-4 text-red-300">
          {error}
        </div>
      )}
    </div>
  );
}
