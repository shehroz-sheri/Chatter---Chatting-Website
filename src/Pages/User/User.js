import { Modal } from 'antd';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function User() {
    const [open, setOpen] = useState(false);

    const handleCancel = () => {
        setOpen(false);
    };
    const handleDeleteAccount = () => {
        const handleOk = async () => {
            try {

            } catch (error) {
                console.error(error)
            }
            setOpen(false);
        };
        const newModalConfirm = async () => {
            // const cityRef = doc(db, 'accounts', values.receiverAccountNo);
            // const docSnap = await getDoc(cityRef);
            {
                Modal.confirm({
                    title: 'Warning!',
                    onOk: handleOk,
                    onCancel: handleCancel,
                    content: `Are you sure you want to delete your account?`,
                    footer: (_, { OkBtn, CancelBtn }) => (
                        <>
                            <CancelBtn />
                            <OkBtn />
                        </>
                    ),
                });
            }
        }
        newModalConfirm()
    }

    return (
        <>
            <div className="flex flex-col min-h-[100dvh]">
                <header id="gnkjxuv86ov" className="bg-gray-950 py-6 px-4 md:px-0 dark:bg-gray-950">
                    <div className="container flex flex-col items-center justify-between px-2 gap-4 md:flex-row">
                        <div className="flex items-center gap-4">
                            <span className="relative flex shrink-0 bg-[#F4F4F5] overflow-hidden rounded-full h-12 w-12">
                                <span className="flex text-gray-950 h-full w-full items-center justify-center rounded-full bg-muted">JP</span>
                            </span>
                            <div className="grid gap-1">
                                <h1 className="text-xl font-bold text-[#F4F4F5]">Jared Palmer</h1>
                                <p className="text-sm text-gray-400">jared@acme.inc</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <Link
                                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-50 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                                to={'/'}
                            >
                                Home
                            </Link>
                            <button className="text-[#F4F4F5] bg-[#EF4444] inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2">
                                Logout
                            </button>
                        </div>
                    </div>
                </header>
                <main className="flex-1 py-8 px-2">
                    <div className="container grid gap-8">
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                            <div className="flex flex-col space-y-1.5 p-6">
                                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Edit Profile</h3>
                                <p className="text-sm text-muted-foreground">Update your personal information and settings.</p>
                            </div>
                            <div className="p-6 grid gap-6">
                                <div className="grid gap-2">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for="name"
                                    >
                                        Name
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="name"
                                        value="Jared Palmer"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="email"
                                        type="email"
                                        value="jared@acme.inc"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for="current-password"
                                    >
                                        Current Password
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="current-password"
                                        type="password"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <label
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for="new-password"
                                    >
                                        New Password
                                    </label>
                                    <input
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        id="new-password"
                                        type="password"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center p-6">
                                <button className="text-[#F4F4F5] bg-[#18181B] inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 ml-auto">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
                            <div className="flex flex-col space-y-1.5 p-6">
                                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Delete Account</h3>
                                <p className="text-sm text-muted-foreground">Permanently delete your account and all its data.</p>
                            </div>
                            <div className="p-6">
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Deleting your account is a permanent action and cannot be undone. All your data and account information
                                    will be permanently removed.
                                </p>
                            </div>
                            <div className="flex items-center p-6">
                                <button onClick={handleDeleteAccount} className="bg-[#EF4444] text-[#F4F4F5] inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90 h-10 px-4 py-2 ml-auto">
                                    Delete Account
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}
