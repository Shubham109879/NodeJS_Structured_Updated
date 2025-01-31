"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentMapper = void 0;
class StudentMapper {
    static toArrayDto(record) {
        if (record === null) {
            return null;
        }
        const dtos = [];
        record.forEach((element) => {
            dtos.push({
                id: element.id,
                name: element.name,
                age: element.age,
            });
        });
        return dtos;
    }
}
exports.StudentMapper = StudentMapper;
StudentMapper.toDto = (record) => {
    if (record === null) {
        return null;
    }
    const dto = {
        name: record.name,
        age: record.age,
    };
    return dto;
};
//# sourceMappingURL=student.mapper.js.map