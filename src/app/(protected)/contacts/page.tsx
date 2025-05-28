import { LayoutWrapper } from "@components/layouts";
import { UserGreeting } from "@components/UserGreeting";

export default async function Page() {
  return (
    <LayoutWrapper>
      <UserGreeting />
      Contacts Page
    </LayoutWrapper>
  );
}
