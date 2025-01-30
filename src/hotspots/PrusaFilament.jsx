import { useTranslation } from 'react-i18next';
import Tabs from '../html/Tabs.jsx';

export function PrusaFilament() {
  const { t } = useTranslation();

  const tabs = [
    {
      tabTitle: t('printer.prusa.filament.tab1'),
      content: t('printer.prusa.filament.tab1Text'),
      img: './assets/prusa_filament_1.jpg'
    },
    {
      tabTitle: t('printer.prusa.filament.tab2'),
      content: t('printer.prusa.filament.tab2Text'),
      img: './assets/prusa_filament_2.jpg'
    },
    {
      tabTitle: t('printer.prusa.filament.tab3'),
      content: t('printer.prusa.filament.tab3Text'),
      img: './assets/prusa_filament_3.jpg'
    }
  ];

  return (
    <div>
      <div className="w-[700px] overflow-hidden text-white text-lg rounded-lg bg-black/80  border border-white/50">
        <div className="mb-4 text-center bg-black/80 w-100 p-2 text-2xl rounded-t-lg text-white border-b-2 border-white/50 transition pointer-events-none">
          <p>{t('printer.prusa.filament.title')}</p>
        </div>
        <Tabs tabs={tabs} title={t('printer.prusa.title')}/>
      </div>
    </div>
  );
}
