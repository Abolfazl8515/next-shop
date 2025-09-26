import Table from "@/ui/Table";
import UsersRow from "./UsersRow";
import { getUsersApi } from "@/services/adminService";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";

async function LatestUsers() {
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const { users } = await getUsersApi(options);
  return (
    <div>
      <Table>
        <Table.Head>
          <Table.Row>
            <td>#</td>
            <td>نام</td>
            <td>ایمیل</td>
            <td>شماره موبایل</td>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          <UsersRow users={users} />
        </Table.Body>
      </Table>
    </div>
  );
}

export default LatestUsers;
