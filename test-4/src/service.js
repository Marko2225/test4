import axios from 'axios'


export const getAllLaunches = () => {
    return axios.get('https://api.spacexdata.com/v4/launches')
}

export const getLaunchById = (id) => {
    return axios.get(`https://api.spacexdata.com/v4/launches/${id}`)
}

export const getRockets = () => axios.get(`https://api.spacexdata.com/v4/rockets`)