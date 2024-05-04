import { useState } from 'react';
import { Link } from 'react-router-dom'
import { LogoutOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Dropdown, Input, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';



function Chat() {
  const [sidebarVisibility, setSidebarVisibility] = useState('block');

  const handleSidebar = () => {
    sidebarVisibility === 'block' ? setSidebarVisibility('none') : setSidebarVisibility('block');
  }

  const handleMessageSubmit = e => {
    e.preventDefault();
  }

  const items = [
    {
      label: (
        <>
          <span className='ms-1'>Name</span>
        </>
      ),
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: (
        <div className='text-blue-700'>
          <Link to={'/user'}><UserOutlined /><span className='ms-2'>My Profile</span></Link>
        </div>
      ),
      key: '2',
    },
    {
      label: (
        <div className='text-red-600'>
          <LogoutOutlined />
          <span className='ms-2'>Logout</span>
        </div>
      ),
      key: '3',
    },
    // {
    //   label: '3rd menu item',
    //   key: '3',
    // },
  ];


  return (
    <div className="flex h-screen w-full flex-col">
      <header className="flex h-16 items-center justify-between border-b bg-white px-4 dark:border-gray-800 dark:bg-gray-950 md:px-6">
        <div className="flex items-center gap-4">
          <Link className="flex items-center gap-2" onClick={handleSidebar}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M17 6.1H3"></path>
              <path d="M21 12.1H3"></path>
              <path d="M15.1 18H3"></path>
            </svg>
            <span className="font-semibold hidden sm:flex">Chatter</span>
          </Link>
          {/* <div className="relative w-full max-w-md md:max-w-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input
              className="flex h-10 px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-md border border-gray-200 bg-gray-100 pl-10 text-sm focus:border-gray-300 focus:bg-white dark:border-gray-800 dark:bg-gray-900 dark:text-gray-50 dark:focus:border-gray-700"
              placeholder="Search chats..."
              type="search"
            />
          </div> */}
          <Input className='px-3 my-2 lg:my-0' size="default" placeholder="Search here..." variant="filled" prefix={<SearchOutlined className='pe-3' />} />
        </div>
        <Dropdown
          menu={{
            items,
          }}
          trigger={['click']}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space className='ms-1 md:ms-0'>
              <div className="cursor-pointer relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
              </div>
            </Space>
          </a>
        </Dropdown>
        {/* <button
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground rounded-full border border-gray-200 w-8 h-8 dark:border-gray-800"
          type="button"
          id="radix-:r1m:"
          aria-haspopup="menu"
          aria-expanded="false"
          data-state="closed"
        >
          <img
            alt="Avatar"
            className="rounded-full"
            height="32"
            src="/placeholder.svg"
            width="32"
            // style="aspect-ratio: 32 / 32; object-fit: cover;"
            style={{ aspectRatio: '32 / 32', objectFit: 'cover' }}
          />
          <span className="sr-only">Toggle user menu</span>
        </button> */}
      </header>
      <div className="flex flex-1 flex-col md:flex-row">
        <div className="border-r bg-gray-100/40 dark:border-gray-800 dark:bg-gray-800/40 md:block">
          <div style={{ display: `${sidebarVisibility}` }} className="sidebar_self_made absolute left-0 z-20 flex h-full max-h-screen w-64 flex-col gap-2 overflow-hidden bg-[#FAFBFB] px-1 py-2 transition-transform duration-300 ease-in-out dark:bg-gray-800/40 md:relative md:z-auto md:block md:w-auto md:bg-transparent md:px-0 md:py-0 md:transition-none">
            <div className="flex h-[60px] items-center border-b px-2 md:px-6">
              <h3 className="text-lg font-semibold">Chats</h3>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground ml-auto h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5v14"></path>
                </svg>
                <span className="sr-only">New chat</span>
              </button>
            </div>
            <div className="flex-1 overflow-auto py-2">
              <nav className="grid gap-1 px-2 md:px-4">
                <a
                  className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-50 dark:hover:bg-gray-700"
                  href="#"
                >
                  <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">JP</span>
                  </span>
                  <div className="flex-1 truncate">
                    <div className="font-medium">Jared Palmer</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Hey, how's it going?</div>
                  </div>
                  <div className="whitespace-nowrap border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs text-gray-50 dark:bg-gray-50 dark:text-gray-900">
                    3
                  </div>
                </a>
                <a
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
                  href="#"
                >
                  <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">JP</span>
                  </span>
                  <div className="flex-1 truncate">
                    <div className="font-medium">Acme Inc</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">New product update</div>
                  </div>
                </a>
                <a
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-50"
                  href="#"
                >
                  <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                    <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">JP</span>
                  </span>
                  <div className="flex-1 truncate">
                    <div className="font-medium">Design Team</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">New design review</div>
                  </div>
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <div className="flex h-16 items-center justify-between border-b bg-white px-4 dark:border-gray-800 dark:bg-gray-950 md:px-6">
            <div className="flex items-center gap-3">
              <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">JP</span>
              </span>
              <div className="grid gap-0.5">
                <div className="font-medium">Jared Palmer</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Online</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span className="sr-only">Call</span>
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path>
                  <rect x="2" y="6" width="14" height="12" rx="2"></rect>
                </svg>
                <span className="sr-only">Video call</span>
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <polyline points="18 8 22 12 18 16"></polyline>
                  <polyline points="6 8 2 12 6 16"></polyline>
                  <line x1="2" x2="22" y1="12" y2="12"></line>
                </svg>
                <span className="sr-only">More options</span>
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-auto p-4 md:p-6">
            <div className="grid gap-4">
              <div className="flex items-start gap-3">
                <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">JP</span>
                </span>
                <div className="flex-1 space-y-2">
                  <div className="rounded-lg bg-gray-100 p-3 text-sm dark:bg-gray-800 dark:text-gray-50">
                    Hey, how's it going?
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">3:45 PM</div>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-end">
                <div className="flex-1 space-y-2">
                  <div className="rounded-lg bg-gray-900 p-3 text-sm text-gray-50 dark:bg-gray-50 dark:text-gray-900">
                    Pretty good, just working on a new project.
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">3:46 PM</div>
                </div>
                <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">JP</span>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">JP</span>
                </span>
                <div className="flex-1 space-y-2">
                  <div className="rounded-lg bg-gray-100 p-3 text-sm dark:bg-gray-800 dark:text-gray-50">
                    That's great to hear! Let me know if you need any help.
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">3:47 PM</div>
                </div>
              </div>
              <div className="flex items-start gap-3 justify-end">
                <div className="flex-1 space-y-2">
                  <div className="rounded-lg bg-gray-900 p-3 text-sm text-gray-50 dark:bg-gray-50 dark:text-gray-900">
                    Actually, I could use a hand with the design. Can you take a look?
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">3:48 PM</div>
                </div>
                <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">JP</span>
                </span>
              </div>
            </div>
          </div>
          <div className="border-t bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-950 md:px-6">
            <form className="flex items-center gap-2" onSubmit={handleMessageSubmit}>
              <input
                className="flex h-10 w-full px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 rounded-md border border-gray-200 bg-gray-100 text-sm focus:border-gray-300 focus:bg-white dark:border-gray-800 dark:bg-gray-900 dark:text-gray-50 dark:focus:border-gray-700"
                placeholder="Type your message..."
                type="text"
              />
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>
                </svg>
                <span className="sr-only">Attach file</span>
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                  <line x1="9" x2="9.01" y1="9" y2="9"></line>
                  <line x1="15" x2="15.01" y1="9" y2="9"></line>
                </svg>
                <span className="sr-only">Add emoji</span>
              </button>
              <button type='submit' className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-900 p-3 text-gray-50 dark:bg-gray-50 dark:text-gray-900 text-primary-foreground hover:bg-primary/90 py-2 h-8 px-4">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
