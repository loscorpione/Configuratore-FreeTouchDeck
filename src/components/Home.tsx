import { FC, useEffect, useState } from 'react';
import { IconButton } from './IconButton';
import {
  mdIcoUrl,
  pages as defaultPages,
  Page,
  ftdSaveConfigUrl,
} from '../Data';
import { useGeneralSettings } from '../hooks/UseGeneralSettings';

export const Home: FC = () => {
  const { settings } = useGeneralSettings();
  const [pages, setPages] = useState<Page[]>([]);

  // Load Pages from local storage on component mount
  useEffect(() => {
    const savedPages = localStorage.getItem('ftd.Pages');

    if (savedPages) {
      setPages(JSON.parse(savedPages));
    } else {
      // If no Pages found in local storage, use defaultPages from Data.ts
      setPages(defaultPages);
    }
  }, []);

  // Update local storage when pages change
  useEffect(() => {
    if (pages.length) localStorage.setItem('ftd.pages', JSON.stringify(pages));
  }, [pages]);

  const saveHome = async () => {
    console.log('Save');
    const formData = new FormData();
    formData.append('save', `homescreen`);
    pages.forEach((item, index) => {
      formData.append(`homescreenlogo${index}`, `${item.icon}.bmp`);
    });
    await fetch(ftdSaveConfigUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      // @ts-expect-error This their bug
      body: new URLSearchParams(formData).toString(),
    });
  };

  return (
    <div className="icon-grid" style={{ backgroundColor: settings.background }}>
      {pages.map((page, index) => (
        <IconButton
          className="icon"
          key={index}
          name={page.name}
          icon={`${mdIcoUrl}${page.icon}.svg`}
          style={{ backgroundColor: settings.menubuttoncolor }}
        />
      ))}
      <IconButton
        className="icon"
        onClick={saveHome}
        name="Save"
        icon={`${mdIcoUrl}floppy.svg`}
      />
    </div>
  );
};