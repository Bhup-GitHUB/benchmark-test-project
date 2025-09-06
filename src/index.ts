import { BatchProcessor } from "./processors/batch";
import { ParallelProcessor } from "./processors/parallel";
import { SequentialProcessor } from "./processors/sequential";
import { StreamProcessor } from "./processors/stream";



console.log('🎯 Testing our processors:');
    console.log('');
    
    // Create instances of our processors
    const sequential = new SequentialProcessor();
    const batch = new BatchProcessor(500);
    const parallel = new ParallelProcessor(2);
    const stream = new StreamProcessor();
    
    console.log('📋 Available processors:');
    console.log(`   1. ${sequential.getInfo()}`);
    console.log(`   2. ${batch.getInfo()}`);
    console.log(`   3. ${parallel.getInfo()}`);
    console.log(`   4. ${stream.getInfo()}`);
    console.log('');
    console.log('✅ All processors initialized successfully!');