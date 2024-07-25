import Container from "@/components/container";
import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <Container className="flex min-h-[85vh] items-center justify-center">
      <SignIn signUpUrl="/sign-up" />
    </Container>
  );
}
