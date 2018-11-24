
export interface EventBus {
	emit(event: Event): void;
	flush(): Promise<void>;
}
