
import SidebarSection from "../../../../components/siderbar-section";
import UserCard from "../../../../components/user-card";
import { whoFollowUsers } from "../../../../mock";
import { useAccount } from "../../../../store/auth/hooks";

export default function WhoFollow() {
  const account = useAccount;

  return (
    <SidebarSection
      title="Kimi takip etmeli"
      more={`/connect_people?user_id=${account.id}`}
      className=""
    >
      {whoFollowUsers.map(user => <UserCard user={user} key={user.id}/>)}
    </SidebarSection>
  );
}
