import type { Metadata } from "next";
import LoginForm from '@/components/authentication/LoginForm';
import React from 'react';

export const metadata: Metadata = {
    title: 'Log In',
    description: 'Sign in to LaunchDeck to publish new projects, manage your published architectures, and access your builder dashboard.',
};

export default function LoginPage() {
    return (
        // Calculates exact vertical space below a standard navbar to force total center alignment
        <div className="min-h-[calc(100vh-64px)] text-slate-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <LoginForm />
        </div>
    );
}