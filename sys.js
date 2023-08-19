const items = document.querySelectorAll('.item');
const modals = document.querySelectorAll('.modal');
const closeModalButtons = document.querySelectorAll('.close');

items.forEach((item) => {
  item.addEventListener('click', () => {
    const targetModalId = item.getAttribute('data-modal-target');
    const targetModal = document.getElementById(targetModalId);
    targetModal.style.display = 'block';
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    modal.style.display = 'none';
  });
});

window.addEventListener('click', (event) => {
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});
