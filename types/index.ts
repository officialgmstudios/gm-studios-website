// types/index.ts

export type ShapeData = {
    id: string;
    src: string;
    alt: string;
    depth: number;
    initialTop?: string;
    initialRight?: string;
    initialBottom?: string;
    initialLeft?: string;
    size: number;
};

export type InteractiveShapeProps = {
    data: ShapeData;
    // Framer Motion's MotionValue types for useSpring output
    smoothMouseX: any; 
    smoothMouseY: any;
};