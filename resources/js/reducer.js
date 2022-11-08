import { combineReducers } from 'redux'

import category from './redux/category'
import post from './redux/post'
import client from './redux/client'
import item from './redux/item'
import auth from './redux/auth'
import application from './redux/application'

const reducer = combineReducers({
    application,
    category,
    post,
    item,
    client,
    auth,

})

export default reducer