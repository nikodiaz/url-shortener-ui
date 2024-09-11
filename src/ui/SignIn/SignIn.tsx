import { FormEvent, useState } from "react"
import Cookies from "js-cookie"
import Input from "../Input/Input"
import Button from "../Home/Button"
import { Link, useNavigate } from "react-router-dom"
import { signin } from "../../lib/requests"

const SignIn = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const navigate = useNavigate()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(email, password)
    signin(email, password).then(res => {
      console.log(res)
      Cookies.set("UserToken", res.token)
      navigate("/dashboard")
    })
  }

  return (
    <section className="p-8 max-w-md w-full bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold pb-4">Log In</h2>
      <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
        <div>
          <Input placeholder="Email"
            rounded="top"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input placeholder="Password"
            rounded="bottom"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <div>
          <Button rounded="rounded-md" size="full" color="bg-blue-700" type="submit">
            Log In
          </Button>
        </div>

        <div className="text-sm text-center">
          <p>Don't have an account? <Link className="text-blue-600" to="/signup">Register</Link></p>
        </div>
      </form>

    </section>
  )
}

export default SignIn
