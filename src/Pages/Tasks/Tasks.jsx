import React, { useContext } from 'react';
import { TaskContext } from '../../Context/TasksContextProvider';
import TasksBtnActions from '../../Components/TasksBtnActions/TasksBtnActions';
import AddTaskForm from '../../Components/AddTaskForm/AddTaskForm';

export default function Tasks() {
	let { tasks } = useContext(TaskContext);
	
	console.log(tasks)
return (
		<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
			{/* Header */}
			<div className="mb-8 text-center sm:text-left">
				{tasks.length === 0 ? (
					<h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
						No tasks yet
					</h1>
				) : (
					<>
						<h1 className="text-2xl sm:text-3xl font-bold text-gray-900">All Tasks</h1>
						<p className="mt-2 text-gray-600 text-sm sm:text-base">
							Manage and track your tasks
						</p>
					</>
				)}
			</div>

			{/* Add Form */}
			<div className="mb-6">
				<AddTaskForm />
			</div>

			{/* Tasks List */}
			{tasks.length > 0 && (
				<div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
					<div className="px-4 py-5 sm:p-6">
						<div className="space-y-4">
							{tasks.map((task) => {
								let { Title, Description, id, Done, createdAt } = task;
								return (
									<div
										key={id}
										className={`p-4 rounded-lg border flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4
										 bg-gray-50 border-gray-200 
										${Done ? "border-green-500 bg-green-200" : ""}`}
									>
										{/* Content */}
										<div className="flex-1 flex flex-col gap-2">
											{/* Created At */}
											<span className="text-xs sm:text-sm text-gray-500">
												Created at: {new Date(createdAt).toLocaleString()}
											</span>

											{/* Title */}
											<h3
												className={`text-base sm:text-lg font-semibold text-gray-900 ${
													Done ? "line-through" : ""
												}`}
											>
												{Title}
											</h3>

											{/* Description */}
											<p
												className={`text-gray-700 text-sm sm:text-base p-2 sm:p-3 rounded-md bg-white ${
													Done ? "line-through" : ""
												}`}
											>
												{Description}
											</p>
										</div>

										{/* Actions */}
										<div className="self-end sm:self-center">
											<TasksBtnActions
												id={id}
												Done={Done}
												Title={Title}
												Description={Description}
											/>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
