import RegisterForm from '@/components/authentication/RegisterForm';
import React from 'react';

export const metadata = {
    title: 'Create Your Account - LaunchDeck',
    description: 'Join the premier open-source application directory showcase ecosystem.',
};

export default function RegisterPage() {
    return (
        // Calculates exact vertical space below a standard navbar to force total center alignment
        <div className="min-h-[calc(100vh-64px)] bg-slate-950 text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <RegisterForm />
        </div>
    );
}