import { useTranslation } from 'react-i18next';
import React from 'react';

export function BambuDetails() {
  const { t } = useTranslation();

  const printerDetails = [
    {
      label: t("printer.details.bambu"),
      value: `
      Model: Bambu Lab X1E<br>
      Printing Technology: Fused Deposition Modeling (FDM)<br>
      Build Volume: 256 x 256 x 256 mm<br>
      Layer Resolution: 0.05 - 0.3 mm<br>
      Filament Compatibility: PLA, ABS, PETG, TPU, Nylon, and more<br>
      Multi-Material Support: AMS (Automatic Material System) with up to 4 filaments<br>
      Nozzle Diameter: 0.4 mm standard<br>
      Max Nozzle Temperature: 300°C<br>
      Max Bed Temperature: 120°C<br>
      Features: AI-driven monitoring, auto bed leveling, filament detection, high-speed printing<br>
      Connectivity: WiFi, SD card<br>
      Software: Bambu Studio, compatible with other slicers<br>
      Additional Features: Enclosed chamber for stable printing and safety<br>
    `
    }
  ];



  return (
    <div className="w-[500px] overflow-hidden text-white text-xs rounded-lg bg-black/80  border border-white/50">
      <div className="text-center bg-black/80 w-100 p-2 text-sm rounded-lg text-white transition pointer-events-none">
        <p>{t('printer.details.bambu')}</p>
      </div>
      <table className="table-auto w-full">
        <tbody className="h-96 overflow-y-scroll block">
          {printerDetails.map((detail, index) => (
            <tr key={index} className="border-b border-white/50 flex justify-between w-full">
              <td
                className="px-4 py-2 whitespace-pre-line w-1/2"
                dangerouslySetInnerHTML={{ __html: detail.value }}></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
