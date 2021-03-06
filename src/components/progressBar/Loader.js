import { Box, Typography } from '@mui/material';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Puff } from 'react-loader-spinner';

const Loader = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        height: '100vh',
        width: '82vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgba(0,0,0,0.5)',
        zIndex: 2000,
        marginLeft: '18vw',
        position: 'absolute',
        top: 0,
      }}
    >
      <Puff color="#00BFFF" height={60} width={60} />
      <Typography color="white">{t('processing')}</Typography>
    </Box>
  );
};

export default Loader;
