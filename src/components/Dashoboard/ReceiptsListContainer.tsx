import React, { useState } from "react";
import ReceiptCardList from "./ReceiptCardList";

type props = {
	className?: string
};

export default function ReceiptsListContainer({className}: props){
	const [numberOfReceipts, setNumberOfReceipts] = useState(0);
	
	return (
		<div className={"container flex flex-col mx-auto p-2 bg-[#141820] text-[#d5b263] " + className}>
			<h2 className="font-bold text-xl">KuSanja</h2>
			<span>There are {numberOfReceipts} receipts.</span>
			<div className="flex flex-row p-2 min-size-fit w-full">
				<span className="basis-1/2">Name</span>
				<span className="basis-1/6">Amount</span>
				<span className="basis-1/6">Status</span>
				<span className="basis-1/6">Date</span>
			</div>
			<ReceiptCardList setNumberOfReceipts={setNumberOfReceipts} />
		</div>
	);
}