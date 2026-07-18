import LoginForm from '@/components/authentication/LoginForm';
import React from 'react';

export const metadata = {
    title: 'Log In - LaunchDeck',
    description: 'Access your cloud developer profile layer and manage your repository directory.',
};

export default function LoginPage() {
    return (
        // Calculates exact vertical space below a standard navbar to force total center alignment
        <div className="min-h-[calc(100vh-64px)] bg-slate-950 text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <LoginForm />
        </div>
    );
}