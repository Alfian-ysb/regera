import React from "react";
import {Link as ScrollLink } from "react-scroll";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [
  { name: 'Home', to: 'home'},
  { name: 'Performance', to: 'spec'},
  { name: 'Features', to: 'carComponents'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function navbar () {
  return (
    <Disclosure as="nav" className="fixed left-0 top-0 w-full bg-Soft-Black backdrop-blur-lg inset-shadow-navbar z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
            <div className="flex shrink-0 items-center px-5">
              <ScrollLink
                to="home"
                smooth={true}
                duration={1000}>
                <img
                  className="w-auto h-15 cursor-pointer"
                  src="../src/assets/theGost-logo.png"
                  alt="the ghost logo"
                />
              </ScrollLink>
            </div>
            <div className="hidden sm:flex items-center">
              <div className="flex gap-x-8">
                {navigation.map((item) => (
                  <ScrollLink
                    key={item.name}
                    to={item.to}
                    smooth={true}
                    duration={1000}
                    className={classNames(
                      ' text-primary-white navbar-hover rounded-md  text-xl font-normal font-leagueSpartan cursor-pointer',
                    )}
                  >
                    {item.name}
                  </ScrollLink>
                ))}
              </div>
            </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
            <Menu as="div" className="relative"> 
              <button
                id="contact-button"
                className=" px-5 py-1 rounded-md bg-secondary-lime-green text-[#1b1b1b] cursor-pointer"
              >
                Contact
              </button>
            </Menu>
          </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="flex flex-col items-center space-y-5 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <ScrollLink
              key={item.name}
              to={item.to}
              smooth={true}
              duration={1000}
              className={classNames(
                ' text-primary-white navbar-hover rounded-md md:text-md  lg:text-xl font-normal font-leagueSpartan cursor-pointer',
              )}
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
