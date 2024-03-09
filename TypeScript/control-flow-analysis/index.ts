// const getInput = (): number | Array<number> => {
//   return [];
// };

// const input = getInput();

// // input.includes(""); => Error  includes not working with number

// if (Array.isArray(input)) {
//   // input is Array
// }

// interface Car {
//   maxSpeed: number;
//   type: string;
//   brand: string;
//   update: () => void;
// }

// class VinFast implements Car {
//   maxSpeed: number = 500;
//   type: string = "vinfast";
//   brand: string = "VN";
//   update() {
//     // Update version vinfast
//   }
// }

// interface Resp<T> {
//   data: T;
// }

// {
//   data: Car
// }

// const response: Resp<Car> = {
//   data: {
//     maxSpeed: 12,
//     type: "",
//     brand: "",
//     update: () => {},
//   },
// };

interface Student {
  gender: "male" | "female";
  age: number;
  avgScore: number;
  name: string;
}
const studentsData: Student[] = [
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
const filterMaleStudent = (data: Student[]) => {
  const dataClone = [...data]; // Ví dụ cách clone array
  return dataClone.filter((student) => student.gender !== "female");
};
console.log("MaleStudent", filterMaleStudent(studentsData));

const filterFeMaleStudent = (data: Student[]) => {
  return data.filter((student) => student.gender === "female");
}; // Lọc ds Nữ
console.log("FeMailStudent", filterFeMaleStudent(studentsData));

const addStudent = (student: Student) => {
  studentsData.push(student);
  return studentsData;
}; // Thêm 1 student vào ds
console.log(
  "Add Student",
  addStudent({
    age: 18,
    name: "Son add",
    avgScore: 3,
    gender: "male",
  })
);

const removeStudentAtIndex = (data: Student[], indexRemove: number) => {
  data.splice(indexRemove, 1);
  return data;
}; // Xoá 1 student tại vị trí index
console.log("remove at index 2", removeStudentAtIndex(studentsData, 2));

const editStudentAtIndex = (
  data: Student[],
  indexEdit: number,
  dataEdit: Student
) => {
  if (indexEdit < 0 || indexEdit > data.length - 1) {
    console.log("Invalid index");
    return;
  }

  data[indexEdit] = {
    ...dataEdit,
  };
  return data;
}; // Chỉnh sửa student tại vị trí index
console.log(
  "Edit at index 2",
  editStudentAtIndex(studentsData, 2, {
    age: 19,
    name: "Son Edit",
    avgScore: 5,
    gender: "female",
  })
);

const filterScore = (data: Student[]) => {
  const filterScoreStudents = data.filter((student) => student.avgScore > 8);
  return filterScoreStudents;
}; // Lọc danh sách student có điểm trung bình > 8
console.log("filter Score", filterScore(studentsData));
