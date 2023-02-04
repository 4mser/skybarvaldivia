import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

const ThreeModel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Inicializar Three.js
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Cargar el modelo
    const loader = new OBJLoader();
    loader.load("\src\assets\Models\dreams.obj", (object) => {
      scene.add(object);
    });

    // Configurar la cámara y renderizar la escena
    camera.position.z = 5;
    const animate = function () {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
  }, []);

  return <div ref={containerRef} className='Model3d' />;
};

export default ThreeModel;
