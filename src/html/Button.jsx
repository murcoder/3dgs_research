import React from "react";
import {useTranslation} from 'react-i18next';

export function Button({ handleClick }) {
const {t} = useTranslation()
  return (
    <div>
      <button
        onClick={handleClick}
        className="z-50 absolute top-5 left-0 mt-16 ml-4 px-4 py-2 bg-black/80 text-white text-sm p-2 rounded hover:bg-black/60 transition-colors"
      >
        {t('buttons.back')}
      </button>
    </div>
  );
}
