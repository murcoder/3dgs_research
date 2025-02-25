import { useTranslation } from 'react-i18next';

export function PrusaDetails() {
  const { t } = useTranslation();

  const printerDetails = [
    { label: 'Model', value: 'Prusa XL' },
    { label: 'Printing Technology', value: 'Fused Deposition Modeling (FDM)' },
    { label: 'Build Volume', value: '360 x 360 x 360 mm' },
    { label: 'Layer Resolution', value: '0.05 - 0.4 mm' },
    { label: 'Filament Compatibility', value: 'PLA, ABS, PETG, ASA, PC, Nylon, Carbon Fiber composites, and more' },
    { label: 'Multi-Material Support', value: 'Up to 5 tools with automatic tool changer' },
    { label: 'Nozzle Diameter', value: '0.6 mm standard' },
    { label: 'Max Nozzle Temperature', value: '300°C' },
    { label: 'Max Bed Temperature', value: '120°C' },
    { label: 'Features', value: 'CoreXY design, auto bed leveling, filament sensor, high-precision printing' },
    { label: 'Connectivity', value: 'LAN, USB, WiFi (optional)' },
    { label: 'Software', value: 'PrusaSlicer' },
    { label: 'Additional Features', value: 'Modular bed design for easy maintenance and scalability' }
  ];

  return (
    <div className="w-[700px] overflow-hidden text-white text-lg rounded-lg bg-black/80 border border-white/50">
      <div className="text-center bg-black/80 w-full p-2 text-2xl rounded-t-lg text-white border-b-2 border-white/50 transition pointer-events-none">
        <p>{t('printer.prusa.title')}</p>
      </div>
      <div className="flex gap-6 items-center p-4">
        <img src="./assets/prusa_xl.jpg" alt="Prusa XL" className="w-48 h-auto object-cover" />

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
