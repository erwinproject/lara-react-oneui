import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <div class="block-header block-header-default">
                    <h3 class="block-title">Create Account</h3>
                    <div class="block-options">
                      <Link class="btn-block-option fs-sm" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#one-signup-terms">View Terms</Link>
                      <Link class="btn-block-option" href={route('login')} data-bs-toggle="tooltip" data-bs-placement="left" title="Sign In">
                        <i class="fa fa-sign-in-alt"></i>
                      </Link>
                    </div>
                  </div>
            <div class="block-content">
                <div class="p-sm-3 px-lg-4 px-xxl-5 py-lg-5">
                    <h1 class="h2 mb-1">{import.meta.env.VITE_APP_NAME}</h1>
                    <p class="fw-medium text-muted">
                        Please fill the following details to create a new account.
                    </p>
                    <form class="js-validation-signup" onSubmit={submit}>
                        <div class="py-3">
                            <div class="mb-4">
                                <input id="name"
                                    name="name"
                                    value={data.name} class="form-control form-control-lg form-control-alt" autoComplete="name"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                    required placeholder="Full Name" />
                                <InputError message={errors.name} className="mt-2" />

                            </div>
                            <div class="mb-4">
                                <input id="email"
                                    type="email"
                                    name="email"
                                    value={data.email} class="form-control form-control-lg form-control-alt" autoComplete="username"
                                    onChange={(e) => setData('email', e.target.value)}
                                    required placeholder="Email" />
                                <InputError message={errors.email} className="mt-2" />

                            </div>
                            <div class="mb-4">
                                <input id="password"
                                    type="password"
                                    name="password"
                                    value={data.password} class="form-control form-control-lg form-control-alt" autoComplete="new-password"
                                    onChange={(e) => setData('password', e.target.value)}
                                    required placeholder="Password" />
                                <InputError message={errors.password} className="mt-2" />

                            </div>
                            <div class="mb-4">
                                <input id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation} class="form-control form-control-lg form-control-alt" autoComplete="new-password"
                                    onChange={(e) => setData('password_confirmation', e.target.value)}
                                    required placeholder="Confirm Password" />
                                <InputError message={errors.password_confirmation} className="mt-2" />

                            </div>
                            <div class="mb-4">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="signup-terms" name="signup-terms" />
                                    <label class="form-check-label" for="signup-terms">I agree to Terms &amp; Conditions</label>
                                </div>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <div class="col-md-6 col-xl-5">
                                <button type="submit" class="btn w-100 btn-alt-success">
                                    <i class="fa fa-fw fa-plus me-1 opacity-50"></i> Sign Up
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
