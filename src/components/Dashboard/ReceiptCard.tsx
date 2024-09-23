import React from "react";
import { receipt } from "./receipts";

type props = {
	receipt: receipt,
};

export default function ReceiptCard({receipt}: props){
	return (
		<li className="flex flex-row p-2 min-size-fit w-full border border-stone-400 border-opacity-60 bg-[#C9AD8B] text-black">
			<div className="basis-1/2">
				<span className="basis-1/4">{receipt.name}</span>
			</div>
			<span className="basis-1/6">{receipt.amount.toFixed(2)}</span>
			<span className="basis-1/6">{receipt.status}</span>
			<span className="basis-1/6">{receipt.date.toLocaleDateString()}</span>
		</li>
	);
}