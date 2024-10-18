import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, useForm, Link } from '@inertiajs/react';
import { useEffect } from 'react';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />
            <div class="block-header block-header-default">
                <h3 class="block-title">Forgot Password</h3>
                <div class="block-options">
                    <Link class="btn-block-option" href={route('login')} data-bs-toggle="tooltip" data-bs-placement="left" title="Sign In">
                        <i class="fa fa-sign-in-alt"></i>
                    </Link>
                </div>
            </div>
            <div class="block-content">
                <div class="p-sm-3 px-lg-4 px-xxl-5 py-lg-5">
                    <h1 class="h2 mb-1">{import.meta.env.VITE_APP_NAME}</h1>
                    <p class="fw-medium text-muted">
                        Please provide your account’s email or username and we will send you your password.
                    </p>

                    <form class="js-validation-reminder mt-4" onSubmit={submit}>
                        <div class="mb-4">
                            <input id="email"
                                type="email"
                                name="email"
                                value={data.email} class="form-control form-control-lg form-control-alt" autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)} placeholder="Email" />
                            <InputError message={errors.email} className="mt-2" />

                        </div>
                        <div class="row mb-4">
                            <div class="col-md-12 col-xl-12">
                                <button disabled={processing} type="submit" class="btn btn-alt-primary">
                                    <i class="fa fa-fw fa-envelope me-1 opacity-50"></i> Email Password Reset Link
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
