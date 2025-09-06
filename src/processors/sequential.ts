export class SequentialProcessor {
    private name = 'Sequential';

    constructor() {
        console.log(`✨ ${this.name} Processor initialized`);
    }

    async process(data: any[]): Promise<any[]> {
        console.log(`🔄 ${this.name}: Processing ${data.length} records one by one...`);
        
        // TODO: Implement sequential processing logic
        // For now, just return the data
        return data;
    }

    getInfo(): string {
        return `${this.name} - Processes data one record at a time (simple and predictable)`;
    }
}