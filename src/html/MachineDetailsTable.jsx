export function MachineDetailsTable() {
  const machineDetails = [
    { label: "Daten", value: "Speedy 100 flexx" },
    { label: "Arbeitsfläche", value: "610mm x 305mm (Max Höhe: 132mm)" },
    { label: "Ladefläche", value: "690mm x 346mm" },
    { label: "Geschwindigkeit", value: "Max. 280cm/Sek. - CO2, Max. 200cm/Sek. - Faser" },
    { label: "Beschleunigung", value: "4g" },
    { label: "Motor", value: "Bürstenloser Gleichstrom-Servomotor" },
    { label: "Encoder", value: "Inkrement Messsystem" },
    { label: "Linsen", value: "CO2: 1,5“; 2,0“; 2,5“; 4,0“\nflexx: 2,85“\nFaser: 3,2“; 5.0“" },
    { label: "Verfügbar", value: "flexx: 2,85“" },
    { label: "Adressierbare Genauigkeit", value: "5µm" },
    { label: "Wiederholgenauigkeit", value: "0,015mm" },
    { label: "Teilemaßhaltigkeit", value: "Abhängig von Material und Arbeitsprozess" },
    { label: "Max. Werkstückgewicht", value: "bis zu 10kg Belastung über gesamte Arbeitsfläche" },
    { label: "Absaugung", value: "Flächenabsaugung und Tischabsaugung" },
    { label: "Laserausstattung", value: "CO2:\nAbgeschlossener CO2 Laser, Luftgekühlt, 60W, 10,6µm\nFaser:\nGepulster Faserlaser, 30W, 1064nm fiber" },
    { label: "Laserklasse", value: "CDRH Lasersicherheit, CE getestet, Laserklasse 2" },
    { label: "Interlock (Verriegelung)", value: "Doppeltes Interlock Sicherheitssystem" },
    { label: "Dimensionen", value: "1221mm x 830mm x 1055mm, Gewicht: 285kg" },
    { label: "Strombedarf", value: "Ca. 1,2 bis 1,9kW (abhängig von Laserleistung)" },
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
