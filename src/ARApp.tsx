import { Canvas, useLoader } from "@react-three/fiber";
import { XR, createXRStore } from "@react-three/xr";
import { TextureLoader } from "three";

const store = createXRStore({
  //controller: false,
  hitTest: true,
  depthSensing: true,
});

// function BoxWithTextOnOneFace() {
//   return (
//     <mesh>
//       {/* Box geometry */}
//       <boxGeometry args={[2, 2, 2]} />
//       {/* Array of materials, one for each face */}
//       <meshBasicMaterial attach="material-0" color="blue" /> {/* Front */}
//       <meshBasicMaterial attach="material-1" color="red" /> {/* Back */}
//       <meshBasicMaterial attach="material-2" color="green" /> {/* Top */}
//       <meshBasicMaterial attach="material-3" color="yellow" /> {/* Bottom */}
//       <meshBasicMaterial attach="material-4" color="white">
//         {" "}
//         {/* Right */}
//         <RenderTexture attach="map">
//           <Text
//             fontSize={1} // Size of the text
//             color="white" // Text color
//             anchorX="center" // Center horizontally
//             anchorY="middle" // Center vertically
//           >
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
//             ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//             aliquip ex ea commodo consequat. Duis aute irure dolor in
//             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
//             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
//             culpa qui officia deserunt mollit anim id est laborum.
//           </Text>
//         </RenderTexture>
//       </meshBasicMaterial>
//       <meshBasicMaterial attach="material-5" color="purple" /> {/* Left */}
//     </mesh>
//   );
// }

// const CubeWithText = () => {
//   return (
//     <mesh>
//       {/* <boxGeometry args={[1, 2, 0.2]} /> */}
//       <boxGeometry args={[1, 2, 0.2]} />

//       <meshBasicMaterial>
//         <RenderTexture attach="map" frames={1}>
//           <Text
//             fontSize={1} // Size of the text
//             color="white" // Text color
//             anchorX="center" // Align text horizontally
//             anchorY="middle" // Align text vertically
//           >
//             hello
//           </Text>
//         </RenderTexture>
//       </meshBasicMaterial>
//       {/* <Text
//         position={[0, 0, 1.1]} // Positioning the text on the front face
//         fontSize={0.5}
//         color="black"
//         anchorX="center"
//         anchorY="middle"
//       >
//         Hello!
//       </Text> */}
//     </mesh>
//   );
// };

// const AnchoredCube = () => {
//   const [anchor, setAnchor] = useState(null);
//   const requestAnchor = useRequestXRAnchor();

//   useEffect(() => {
//     requestAnchor({}).then((newAnchor) => {
//       setAnchor(newAnchor);
//     });
//   }, [requestAnchor]);

//   return anchor ? (
//     <Box position={[0, 1, -3]} args={[1, 1, 1]}>
//       <meshStandardMaterial color="blue" />
//     </Box>
//   ) : null;
// };

// const FixedCube = () => {
//   return (
//     <Box position={[0, 1, -3]} args={[1, 1, 1]}>
//       <meshStandardMaterial color="blue" />
//     </Box>
//   );
// };

function ImagePlane({ url }: { url: string }) {
  // Load the PNG texture
  const texture = useLoader(TextureLoader, url);

  const aspect = texture.image.width / texture.image.height;

  return (
    <mesh position={[0, 1, -3]}>
      {/* Plane geometry to display the texture */}
      <planeGeometry args={[aspect * 2, 2]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export function ARApp() {
  return (
    <>
      <button onClick={() => store.enterAR()}>Enter AR</button>

      <div
        style={{
          width: "100vw",
          height: "100vh",
        }}
      >
        <Canvas>
          <XR store={store}>
            <ImagePlane url="/cuelgamuros.png" />
          </XR>
        </Canvas>
      </div>
    </>
  );
}
