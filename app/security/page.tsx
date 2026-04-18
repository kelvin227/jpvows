"use client";

import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

type CameraDevice = {
  id: string;
  label: string;
};

export default function QrScanner() {
  const [devices, setDevices] = useState<CameraDevice[]>([]);
  const [selectedCamera, setSelectedCamera] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");
  const [isStarting, setIsStarting] = useState(false);

  const scannerRef = useRef<Html5Qrcode | null>(null);
  const regionId = "qr-reader";

  useEffect(() => {
    const loadCameras = async () => {
      try {
        const cameras = await Html5Qrcode.getCameras();

        const mapped = cameras.map((camera) => ({
          id: camera.id,
          label: camera.label || `Camera ${camera.id}`,
        }));

        setDevices(mapped);

        const backCamera =
          mapped.find((cam) =>
            /back|rear|environment/i.test(cam.label)
          ) || mapped[0];

        if (backCamera) {
          setSelectedCamera(backCamera.id);
        }
      } catch (err) {
        console.error(err);
        setError("Could not load cameras");
      }
    };

    loadCameras();

    return () => {
      if (scannerRef.current?.isScanning) {
        scannerRef.current.stop().catch(console.error);
      }
    };
  }, []);

  const startScanner = async () => {
    if (!selectedCamera) return;

    try {
      setError("");
      setIsStarting(true);

      if (!scannerRef.current) {
        scannerRef.current = new Html5Qrcode(regionId);
      }

      await scannerRef.current.start(
        selectedCamera,
        {
          fps: 10,
          qrbox: { width: 250, height: 250 },
        },
        (decodedText) => {
          setResult(decodedText);
          scannerRef.current?.stop().catch(console.error);
        },
        () => {}
      );
    } catch (err) {
      console.error(err);
      setError("Could not start selected camera");
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
      <select
        value={selectedCamera}
        onChange={(e) => setSelectedCamera(e.target.value)}
        className="rounded-xl border border-white/15 bg-black/40 p-3 text-white"
      >
        <option value="">Select camera</option>
        {devices.map((device) => (
          <option key={device.id} value={device.id}>
            {device.label}
          </option>
        ))}
      </select>

      <div className="flex gap-3">
        <button
          onClick={startScanner}
          disabled={!selectedCamera || isStarting}
          className="rounded-xl border border-white/15 px-4 py-2 text-white disabled:opacity-50"
        >
          Start Scanner
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