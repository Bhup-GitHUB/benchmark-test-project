import { DataRecord } from './types';

export class DataGenerator {
    private static firstNames = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eve', 'Frank', 'Grace', 'Henry'];
    private static cities = ['New York', 'London', 'Tokyo', 'Paris', 'Sydney'];

    /**
     * Generate sample data records
     * @param count - Number of records to generate
     * @returns Array of sample data records
     */
    static generateSampleData(count: number): DataRecord[] {
        console.log(`📝 Generating ${count} sample records...`);
        
        const records: DataRecord[] = [];
        
        for (let i = 1; i <= count; i++) {
            const record: DataRecord = {
                id: i,
                name: this.getRandomName(),
                email: `user${i}@example.com`,
                age: this.getRandomAge(),
                city: this.getRandomCity()
            };
            
            records.push(record);
        }
        
        console.log(`Generated ${records.length} sample records`);
        return records;
    }

    private static getRandomName(): string {
        return this.firstNames[Math.floor(Math.random() * this.firstNames.length)];
    }

    private static getRandomAge(): number {
        return Math.floor(Math.random() * 50) + 20; // Age between 20-70
    }

    private static getRandomCity(): string {
        return this.cities[Math.floor(Math.random() * this.cities.length)];
    }

   
    static showSampleRecords(records: DataRecord[], maxShow: number = 3): void {
        console.log('Sample records:');
        const samplesToShow = records.slice(0, maxShow);
        
        samplesToShow.forEach(record => {
            console.log(`   ID: ${record.id}, Name: ${record.name}, Age: ${record.age}, City: ${record.city}`);
        });
        
        if (records.length > maxShow) {
            console.log(`   ... and ${records.length - maxShow} more records`);
        }
    }
}