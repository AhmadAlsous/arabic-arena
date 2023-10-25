import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function Progress({ value }) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant='determinate'
        size={50}
        thickness={5}
        value={100}
        sx={{ color: '#aaaaaa' }}
      />
      <CircularProgress
        variant='determinate'
        size={50}
        thickness={5}
        value={value}
        sx={{ color: 'var(blue-dark-500)', position: 'absolute' }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant='caption' component='div' color='text.secondary'>
          {`${Math.round(value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default Progress;
