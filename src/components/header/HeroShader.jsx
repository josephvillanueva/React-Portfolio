import { lazy, Suspense, useSyncExternalStore } from "react";

const ShaderSurface = lazy(() => import("./ShaderSurface"));
const motionQuery = "(prefers-reduced-motion: reduce)";
const subscribe = (notify) => {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", notify);
  return () => query.removeEventListener("change", notify);
};
const canAnimate = () => !window.matchMedia(motionQuery).matches && Boolean(navigator.gpu);

export default function HeroShader() {
  const enabled = useSyncExternalStore(subscribe, canAnimate, () => false);
  return (
    <div className="hero_atmosphere" aria-hidden="true">
      {enabled && <Suspense fallback={null}><ShaderSurface /></Suspense>}
    </div>
  );
}
