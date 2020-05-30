window.onload = () => {
  document.getElementById("download").addEventListener("click", (e) => {
    const name = document.getElementById("name").value;
    const content = document.getElementById("text").value;
    const filename = `${name}.txt`;
    checkalidation(filename, content);
  });
}

const checkalidation = (filename, content) => {
  if (filename && content) {
    downloadFile(filename, content);
    alert("Your file has been downloaded succesfully.\n Please check downloads");
    resetFields();
  } else {
    alert("Please Enter Required Values");
    return false;
  }
};