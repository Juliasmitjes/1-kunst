'use client'

import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import ContactPanel from '../pages/ContactPanel.jsx'


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)

  return (
    <header className="bg-banana">

    {/* --- Desktop menu --- */}

      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="TESTLOGO"
              src="/images/testlogo.png"
              className="h-8 w-auto"
            />
          </a>
        </div>


        {/* --- stukje mobiel NOG DOEN --- */}

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>



        {/* --- Knoppen desktop menu --- */}

        <div className="hidden lg:flex lg:gap-x-12">
          <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `text-xl/6 font-nunito ${isActive ? 'text-sky' : 'text-peach hover:text-sky'}`
          }
           >
          Over mij
          </NavLink>
          <a href="#" className="text-xl/6 font-nunito text-peach hover:text-sky">
            Winterbomen
          </a>
          <a href="#" className="text-xl/6 font-nunito text-peach hover:text-sky">
            Zomerbomen
          </a>
          <a href="#" className="text-xl/6 font-nunito text-peach hover:text-sky">
            Gallerij
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
           <button
          type="button"
          onClick={() => setShowContactForm(true)}
          className="rounded-md bg-peach px-4 py-2 text-xl font-nunito text-white hover:bg-sky transition"
        >
          Contact
        </button>
        </div>
      </nav> 



      {/* --- Mobile menu NOG DOEN --- */}

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    Product
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Winterbomen
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Zomerbomen
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Gallerij
                </a>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                 Contact
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>



     {/* --- JSX ELEMENTEN */}

    {showContactForm && (
        <ContactPanel onClose={() => setShowContactForm(false)} />
    )}

    </header>
  )
}


export default Header;