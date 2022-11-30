import React, { useRef, Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { BlendFunction, GlitchMode } from "postprocessing";
import {
  EffectComposer,
  Scanline,
  Vignette,
  Bloom,
  Glitch,
  Noise
} from "@react-three/postprocessing";

import { Image, Cone, Text } from "@react-three/drei";
import "./styles.css";

const characters = [
  {
    mugshot: "1.png",
    id: "efa9510c-fa4c-4e57-80e8-4ffa8fe32d55",
    name: "Grace Arbor",
    class: "Human",
    occupation: "Courier",
    employer: "North Pacific Parcel Corporation",
    bio: `Subject is being monitored for an unusual
pattern of deliveries detected and flagged by MCOM.
At this time no direct action is recommended.
Awaiting results of high temporal granularity analysis.`
  },
  {
    mugshot: "3.png",
    id: "d374b1e3-116b-46f7-b4c3-fdcf977085ca",
    name: "Sage Tauran",
    class: "Human",
    occupation: "Soldier",
    employer: "Sierra Security Consultants",
    bio: `Reported deceased. Contractual postmortem
record monitoring triggered by Sierra Security Consultants
account provision 39-S. Refer to client contract
files for compliance directives.`
  },
  {
    mugshot: "2.png",
    id: "b55e54fc-8507-42f1-b702-d492d6269dfc",
    name: "???",
    class: "???",
    occupation: "???",
    employer: "???",
    bio: `An unknown entity has been found testing
the boundary nodes of corporate compute space.
Simulations have been unable
to determine the threat level of the entity and
suspicians are that the entity has intentionally
concealed its capabilities during initial probes.
However, latent search parameters
exhibited by the target indicate a high probability
of non human origin.`
  },
  {
    mugshot: "4.png",
    id: "e8935e09-f772-4828-b45c-a8468a906a15",
    name: "Ramon Libby",
    class: "Augmented Human",
    occupation: "Security Researcher",
    employer: "EVA Pharmaceuticals",
    bio: `Travel Alert: An EVA Pharmaceuticals operative entered
South West Corporate regional territory at 2052-06-26 14:05:13.
Agents are advised to refer to Treaty #125-981
for standard operating procedures. The field manager on duty
for the duration of this incident is Sr. Director Thomas Wardley.
`
  },
  {
    mugshot: "5.png",
    id: "e8935e09-f772-4828-b45c-a8468a906a15",
    name: "Lydia Tarr",
    class: "Human",
    occupation: "VIP Dining and Entertainment Coordinator",
    employer: "Margin Call Recreations",
    bio: `It is believed that the target has knowledge of
President Langraffs final hours before his death and may
have even been present. The source of this information has
not been made available to the Inter Corporate knowledge
sharing service as expressly permitted by the Knowledge Sharing
Participation Contract of 2044. It is requested that
Lydia be immediately detained and sedated for transport
to facility {REDACTED}
`
  },
  {
    mugshot: "6.png",
    id: "1c5631ed-e7bd-405e-99dc-c9517a8df449",
    name: "Marcus Redentor",
    class: "Human",
    occupation: "Sr. Research Scientist",
    employer: "Straylight Orbital",
    bio: `Marcus Rendentor employee number 198AR2351274
has been greenlit for facilitated resignation and extraction
from employement at Straylight Orbital. Exit paperwork
is on file in the Employee Central Management Database.
Following extraction please contact Human Resources
to coordiante team assignment and onboarding.
`
  }
];

const Loader = () => {
  const scene = useRef();
  useFrame(() => {
    scene.current.rotation.y += 0.04;
    scene.current.rotation.x += 0.04;
    scene.current.rotation.z += 0.04;
  });
  return (
    <group ref={scene}>
      <Cone args={[3, 3, 3]}>
        <meshLambertMaterial attach="material" color="white" metallic={1} />
      </Cone>
    </group>
  );
};

export default function App() {
  const [charIndex, setCharIndex] = useState(0);
  return (
    <>
      <Canvas>
        <directionalLight intensity={0.5} />
        <Suspense fallback={<Loader />}>
          <Image
            url="ai.png"
            transparent
            opacity={0.01}
            scale={[8, 7]}
            position={[0, 0, 0]}
          />
          <Image
            url={characters[charIndex].mugshot}
            transparent
            opacity={0.8}
            scale={[2, 4]}
            position={[3, 0, 0]}
          />
          <Text
            color="white"
            font={"RobotoMono-Bold.ttf"}
            textAlign="center"
            fontSize={0.15}
            anchorX="center"
            anchorY="middle"
            position={[0, 3, 0]}
          >
            {`CEDRIC Compromised Entity Directory
for Regional Inter Corporate Network (SW Region)`}
          </Text>
          <Text
            font={"RobotoMono-Regular.ttf"}
            color="white"
            fontSize={0.14}
            anchorX="left"
            anchorY="middle"
            position={[-2, 2, 0]}
          >
            {characters[charIndex].name}
          </Text>
          <Text
            font={"RobotoMono-Regular.ttf"}
            color="white"
            fontSize={0.11}
            anchorX="left"
            anchorY="middle"
            position={[-2, 1.7, 0]}
          >
            Classification: {characters[charIndex].class}
          </Text>
          <Text
            font={"RobotoMono-Regular.ttf"}
            color="white"
            fontSize={0.11}
            anchorX="left"
            anchorY="middle"
            position={[-2, 1.5, 0]}
          >
            Employer: {characters[charIndex].employer}
          </Text>
          <Text
            font={"RobotoMono-Regular.ttf"}
            color="white"
            fontSize={0.11}
            anchorX="left"
            anchorY="middle"
            position={[-2, 1.3, 0]}
          >
            Occupation: {characters[charIndex].occupation}
          </Text>
          <Text
            font={"RobotoMono-Regular.ttf"}
            color="white"
            fontSize={0.15}
            anchorX="left"
            anchorY="middle"
            position={[-2, 0.8, 0]}
          >
            Central Index Key
          </Text>
          <Text
            font={"RobotoMono-Regular.ttf"}
            color="#a11818"
            fontSize={0.1}
            anchorX="left"
            anchorY="middle"
            position={[-2, 0.6, 0]}
          >
            {characters[charIndex].id}
          </Text>

          <Text
            font={"RobotoMono-Regular.ttf"}
            color="white"
            fontSize={0.1}
            anchorX="left"
            anchorY="top"
            position={[-2, 0, 0]}
          >
            {characters[charIndex].bio}
          </Text>
          <Text
            font={"RobotoMono-Regular.ttf"}
            color="#39ff14"
            fontSize={0.1}
            anchorX="left"
            anchorY="middle"
            position={[-2, -2.2, 0]}
          >
            MENU OPTIONS:
          </Text>
          <Text
            font={"RobotoMono-Regular.ttf"}
            color="#39ff14"
            fontSize={0.1}
            anchorX="left"
            anchorY="middle"
            position={[-1, -2.2, 0]}
            onClick={() =>
              setCharIndex((charIndex) => (charIndex <= 0 ? 0 : charIndex - 1))
            }
          >
            PREV
          </Text>
          <Text
            font={"RobotoMono-Regular.ttf"}
            color="#39ff14"
            fontSize={0.1}
            anchorX="left"
            anchorY="middle"
            position={[-0.5, -2.2, 0]}
            onClick={() =>
              setCharIndex((charIndex) =>
                charIndex >= characters.length - 1
                  ? characters.length - 1
                  : charIndex + 1
              )
            }
          >
            NEXT
          </Text>
        </Suspense>
        <EffectComposer>
          <Noise opacity={0.1} />
          <Scanline
            blendFunction={BlendFunction.DARKEN} // blend mode
            density={0.8} // scanline density
            opacity={0.1}
          />
          <Bloom
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
            height={400}
            intensity={2}
            radius={2}
          />
          <Vignette
            offset={0.2} // vignette offset
            darkness={0.9} // vignette darkness
            eskil={false} // Eskil's vignette technique
            blendFunction={BlendFunction.NORMAL} // blend mode
          />
          <Glitch
            strength={[0.01, 0.02]} // min and max glitch strength
            mode={GlitchMode.CONSTANT_MILD} // glitch mode
            active // turn on/off the effect (switches between "mode" prop and GlitchMode.DISABLED)
            ratio={0.85} // Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.
          />
        </EffectComposer>
      </Canvas>
      https://www.youtube.com/watch?v=zjINoWzmr_s
      <a
        href="https://www.youtube.com/watch?v=zjINoWzmr_s"
        className="blog-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Video Tutorial
      </a>
    </>
  );
}
