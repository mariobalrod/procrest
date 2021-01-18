import { getMe as me } from '../services';
import client from '../axiosClient';
import normalizeUser from '../../models/User';

const getMe = async () => {
    const prov = me();
    const user = prov.json();
    //console.log(JSON.parse(user))
    if (user && user.id) {
        const { data } = await client.get(`/users/${user.id}`);
        return normalizeUser(data);
    }

    return null;
};

export default getMe;