import {
    createLocalizedPathnamesNavigation,
    Pathnames
} from 'next-intl/navigation';

export const locales = ['en', 'ru'] as const;
export const localePrefix = 'always';

export const pathnames = {
    '/': '/',
    '/signup': '/auth/signup',
    '/login': '/auth/login',
    '/password_reset': '/auth/password_reset',

} satisfies Pathnames<typeof locales>;

export const {Link, redirect, usePathname, useRouter, getPathname} =
    createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});