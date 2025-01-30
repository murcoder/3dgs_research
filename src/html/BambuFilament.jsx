import { useTranslation } from 'react-i18next';
import Tabs from './Tabs.jsx';

export function BambuFilament() {
  const { t } = useTranslation();

  const tabs = [
    {
      tabTitle: t('printer.bambu.filament.tab1'),
      content: t('printer.bambu.filament.tab1Text'),
      img: './assets/bambu_filament_1.jpg'
    },
    {
      tabTitle: t('printer.bambu.filament.tab2'),
      content: t('printer.bambu.filament.tab2Text'),
      img: './assets/bambu_filament_2.jpg'
    },
    {
      tabTitle: t('printer.bambu.filament.tab3'),
      content: t('printer.bambu.filament.tab3Text'),
      img: './assets/bambu_filament_3.jpg'
    },
    {
      tabTitle: t('printer.bambu.filament.tab4'),
      content: t('printer.bambu.filament.tab4Text'),
      img: './assets/bambu_filament_4.jpg'
    }
  ];

  return (
    <div>
      <div className="w-[500px] overflow-hidden text-white text-xs rounded-lg bg-black/80  border border-white/50">
        <div className="mb-4 text-center bg-black/80 w-100 p-2 text-sm rounded-lg text-white transition pointer-events-none">
          <p>{t('printer.bambu.filament.title')}</p>
        </div>
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}
