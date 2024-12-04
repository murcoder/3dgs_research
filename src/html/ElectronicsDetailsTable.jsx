import { useTranslation } from 'react-i18next';
import React from 'react';

export function ElectronicsDetailsTable() {
  const { t } = useTranslation();

  const electronicsDetails = [
    { label: t("electronics.details.powerSupply"), value: "Ausgangsspannungmax. 30V DC<br>Ausgangsstrommax. 25A" },
    { label: t("electronics.details.oszilloskop"), value: "Bandbreite: 200 MHz" },
  ];


  return (
    <div className="w-[500px] overflow-hidden text-white text-xs rounded-lg bg-black/80  border border-white/50">
      <div className="text-center bg-black/80 w-100 p-2 text-sm rounded-lg text-white transition pointer-events-none">
        <p>{t("electronics.title")}</p>
      </div>
      <table className="table-auto w-full">
        <tbody className="h-96 overflow-y-scroll block">
        {electronicsDetails.map((detail, index) => (
          <tr key={index} className="border-b border-white/50 flex justify-between w-full">
            <td className="px-4 py-2 font-semibold w-1/2">{detail.label}</td>
            <td className="px-4 py-2 whitespace-pre-line w-1/2" dangerouslySetInnerHTML={{ __html: detail.value }}></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
