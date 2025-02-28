import { Trans, useTranslation } from 'react-i18next';
import { useState } from 'react';

export default function Tabs({ tabs, title }) {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(0);
  const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div role="tablist" className="tabs tabs-lifted">
      {tabs.map((tab, index) => (
        <>
          <input
            key={`tab-${formattedTitle}-${index}`}
            type="radio"
            name="my_tabs"
            role="tab"
            className={`tab text-base-content dark:text-white bg-base-200 text-lg hover:bg-base-300 ${activeTab === index ? 'bg-primary text-primary-content' : ''}`}
            aria-label={`${t(tab.tabTitle)}`}
            checked={activeTab === index}
            onChange={() => setActiveTab(index)}
          />
          {activeTab === index && (
            <div
              key={`tabpanel-${formattedTitle}-${index}`}
              role="tabpanel"
              className="tab-content bg-base-200 border-base-300 rounded-box p-6 text-base-content dark:text-white"
            >
              {tab.img && (
                <div className="mb-4">
                  <img
                    src={tab.img}
                    alt={`${t(tab.tabTitle)}_img`}
                    className="min-w-80 max-h-72 object-cover"
                  />
                </div>
              )}
              <div>
                <Trans>{tab.content}</Trans>
              </div>
            </div>
          )}
        </>
      ))}
    </div>
  );
}
