import { ServiceSlice } from "../slice/customServiceSlice"

const { actions: slice } = ServiceSlice;

export const serviceAction = (servicedetails) => (dispatch) => {
    dispatch(slice.setSelectedService(servicedetails))
}
