import { getMe as me } from '../services';
import client from '../axiosClient';
import normalizeUser from '../../models/User';

const getMe = async () => {
    console.log(JSON.parse(me()))
    const { data } = await client.get(`/users/${JSON.parse(me()).id}`);

    return normalizeUser(data);
};

export default getMe;