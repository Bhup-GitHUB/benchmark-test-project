// src/utils/types.ts
// TypeScript interfaces and types for our project

// Basic data record structure
export interface DataRecord {
    id: number;
    name: string;
    email: string;
    age: number;
    city: string;
    // We'll add more fields as needed
}

// Performance metrics we want to track
export interface PerformanceMetrics {
    processorName: string;
    executionTime: number;        // milliseconds
    memoryUsed: number;          // bytes
    recordsProcessed: number;
    recordsPerSecond: number;
}

// Configuration for processors
export interface ProcessorConfig {
    batchSize?: number;
    workerCount?: number;
    // Add more config options as needed
}

// Result from processing
export interface ProcessingResult {
    data: DataRecord[];
    metrics: PerformanceMetrics;
    success: boolean;
    errors?: string[];
}