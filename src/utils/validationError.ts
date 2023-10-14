export function validationError(targetValue: HTMLInputElement, msg: string) {
  const size = targetValue.getBoundingClientRect();
  const error: any = document.getElementById('error');
  error.style.display = 'block';
  error.style.position = 'absolute';
  error.style.top = `${size.top + 15}px`;
  error.style.left = `${size.left + size.width + 15}px`;
  error.textContent = msg;
  error.style.backgroundColor = 'white';
  error.style.border = 'black';
}
