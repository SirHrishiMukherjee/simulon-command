function runSimuLang(script) {
  const output = [];
  const lines = script.split(/\n/).map(l => l.trim()).filter(Boolean);
  lines.forEach((line, idx) => {
    const parts = line.split(/\s+/);
    const cmd = parts[0]?.toUpperCase();
    if (cmd === 'SET' && parts.length >= 3) {
      const unit = parts[1].toLowerCase();
      const status = parts.slice(2).join(' ');
      const unitEl = document.querySelector(`#${unit} p`);
      if (unitEl) {
        unitEl.textContent = `Status: ${status}`;
        output.push(`Line ${idx + 1}: set ${unit} to ${status}`);
      } else {
        output.push(`Line ${idx + 1}: unknown unit ${parts[1]}`);
      }
    } else {
      output.push(`Line ${idx + 1}: unknown command`);
    }
  });
  return output.join('\n');
}

window.runSimuLang = runSimuLang;
