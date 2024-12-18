import React, { useState } from 'react';
import { Typography, FormControl, TextField, Button, FormGroup } from '@mui/material';
import emailjs from 'emailjs-com';
import LeafletMap from './LeafletMap';
import ContactLine from './ContactLine';
import { useNavigate } from 'react-router';

function Email() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState();
  const [text, setText] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_9ja552f', 'template_ixoxhlu', e.target, 'i3sxReahkPichYdF9')
      .then((res) => {
        console.log(res);
        setName('');
        setEmail('');
        setNumber('');
        setText('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>

       <ContactLine  title='ƏLAQƏ'/>
      <div className=' flex flex-col mail sm:flex-row'>
        <div className='w-full'>
          <form onSubmit={sendEmail}>
            <FormGroup className='flex-col glass' sx={{ margin: '20px',padding: '30px' }}>
              <FormControl >
                <TextField
                  type='text'
                  label='Ad'
                  name='name'
                  variant='outlined'
                  autoComplete='none'
                  sx={{ padding: '20px' }}
                  fullWidth
                  required
                  InputLabelProps={{ shrink: true }}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </FormControl>

              <FormControl sx={{ margin: '5px' }}>
                <TextField
                  label='Email'
                  type='email'
                  variant='outlined'
                  fullWidth
                  sx={{ backgroundColor: 'primary.veryLight', padding: '20px' }}
                  name='email'
                  value={email}
                  required
                  InputLabelProps={{ shrink: true }}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </FormControl>

              <FormControl sx={{ margin: '5px' }}>
                <TextField
                  label='Əlaqə'
                  type='number'
                  variant='outlined'
                  fullWidth
                  autoComplete='new-password'
                  sx={{ backgroundColor: 'primary.veryLight', padding: '20px' }}
                  name='number'
                  value={number}
                  required
                  InputLabelProps={{ shrink: true }}
                  onChange={(e) => {
                    setNumber(e.target.value);
                  }}
                />
              </FormControl>
              <FormControl >
                <TextField
                  id='my-textarea'
                  label='Mesaj'
                  multiline
                  rows={4} // Number of visible rows
                  variant='outlined'
                  name='message'
                  sx={{ padding: '20px' }}
                  InputLabelProps={{ shrink: true }}
                  required
                  value={text}
                  onChange={(e) => {
                    setText(e.target.value);
                  }}
                />
              </FormControl>
              <button  variant='filled' type='submit' className='send-button'>
                Gonder
              </button>
            </FormGroup>
          </form>
        </div>

        <div className=' w-full flex flex-col justify items-center mb-2 p-3'>
          <h2 className='text-lg font-extrabold'> Fidan Hacıyeva </h2>
          <h4 className='text-lg font-extrabold'>Vokal Musiqi Məktəbi </h4>
          
          <div className='w-full '>
          <LeafletMap />
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Email;
