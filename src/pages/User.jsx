import { fetchUsersAxios } from "../services/userServices";
import { useApiCall } from "../hooks/useApiCall";

function Users() {
    const { data, error, loading } = useApiCall(fetchUsersAxios);
    return <div>
        Users
    </div>
}
export default Users;