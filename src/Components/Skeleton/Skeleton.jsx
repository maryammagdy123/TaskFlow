import React from 'react'

export default function Skeleton() {
	return (
		<>
			<div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 animate-pulse">
				<div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
				<div className="h-8 bg-gray-300 rounded w-1/4"></div>
			</div>
			<div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 animate-pulse">
				<div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
				<div className="h-8 bg-gray-300 rounded w-1/4"></div>
			</div>
		</>
	)
}
