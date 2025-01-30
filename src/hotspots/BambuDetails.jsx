import { useTranslation } from 'react-i18next';

export function BambuDetails() {
  const { t } = useTranslation();

  const printerDetails = [
    { label: 'Model', value: 'Bambu Lab X1E' },
    { label: 'Printing Technology', value: 'Fused Deposition Modeling (FDM)' },
    { label: 'Build Volume', value: '256 x 256 x 256 mm' },
    { label: 'Layer Resolution', value: '0.05 - 0.3 mm' },
    { label: 'Filament Compatibility', value: 'PLA, ABS, PETG, TPU, Nylon, and more' },
    { label: 'Multi-Material Support', value: 'AMS (Automatic Material System) with up to 4 filaments' },
    { label: 'Nozzle Diameter', value: '0.4 mm standard' },
    { label: 'Max Nozzle Temperature', value: '300°C' },
    { label: 'Max Bed Temperature', value: '120°C' },
    { label: 'Features', value: 'AI-driven monitoring, auto bed leveling, filament detection, high-speed printing' },
    { label: 'Connectivity', value: 'WiFi, SD card' },
    { label: 'Software', value: 'Bambu Studio, compatible with other slicers' },
    { label: 'Additional Features', value: 'Enclosed chamber for stable printing and safety' }
  ];

  return (
    <div className="w-[700px] overflow-hidden text-white text-lg rounded-lg bg-black/80 border border-white/50">
      <div className="text-center bg-black/80 w-full p-2 text-2xl rounded-t-lg text-white border-b-2 border-white/50 transition pointer-events-none">
        <p>{t('printer.bambu.title')}</p>
      </div>
      <div className="flex gap-6 items-center p-4">
        <img src="./assets/bambulab_x1e.jpg" alt="Bambu Lab X1E" className="w-48 h-auto object-cover" />

        <table className="table-auto w-[75%]">
          <tbody className="h-96 overflow-y-scroll block">
          {printerDetails.map((detail, index) => (
            <tr key={index} className="border-b border-white/50 flex w-full">
              <td className="px-4 py-2 font-bold w-1/3">{detail.label}</td>
              <td className="px-4 py-2 w-2/3">{detail.value}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
