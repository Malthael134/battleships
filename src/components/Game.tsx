"use client";
import { Canvas } from "@react-three/fiber";

export default function Game() {
    return (
        <Canvas>
            <mesh>
                <sphereGeometry />
                <meshStandardMaterial />
            </mesh>
        </Canvas>
    );
}
