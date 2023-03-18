import { Timestamp } from 'firebase/firestore';
import {atom} from 'recoil'

export interface Password {
    id: string;
    creatorId: string;
    title: string;
    name: string;
    password: string;
    createdAt?: Timestamp;
}

interface PasswordState {
    currentPassword: Password;
}

export const defaultPassword: Password = {
    id: '',
    creatorId: '',
    title: '',
    name: '',
    password: ''
}

export const defaultPasswordState: PasswordState = {
 currentPassword: defaultPassword

}



export const passwordState = atom<PasswordState>(
    {
        key: 'passwordsState',
        default: defaultPasswordState,
    }
)