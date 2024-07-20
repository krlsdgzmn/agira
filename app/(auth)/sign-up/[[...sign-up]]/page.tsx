import Container from "@/components/container";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <Container className="flex min-h-[85vh] items-center justify-center">
      <SignUp signInUrl="/sign-in" />
    </Container>
  );
}
