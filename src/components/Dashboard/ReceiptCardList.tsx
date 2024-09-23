import React, { useEffect, useState } from "react";
import ReceiptCard from "./ReceiptCard";
import { receipt, receiptStatus } from "./receipts";

type props = {
	setNumberOfReceipts: (setNumberOfReceipts: number) => void,
};

export default function ReceiptCardList({setNumberOfReceipts}: props){
	const [receipts, setReceipts] = useState<receipt[]>([]);
	
	useEffect(() => {
		async function handleMount(){
			// Fetch receipts
			
			// Set receipts state to the fetched receipts
			// Pass the number of fetched receipts to setNumberOfReceipts callback prop
		}
		handleMount();
	}, []);
	
	return (
		<ul>
			{receipts.map((receipt) => <ReceiptCard receipt={receipt} key={receipt.id} />)}
		</ul>
	);
}