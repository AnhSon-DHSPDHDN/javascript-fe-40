// const getInput = (): number | Array<number> => {
//   return [];
// };
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var studentsData = [
    {
        name: "Son",
        age: 18,
        avgScore: 9,
        gender: "male",
    },
    {
        name: "Duy",
        age: 15,
        avgScore: 8,
        gender: "male",
    },
    {
        name: "Tuan",
        age: 40,
        avgScore: 9,
        gender: "female",
    },
    {
        name: "Cuong",
        age: 20,
        avgScore: 10,
        gender: "male",
    },
];
var filterMaleStudent = function (data) {
    var dataClone = __spreadArray([], data, true); // Ví dụ cách clone array
    return dataClone.filter(function (student) { return student.gender !== "female"; });
};
console.log("MaleStudent", filterMaleStudent(studentsData));
var filterFeMaleStudent = function (data) {
    return data.filter(function (student) { return student.gender === "female"; });
}; // Lọc ds Nữ
console.log("FeMailStudent", filterFeMaleStudent(studentsData));
var addStudent = function (student) {
    studentsData.push(student);
    return studentsData;
}; // Thêm 1 student vào ds
console.log("Add Student", addStudent({
    age: 18,
    name: "Son add",
    avgScore: 3,
    gender: "male",
}));
var removeStudentAtIndex = function (data, indexRemove) {
    data.splice(indexRemove, 1);
    return data;
}; // Xoá 1 student tại vị trí index
console.log("remove at index 2", removeStudentAtIndex(studentsData, 2));
var editStudentAtIndex = function (data, indexEdit, dataEdit) {
    if (indexEdit < 0 || indexEdit > data.length - 1) {
        console.log("Invalid index");
        return;
    }
    data[indexEdit] = __assign({}, dataEdit);
    return data;
}; // Chỉnh sửa student tại vị trí index
console.log("Edit at index 2", editStudentAtIndex(studentsData, 2, {
    age: 19,
    name: "Son Edit",
    avgScore: 5,
    gender: "female",
}));
var filterScore = function (data) {
    var filterScoreStudents = data.filter(function (student) { return student.avgScore > 8; });
    return filterScoreStudents;
}; // Lọc danh sách student có điểm trung bình > 8
console.log("filter Score", filterScore(studentsData));
