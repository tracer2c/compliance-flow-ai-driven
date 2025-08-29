import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Sphere, Box } from '@react-three/drei';
import * as THREE from 'three';
import { Badge } from './ui/badge';

// Integration data with 3D positions
const integrationData = [
  // POS Systems
  { name: "Square", category: "POS", status: "Available", color: "#000000", position: [3, 2, 1] },
  { name: "Shopify POS", category: "POS", status: "Available", color: "#96BF47", position: [-2, 3, 2] },
  { name: "Toast", category: "POS", status: "Available", color: "#FB6107", position: [2, -2, 3] },
  { name: "Lightspeed", category: "POS", status: "Available", color: "#F68B2C", position: [-3, 1, -2] },
  
  // ERP Systems  
  { name: "SAP", category: "ERP", status: "Available", color: "#0FAAFF", position: [1, 3, -2] },
  { name: "Oracle", category: "ERP", status: "Available", color: "#F80000", position: [-1, -3, 2] },
  { name: "Microsoft Dynamics", category: "ERP", status: "Available", color: "#00BCF2", position: [3, -1, -1] },
  { name: "NetSuite", category: "ERP", status: "Available", color: "#F0AB00", position: [-2, 2, -3] },
  
  // CRM Platforms
  { name: "Salesforce", category: "CRM", status: "Available", color: "#1798C1", position: [2, 1, 3] },
  { name: "HubSpot", category: "CRM", status: "Available", color: "#FF7A59", position: [-3, -1, 1] },
  { name: "Pipedrive", category: "CRM", status: "Available", color: "#1A5A96", position: [1, -2, -3] },
  { name: "Zoho", category: "CRM", status: "Available", color: "#C64323", position: [-1, 3, 1] },
  
  // Cloud Storage
  { name: "AWS S3", category: "Storage", status: "Available", color: "#FF9900", position: [2, 3, -1] },
  { name: "Google Cloud", category: "Storage", status: "Available", color: "#4285F4", position: [-2, -1, 3] },
  { name: "Azure", category: "Storage", status: "Available", color: "#0078D4", position: [3, 1, 2] },
  { name: "Dropbox", category: "Storage", status: "Available", color: "#0061FF", position: [-1, -3, -1] },
  
  // E-Signature
  { name: "DocuSign", category: "E-Sign", status: "Available", color: "#FFB946", position: [1, 2, -2] },
  { name: "Adobe Sign", category: "E-Sign", status: "Available", color: "#FF0000", position: [-2, 1, 2] },
  { name: "HelloSign", category: "E-Sign", status: "Available", color: "#F26522", position: [2, -3, 1] },
  
  // Identity Providers
  { name: "Okta", category: "Identity", status: "Available", color: "#007DC1", position: [-1, 2, 3] },
  { name: "Auth0", category: "Identity", status: "Available", color: "#EB5424", position: [3, -2, -1] },
  { name: "Active Directory", category: "Identity", status: "Available", color: "#00BCF2", position: [-3, 0, 2] }
];

// Floating Integration Logo Component
function FloatingLogo({ integration, index, onHover, hoveredItem }: {
  integration: any;
  index: number;
  onHover: (item: any) => void;
  hoveredItem: any;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const textRef = useRef<THREE.Mesh>(null);
  
  const isHovered = hoveredItem?.name === integration.name;
  
  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.getElapsedTime();
    const radius = 4;
    
    // Orbital animation with slight variations per integration
    const speed = 0.3 + (index * 0.1);
    const offsetY = Math.sin(time * speed + index) * 0.5;
    const offsetX = Math.cos(time * speed + index * 2) * radius;
    const offsetZ = Math.sin(time * speed + index * 2) * radius;
    
    meshRef.current.position.set(
      integration.position[0] + offsetX * 0.3,
      integration.position[1] + offsetY,
      integration.position[2] + offsetZ * 0.3
    );
    
    // Gentle rotation
    meshRef.current.rotation.x = time * 0.5;
    meshRef.current.rotation.y = time * 0.3;
    
    // Scale effect on hover
    const targetScale = isHovered ? 1.3 : 1;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
  });

  return (
    <group>
      <Box
        ref={meshRef}
        args={[0.4, 0.4, 0.4]}
        position={integration.position}
        onPointerOver={() => onHover(integration)}
        onPointerOut={() => onHover(null)}
      >
        <meshStandardMaterial 
          color={integration.color}
          metalness={0.3}
          roughness={0.4}
          emissive={isHovered ? integration.color : '#000000'}
          emissiveIntensity={isHovered ? 0.2 : 0}
        />
      </Box>
      
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

// Globe Component
function Globe() {
  const globeRef = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Sphere ref={globeRef} args={[2, 64, 64]} position={[0, 0, 0]}>
      <meshStandardMaterial
        color="#1e40af"
        metalness={0.1}
        roughness={0.8}
        transparent={true}
        opacity={0.3}
        wireframe={true}
      />
    </Sphere>
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
      starsRef.current.rotation.y += 0.0005;
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

// Main Integration Globe Component
export function IntegrationGlobe() {
  const [hoveredItem, setHoveredItem] = useState<any>(null);

  return (
    <div className="relative">
      {/* 3D Canvas */}
      <div className="h-[600px] w-full bg-gradient-to-b from-navy-900 to-black rounded-2xl overflow-hidden">
        <Canvas
          camera={{ position: [0, 0, 10], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
        >
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#60a5fa" />
          
          {/* Background Stars */}
          <Stars />
          
          {/* Central Globe */}
          <Globe />
          
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
            minDistance={6}
            maxDistance={15}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>
      
      {/* Information Panel */}
      {hoveredItem && (
        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border max-w-xs">
          <div className="flex items-center gap-3 mb-2">
            <div 
              className="w-4 h-4 rounded"
              style={{ backgroundColor: hoveredItem.color }}
            />
            <h3 className="font-semibold text-navy-900">{hoveredItem.name}</h3>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              {hoveredItem.category}
            </Badge>
            <Badge 
              variant="default"
              className="bg-green-100 text-green-800 text-xs"
            >
              {hoveredItem.status}
            </Badge>
          </div>
        </div>
      )}
      
      {/* Instructions */}
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <p className="text-sm text-gray-600">
          🌍 Drag to rotate • 🔍 Scroll to zoom • 🖱️ Hover logos for info
        </p>
      </div>
    </div>
  );
}