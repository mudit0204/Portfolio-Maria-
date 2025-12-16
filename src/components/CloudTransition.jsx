import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function CloudTransition() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      1,
      2000
    );
    camera.position.z = 500;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Cloud texture
    const texture = new THREE.TextureLoader().load("/Clouds.png");

    const clouds = [];
    const geometry = new THREE.PlaneGeometry(600, 400);

    for (let i = 0; i < 12; i++) {
      const material = new THREE.MeshLambertMaterial({
        map: texture,
        transparent: true,
        opacity: 0.5,
        depthWrite: false,
      });

      const cloud = new THREE.Mesh(geometry, material);
      cloud.position.set(
        Math.random() * 800 - 400,
        Math.random() * 400 - 200,
        -i * 150
      );
      cloud.rotation.z = Math.random() * Math.PI;
      scene.add(cloud);
      clouds.push(cloud);
    }

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 0, 1);
    scene.add(light);

    const animate = () => {
      clouds.forEach((c) => {
        c.position.z += 0.5;
        if (c.position.z > 500) c.position.z = -1800;
      });
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      mountRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="cloud-canvas"
      aria-hidden="true"
    />
  );
}
