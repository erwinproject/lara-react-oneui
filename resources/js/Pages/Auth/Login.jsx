import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route("login"));
  };

  return (
    <GuestLayout>
      <Head title="Log in" />
      <div class="block-header block-header-default">
        <h3 class="block-title">Sign In</h3>
        <div class="block-options">
          <Link class="btn-block-option fs-sm" href={route('password.request')}>Forgot Password?</Link>
          <Link class="btn-block-option" href={route('register')} data-bs-toggle="tooltip" data-bs-placement="left" title="New Account">
            <i class="fa fa-user-plus"></i>
          </Link>
        </div>
      </div>
      <div class="block-content">
        <div class="p-sm-3 px-lg-4 px-xxl-5 py-lg-5">
          <h1 class="h2 mb-1">{import.meta.env.VITE_APP_NAME}</h1>
          <p class="fw-medium text-muted">
            Welcome, please login.
          </p>

          <form class="js-validation-signin" onSubmit={submit}>
            <div class="py-3">
              <div class="mb-4">
                <input id="email"
                  type="email"
                  name="email"
                  value={data.email} class="form-control form-control-alt form-control-lg" placeholder="Email Address" autoComplete="username"
                  isFocused={true}
                  onChange={(e) => setData('email', e.target.value)} />

                <InputError message={errors.email} className="mt-2" />
              </div>
              <div class="mb-4">
                <input id="password"
                  type="password"
                  name="password"
                  value={data.password} class="form-control form-control-alt form-control-lg" autoComplete="current-password"
                  onChange={(e) => setData('password', e.target.value)}
                  placeholder="Password" />

                <InputError message={errors.password} className="mt-2" />

              </div>
              <div class="mb-4">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="login-remember" name="remember" checked={data.remember} onChange={(e) => setData('remember', e.target.checked)} />
                  <label class="form-check-label" for="login-remember">Remember Me</label>
                </div>
              </div>
            </div>
            <div class="row mb-4">
              <div class="col-md-6 col-xl-5">
                <button disabled={processing} type="submit" class="btn w-100 btn-alt-primary">
                  <i class="fa fa-fw fa-sign-in-alt me-1 opacity-50"></i> Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </GuestLayout>
  );
}
