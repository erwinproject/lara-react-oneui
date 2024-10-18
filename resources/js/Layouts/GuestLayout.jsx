import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { useEffect } from "react";


export default function Guest({ children }) {
    useEffect(() => {
        const loadScripts = [
            "/assets/assets/js/lib/jquery.min.js",
            "/assets/assets/js/plugins/jquery-validation/jquery.validate.min.js",
            "/assets/assets/js/oneui.app.min.js",
            "/assets/assets/js/pages/op_auth_signin.min.js"
        ];

        loadScripts.forEach(src => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            document.body.appendChild(script);

            // Bersihkan setelah selesai jika diperlukan, walau bisa diabaikan jika didesain sekali pakai
            return () => {
                document.body.removeChild(script);
            };
        });
    }, []);

    return (
        <div id="page-container">
            <main id="main-container">
                <div class="hero-static d-flex align-items-center">
                    <div class="content">
                        <div class="row justify-content-center push">
                            <div class="col-md-8 col-lg-6 col-xl-4">
                                <div class="block block-rounded mb-0">
                                    
                                    {children}

                                </div>
                            </div>
                        </div>
                        <div class="fs-sm text-muted text-center">
                            <strong>{import.meta.env.VITE_APP_NAME}</strong> &copy; <span data-toggle="year-copy"></span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
