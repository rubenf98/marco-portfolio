import { combineReducers } from 'redux'

import category from './redux/category'
import post from './redux/post'
import client from './redux/client'
import item from './redux/item'

const reducer = combineReducers({
    category,
    post,
    item,
    client
})

export default reducer