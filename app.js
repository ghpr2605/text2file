window.onload = () => {
  document.getElementById("download").addEventListener("click", (e) => {
    const name = document.getElementById("name").value;
    const content = document.getElementById("text").value;
    const filename = `${name}.txt`;
    checkalidation(filename, content);
  });
}