import  {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentAccount: {
        id: 1,
        username:'tutusbey_',
        fullname:'MustafaTutus',
        avatar: 'https://pbs.twimg.com/profile_images/1145673666249809921/Gps3Z3Cj_400x400.jpg'
    }, //o anki aktif olunan account
    accounts:[
        {
        id: 1,
        username:'tutusbey_',
        fullname:'MustafaTutus',
        avatar: 'https://pbs.twimg.com/profile_images/1145673666249809921/Gps3Z3Cj_400x400.jpg'
    },
        {
        id: 2,
        username:'tutusbey_2',
        fullname:'Mustafa Tutus',
        avatar: 'https://pbs.twimg.com/profile_images/1638668730732277766/FvKwLm6Q_400x400.jpg'
    },
    ]
}

const auth = createSlice ({
    name: 'auth',
    initialState,
    reducers:{
        _addAccounts: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter (account => account.id !== action.payload)
            if(action.payload && state.currentAccount === state.currentAccount.id){
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.paylaod
        }
      
    }
})

export const {_addAccounts, _setCurrentAccount, _removeAccount} = auth.actions
export default auth.reducer