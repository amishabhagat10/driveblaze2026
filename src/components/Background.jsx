// src/Background.jsx
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import CameraController from "./CameraController";

export default function Background() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
    >
      <CameraController />
      <Scene />
    </Canvas>
  );
}