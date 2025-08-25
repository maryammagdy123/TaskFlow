import { Button, Progress, Textarea } from 'flowbite-react'
import AddTaskForm from '../../Components/AddTaskForm/AddTaskForm'
import { useContext } from 'react'
import { TaskContext } from '../../Context/TasksContextProvider'

export default function Home() {
	let { tasks } = useContext(TaskContext)
	let totalTasks = tasks.length;
	let completed = tasks.filter((task) => task.Done === true).length;
	let progress = Math.floor((completed / totalTasks) * 100)
	let progressColor = progress <= 25 && "red" || progress == 50 && "yellow" || progress > 50 && "green"

	
	return (
		<>

			<div className="min-h-screen bg-gray-50">


				<div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
					<div className="px-4 py-6 sm:px-0">
						{/* Welcome Section */}
						<div className="mb-8">
							<h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
							<p className="mt-2 text-gray-600">Manage your tasks efficiently</p>
						</div>

						{/* Summary Cards */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
							<div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200">
								<div className="p-6">
									<div className="flex items-center">
										<div className="flex-shrink-0">
											<div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
												<svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
													<path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
												</svg>
											</div>
										</div>
										<div className="ml-4">
											<p className="text-sm font-medium text-gray-500">Total Tasks</p>
											<p className="text-2xl font-semibold text-gray-900">{totalTasks}</p>
										</div>
									</div>
								</div>
							</div>

							<div className="bg-white overflow-hidden shadow-sm rounded-lg border border-gray-200">
								<div className="p-6">
									<div className="flex items-center">
										<div className="flex-shrink-0">
											<div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
												<svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
													<path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
												</svg>
											</div>
										</div>
										<div className="ml-4">
											<p className="text-sm font-medium text-gray-500">Completed Tasks</p>
											<p className="text-2xl font-semibold text-gray-900">{completed}</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Progress Bar */}
						<div className="bg-white shadow-sm rounded-lg border border-gray-200 mb-8">
							<div className="p-6">
								<div className="flex items-center justify-between mb-4">
									<h3 className="text-lg font-medium text-gray-900">Progress</h3>
									<span className="text-sm font-medium text-blue-600">
										{totalTasks == 0 ? "0" : progress} %
									</span>
								</div>
								{/* Progress  */}
								<Progress progress={progress} color={progressColor} />
							</div>
						</div>

						{/* Add Task Form */}
						<AddTaskForm />
					</div>
				</div>
			</div>

		</>
	)
}
