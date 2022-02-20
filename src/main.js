import App from './App.svelte';
import { differenceInDays } from 'date-fns';

const date = new Date()
const finalDate = new Date(1648072800 * 1000)
const diff = differenceInDays(finalDate, date)


const app = new App({
	target: document.body,
	props: {
		diff
	}
});

export default app;