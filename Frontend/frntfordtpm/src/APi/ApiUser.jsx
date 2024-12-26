import { data } from "autoprefixer";
import axiosclient from "./Axiosclient";
const Apiuser={
     apiLogin(data){
        let url="/tkncc/login"
        return axiosclient.post(url,data)
    },
    apiusergetname(data){
        let url="/tkncc/getiduser"
        return axiosclient.post(url,data)
    },

}
export default Apiuser