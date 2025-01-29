// 3D Animation
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

const container = document.getElementById("3d-animation-container");
const containerWidth = container.offsetWidth || 400; // Fallback to 400 if width is 0
renderer.setSize(containerWidth, containerWidth); // Keep it square
container.appendChild(renderer.domElement);

// Update on window resize
window.addEventListener("resize", () => {
  const newWidth = container.offsetWidth || 400; // Fallback to 400
  renderer.setSize(newWidth, newWidth);
  camera.aspect = 1; // Maintain square aspect ratio
  camera.updateProjectionMatrix();
});

const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshStandardMaterial({
  color: 0x1abc9c,
  metalness: 0.7,
  roughness: 0.2,
});
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

const light = new THREE.PointLight(0xffffff, 1.5);
light.position.set(20, 20, 20);
scene.add(light);

const ambientLight = new THREE.AmbientLight(0x404040, 0.8);
scene.add(ambientLight);

camera.position.z = 50;

function animate() {
  requestAnimationFrame(animate);
  torusKnot.rotation.x += 0.01;
  torusKnot.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

// Mobile Menu
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelector(".nav-links");
  const navbar = document.querySelector(".navbar");

  const hamburger = document.createElement("div");
  hamburger.className = "hamburger";
  hamburger.innerHTML = `
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    `;
  navbar.appendChild(hamburger);

  hamburger.addEventListener("click", function (e) {
    e.stopPropagation();
    navLinks.classList.toggle("active");
  });

  document.addEventListener("click", function () {
    navLinks.classList.remove("active");
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      navLinks.classList.remove("active");
    }
  });
});
