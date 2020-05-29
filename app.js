window.onload = () => {
  document.getElementById("download").addEventListener("click", (e) => {
    const name = document.getElementById("name").value;
    const extension = document.getElementById("extension").value;
    const content = document.getElementById("text").value;
    const filename = `${name}.${extension}`;
    if (filename && content) {
      downloadFile(filename, content);
    }
  });
};
