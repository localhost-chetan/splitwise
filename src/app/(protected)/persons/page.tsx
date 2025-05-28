import { LayoutWrapper } from "@/components/layouts/LayoutWrapper";
import { UserGreeting } from "@components/UserGreeting";

export default async function Page() {
  return (
    <LayoutWrapper>
      <UserGreeting />
      Persons Page
    </LayoutWrapper>
  );
}
