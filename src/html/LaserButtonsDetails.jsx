export function LaserButtonsDetails() {
  const buttonDetails = [
    { label: "1", value: "Positioniertasten Z" },
    { label: "2", value: "Positioniertasten X/Y" },
    { label: "3", value: "Start / Pause / Wiederholen" },
    { label: "4", value: "Stand-By" },
    { label: "5", value: "Absaugung" },
    { label: "6", value: "SHIFT" },
    { label: "7", value: "Stopp" },
    { label: "8", value: "Statusanzeige Laserstrahl" },
    { label: "9", value: "Statusanzeige" },
    { label: "10", value: "Home" },
  ];

  return (
    <div className="h-40 overflow-y-scroll text-white text-xs bg-inherit">
      <table className="table-auto w-full">
        <tbody>
        {buttonDetails.map((detail, index) => (
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
