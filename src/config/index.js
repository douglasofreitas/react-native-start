//import { VAR_NAME1, VAR_NAME2 } from 'react-native-dotenv';
import { VAR_NAME1, VAR_NAME2 } from 'react-native-config'
import env from 'react-native-config'

//const VAR_NAME1 = '' 
//const VAR_NAME2 = ''

export default {
    env: process.env.NODE_ENV,
    varname1: env.VAR_NAME1 || 'default 1',
    varname2: env.VAR_NAME2 || 'default 2'
}