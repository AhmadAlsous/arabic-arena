import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import styled from 'styled-components';
import { languages } from '../data/languages';
import InfoIcon from '@mui/icons-material/Info';
import { UserContext } from './UserContext';
import { useContext, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { updateUser } from '../services/userServices';
import toast from 'react-hot-toast';

const SettingsBar = styled.div`
  padding: 30px 0;
  border-bottom: 1.5px solid #888888;
  text-align: center;
`;

const Title = styled.h3`
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 6px;
  margin: 0;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.8rem;
  margin-top: 5px;
  display: flex;
  align-items: center;
`;

function Settings() {
  const [isLoading, setIsLoading] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.id,
      language: user.language,
    },
  });
  const editUser = useMutation({
    mutationFn: (user) => updateUser(user),
    onMutate: () => {
      setIsLoading(true);
      toast.loading('Updating settings...');
    },
    onSuccess: () => {
      setIsLoading(false);
      toast.remove();
      toast.success('Settings updated successfully!');
    },
    onError: () => {
      setIsLoading(false);
      toast.remove();
      toast.error('Something went wrong. Please try again.');
    },
  });

  const onSubmit = (data) => {
    const updatedUser = {
      ...user,
      firstName: data.firstName,
      lastName: data.lastName,
      language: data.language,
    };
    setUser(updatedUser);
    editUser.mutate(updatedUser, {
      onSuccess: () => {
        reset({
          firstName: updatedUser.firstName,
          lastName: updatedUser.lastName,
          language: updatedUser.language,
        });
      },
    });
  };

  return (
    <>
      <SettingsBar>
        <Title>SETTINGS</Title>
      </SettingsBar>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction={'column'} spacing={5} mt={6} mb={10}>
          <Stack direction='row' spacing={2}>
            <Stack direction={'column'} width={'100%'}>
              <TextField
                id='firstName'
                label='First Name'
                variant='outlined'
                fullWidth
                size='normal'
                error={!!errors.firstName}
                {...register('firstName', {
                  required: 'This field is required',
                  pattern: {
                    value: /^[A-Za-z\u0621-\u064A ]+$/i,
                    message: 'Please enter a valid first name',
                  },
                })}
              />
              {!!errors.firstName && (
                <ErrorMessage>
                  <InfoIcon fontSize='small' />
                  &nbsp;&nbsp;{errors.firstName.message}
                </ErrorMessage>
              )}
            </Stack>
            <Stack direction={'column'} width={'100%'}>
              <TextField
                id='lastName'
                label='Last Name'
                variant='outlined'
                fullWidth
                size='normal'
                error={!!errors.lastName}
                {...register('lastName', {
                  required: 'This field is required',
                  pattern: {
                    value: /^[A-Za-z\u0621-\u064A ]+$/i,
                    message: 'Please enter a valid last name',
                  },
                })}
              />
              {!!errors.lastName && (
                <ErrorMessage>
                  <InfoIcon fontSize='small' />
                  &nbsp;&nbsp;{errors.lastName.message}
                </ErrorMessage>
              )}
            </Stack>
          </Stack>
          <TextField
            id='email'
            label='University Email'
            variant='outlined'
            fullWidth
            size='normal'
            error={!!errors.email}
            disabled
            {...register('email')}
          />
          <FormControl fullWidth variant='outlined' id='level'>
            <InputLabel id='language-label' error={!!errors.level}>
              Your Language
            </InputLabel>
            <Controller
              name='language'
              control={control}
              render={({ field }) => (
                <Select
                  labelId='language-label'
                  label='Your Language'
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: 200,
                      },
                    },
                  }}
                  {...field}
                >
                  {languages.map((language) => (
                    <MenuItem key={language.language} value={language.language}>
                      <img
                        src={`https://flagcdn.com/w320/${language.countryCode}.png`}
                        width='20px'
                        height='13px'
                      />
                      &nbsp;&nbsp;
                      {language.language}
                    </MenuItem>
                  ))}
                </Select>
              )}
            />
          </FormControl>
        </Stack>
        <Stack
          direction='row'
          alignItems='center'
          justifyContent='flex-end'
          pb={5}
        >
          <Button
            variant='contained'
            color='primary'
            type='submit'
            disabled={!isDirty || isLoading}
          >
            Update Settings
          </Button>
        </Stack>
      </form>
    </>
  );
}

export default Settings;
