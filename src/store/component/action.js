const httpPath = "https://api.github.com/gists/public";
export const COMPONENT = 'COMPONENT';

const initApi = (dataAPI) => ({
    action: COMPONENT,
    payload: dataAPI
})

export const initApiThunk = () =>  async (dispatch, getState) => {
    try {
        const response = await fetch(httpPath);
    if(!response.ok) {
        console.log(response.status);
    }
    const result = await response.json();
    dispatch(initApi(result));
    } catch (error) {
        console.log(error);
    }
}
