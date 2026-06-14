let Tasks = []

function add_task() {

    console.log("CLICK ADD TASK BUTTON");

    document.getElementById("view_task").style.display = "none";
    document.getElementById("delete_task").style.display = "none";
    document.getElementById("add_task").style.display = "block";
}
function Add(event) {

    event.preventDefault()

    let Task_name = document.getElementById("Task_name").value

    console.log(`Successfully Added ${Task_name}`)
    alert(`Successfully Added ${Task_name}`)

    Tasks.push(Task_name)

    console.log(Tasks);
}

function view_task(){

    console.log(Tasks);
    console.log("CLICK VIEW TASK BUTTON");

    document.getElementById("add_task").style.display = "none";
    document.getElementById("delete_task").style.display = "none";
    document.getElementById("view_task").style.display = "block";

    document.querySelector("#view_task").innerHTML = "";

    Tasks.forEach( function(task) {
        function Add_View_Section(task) {

            let checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");

            let paragraph = document.createElement("p");
            paragraph.setAttribute("id","task_shower")
            paragraph.innerHTML = `${task}`

            let br = document.createElement("br")
            let hr = document.createElement("hr")

            document.querySelector("#view_task").appendChild(checkbox)
            document.querySelector("#view_task").appendChild(paragraph)
            document.querySelector("#view_task").appendChild(br)
            document.querySelector("#view_task").appendChild(hr)

            paragraph.style.display = "inline-block";

            console.log("Successfully View");
        }

        Add_View_Section(task)

        console.log(task);
    });
   
}

function delete_task() {

    console.log("CLICK DELETE TASK BUTTON");

    document.getElementById("add_task").style.display = "none";
    document.getElementById("view_task").style.display = "none";
    document.getElementById("delete_task").style.display = "block";
}

function Delete(event) {

    event.preventDefault()

    let Delete_task = document.getElementById("Delete_task").value

    console.log(`Successfully Deleted ${Delete_task}`)
    alert(`Successfully Deleted ${Delete_task}`)

    Tasks = Tasks.filter( (task) => task !== Delete_task)

    console.log(Tasks);
}
