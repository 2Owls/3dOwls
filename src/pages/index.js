import * as React from "react"
import * as THREE from 'three'
import Layout from "../components/layout"
import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Environment, Stage, OrbitControls, useAnimations, PerspectiveCamera  } from '@react-three/drei'

import Model from '../components/owl-lisa'

function Rig() {
  const { camera, mouse } = useThree()
  const vec = new THREE.Vector3()
  return useFrame(() => camera.position.lerp(vec.set(mouse.x * 2, mouse.y * 2, camera.position.z), 0.02))
}

const IndexPage = () => (
  
  <Layout>
    <div className="App" style={{height:'100vh'}}>
      
      <Canvas shadows dpr={[1, 2]}>
      <group name="Camera" position={[0, 28, 45]} rotation={[-0.5, 0, 0]}>
        <PerspectiveCamera makeDefault far={400} near={0.1} fov={28} rotation={[0, 0, 0]}>
          <spotLight
            castShadow
            position={[20, 20, 15]}
            shadow-camera-right={8}
            shadow-camera-top={8}
            shadow-camera-left={-8}
            shadow-camera-bottom={-8}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            intensity={1}
            shadow-bias={-0.0001}
          />
          <spotLight
            castShadow
            position={[-10, 20, 15]}
            shadow-camera-right={8}
            shadow-camera-top={8}
            shadow-camera-left={-8}
            shadow-camera-bottom={-8}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            intensity={0.5}
            shadow-bias={-0.0001}
          />          
        </PerspectiveCamera>
      </group>
        <Suspense fallback={null}>
          <Model scale={0.08} position={[0, 0, 0]}/>
          <mesh scale={1000} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
            <planeGeometry />
            <meshPhongMaterial color="#DBD3AD" />
          </mesh>
        </Suspense>
        <Rig />
      </Canvas>
    </div>  

    <section className="about">
    <div className="container grid grid-cols-1 text-center">
        <div class="p-4">
            <h1>About us</h1>
                  <hr  />
                  <h3 className="mt-3">2 Owls offers a full design and marketing service.</h3>
                  <p class="lead text-justify-center"> 
                    We believe collaboration is key and place emphasis on listening to our clients and understanding their needs before bringing in our creative designers, outside-the-box marketing ideas and analytical thinking to help capture their audience.
                  </p>
        </div>
      </div>  
    </section>     

    <section className="work">
      <div className="container">
        <h1 className="text-center">Work</h1>
        <div class="grid grid-cols-3 gap-4 p-4">
            <div className="bg-gray-100 w-100 h-24">Job</div>
            <div className="bg-gray-100 w-100 h-24">Job</div>
            <div className="bg-gray-100 w-100 h-24">Job</div>
            <div className="bg-gray-100 w-100 h-24">Job</div>
            <div className="bg-gray-100 w-100 h-24">Job</div>
            <div className="bg-gray-100 w-100 h-24">Job</div>            
        </div>
      </div>  
    </section>            



  </Layout>
)

export default IndexPage
