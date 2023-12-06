/* eslint-disable react/display-name */
import { forwardRef } from 'react';

import Box from '@mui/material/Box';

const SvgColor = forwardRef(({ src, sx, ...other }, ref) => (
  <Box
    component='span'
    className='svg-color'
    ref={ref}
    sx={{
      width: 35,
      height: 35,
      display: 'inline-block',
      bgcolor: 'currentColor',
      mask: `url(${src}) no-repeat center / contain`,
      WebkitMask: `url(${src}) no-repeat center / contain`,
      ...sx,
    }}
    {...other}
  />
));

export default SvgColor;
