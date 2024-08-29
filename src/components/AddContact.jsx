import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState , useEffect} from 'react';
import email from "../assets/contact_us/email.png";
import linkedin from "../assets/contact_us/linkedin.png";
import twitter from "../assets/contact_us/twitter.png";
import facebook from '../assets/contact_us/facebook.png'
import call from '../assets/contact_us/phone.png'
import instagram from '../assets/contact_us/instagram.png'
// import email from '../assets/contact_us/email.png'

export default function AddContact({ open, setOpen, setContact_me, contact_me }) {
    const [formData, setFormData] = useState({
        icon: '',
        label: '',
        link: '',
    });

    const handleChange = (e) => {
        // debugger
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const IconChoose = (name) => {
        const icons = {
            Email: email,
            Twitter: twitter,
            LinkedIn: linkedin,
            Contact: call,
            Facebook: facebook,
            Instagram: instagram,
        };
        return icons[name] || null;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setContact_me([
            ...contact_me,
            {
                icon: IconChoose(formData.icon),
                label: formData.label,
                link: formData.link,
            },
        ]);
        setOpen(false);
    };

    return (
        <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
            <DialogBackdrop
                transition
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            />
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
                    <DialogPanel
                        transition
                        className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-lg sm:max-w-2xl sm:w-1/2"
                    >
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                        Add social media
                                    </DialogTitle>
                                    <div className="mt-2">
                                        <form onSubmit={handleSubmit}>
                                            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
                                                <div className="col-span-2 sm:col-span-1">
                                                    <label htmlFor="icon" className="block text-sm font-medium leading-6 text-gray-900">
                                                        Select an Media
                                                    </label>
                                                    <div className="mt-2">
                                                        <select
                                                            id="icon"
                                                            name="icon"
                                                            value={formData.icon}
                                                            onChange={handleChange}
                                                            className="block w-full rounded-md border border-gray-300 py-2 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white"
                                                        >
                                                            <option value="" disabled>Select an Media</option>
                                                            <option value="Email">Email</option>
                                                            <option value="Twitter">Twitter</option>
                                                            <option value="LinkendIn">LinkendIn</option>
                                                            <option value="Contact">Contact</option>
                                                            <option value="Facebook">Facebook</option>
                                                            <option value="Instagram">Instagram</option>

                                                        </select>
                                                    </div>
                                                </div>


                                                <div className="col-span-2 sm:col-span-1">
                                                    <label htmlFor="link" className="block text-sm font-medium leading-6 text-gray-900">
                                                        Link
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="link"
                                                            name="link"
                                                            type="text"
                                                            value={formData.link}
                                                            onChange={handleChange}
                                                            className="block w-full rounded-md border border-gray-300 py-2 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-span-2 sm:col-span-1">
                                                    <label htmlFor="label" className="block text-sm font-medium leading-6 text-gray-900">
                                                        Label
                                                    </label>
                                                    <div className="mt-2">
                                                        <input
                                                            id="label"
                                                            name="label"
                                                            type="text"
                                                            value={formData.label}
                                                            onChange={handleChange}
                                                            className="block w-full rounded-md border border-gray-300 py-2 px-2 text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6 bg-white"
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 mt-4">
                                                <button
                                                    type="submit"
                                                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                                                >
                                                    Save
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => setOpen(false)}
                                                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
}
