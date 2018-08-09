
class Modal {
  constructor() {
    this.modal = document.getElementById('modal');
    this.modalBackground = document.getElementById('modal-background');
    this.closeButton = document.getElementById('close-button');
    this.openButton = document.getElementById('open-button');
  }

  closeModal() {
    this.modalBackground.addEventListener('click', (e) => {
      this.modalBackground.style.display = "none";
    });
    this.closeButton.addEventListener('click', (e) => {
      this.modalBackground.style.display = "none";
    });
  }

  openModal() {
    this.openButton.addEventListener('click', (e) => {
      this.modalBackground.style.display = "";
    });
  }
}

export default Modal;
