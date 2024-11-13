import { useTranslation } from 'react-i18next';

export function MachineDetailsTable() {
  const { t } = useTranslation();

  const machineDetails = [
    { label: t("lasercutDetails.machineData"), value: "Speedy 100 flexx" },
    { label: t("lasercutDetails.workArea"), value: "610mm x 305mm (Max Höhe: 132mm)" },
    { label: t("lasercutDetails.loadingArea"), value: "690mm x 346mm" },
    { label: t("lasercutDetails.speed"), value: "Max. 280cm/Sek. - CO2, Max. 200cm/Sek. - Faser" },
    { label: t("lasercutDetails.acceleration"), value: "4g" },
    { label: t("lasercutDetails.motor"), value: "Bürstenloser Gleichstrom-Servomotor" },
    { label: t("lasercutDetails.encoder"), value: "Inkrement Messsystem" },
    { label: t("lasercutDetails.lenses"), value: "CO2: 1,5“; 2,0“; 2,5“; 4,0“\nflexx: 2,85“\nFaser: 3,2“; 5.0“" },
    { label: t("lasercutDetails.available"), value: "flexx: 2,85“" },
    { label: t("lasercutDetails.addressableAccuracy"), value: "5µm" },
    { label: t("lasercutDetails.repeatability"), value: "0,015mm" },
    { label: t("lasercutDetails.partConsistency"), value: "Abhängig von Material und Arbeitsprozess" },
    { label: t("lasercutDetails.maxWorkpieceWeight"), value: "bis zu 10kg Belastung über gesamte Arbeitsfläche" },
    { label: t("lasercutDetails.extraction"), value: "Flächenabsaugung und Tischabsaugung" },
    { label: t("lasercutDetails.laserEquipment"), value: "CO2:\nAbgeschlossener CO2 Laser, Luftgekühlt, 60W, 10,6µm\nFaser:\nGepulster Faserlaser, 30W, 1064nm fiber" },
    { label: t("lasercutDetails.laserClass"), value: "CDRH Lasersicherheit, CE getestet, Laserklasse 2" },
    { label: t("lasercutDetails.interlock"), value: "Doppeltes Interlock Sicherheitssystem" },
    { label: t("lasercutDetails.dimensions"), value: "1221mm x 830mm x 1055mm, Gewicht: 285kg" },
    { label: t("lasercutDetails.powerRequirement"), value: "Ca. 1,2 bis 1,9kW (abhängig von Laserleistung)" }
  ];


  return (
    <div className="w-[500px] overflow-hidden text-white text-xs rounded-lg bg-black/80  border border-white/50">
      <table className="table-auto w-full">
        <tbody className="h-96 overflow-y-scroll block">
        {machineDetails.map((detail, index) => (
          <tr key={index} className="border-b border-white/50 flex justify-between w-full">
            <td className="px-4 py-2 font-semibold w-1/2">{detail.label}</td>
            <td className="px-4 py-2 whitespace-pre-line w-1/2">{detail.value}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}
