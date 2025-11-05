"use client"
import { GalleryVerticalEnd } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { FormEvent, useState } from "react" // [!code ++]
import { useRouter } from "next/navigation"
import { authenticate } from "@/lib/authStore"
import { useAuth } from "@/auth/AuthContext"


export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const { login } = useAuth();
  const router = useRouter()
  const [error, setError] = useState<string | null>(null) // [!code ++]

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null) // [!code ++] Clear previous errors

    const formData = new FormData(event.currentTarget)
    const username = formData.get("username")
    const password = formData.get("password") // [!code focus] Now gets password

    try {
      await login(username as string, password as string);
      router.push("/dashboard");
    } catch (err) {
      setError("Wrong username or password");
    }

  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleSubmit}>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex size-8 items-center justify-center rounded-md">
                <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">Acme Inc.</span>
            </a>
            <h1 className="text-xl font-bold">Welcome to Acme Inc.</h1>
            <FieldDescription>
              Don&apos;t have an account? <a href="#">Sign up</a>
            </FieldDescription>
          </div>

          {/* [!code start] */}
          {/* Display error message if it exists */}
          {error && (
            <div className="text-center text-sm font-medium text-red-600">
              {error}
            </div>
          )}
          {/* [!code end] */}

          <Field>
            <FieldLabel htmlFor="username">Username</FieldLabel>
            <Input
              id="username"
              name="username" // [!code ++] Added name attribute
              type="text"
              required
            />
          </Field>

          {/* [!code start] */}
          {/* Added Password Field */}
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              id="password"
              name="password" // Added name attribute
              type="password"
              required
            />
          </Field>
          {/* [!code end] */}

          <Field>
            <Button type="submit">Login</Button>
          </Field>
          <FieldSeparator>Or</FieldSeparator>
          <Field className="grid gap-4 sm:grid-cols-2">
            <Button variant="outline" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                {/* ... apple svg path ... */}
              </svg>
              Continue with Apple
            </Button>
            <Button variant="outline" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                {/* ... google svg path ... */}
              </svg>
              Continue with Google
            </Button>
          </Field>
        </FieldGroup>
      </form>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </FieldDescription>
    </div>
  )
}