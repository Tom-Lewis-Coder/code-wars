const validSpacing = s => {
  return s.startsWith(' ') || s.endsWith(' ') || s.includes('  ') ? false : true
}
