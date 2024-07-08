import "./index.css";
import {
  useGLTF,
  Environment,
  Float,
  PresentationControls,
  ContactShadows,
  Html,
  Text,
  OrbitControls,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function App() {
  const computer = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf"
  );

  return (
    <>
      <color args={["#241a1a"]} attach="background" />

      {/* <OrbitControls /> */}
      <Environment preset="city" />
      {/* <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}

      <PresentationControls
        global
        // rotation={[0.13, 0.1, 0]}
        // polar={[-0.4, 0.2]}
        // azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
        zoom={4}
      >
        <ContactShadows
          position-y={-1.4}
          opacity={0.4}
          scale={5}
          blur={(2, 4)}
        />
        <Float rotationIntensity={0.4}>
          {/* light */}
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={"#ff6900"}
            rotation={[0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <primitive object={computer.scene} position-y={-1.2}>
            <Html
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              position={[0.28, 1.45, -1.4]}
              rotation-x={-0.256}
            >
              <iframe src="https://sanjeev-midda-sanjeevmidda.vercel.app" />
            </Html>
          </primitive>
          {/* <Text
          fontSize={0.5}
          position={[2, 0.75, 0.75]}
          maxWidth={2}
          rotation-y={-1.25}
          textAlign="center"
        >
          SANJEEV MIDDA
        </Text> */}
        </Float>
      </PresentationControls>
    </>
  );
}

export default App;
