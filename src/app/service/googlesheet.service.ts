import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class GooglesheetService {

  /*private spreadsheetId = '18FTYWT5dd8zTffc1AFC90ydTmstCfwD32VgSw1bNBk4';
  private apiKey = 'AIzaSyB6Zc99KXd885wbypbg8uVsg8Hetbpc4Bo';
  private range = 'Sheet1!A2';
  constructor() { }
  
  saveFormData(formData: any): Promise<void> {
    const requestUrl = `https://docs.google.com/spreadsheets/${this.spreadsheetId}/values/${this.range}:append?&key=${this.apiKey}&valueInputOption=USER_ENTERED`;

    const requestBody = {
      values: [Object.values(formData)]
    };

    return axios.post(requestUrl, requestBody)
      .then(() => {
        console.log('Form data saved successfully');
      })
      .catch(error => {
        console.error('Error saving form data:', error);
      });
  }

/*  async saveFormData(formData: any): Promise<void> {
    try {
      await gapi.client.sheets.spreadsheets.values.append({
        spreadsheetId: this.spreadsheetId,
        range: 'userdetails', // Specify the sheet name or range where you want to append data
        valueInputOption: 'USER_ENTERED',
        insertDataOption: 'INSERT_ROWS',
        values: [Object.values(formData)],
      });

      console.log('Form data saved successfully');
    } catch (error) {
      console.error('Error saving form data:', error);
    }
  }*/
}
