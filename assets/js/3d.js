import * as THREE from "./libs/three.min.js";
import { OrbitControls } from "./libs/OrbitControls.js";
import { GLTFLoader } from "./libs/GLTFLoader.js";
import Stats from "./libs/stats.module.js";
import { RenderPass } from "./libs/RenderPass.js";
import { UnrealBloomPass } from "./libs/UnrealBloomPass.js";
import { EffectComposer } from "./libs/EffectComposer.js";

// global variables
let scene;
let camera;
let renderer;
const canvas = document.querySelector(".universe");

// scene setup
scene = new THREE.Scene();

// camera setup
const fov = 60;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;

camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.x = -14;
camera.position.y = 12;
camera.position.z = 25;
scene.add(camera);

// renderer setup
renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);
renderer.autoClear = false;
renderer.setClearColor(0x000000, 0.0);

// orbit control setup
const controls = new OrbitControls(camera, renderer.domElement);

// --------------

// ============ sun ============

const sunGeometry = new THREE.SphereGeometry(3, 100, 100);

const sunMaterial = new THREE.MeshPhongMaterial({
  roughness: 1,
  metalness: 0,
  map: THREE.ImageUtils.loadTexture("assets/texture/sun/sunmap.jpeg"),
  bumpMap: THREE.ImageUtils.loadTexture("assets/texture/earth/earthbump.jpg"),
  bumpScale: 0.3,
});
sunMaterial.emissive = 0x000000;

const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sunMesh);

const cloudsunGeometry = new THREE.SphereGeometry(2.5, 100, 100);

const cloudsunMetarial = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture("assets/texture/earth/earthCloud.png"),
  transparent: true,
});

const cloudsunMesh = new THREE.Mesh(cloudsunGeometry, cloudsunMetarial);
scene.add(cloudsunMesh);

//bloom renderer
const renderScene = new RenderPass(scene, camera);
const bloomPass = new UnrealBloomPass(
  new THREE.Vector2(window.innerWidth, window.innerHeight),
  0,
  0,
  0
);
bloomPass.threshold = 0;
bloomPass.strength = 0; //intensity of glow
bloomPass.radius = 1;
const bloomComposer = new EffectComposer(renderer);
bloomComposer.setSize(window.innerWidth, window.innerHeight);
bloomComposer.renderToScreen = true;
bloomComposer.addPass(renderScene);
bloomComposer.addPass(bloomPass);

const color = new THREE.Color("#8D00FC");
const geometry = new THREE.IcosahedronGeometry(1, 15);
const material = new THREE.MeshBasicMaterial({ color: color });
const sphere = new THREE.Mesh(geometry, material);
sphere.position.set(0, 0, 0);
sphere.layers.set(1);
scene.add(sphere);

// ============ End sun ============

// --------------

// ============ mercury ============

const mercuryGeometry = new THREE.SphereGeometry(0.3, 100, 100);
const mercuryMaterial = new THREE.MeshPhongMaterial({
  roughness: 1,
  metalness: 0,
  map: THREE.ImageUtils.loadTexture("assets/texture/mercury/mercuryMap.jpeg"),
  bumpMap: THREE.ImageUtils.loadTexture(
    "assets/texture/mercury/mercurybump.jpeg"
  ),
  bumpScale: 0.3,
});
const mercuryMesh = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
mercuryMaterial.castShadow = true;
mercuryMaterial.receiveShadow = false;
scene.add(mercuryMesh);

// ============ End mercury ============

// --------------

// ============ Venus ============

const venusGeometry = new THREE.SphereGeometry(0.3, 100, 100);

const venusMaterial = new THREE.MeshPhongMaterial({
  roughness: 1,
  metalness: 0,
  map: THREE.ImageUtils.loadTexture("assets/texture/venus/venusmap.jpeg"),
  bumpMap: THREE.ImageUtils.loadTexture("assets/texture/earth/earthbump.jpg"),
  bumpScale: 0.3,
});

const VenusMesh = new THREE.Mesh(venusGeometry, venusMaterial);
scene.add(VenusMesh);

const cloudVenusGeometry = new THREE.SphereGeometry(0.305, 100, 100);

const cloudVenusMetarial = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture("assets/texture/earth/earthCloud.png"),
  transparent: true,
});

const cloudVenusMesh = new THREE.Mesh(cloudVenusGeometry, cloudVenusMetarial);
scene.add(cloudVenusMesh);

// ============ End Venus ============

// --------------

// ============ Earth ============

// earth geometry
const earthGeometry = new THREE.SphereGeometry(0.6, 32, 32);

// earth material
const earthMaterial = new THREE.MeshPhongMaterial({
  roughness: 1,
  metalness: 0,
  map: THREE.ImageUtils.loadTexture("assets/texture/earth/earthmap1k.jpg"),
  bumpMap: THREE.ImageUtils.loadTexture("assets/texture/earth/earthbump.jpg"),
  bumpScale: 0.3,
});

// earth mesh
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
earthMaterial.castShadow = true;
earthMaterial.receiveShadow = false;
scene.add(earthMesh);

// cloud Geometry
const cloudGeometry = new THREE.SphereGeometry(0.63, 32, 32);

// cloud metarial
const cloudMetarial = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture("assets/texture/earth/earthCloud.png"),
  transparent: true,
});

// cloud mesh
const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMetarial);
scene.add(cloudMesh);

// ============ End Earth ============

// --------------

// ============ Mars ============

const marsGeometry = new THREE.SphereGeometry(0.5, 100, 100);

const marsMaterial = new THREE.MeshPhongMaterial({
  roughness: 1,
  metalness: 0,
  map: THREE.ImageUtils.loadTexture("assets/texture/mars/marsmap1k.jpeg"),
  bumpMap: THREE.ImageUtils.loadTexture("assets/texture/earth/earthbump.jpg"),
  bumpScale: 0.3,
});

const marsMesh = new THREE.Mesh(marsGeometry, marsMaterial);
marsMaterial.castShadow = true;
marsMaterial.receiveShadow = false;
scene.add(marsMesh);

const cloudmarsGeometry = new THREE.SphereGeometry(0.505, 100, 100);

const cloudmarsMetarial = new THREE.MeshPhongMaterial({
  map: THREE.ImageUtils.loadTexture("assets/texture/earth/earthCloud.png"),
  transparent: true,
});

const cloudmarsMesh = new THREE.Mesh(cloudmarsGeometry, cloudmarsMetarial);
scene.add(cloudmarsMesh);

// ============ End Mars ============

// --------------

// ============ jupiter ============

const jupiterGeometry = new THREE.SphereGeometry(0.8, 100, 100);
const jupiterMaterial = new THREE.MeshPhongMaterial({
  roughness: 1,
  metalness: 0,
  map: THREE.ImageUtils.loadTexture("assets/texture/jupiter/jupiterMap.jpeg"),
  bumpMap: THREE.ImageUtils.loadTexture(
    "assets/texture/mercury/mercurybump.jpeg"
  ),
  bumpScale: 0.3,
});
const jupiterMesh = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
jupiterMaterial.castShadow = true;
jupiterMaterial.receiveShadow = false;
scene.add(jupiterMesh);

// ============ End jupiter ============

// --------------

// galaxy geometry
const starGeometry = new THREE.SphereGeometry(80, 64, 64);

// galaxy material
const starMaterial = new THREE.MeshBasicMaterial({
  map: THREE.ImageUtils.loadTexture("assets/texture/earth/galaxy.png"),
  side: THREE.BackSide,
});

// galaxy mesh
const starMesh = new THREE.Mesh(starGeometry, starMaterial);
scene.add(starMesh);

// ambient light
const ambientlight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientlight);

// point light
const pointLight = new THREE.PointLight(0xffffff, 1, 1000);
pointLight.position.set(0, 0, 0);
pointLight.castShadow = true;
scene.add(pointLight);

//Set up shadow properties for the light
pointLight.shadow.mapSize.width = 10000; // default
pointLight.shadow.mapSize.height = 10000; // default
pointLight.shadow.camera.near = 0.5; // default
pointLight.shadow.camera.far = 500;

// point light helper
const Helper = new THREE.PointLightHelper(pointLight);
scene.add(Helper);

// handling resizing
window.addEventListener(
  "resize",
  () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
  },
  false
);

var earthOrbitAngle = 0;
var earthTrajectoryOrbitAngle = 0;
const points = [];

var marsOrbitAngle = 0;
var marsTrajectoryOrbitAngle = 0;
const pointsmars = [];

var venusOrbitAngle = 0;
var venusTrajectoryOrbitAngle = 0;
const pointsVenus = [];

var mercuryOrbitAngle = 0;
var mercuryTrajectoryOrbitAngle = 0;
const pointsmercury = [];

var jupiterOrbitAngle = 0;
var jupiterTrajectoryOrbitAngle = 0;
const pointsjupiter = [];

var earthDefaultOrbitAngle = 0.2;
var earthDefaultMeshRotation = 0.005;

// current fps
// const stats = Stats();
// document.body.appendChild(stats.dom);

// spinning animation
const animate = () => {
  requestAnimationFrame(animate);
  // starMesh.rotation.y -= 0.002;

  sunMesh.position.x = 0;
  sunMesh.rotation.y -= 0.002;
  sunMesh.rotation.x -= 0.0002;
  cloudsunMesh.position.x = 0;
  cloudsunMesh.rotation.y -= 0.001;

  marsMesh.rotation.y -= 0.01;
  marsMesh.rotation.x -= 0.0007;
  cloudmarsMesh.rotation.y -= 0.008;
  marsOrbitAngle += earthDefaultOrbitAngle / 1.88219178082; //advance angle in degrees
  marsTrajectoryOrbitAngle += 2;
  var marsorbitAngleInRadians = (marsOrbitAngle * Math.PI) / 180; //convert to radians
  marsMesh.position.x = Math.cos(marsorbitAngleInRadians) * 13.4;
  marsMesh.position.z = Math.sin(marsorbitAngleInRadians) * 14;
  cloudmarsMesh.position.x = Math.cos(marsorbitAngleInRadians) * 13.4;
  cloudmarsMesh.position.z = Math.sin(marsorbitAngleInRadians) * 14;
  pointsmars.push(
    new THREE.Vector3(
      Math.cos((marsTrajectoryOrbitAngle * Math.PI) / 180) * 13.4,
      0,
      Math.sin((marsTrajectoryOrbitAngle * Math.PI) / 180) * 14
    )
  );
  const geometrymars = new THREE.BufferGeometry().setFromPoints(pointsmars);
  const linemars = new THREE.Line(geometrymars, material);
  scene.add(linemars);

  mercuryMesh.rotation.y -= 0.01;
  mercuryMesh.rotation.x -= 0.0007;
  mercuryOrbitAngle += earthDefaultOrbitAngle / 0.24109589041; //advance angle in degrees
  mercuryTrajectoryOrbitAngle += 2;
  var mercuryorbitAngleInRadians = (mercuryOrbitAngle * Math.PI) / 180; //convert to radians
  mercuryMesh.position.x = Math.cos(mercuryorbitAngleInRadians) * 6;
  mercuryMesh.position.z = Math.sin(mercuryorbitAngleInRadians) * 5;
  if (pointsmercury.length < 200) {
    pointsmercury.push(
      new THREE.Vector3(
        Math.cos((mercuryTrajectoryOrbitAngle * Math.PI) / 180) * 6,
        0,
        Math.sin((mercuryTrajectoryOrbitAngle * Math.PI) / 180) * 5
      )
    );
    const geometrymercury = new THREE.BufferGeometry().setFromPoints(
      pointsmercury
    );
    const linemercury = new THREE.Line(geometrymercury, material);
    scene.add(linemercury);
  }

  VenusMesh.rotation.y -= 0.002;
  VenusMesh.rotation.x -= 0.0002;
  cloudVenusMesh.rotation.y -= 0.0018;
  venusOrbitAngle += earthDefaultOrbitAngle / 0.61643835616; //advance angle in degrees
  venusTrajectoryOrbitAngle += 2;
  var venusOrbitAngleInRadians = (venusOrbitAngle * Math.PI) / 180; //convert to radians
  VenusMesh.position.x = Math.cos(venusOrbitAngleInRadians) * 8;
  VenusMesh.position.z = Math.sin(venusOrbitAngleInRadians) * 7;
  cloudVenusMesh.position.x = Math.cos(venusOrbitAngleInRadians) * 8;
  cloudVenusMesh.position.z = Math.sin(venusOrbitAngleInRadians) * 7;
  if (pointsVenus.length < 200) {
    pointsVenus.push(
      new THREE.Vector3(
        Math.cos((venusTrajectoryOrbitAngle * Math.PI) / 180) * 8,
        0,
        Math.sin((venusTrajectoryOrbitAngle * Math.PI) / 180) * 7
      )
    );
    const geometryVenus = new THREE.BufferGeometry().setFromPoints(pointsVenus);
    const lineVenus = new THREE.Line(geometryVenus, material);
    scene.add(lineVenus);
  }

  jupiterMesh.rotation.y -= 0.01;
  jupiterMesh.rotation.x -= 0.0007;
  jupiterOrbitAngle += earthDefaultOrbitAngle / 11.9; //advance angle in degrees
  jupiterTrajectoryOrbitAngle += 2;
  var jupiterorbitAngleInRadians = (jupiterOrbitAngle * Math.PI) / 180; //convert to radians
  jupiterMesh.position.x = Math.cos(jupiterorbitAngleInRadians) * 17;
  jupiterMesh.position.z = Math.sin(jupiterorbitAngleInRadians) * 16;
  if (pointsjupiter.length < 200) {
    pointsjupiter.push(
      new THREE.Vector3(
        Math.cos((jupiterTrajectoryOrbitAngle * Math.PI) / 180) * 17,
        0,
        Math.sin((jupiterTrajectoryOrbitAngle * Math.PI) / 180) * 16
      )
    );
    const geometryjupiter = new THREE.BufferGeometry().setFromPoints(
      pointsjupiter
    );
    const linejupiter = new THREE.Line(geometryjupiter, material);
    scene.add(linejupiter);
  }

  // earth default
  earthMesh.rotation.y -= earthDefaultMeshRotation;
  cloudMesh.rotation.y -= 0.007;
  earthOrbitAngle += earthDefaultOrbitAngle; //advance angle in degrees
  earthTrajectoryOrbitAngle += 2;
  var orbitAngleInRadians = (earthOrbitAngle * Math.PI) / 180; //convert to radians
  //update position of earth...
  earthMesh.position.x = Math.cos(orbitAngleInRadians) * 11;
  earthMesh.position.z = Math.sin(orbitAngleInRadians) * 9;
  cloudMesh.position.x = Math.cos(orbitAngleInRadians) * 11;
  cloudMesh.position.z = Math.sin(orbitAngleInRadians) * 9;
  // draw trajectory earth...
  if (points.length < 200) {
    points.push(
      new THREE.Vector3(
        Math.cos((earthTrajectoryOrbitAngle * Math.PI) / 180) * 11,
        0,
        Math.sin((earthTrajectoryOrbitAngle * Math.PI) / 180) * 9
      )
    );
    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const line = new THREE.Line(geometry, material);
    scene.add(line);
  }

  controls.update();
  bloomComposer.render();
  render();
  // stats.update();
};

// rendering
const render = () => {
  renderer.render(scene, camera);
};

animate();
