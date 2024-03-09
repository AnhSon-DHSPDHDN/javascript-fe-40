import dataStudent from "../data.json" assert { type: "json" };

console.log(dataStudent);

const computedDataStudent = dataStudent.map((student) => {
  const scoreAvg = (student.score.english + student.score.math) / 2;

  return {
    ...student,
    scoreAvg: scoreAvg,
  };
});

computedDataStudent.sort((student, nextStudent) => {
  return nextStudent.scoreAvg - student.scoreAvg;
});

console.log(computedDataStudent, "computedDataStudent");

const renderStudent = () => {
  let templateHtml = ``;
  computedDataStudent.forEach((student) => {
    templateHtml += `<tr>
      <td>${student.name}</td>
      <td>${student.age}</td>
      <td>${student.scoreAvg}</td>
    </tr>`;
  });

  const tbodyEle = document.querySelector(".js-body-table");
  tbodyEle.innerHTML = templateHtml;
};

renderStudent();
