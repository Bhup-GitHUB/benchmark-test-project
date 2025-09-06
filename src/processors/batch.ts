export class BatchProcessor {
    private name = 'Batch';
    private batchSize: number;

    constructor(batchSize: number = 1000) {
        this.batchSize = batchSize;
        console.log(`${this.name} Processor initialized with batch size: ${batchSize}`);
    }

    async process(data: any[]): Promise<any[]> {
        console.log(`${this.name}: Processing ${data.length} records in batches of ${this.batchSize}...`);
        
        
        return data;
    }

    getInfo(): string {
        return `${this.name} - Processes data in chunks of ${this.batchSize} (balanced approach)`;
    }

    setBatchSize(size: number): void {
        this.batchSize = size;
        console.log(`Batch size updated to: ${size}`);
    }
}