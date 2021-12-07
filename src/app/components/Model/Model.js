import { useRef, useEffect} from "react"
import React from 'react'
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

const Model = ({rutaModelo}) => {
  const mountRef = useRef(null);
  useEffect(() => {
    //Data from the canvas
    const currentRef = mountRef.current;
    const { clientWidth: width, clientHeight: height } = currentRef;

    //Scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(25, width / height, 0.1, 100);
    var material;
    scene.add(camera);
    camera.position.set(5, 5, 5);
    camera.lookAt(new THREE.Vector3());

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(width, height);
    currentRef.appendChild(renderer.domElement);

    //OrbitControls
    const orbitControls = new OrbitControls(camera, renderer.domElement);
    orbitControls.enableDamping = true;

    //Resize canvas
    const resize = () => {
      renderer.setSize(currentRef.clientWidth, currentRef.clientHeight);
      camera.aspect = currentRef.clientWidth / currentRef.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", resize);

    const group = new THREE.Group();
    const fbx = new FBXLoader();
    fbx.loadAsync(rutaModelo).then((fbx) => {
      fbx.scale.set(0.005, 0.005, 0.005);
      material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      scene.add(group);

      fbx.traverse(function (child) {
        if (child.isMesh) {
          child.material = material;
          var geo = new THREE.WireframeGeometry(child.geometry); // or WireframeGeometry
          var mat = new THREE.LineBasicMaterial({ color: 0x000000});
          var wireframe = new THREE.LineSegments(geo, mat);
          child.add(wireframe);
        }
      });
      group.add(fbx);


    });

    //GUI
    // const gui = new GUI()
    // const cubeFolder = gui.addFolder('fbx')
    // cubeFolder.add(group.rotation, 'x', 0, Math.PI * 2)
    // cubeFolder.add(group.rotation, 'y', 0, Math.PI * 2)
    // cubeFolder.add(group.rotation, 'z', 0, Math.PI * 2)
    // cubeFolder.open()
    // const cameraFolder = gui.addFolder('Camera')
    // cameraFolder.add(camera.position, 'z', 0, 10)
    // cameraFolder.open()

    const ambientalLight = new THREE.AmbientLight(0xffffff, 1);
    scene.add(ambientalLight);

    const animate = () => {
      orbitControls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      currentRef.removeChild(renderer.domElement);
    };
  });

  return (
      <div ref={mountRef} style={{ width: "100%", height: '20rem' }}>
      </div>
  );
};

export default Model;