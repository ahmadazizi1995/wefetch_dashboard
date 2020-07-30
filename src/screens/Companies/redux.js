import { createActions, createReducer } from 'reduxsauce';

/* types and actions creator */
const { Types, Creators } = createActions({
    onGetCompaniesAndFacilities: null,
    setCompanies: ['companies'],
    setIsLoading: ['isLoading'],
});

export const CompanyTypes = Types;
export const CompanyActions = Creators;

/* initial state */
const INITIAL_STATE = {
    companies: {},
};

/* reducers */
const setCompanies = (state, { companies }) => ({
    ...state,
    companies
});

const setIsLoading = (state, { isLoading }) => ({
    ...state,
    isLoading
});

/* hookup reducers to types */
const reducer = createReducer(INITIAL_STATE, {
    [Types.SET_COMPANIES]: setCompanies,
    [Types.SET_IS_LOADING]: setIsLoading,
});

export const CompanyReducer = reducer;