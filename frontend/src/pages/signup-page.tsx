import { SignupForm } from "@/components/app/signup-form";

export function SignupPage() {
  return (
    <div className="grid min-h-svh place-items-center bg-background px-3 py-8 sm:px-4 sm:py-10">
      <div className="grid w-full max-w-xl gap-6">
        <SignupForm />
      </div>
    </div>
  );
}
