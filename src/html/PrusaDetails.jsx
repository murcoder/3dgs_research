import { useTranslation } from 'react-i18next';
import React from 'react';

export function PrusaDetails() {
  const { t } = useTranslation();

  const printerDetails = [
    {
      label: t("printer.details.prusa"),
      value: `
      Model: Prusa XL<br>
      Printing Technology: Fused Deposition Modeling (FDM)<br>
      Build Volume: 360 x 360 x 360 mm<br>
      Layer Resolution: 0.05 - 0.4 mm<br>
      Filament Compatibility: PLA, ABS, PETG, ASA, PC, Nylon, Carbon Fiber composites, and more<br>
      Multi-Material Support: Up to 5 tools with automatic tool changer<br>
      Nozzle Diameter: 0.6 mm standard<br>
      Max Nozzle Temperature: 300°C<br>
      Max Bed Temperature: 120°C<br>
      Features: CoreXY design, auto bed leveling, filament sensor, high-precision printing<br>
      Connectivity: LAN, USB, WiFi (optional)<br>
      Software: PrusaSlicer<br>
      Additional Features: Modular bed design for easy maintenance and scalability<br>
    `
    }
  ];

  return (
    <div className="w-[500px] overflow-hidden text-white text-xs rounded-lg bg-black/80  border border-white/50">
      <div className="text-center bg-black/80 w-100 p-2 text-sm rounded-lg text-white transition pointer-events-none">
        <p>{t("printer.details.prusa")}</p>
      </div>
      <table className="table-auto w-full">
        <tbody className="h-96 overflow-y-scroll block">
        {printerDetails.map((detail, index) => (
          <tr key={index} className="border-b border-white/50 flex justify-between w-full">
            <td className="px-4 py-2 whitespace-pre-line w-1/2" dangerouslySetInnerHTML={{ __html: detail.value }}></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
