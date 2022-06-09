import {COMPONENT} from './action';
const initionState = {
    dataAPI: [],
    test: 123
}

const getApi = (state = initionState, action) => {
        switch(action.type) {
            case COMPONENT:
                console.log(action);
                return {
                    ...state,
                    dataAPI : action.payload,
                };

            default: return state;    
        }
}

export default getApi;