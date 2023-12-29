import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import FilterListIcon from '@mui/icons-material/FilterList';
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  Stack,
  TextField,
} from '@mui/material';
import { CloseOutlined, Search } from '@mui/icons-material';
import styled from 'styled-components';

const StyledLessonsBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 20px 5px 10px;
  align-items: center;
  border-bottom: 1.5px solid #888888;

  @media (max-width: 500px) {
    padding: 5px 0px 5px 10px;
  }
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  letter-spacing: 5px;

  @media (max-width: 500px) {
    font-size: 1.2rem;
    letter-spacing: 3px;
  }
`;

const FilterTitle = styled.h3`
  letter-spacing: 1.2px;
  font-size: 1.1rem;
`;

function LessonsBar({
  status,
  level,
  type,
  onChangeStatus,
  onChangeLevel,
  onChangeType,
  searchWord,
  setSearchWord,
  isQuiz,
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const statusItems = ['All', 'Complete', 'Incomplete'];
  const typeItems = [
    'All',
    'Grammar',
    'Vocabulary',
    'Listening',
    'Writing',
    'Reading',
  ];
  const levelItems = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };
  return (
    <StyledLessonsBar>
      <Title>{isQuiz ? 'QUIZZES' : 'LESSONS'}</Title>
      <IconButton onClick={toggleDrawer(true)}>
        <FilterListIcon />
      </IconButton>
      <Drawer
        anchor='right'
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 280,
            border: 'none',
            overflow: 'hidden',
            pl: 1,
            pr: 1,
          },
        }}
      >
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='space-between'
          sx={{ px: 1 }}
        >
          <FilterTitle>Filters</FilterTitle>
          <IconButton onClick={toggleDrawer(false)}>
            <CloseOutlined />
          </IconButton>
        </Stack>
        <Divider />
        <Box sx={{ overflowY: 'auto', padding: 2 }}>
          <TextField
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
            placeholder={`Search ${isQuiz ? 'Quizzes' : 'Lessons'}...`}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
          />

          <Stack spacing={3} sx={{ p: 1 }}>
            <FormControl>
              <FormLabel>Status</FormLabel>
              <RadioGroup
                value={status}
                onChange={(e) => onChangeStatus(e.target.value)}
              >
                {statusItems.map((item) => (
                  <FormControlLabel
                    key={item}
                    value={item}
                    control={<Radio />}
                    label={item}
                  />
                ))}
              </RadioGroup>
            </FormControl>

            <FormControl>
              <FormLabel>Level</FormLabel>
              <RadioGroup
                value={level}
                onChange={(e) => onChangeLevel(e.target.value)}
              >
                {levelItems.map((item) => (
                  <FormControlLabel
                    key={item}
                    value={item}
                    control={<Radio />}
                    label={item}
                  />
                ))}
              </RadioGroup>
            </FormControl>

            <FormControl>
              <FormLabel>Type</FormLabel>
              <RadioGroup
                value={type}
                onChange={(e) => onChangeType(e.target.value)}
              >
                {typeItems.map((item) => (
                  <FormControlLabel
                    key={item}
                    value={item}
                    control={<Radio />}
                    label={item}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </Stack>
        </Box>
        <Divider sx={{ mb: 1.5 }} />
        <Button onClick={toggleDrawer(false)} sx={{ mb: 1.5 }}>
          Confirm Selection
        </Button>
      </Drawer>
    </StyledLessonsBar>
  );
}

export default LessonsBar;
