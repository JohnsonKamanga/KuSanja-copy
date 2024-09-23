import React from "react";
import ReceiptsListContainer from "./ReceiptsListContainer";

const ReceiptsListCache = () => <ReceiptsListContainer className="w-5/6" />;

export default function Dashboard(){
	return (
		<div className="flex flex-row relative min-h-screen h-fit bg-[#293040] text-white">
			<div className="flex flex-col items-center justify-center w-1/6 bg-[#293040] text-[#d5b263]">
				Sidbar goes here
			</div>
			<div className="flex flex-col w-5/6 p-4 items-center text-[#d5b263]">
				<div className="h-1/5" />
				<div className="w-full">
					<h1 className="font-bold text-4xl">Reciepts List</h1>
				</div>
				<ReceiptsListCache />
			</div>
		</div>
	);
}