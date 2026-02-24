function analyze() {

    // 1️⃣ Get input
    let input = document.getElementById("marks").value;

    // 2️⃣ Convert to array
    let marks = input.split(",").map(m => Number(m));

    // 3️⃣ Total using reduce
    let total = marks.reduce((sum, m) => sum + m, 0);

    // 4️⃣ Average
    let avg = total / marks.length;

    // 5️⃣ Pass or Fail
    let result = avg >= 40 ? "PASS " : "FAIL ";

    // 6️⃣ Display
    document.getElementById("result").innerHTML =
        `Marks: ${marks} <br>
         Total: ${total} <br>
         Average: ${avg.toFixed(2)} <br>
         Result: ${result}`;
}