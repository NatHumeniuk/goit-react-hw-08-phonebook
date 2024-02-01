import axios from 'axios';
import { toast } from 'react-toastify';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65b16089d16d31d11bdecdd3.mockapi.io/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (contactData, thunkAPI) => {
    try {
      const response = await axios.get('/contacts', contactData);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, thunkAPI) => {
    const { contacts } = thunkAPI.getState().contactsScope;

    const duplicate = contacts.find(
      contact => contact.name.toLowerCase() === contactData.name.toLowerCase()
    );

    if (duplicate) {
      toast('Contact already exists!');
      return thunkAPI.rejectWithValue('Contact already exists');
    }

    try {
      const response = await axios.post('/contacts', contactData);
      toast.success('Contact added successfully');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      toast.success('Contact deleted');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
