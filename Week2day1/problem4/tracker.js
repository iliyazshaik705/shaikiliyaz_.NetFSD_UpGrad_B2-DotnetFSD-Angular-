let db;

let request = indexedDB.open("ExpenseDB", 1);

request.onupgradeneeded = function (event) {
    db = event.target.result;
    db.createObjectStore("expenses", { keyPath: "id" });
};

request.onsuccess = function (event) {
    db = event.target.result;
    console.log("Database Ready");
};

request.onerror = function () {
    alert("Database failed to open");
};

/* ✅ ADD */
document.getElementById("addexpense").addEventListener("click", function () {

    let id = Number(document.getElementById("id").value);
    let title = document.getElementById("expense").value;
    let amount = Number(document.getElementById("amount").value);
    let date = document.getElementById("date").value;

    let tx = db.transaction("expenses", "readwrite");
    let store = tx.objectStore("expenses");

    let req = store.add({ id, title, amount, date });

    req.onsuccess = () => alert("Expense Added");
    req.onerror = () => alert("Error adding expense");
});

/* ✅ VIEW */
document.getElementById("viewexpense").addEventListener("click", function () {

    let tx = db.transaction("expenses", "readonly");
    let store = tx.objectStore("expenses");

    let req = store.getAll();

    req.onsuccess = function () {
        let list = document.getElementById("list");
        list.innerHTML = "";

        req.result.forEach(exp => {
            let li = document.createElement("li");
            li.textContent = `${exp.id} - ${exp.title} - ₹${exp.amount} - ${exp.date}`;
            list.appendChild(li);
        });
    };
});

/* ✅ DELETE */
document.getElementById("deleteexpense").addEventListener("click", function () {

    let id = Number(prompt("Enter ID to delete"));

    let tx = db.transaction("expenses", "readwrite");
    let store = tx.objectStore("expenses");

    let req = store.delete(id);

    req.onsuccess = () => alert("Deleted successfully");
    req.onerror = () => alert("Delete failed");
});

/* ✅ UPDATE */
document.getElementById("updateexpense").addEventListener("click", function () {

    let id = Number(prompt("Enter ID to update"));

    let title = document.getElementById("expense").value;
    let amount = Number(document.getElementById("amount").value);
    let date = document.getElementById("date").value;

    let tx = db.transaction("expenses", "readwrite");
    let store = tx.objectStore("expenses");

    let getReq = store.get(id);

    getReq.onsuccess = function () {

        let updated = { id, title, amount, date };

        let putReq = store.put(updated);

        putReq.onsuccess = () => alert("Updated successfully");
        putReq.onerror = () => alert("Update failed");
    };
});