/**  
 * @typedef {Function} Hero3D
 * @typedef {import("react").RefObject<HTMLDivElement>} MountRef
*/ 
import { useEffect, useRef } from "react";
import * as THREE from "three";
import HeroImage from "../../assets/images/Img-Hero-Section/Hero_Section.avif";


const Hero3D = () => { 
  const mountRef =  /** @type {MountRef} */ (useRef(null));

  useEffect(() => {
    // === 1. SETUP SCENE ===
    const scene = new THREE.Scene();

    // === 2. CAMERA ===
    const camera = new THREE.PerspectiveCamera(
      75, // FOV atau Field Of View
      mountRef.current.clientWidth / mountRef.current.clientHeight, // Aspect ratio
      0.2, // near
      1000 // far
    );
    camera.position.z = 3; // jarak kamera

    // === 3. RENDERER ===
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // === 4. LIGHTING ===
    const light = new THREE.DirectionalLight(0xffffff, 3);
    light.position.set(2, 2, 5);
    scene.add(light);

    // === 5. TEXTURE MATERIAL ===
    const texture = new THREE.TextureLoader().load(HeroImage);
    const geometry = new THREE.PlaneGeometry(4.5, 4.5); // ukuran bidang
    const material = new THREE.MeshStandardMaterial(
      {
        map: texture,
        transparent: true,
        side: THREE.DoubleSide,
          color: 0xffffff, // warna dasar permukaan
      }
    );
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    // === 6. ANIMATION LOOP ===
    const animate = () => {
      requestAnimationFrame(animate); // panggil lagi agar terus berjalan

      // rotasi lembut
      plane.rotation.y += 0.01; // update rotasi y dan
      plane.rotation.x = Math.sin(Date.now() * 0.001) * 0.2; // update rotasi x

      renderer.render(scene, camera); // gambar/render ulang
    };
    animate(); // mulai loop

    // === 7. RESPONSIVE ===
    const handleResize = () => {
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    // === 8. CLEANUP ===
    return () => {
      if(mountRef.current && renderer.domElement) {
      mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[400px] max-mobile:h-[250px]"
      style={{ position:"relative" }}
    />
  );
};

export default Hero3D;
