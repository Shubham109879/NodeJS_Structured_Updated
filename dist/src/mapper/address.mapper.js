"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressMapper = void 0;
class AddressMapper {
    static toArrayDto(record) {
        if (record === null) {
            return null;
        }
        const dtos = [];
        record.forEach((element) => {
            dtos.push({
                id: element.id,
                city: element.city,
                studentId: element.studentId
            });
        });
        return dtos;
    }
}
exports.AddressMapper = AddressMapper;
AddressMapper.toDto = (record) => {
    if (record === null) {
        return null;
    }
    const dto = {
        id: record.id,
        city: record.city,
        studentId: record.studentId,
    };
    return dto;
};
//# sourceMappingURL=address.mapper.js.map