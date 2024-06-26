import "./style.scss"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import * as THREE from "three";
      // ページの読み込みを待つ
window.addEventListener("DOMContentLoaded", init);

function init() {
    // サイズを指定
    const width = 1800;
    const height = 1040;

    // レンダラーを作成
    const canvas = document.querySelector("#myCanvas");
    if (!canvas) {
        throw new Error("Canvas element with ID 'myCanvas' not found.");
    }

    const renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        antialias: true,
    });
    
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // フォグを設定
    scene.fog = new THREE.Fog(0x000000, 50, 2000);

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(45, width / height);
    camera.position.set(0, 0, +1000);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.autoRotate = false;
    controls.minDistance = 0.1;
    controls.maxDistance = 1800;
    controls.enablePan = true;
    controls.rotateSpeed = 0.1;

    // グループを作成
    const group = new THREE.Group();
    scene.add(group);
    const geometry = new THREE.SphereGeometry(25, 32, 32);
    const material = new THREE.MeshStandardMaterial();

    for (let i = 0; i < 2000; i++) {
        const mesh = new THREE.Mesh(geometry, material);
        mesh.position.x = (Math.random() - 0.5) * 2000;
        mesh.position.y = (Math.random() - 0.5) * 2000;
        mesh.position.z = (Math.random() - 0.5) * 2000;
        mesh.rotation.x = Math.random() * 2 * Math.PI;
        mesh.rotation.y = Math.random() * 2 * Math.PI;
        mesh.rotation.z = Math.random() * 2 * Math.PI;
        // グループに格納する
        group.add(mesh);
    }

        // 光源
    scene.add(new THREE.DirectionalLight(0x3377ff, 2)); // 平行光源
    scene.add(new THREE.AmbientLight(0x0055ff)); // 環境光源

        // 毎フレーム時に実行されるループイベントです
    tick();

    function tick() {
        // グループを回す
        group.rotateY(0.01);
        renderer.render(scene, camera); // レンダリング
        requestAnimationFrame(tick);
    }
}


