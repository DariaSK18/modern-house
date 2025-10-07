// funcs for header and footer (using fetch)

document.addEventListener("DOMContentLoaded", () => {
  const insertHTML = (selector, filePath) => {
    const container = document.getElementById(selector);
    if (container) {
      fetch(filePath)
      .then((res) => res.text())
      .then(data => container.innerHTML = data)
    }
  };
  insertHTML("header-placeholder", "./src/header.html");
  insertHTML("footer-placeholder", "./src/footer.html");
});
