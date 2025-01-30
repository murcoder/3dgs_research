import { useState, useRef, useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';

const Help = () => {
  const { t } = useTranslation();
  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const hasSeenHelp = localStorage.getItem('hasSeenHelp');
    if (!hasSeenHelp) {
      setIsOpen(true);
      modalRef.current?.showModal();
    }
  }, []);

  const openModal = () => {
    setIsOpen(true);
    modalRef.current?.showModal();
  };

  const closeModal = () => {
    setIsOpen(false);
    modalRef.current?.close();
    localStorage.setItem('hasSeenHelp', 'true');
  };

  return (
    <>
      {/* Help Button */}
      <div className="absolute z-50 bottom-24 right-4 flex">
        <button
          onClick={openModal}
          className="bg-black text-white font-bold py-4 px-4 rounded-full shadow-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-500">
          <img src="./icons/help.svg" alt="Help Icon" className="h-8 w-8" />
        </button>
      </div>

      {/* Modal Component */}
      <dialog ref={modalRef} className="modal">
        <div className="modal-box relative w-full max-w-2xl bg-gray-100 text-black p-4 rounded-lg shadow-lg">
          <button
            className="absolute top-2 right-4 text-2xl hover:text-gray-400"
            onClick={closeModal}>
            ✕
          </button>
          {/* Modal Content */}
          <h2 className="text-xl font-bold">{t('help.title')} 👋</h2>
          <img
            src="./assets/gg.jpg"
            alt="grand garage"
            className="w-full h-48 object-cover my-4 rounded-lg"
          />
          <p className="text-lg mt-4">
            <Trans>{t('help.text')}</Trans>
          </p>
          <div className="modal-action">
            <button
              className="btn text-white border-2 border-white hover:bg-white hover:text-black"
              onClick={closeModal}>
              {t('buttons.close')}
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Help;
