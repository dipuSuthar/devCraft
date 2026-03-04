"use client";

import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.parentElement!.offsetWidth, canvas.parentElement!.offsetHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      canvas.offsetWidth / canvas.offsetHeight,
      0.1,
      1000
    );
    camera.position.z = 30;

    // ---------- Particles ----------
    const particleCount = 2500;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const palette = [
      new THREE.Color(0x00d4ff),
      new THREE.Color(0x7c3aed),
      new THREE.Color(0xff2d8b),
    ];
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 110;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 110;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 70;
      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.14,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
    });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    // ---------- Wireframe Icosahedron ----------
    const sphereGeo = new THREE.IcosahedronGeometry(13, 1);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      wireframe: true,
      transparent: true,
      opacity: 0.07,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    scene.add(sphere);

    // ---------- Second smaller sphere ----------
    const sphere2Geo = new THREE.IcosahedronGeometry(7, 2);
    const sphere2Mat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      wireframe: true,
      transparent: true,
      opacity: 0.05,
    });
    const sphere2 = new THREE.Mesh(sphere2Geo, sphere2Mat);
    sphere2.position.set(20, -5, -5);
    scene.add(sphere2);

    // ---------- Grid Plane ----------
    const gridGeo = new THREE.PlaneGeometry(90, 90, 22, 22);
    const gridMat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      wireframe: true,
      transparent: true,
      opacity: 0.04,
    });
    const grid = new THREE.Mesh(gridGeo, gridMat);
    grid.rotation.x = -Math.PI / 2.4;
    grid.position.y = -20;
    scene.add(grid);

    // ---------- Mouse ----------
    let mouseX = 0;
    let mouseY = 0;
    const onMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouseMove);

    // ---------- Animation ----------
    let t = 0;
    let rafId: number;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      t += 0.003;
      particles.rotation.y = t * 0.08 + mouseX * 0.05;
      particles.rotation.x = mouseY * 0.03;
      sphere.rotation.y = t * 0.15 + mouseX * 0.1;
      sphere.rotation.x = t * 0.08 + mouseY * 0.05;
      sphere2.rotation.y = -t * 0.2;
      sphere2.rotation.z = t * 0.1;
      camera.position.x += (mouseX * 3 - camera.position.x) * 0.025;
      camera.position.y += (-mouseY * 2 - camera.position.y) * 0.025;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };
    animate();

    // ---------- Resize ----------
    const onResize = () => {
      const w = canvas.parentElement!.offsetWidth;
      const h = canvas.parentElement!.offsetHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      pGeo.dispose();
      pMat.dispose();
      sphereGeo.dispose();
      sphereMat.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}
