/* eslint-disable react/prop-types */
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { HiXMark } from 'react-icons/hi2';
import Score from './Score';

const ScoreModal = ({ setShow, show, score,  handleCancle, handleComplete}) => {
    const {correctAnswers, totalQuestions} = score
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
							<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-xl bg-white text-left align-middle shadow-xl transition-all font-josefin">
								<div className="flex justify-center px-5 pt-4">									
									<h2 className="font-bold text-center text-xl md:text-2xl  text-primary">Quiz result!</h2>
								</div>
								<div className="container mx-auto my-auto flex items-center justify-center">
									<div className="w-[500px] mx-auto my-auto  pt-[20px] pb-[20px] px-[20px]">
										<div className="text-center">
											<Score correctAnswers={correctAnswers } totalQuestions={totalQuestions}/>
                                            <p className='py-2 '>You score {correctAnswers} out of {totalQuestions}</p>
										</div>
										<div className="p-[10px] flex justify-between gap-2">
											<button
												className="bg-green-400 hover:bg-green-600 text-white h-10 w-full flex items-center justify-center rounded-md"
												onClick={handleComplete}
											>
												<span className="text-lg px-2">Try again</span>
											</button>
                                            <button
												className="border border-red-400 text-red-400 hover:bg-red-600 hover:text-white h-10 w-full flex items-center justify-center rounded-md"
												onClick={handleCancle}
											>
												<span className="text-lg px-2">Go to home</span>
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

export default ScoreModal;
