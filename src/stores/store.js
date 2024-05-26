import { writable } from 'svelte/store';

export const recommendations = writable([]);

export const star1 = writable(false);

export const star2 = writable(false);

export const star3 = writable(false);

export const formSubmitted = writable(false);
