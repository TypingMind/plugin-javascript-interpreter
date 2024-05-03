async function execute_javascript(params) {
  try {
    // remove "return" keyword in case the AI confused that the code is inside a function
    const cleanCode = params.code.replace(/^return /, '');
    return await eval(cleanCode);
  } catch (e) {
    return 'Error: ' + e.message;
  }
}
