import { Injectable } from '@angular/core';
import { Member } from './signup.modal';

@Injectable()
export class SignupModalService {

  constructor() { }

}

export const members: Member = {
    id: 1,
    username: 'Gaurav',
    email: 'gauravpathak_84@yahoo.com',
    orgname: 'APD',
    password: 'abcd',
    confirmPassword: 'abcd',
};
