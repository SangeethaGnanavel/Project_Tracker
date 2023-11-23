let saveProject = $("#btn-save");
// var rootEl = $('#root');
// let projectName = $('input[name="projectname"]');
// let projectType = $('input[name=projecttype"]');
// let dueDate = $('input[name="datetime"]');
var projectName = $("#projectname");
let projectType = $("#projecttype");
let dueDate = $("#datepicker");
let tblprojectDetails = $("#projectdetails");

$(function () {
  $("#datepicker").datepicker();
});

function DisplayTodaysDate() {
  $("#datetime").text(dayjs().format("MMM D, YYYY [at] h:mm:ss a"));
}

saveProject.on("click", function (e) {
  e.preventDefault();
  var projectDetails = {
    name: projectName.val(),
    type: $("#projecttype option:selected").val(),
    due: $("#datepicker").val(),
  };

  var stored_projectdetails = [];

  //   stored_projectdetails.push(
  //     JSON.parse(localStorage.getItem("projectDetails"))
  //   );

  //   stored_projectdetails.push(JSON.stringify(projectDetails));
  //   console.log(stored_projectdetails);

  //   localStorage.setItem("projectDetails", JSON.stringify(stored_projectdetails));

  //   stored_projectdetails = JSON.parse(localStorage.getItem("projectDetails"));
  //   projectDetails.pu(stored_projectdetails);
  //   console.log(projectDetails);

  //   localStorage.setItem("projectDetails", JSON.stringify(stored_projectdetails));

  //   console.log(stored_projectdetails);
  //   stored_projectdetails.pu(projectDetails);
  //   console.log(stored_projectdetails);
  //   stored_projectdetails.push(projectDetails);
  //   localStorage.setItem("projectDetails", JSON.stringify(stored_projectdetails));

  //   DisplayProjectDetails();
});

function DisplayProjectDetails() {
  var projectDetails_stored = JSON.parse(
    localStorage.getItem("projectDetails")
  );
  if (projectDetails_stored) {
    var row = $("<tr>");
    row.append("<td>" + projectDetails_stored.projectName + "</td>");
    row.append("<td>" + projectDetails_stored.projectType + "</td>");
    row.append("<td>" + projectDetails_stored.dueDate + "</td>");
    tblprojectDetails.append(row);
  }
}
//   Object.keys(object).forEach((key) => {
//     console.log(key, object[key]);

setInterval(DisplayTodaysDate, 1000);
