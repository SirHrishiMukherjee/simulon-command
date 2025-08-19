document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');

    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    button.classList.add('active');
    document.getElementById(tabId).classList.add('active');
  });
});

document.getElementById('run-simulang').addEventListener('click', () => {
  const script = document.getElementById('simulang-input').value;
  const output = window.runSimuLang(script);
  document.getElementById('simulang-output').textContent = output;
});
