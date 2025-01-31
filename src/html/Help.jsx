import { useState, useRef, useEffect } from 'react';
import { Trans, useTranslation } from 'react-i18next';

const Help = () => {
  const { t } = useTranslation();
  const modalRef = useRef(null);
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const hasSeenHelp = localStorage.getItem('hasSeenHelp');
    if (!hasSeenHelp) {
      modalRef.current?.showModal();
    }
  }, []);

  const openModal = () => {
    modalRef.current?.showModal();
  };

  const closeModal = () => {
    modalRef.current?.close();
    localStorage.setItem('hasSeenHelp', 'true');

    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 8000);
  };

  return (
    <>
      {/* Help Button */}
      <div className="absolute z-50 bottom-24 right-4 flex">
        <button
          onClick={openModal}
          className={`bg-black text-white font-bold py-4 px-4 rounded-full shadow-[4px_4px_8px_0px_rgba(0,_0,_0,_0.35)]
            hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-500 
            ${isPulsing ? 'pulse' : ''}`}
        >
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
