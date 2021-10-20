import * as React from "react"
import * as THREE from 'three'
import Layout from "../components/layout"
import { Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Environment, Stage, OrbitControls, PerspectiveCamera  } from '@react-three/drei'

import Model from '../components/owl-lisa'

function Rig() {
  const { camera, mouse } = useThree()
  const vec = new THREE.Vector3()
  return useFrame(() => camera.position.lerp(vec.set(mouse.x * 4, mouse.y * 4, camera.position.z), 0.04))
}

const IndexPage = () => (
  
  <Layout>
    <div className="App" style={{height:'100vh'}}>
      
      <Canvas shadows dpr={[1, 2]}>
      <group name="Camera" position={[-1.78, 1, 23.58]} rotation={[-0.8, 0, 0]}>
        <PerspectiveCamera makeDefault far={100} near={0.1} fov={28} rotation={[0, 0, 0]}>
          <spotLight
            castShadow
            position={[10, 20, 15]}
            shadow-camera-right={8}
            shadow-camera-top={8}
            shadow-camera-left={-8}
            shadow-camera-bottom={-8}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            intensity={1}
            shadow-bias={-0.0001}
          />
        </PerspectiveCamera>
      </group>
        <Suspense fallback={null}>
        <Stage environment={null} intensity={0.5} contactShadowOpacity={1} shadowBias={-0.0015}>
          <Model scale={0.2} position={[0, -50, 0]} castShadow receiveShadow/>
          <mesh rotation-x={-Math.PI / 2} scale={50}>
            <planeGeometry />
            <meshStandardMaterial color="#101010" />
          </mesh>
        </Stage>  
        </Suspense>
        <Rig />
      </Canvas>
    </div>    

  </Layout>
)

export default IndexPage
