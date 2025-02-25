import { useState, useRef } from 'react';
import { Trans, useTranslation } from 'react-i18next';

export function ElectronicsDetailsTable() {
  const { t } = useTranslation();
  const [selectedItem, setSelectedItem] = useState(null);
  const modalRef = useRef(null);

  const items = [
    {
      name: 'Rohde & Schwarz HMC 8012',
      image: './assets/measure_hmc8012.jpg',
      description: t('electronics.measure.hmc_8012_description')
    },
    {
      name: 'Rohde & Schwarz RTM3004',
      image: './assets/measure_rtm3004.jpg',
      description: t('electronics.measure.rtm3004_description')
    }
  ];

  const openModal = (item) => {
    setSelectedItem(item);
    modalRef.current?.showModal();
  };

  const closeModal = () => {
    modalRef.current?.close();
    setSelectedItem(null);
  };

  return (
    <>
      <div className="w-full max-w-4xl mx-auto text-white text-2xl rounded-lg bg-black/80 border border-white/50">
        <div className="w-[800px] overflow-hidden text-white text-2xl rounded-lg border border-white/50">
          <div className="text-center bg-black/80 w-100 p-2 rounded-t-lg text-white border-b-2 border-white/50 transition pointer-events-none">
            <p>{t('electronics.measure.title')}</p>
          </div>
          <div className="flex flex-wrap gap-4 p-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="card w-60 bg-white text-black cursor-pointer hover:bg-black hover:text-white border-2 border-white"
                onClick={() => openModal(item)}>
                <figure>
                  <img src={item.image} alt={item.name} className="object-cover w-full h-48" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Component */}
        <dialog ref={modalRef} className="modal">
          <div className="modal-box relative w-full max-w-2xl bg-black/90 text-white p-4 rounded-lg">
            {selectedItem && (
              <>
                <button
                  className="absolute top-2 right-4 text-2xl hover:text-gray-400"
                  onClick={closeModal}>
                  ✕
                </button>
                <h2 className="text-xl font-bold">{selectedItem.name}</h2>
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-48 object-cover my-4 rounded-lg"
                />
                <p className="text-lg">
                  <Trans>{selectedItem.description}</Trans>
                </p>
                <div className="modal-action">
                  <button
                    className="btn text-white border-2 border-white hover:bg-white hover:text-black hover:border-2"
                    onClick={closeModal}>
                    Close
                  </button>
                </div>
              </>
            )}
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </>
  );
}
