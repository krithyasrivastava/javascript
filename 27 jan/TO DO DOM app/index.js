// step -1 select the form tag

document.querySelector("form").addEventListener("submit", getdata);

// Step -2 catch values from input tag

function getdata(e) {
  e.preventDefault();

  let taskName = document.querySelector("#task").value;
  let taskPriority = document.querySelector("#priority").value;

  console.log(taskName, taskPriority);

  let taskObj = {
    taskName,
    taskPriority,
  };

  console.log(taskObj);

  displayTable(taskObj);
}

function displayTable(taskObj) {
  //  <tr>
  //         <td>aa</td>
  //         <td>High</td>
  //         <td>Add</td>
  //       </tr>

  const row = document.createElement("tr");

  const td1 = document.createElement("td");
  td1.innerText = taskObj.taskName;

  const td2 = document.createElement("td");
  td2.innerText = taskObj.taskPriority;

  const td3 = document.createElement("td");
  td3.innerText = "Add";

  row.append(td1, td2, td3);

  document.querySelector("tbody").append(row);
} 
