
import SidebarSection from "../../../../components/siderbar-section";
import UserCard from "../../../../components/user-card";
import { WhoFollowUsers } from "../../../../muck";
import { useAccount } from "../../../../store/auth/hooks";

export default function WhoFollow() {
  const account = useAccount;

  return (
    <SidebarSection
      title="Kimi takip etmeli"
      more={`/connect_people?user_id=${account.id}`}
      className=""
    >
      {WhoFollowUsers.map(user => <UserCard user={user} key={user.id}/>)}
    </SidebarSection>
  );
}
