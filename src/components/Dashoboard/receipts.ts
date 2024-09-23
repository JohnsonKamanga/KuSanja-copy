export type receipt = {
	id: number,
	name: string,
	amount: number,
	status: receiptStatus, 
	date: Date,
};

export enum receiptStatus {
	primary = "primary",
	danger = "danger",
	success = "success",
	warning = "warning",
	neutral = "neutral",
};