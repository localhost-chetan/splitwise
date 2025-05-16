import { AuthStatus } from "@features/auth";

export function Header() {
  return (
    <header>
      <AuthStatus />
    </header>
  );
}
