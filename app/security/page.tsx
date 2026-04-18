"use client";

import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

export default function QrScanner() {
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [isStarting, setIsStarting] = useState(false);

  const scannerRef = useRef<Html5Qrcode | null>(null);
  const regionId = "qr-reader";

  const handleSuccess = async (decodedText: string) => {
    setResult(decodedText);

    try {
      if (scannerRef.current?.isScanning) {
        await scannerRef.current.stop();
      }
    } catch (err) {
      console.error("Failed to stop scanner", err);
    }
  };

  useEffect(() => {
    return () => {
      if (scannerRef.current?.isScanning) {
        scannerRef.current.stop().catch(console.error);
      }
    };
  }, []);

  const startScanner = async () => {
    try {
      setError("");
      setResult("");
      setIsStarting(true);

      if (!scannerRef.current) {
        scannerRef.current = new Html5Qrcode(regionId);
      }

      if (scannerRef.current.isScanning) {
        await scannerRef.current.stop();
      }

      try {
        await scannerRef.current.start(
          { facingMode: { exact: "environment" } },
          {
            fps: 10,
            qrbox: { width: 250, height: 250 },
          },
          handleSuccess,
          () => {}
        );
      } catch (backCameraError) {
        console.log("Back camera failed, trying fallback...", backCameraError);

        await scannerRef.current.start(
          { facingMode: "environment" as any },
          {
            fps: 10,
            qrbox: { width: 250, height: 250 },
          },
          handleSuccess,
          () => {}
        );
      }
    } catch (err) {
      console.error(err);
      setError("Could not start back camera");
    } finally {
      setIsStarting(false);
    }
  };

  const stopScanner = async () => {
    try {
      if (scannerRef.current?.isScanning) {
        await scannerRef.current.stop();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3">
        <button
          onClick={startScanner}
          disabled={isStarting}
          className="rounded-xl border border-white/15 px-4 py-2 text-white disabled:opacity-50"
        >
          {isStarting ? "Starting..." : "Start Scanner"}
        </button>

        <button
          onClick={stopScanner}
          className="rounded-xl border border-white/15 px-4 py-2 text-white"
        >
          Stop Scanner
        </button>
      </div>

      <div
        id={regionId}
        className="w-full max-w-md overflow-hidden rounded-2xl"
      />

      {result && (
        <div className="rounded-2xl border border-white/15 bg-black/40 p-4 text-white">
          <p className="mb-1 text-sm text-gray-300">Scanned result</p>
          <p className="break-all font-mono">{result}</p>
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