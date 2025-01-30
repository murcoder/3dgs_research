import { useTranslation } from 'react-i18next';

export function LaserButtonsDetails() {
  const { t } = useTranslation();

  const buttonDetails = [
    { label: "1", value: t("laserCutButtons.1") },
    { label: "2", value: t("laserCutButtons.2") },
    { label: "3", value: t("laserCutButtons.3") },
    { label: "4", value: t("laserCutButtons.4") },
    { label: "5", value: t("laserCutButtons.5") },
    { label: "6", value: t("laserCutButtons.6") },
    { label: "7", value: t("laserCutButtons.7") },
    { label: "8", value: t("laserCutButtons.8") },
    { label: "9", value: t("laserCutButtons.9") },
    { label: "10", value: t("laserCutButtons.10") },
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
