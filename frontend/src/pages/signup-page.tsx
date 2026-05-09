import { SignupForm } from "@/components/app/signup-form";

export function SignupPage() {
  return (
    <div className="grid min-h-screen place-items-center bg-background px-4 py-10">
      <div className="grid w-full max-w-xl gap-6">
        <SignupForm />
      </div>
    </div>
  );
}
