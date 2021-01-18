import { getMe as me } from '../services';
import client from '../axiosClient';
import normalizeUser from '../../models/User';

const getMe = async () => {
    const user = me();
    
    if (typeof user === 'string') {
        if (JSON.parse(user) && JSON.parse(user).id) {
            const { data } = await client.get(`/users/${JSON.parse(user).id}`);
            return normalizeUser(data);
        }
    }

    return undefined;
};

export default getMe;