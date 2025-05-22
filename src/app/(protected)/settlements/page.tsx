import { LayoutWrapper } from "@common/LayoutWrapper";
import { UserGreeting } from "@components/UserGreeting";

export default async function Page() {
  return (
    <LayoutWrapper>
      <UserGreeting />
      Settlements Page
    </LayoutWrapper>
  );
}
