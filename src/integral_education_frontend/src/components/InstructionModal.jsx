/* eslint-disable react/prop-types */
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { HiXMark } from 'react-icons/hi2';

const InstructionModal = ({ setShow, show, handleCancle,handleNext}) => {
	return (
		<Transition appear show={show} as={Fragment}>
			<Dialog as="div" className="relative" onClose={() => {}}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black/70 bg-opacity-25 z-50" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto flex place-content-center z-50">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="w-full mx-1 max-w-md transform overflow-hidden rounded-xl bg-white text-left align-middle shadow-xl transition-all font-josefin">
								<div className="flex justify-center px-5 pt-4 border-b-primary border-b">
									<div>
										<h2 className="font-semibold text-primary text-[20px] pb-1">Quiz Guide</h2>
									</div>
									{/* <button
										onClick={() => setShow(false)}
										className="m-1 p-1 py-1 shadow rounded-full bg-red-200 hover:bg-red-300 duration-150 ease-in-out"
									>
										<HiXMark className="fa-solid fa-xmark text-xl text-red-600 hover:text-red-800" />
									</button> */}
								</div>
								<div className="container mx-auto my-auto flex items-center justify-center">
									<div className="md:w-[500px] mx-auto my-auto pt-[20px] pb-[20px] px-[20px]">
										<div className="">
                                            <h4 className="text-[18px] my-2 text-center">{show}</h4>
                                            <p>Here is how to get the most from the quiz</p>
											<div className='py-2 border-b-primary border-b'>
                                                <ul className='space-y-2'>
                                                    <li>1. Choose your answers correctly because once picked, you will not be able to change it.
                                                    </li>
                                                    <li>2. Beat the clock (10 seconds)</li>
                                                    <li>3. Focus on the current question befor moving to the next one</li>
                                                </ul>
                                            </div>
										</div>
										<div className="pt-[10px] flex justify-between gap-2">
                                        	<button
												className="border-red-400 hover:bg-red-600 text-red-500 hover:text-white h-10 w-full flex items-center justify-center rounded-md"
												onClick={handleCancle}
											>
												<span className="text-lg px-2">Exit</span>
											</button>
											<button
												className="bg-green-400 hover:bg-green-600 text-white h-10 w-full flex items-center justify-center rounded-md"
												onClick={handleNext}
											>
												<span className="text-lg px-2">Continue</span>
											</button>
										</div>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default InstructionModal;
