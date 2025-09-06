export class SequentialProcessor {
    private name = 'Sequential';

    constructor() {
        console.log(`${this.name} Processor initialized`);
    }

    async process(data: any[]): Promise<any[]> {
        console.log(`${this.name}: Processing ${data.length} records one by one...`);
        
        const results = [];
        
        
        for (let i = 0; i < data.length; i++) {
            const record = data[i];
            
            
            const processed = {
                ...record,
                email: record.email.toLowerCase(),
                processedAt: new Date().toISOString(),
                ageCategory: record.age >= 30 ? 'Adult' : 'Young'
            };
            
            results.push(processed);
        }
        
        console.log(`${this.name}: Finished processing ${results.length} records`);
        return results;
    }

    getInfo(): string {
        return `${this.name} - Processes data one record at a time (simple and predictable)`;
    }
}