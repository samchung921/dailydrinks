"use strict";
class InMemoryDataService {
    createDb() {
        let dailydrinks = [
            { id: '1', name: "Coca Cola", price: 30, notes: 'Lots of remarks' },
            { id: '2', name: "Lemon Juice", price: 15, notes: 'Lots of remarks' },
        ];
        return {
            'dailydrinks': dailydrinks
        };
    }
}
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map