import { useEffect, useState } from "react";
import { getAllUser } from "../../services/user.service";
import type { User } from "../../types/user.type";

function Users() {
  const [users, setUsers] = useState<User[]>([]);

  const loadUsers = async () => {
    try {
      const data = await getAllUser();
      setUsers(data);
    } catch (error) {
      console.log("error: " + error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);
  return (
    <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
      <table className="w-full text-sm text-left rtl:text-right text-body">
        <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
          <tr>
            <th scope="col" className="px-6 py-3 font-medium">
              ID
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Name
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Username
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              Email
            </th>
            <th scope="col" className="px-6 py-3 font-medium">
              UserRole
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((val) => (
            <tr className="bg-neutral-primary border-b border-default">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-heading whitespace-nowrap"
              >
                {val.id}
              </th>
              <td className="px-6 py-4">{val.name}</td>
              <td className="px-6 py-4">{val.username}</td>
              <td className="px-6 py-4">{val.email}</td>
              <td className="px-6 py-4">{val.userRole}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
