import { Space } from 'antd';

import NavigationButton from './NavigationButton';
import ForwardBackwardsButton from './ForwardBackwardsButton';

import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { FaSpotify } from 'react-icons/fa6';

const HistoryNavigation = memo(() => {
  return (
    <Space>
      {/* Portfolio link removed for SyncLyrics integration - keeping navigation only */}
      <div className='flex flex-row items-center gap-2 h-full'>
        <ForwardBackwardsButton flip />
        <ForwardBackwardsButton flip={false} />
      </div>
    </Space>
  );
});

export default HistoryNavigation;
