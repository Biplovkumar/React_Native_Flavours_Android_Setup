//Main Api link (Base URL)
import Config from "react-native-config";


const ENV = Config.NODE_ENV
const LIVE = Config.URL
const LoginApi = LIVE + 'login'

export default {
  ENV,
  LIVE,
  LoginApi
};
