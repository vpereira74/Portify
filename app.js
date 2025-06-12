function generatePortfolio() {
  const name = document.getElementById('name').value;
  const title = document.getElementById('title').value;
  const bio = document.getElementById('bio').value;
  const github = document.getElementById('github').value;
  const linkedin = document.getElementById('linkedin').value;

  const preview = `
    <h2>${name}</h2>
    <h4>${title}</h4>
    <p>${bio}</p>
    <p>
      <a href="https://github.com/${github}" target="_blank">GitHub</a> |
      <a href="${linkedin}" target="_blank">LinkedIn</a>
    </p>
  `;

  document.getElementById('preview').innerHTML = preview;
}
