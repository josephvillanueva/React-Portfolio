import { Shader, MeshGradient } from "shaders/react";

export default function ShaderSurface() {
  return (
    <Shader className="hero_shader" disableTelemetry>
      <MeshGradient
        stops={[
          { color: "#1f1f38", position: 0 },
          { color: "#2c2c6c", position: 0.55 },
          { color: "#4db5ff", position: 1 },
        ]}
        colorSpace="oklab"
        speed={0.15}
      />
    </Shader>
  );
}
