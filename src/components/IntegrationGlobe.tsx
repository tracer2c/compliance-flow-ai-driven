import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, Text, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { Badge } from './ui/badge';

// Import logo images
import googleLogo from '../assets/logos/google.png';
import microsoftLogo from '../assets/logos/microsoft.png';
import dropboxLogo from '../assets/logos/dropbox.png';
import zohoLogo from '../assets/logos/zoho.png';
import azureLogo from '../assets/logos/azure.png';
import squareLogo from '../assets/logos/square.png';
import toastLogo from '../assets/logos/toast.png';
import awsLogo from '../assets/logos/aws.png';
import sapLogo from '../assets/logos/sap.png';
import tracer2cLogo from '../assets/logos/tracer2c.png';

// Integration data with 3D positions and logo images
const integrationData = [
  // Featured integrations with logos
  { name: "Google Cloud", category: "Storage", status: "Available", color: "#4285F4", position: [2, 3, -1], logo: googleLogo },
  { name: "Microsoft Azure", category: "Storage", status: "Available", color: "#0078D4", position: [-2, -1, 3], logo: microsoftLogo },
  { name: "Dropbox", category: "Storage", status: "Available", color: "#0061FF", position: [3, 1, 2], logo: dropboxLogo },
  { name: "Zoho", category: "CRM", status: "Available", color: "#C64323", position: [-1, 3, 1], logo: zohoLogo },
  { name: "Azure", category: "Cloud", status: "Available", color: "#0078D4", position: [-1, -3, -1], logo: azureLogo },
  { name: "Square", category: "POS", status: "Available", color: "#000000", position: [3, 2, 1], logo: squareLogo },
  { name: "Toast", category: "POS", status: "Available", color: "#FB6107", position: [2, -2, 3], logo: toastLogo },
  { name: "AWS", category: "Cloud", status: "Available", color: "#FF9900", position: [-3, 1, -2], logo: awsLogo },
  { name: "SAP", category: "ERP", status: "Available", color: "#0FAAFF", position: [1, 3, -2], logo: sapLogo },
  
  // Additional integrations without custom logos (using colored cubes)
  { name: "Salesforce", category: "CRM", status: "Available", color: "#1798C1", position: [-1, -3, 2] },
  { name: "HubSpot", category: "CRM", status: "Available", color: "#FF7A59", position: [3, -1, -1] },
  { name: "Oracle", category: "ERP", status: "Available", color: "#F80000", position: [-2, 2, -3] },
  { name: "DocuSign", category: "E-Sign", status: "Available", color: "#FFB946", position: [2, 1, 3] },
  { name: "Okta", category: "Identity", status: "Available", color: "#007DC1", position: [-3, -1, 1] },
  { name: "NetSuite", category: "ERP", status: "Available", color: "#F0AB00", position: [1, -2, -3] }
];

// Floating Integration Logo Component
function FloatingLogo({ integration, index, onHover, hoveredItem }: {
  integration: any;
  index: number;
  onHover: (item: any) => void;
  hoveredItem: any;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const loadedTexture = integration.logo ? useLoader(THREE.TextureLoader, integration.logo) : null;
  const texture = Array.isArray(loadedTexture) ? loadedTexture[0] : loadedTexture;
  
  const isHovered = hoveredItem?.name === integration.name;
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Much slower orbital animation with slight variations per integration
    const speed = 0.05 + (index * 0.02);
    const offsetY = Math.sin(time * speed + index) * 0.3;
    const offsetX = Math.cos(time * speed + index * 2) * 0.5;
    const offsetZ = Math.sin(time * speed + index * 2) * 0.5;
    
    meshRef.current.position.set(
      integration.position[0] + offsetX,
      integration.position[1] + offsetY,
      integration.position[2] + offsetZ
    );
    
    // Very gentle rotation for cubes, keep logos facing camera
    if (!integration.logo) {
      meshRef.current.rotation.x = time * 0.1;
      meshRef.current.rotation.y = time * 0.05;
    } else {
      // Make logo planes always face the camera
      meshRef.current.lookAt(0, 0, 12);
    }
    
    // Scale effect on hover
    const targetScale = isHovered ? 1.4 : 1;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
  });

  return (
    <group>
      {integration.logo ? (
        // Render logo as textured plane
        <mesh
          ref={meshRef}
          position={integration.position}
          onPointerOver={() => onHover(integration)}
          onPointerOut={() => onHover(null)}
        >
          <planeGeometry args={[0.8, 0.8]} />
          <meshStandardMaterial
            map={texture}
            transparent={true}
            alphaTest={0.1}
            emissive={isHovered ? "#ffffff" : "#000000"}
            emissiveIntensity={isHovered ? 0.1 : 0}
          />
        </mesh>
      ) : (
        // Fallback to colored cube for integrations without logos
        <mesh
          ref={meshRef}
          position={integration.position}
          onPointerOver={() => onHover(integration)}
          onPointerOut={() => onHover(null)}
        >
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial 
            color={integration.color}
            metalness={0.3}
            roughness={0.4}
            emissive={isHovered ? integration.color : '#000000'}
            emissiveIntensity={isHovered ? 0.2 : 0}
          />
        </mesh>
      )}
      
      {isHovered && (
        <Text
          position={[integration.position[0], integration.position[1] + 1, integration.position[2]]}
          fontSize={0.3}
          color="white"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#000000"
        >
          {integration.name}
        </Text>
      )}
    </group>
  );
}

// Enhanced Globe Component with better visibility
function Globe() {
  const globeRef = useRef<THREE.Mesh>(null);
  const innerGlobeRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.001;
    }
    if (innerGlobeRef.current) {
      innerGlobeRef.current.rotation.y -= 0.0005;
    }
  });

  return (
    <group>
      {/* Outer wireframe globe */}
      <Sphere ref={globeRef} args={[2.2, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#60a5fa"
          metalness={0.8}
          roughness={0.2}
          transparent={true}
          opacity={0.4}
          wireframe={true}
        />
      </Sphere>
      
      {/* Inner glowing core */}
      <Sphere ref={innerGlobeRef} args={[1.8, 32, 32]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#3b82f6"
          metalness={0.5}
          roughness={0.3}
          transparent={true}
          opacity={0.15}
          emissive="#1e40af"
          emissiveIntensity={0.1}
        />
      </Sphere>
    </group>
  );
}

// Background Stars
function Stars() {
  const starsRef = useRef<THREE.Points>(null);
  
  const stars = useMemo(() => {
    const positions = new Float32Array(1000 * 3);
    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, []);

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0003;
    }
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={stars}
          count={stars.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.05} color="white" />
    </points>
  );
}

// Central TraceR2C Logo/Node
function CentralLogo() {
  const logoRef = useRef<THREE.Group>(null);
  const glowRef = useRef<THREE.Mesh>(null);
  const logoPlaneRef = useRef<THREE.Mesh>(null);
  const loadedTexture = useLoader(THREE.TextureLoader, tracer2cLogo);
  const texture = Array.isArray(loadedTexture) ? loadedTexture[0] : loadedTexture;
  
  useFrame((state) => {
    if (logoRef.current) {
      logoRef.current.rotation.y += 0.01;
    }
    if (glowRef.current) {
      const pulse = Math.sin(state.clock.getElapsedTime() * 2) * 0.1 + 1;
      glowRef.current.scale.setScalar(pulse);
    }
    if (logoPlaneRef.current) {
      // Make central logo always face the camera
      logoPlaneRef.current.lookAt(0, 0, 12);
    }
  });

  return (
    <group ref={logoRef} position={[0, 0, 0]}>
      {/* Glowing outer ring */}
      <mesh ref={glowRef}>
        <ringGeometry args={[0.8, 1.0, 32]} />
        <meshBasicMaterial 
          color="#00ff88" 
          transparent={true} 
          opacity={0.3}
        />
      </mesh>
      
      {/* Central TraceR2C logo */}
      <mesh ref={logoPlaneRef}>
        <planeGeometry args={[1.0, 1.0]} />
        <meshStandardMaterial
          map={texture}
          transparent={true}
          alphaTest={0.1}
          emissive="#00ff88"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* TraceR2C Text */}
      <Text
        position={[0, -1.2, 0]}
        fontSize={0.25}
        color="#00ff88"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#000000"
      >
        TraceR2C
      </Text>
    </group>
  );
}

// Connection Lines from integrations to central logo
function ConnectionLines({ integrations, hoveredItem }: { integrations: any[], hoveredItem: any }) {
  const linesRef = useRef<THREE.Group>(null);
  const lineMatrefs = useRef<THREE.LineBasicMaterial[]>([]);
  
  // Create line materials
  useMemo(() => {
    lineMatrefs.current = integrations.map(() => 
      new THREE.LineBasicMaterial({
        color: new THREE.Color('#00ff88'),
        transparent: true,
        opacity: 0.15,
      })
    );
  }, [integrations]);
  
  useFrame((state) => {
    if (!linesRef.current) return;
    
    const time = state.clock.getElapsedTime();
    
    // Update line positions and animations
    linesRef.current.children.forEach((lineGroup, index) => {
      const integration = integrations[index];
      const line = lineGroup.children[0] as THREE.Line;
      
      if (line && line.geometry) {
        // Calculate current floating cube position
        const speed = 0.05 + (index * 0.02);
        const offsetY = Math.sin(time * speed + index) * 0.3;
        const offsetX = Math.cos(time * speed + index * 2) * 0.5;
        const offsetZ = Math.sin(time * speed + index * 2) * 0.5;
        
        const cubePos = new THREE.Vector3(
          integration.position[0] + offsetX,
          integration.position[1] + offsetY,
          integration.position[2] + offsetZ
        );
        const centerPos = new THREE.Vector3(0, 0, 0);
        
        // Update line geometry
        const positions = new Float32Array([
          cubePos.x, cubePos.y, cubePos.z,
          centerPos.x, centerPos.y, centerPos.z
        ]);
        line.geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        // Animate line opacity with gentle pulsing
        const baseOpacity = hoveredItem?.name === integration.name ? 0.4 : 0.15;
        const pulse = (Math.sin(time * 1.5 + index) + 1) * 0.1;
        const material = line.material as THREE.LineBasicMaterial;
        material.opacity = baseOpacity + pulse;
      }
    });
  });

  return (
    <group ref={linesRef}>
      {integrations.map((integration, index) => (
        <group key={integration.name}>
          <primitive 
            object={new THREE.Line(
              new THREE.BufferGeometry(),
              lineMatrefs.current[index]
            )}
          />
        </group>
      ))}
    </group>
  );
}

// Main Integration Globe Component
export function IntegrationGlobe() {
  const [hoveredItem, setHoveredItem] = useState<any>(null);

  return (
    <div className="relative">
      {/* 3D Canvas */}
      <div className="h-[700px] w-full bg-gradient-to-b from-slate-900 via-blue-900 to-black rounded-2xl overflow-hidden">
        <Canvas
          camera={{ position: [0, 0, 12], fov: 50 }}
          gl={{ antialias: true, alpha: true }}
        >
          {/* Enhanced Lighting */}
          <ambientLight intensity={0.4} />
          <pointLight position={[15, 15, 15]} intensity={1.5} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.8} color="#3b82f6" />
          <pointLight position={[0, 0, 0]} intensity={0.6} color="#00ff88" />
          
          {/* Background Stars */}
          <Stars />
          
          {/* Central Globe */}
          <Globe />
          
          {/* Central TraceR2C Logo */}
          <CentralLogo />
          
          {/* Connection Lines */}
          <ConnectionLines integrations={integrationData} hoveredItem={hoveredItem} />
          
          {/* Floating Integration Logos */}
          {integrationData.map((integration, index) => (
            <FloatingLogo
              key={integration.name}
              integration={integration}
              index={index}
              onHover={setHoveredItem}
              hoveredItem={hoveredItem}
            />
          ))}
          
          {/* Camera Controls */}
          <OrbitControls
            enablePan={false}
            enableZoom={true}
            enableRotate={true}
            minDistance={8}
            maxDistance={20}
            autoRotate={true}
            autoRotateSpeed={0.3}
          />
        </Canvas>
      </div>
      
      {/* Information Panel */}
      {hoveredItem && (
        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-white/20 max-w-xs">
          <div className="flex items-center gap-3 mb-2">
            <div 
              className="w-4 h-4 rounded shadow-sm"
              style={{ backgroundColor: hoveredItem.color }}
            />
            <h3 className="font-semibold text-navy-900">{hoveredItem.name}</h3>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs border-gray-300">
              {hoveredItem.category}
            </Badge>
            <Badge 
              variant="default"
              className="bg-green-100 text-green-800 text-xs border-green-200"
            >
              {hoveredItem.status}
            </Badge>
          </div>
        </div>
      )}
    </div>
  );
}